/**
 * [Siteapp] - multi-purpose frontend application
 * 
 * Siteapp Module Factory Abstract
 * 
 * (abstract) factory class for Siteapp.Module to load module files on demand
 * 
 * A component's JavaScript files can be included 'on demand' instead of adding it as a main dependency in the applications main configuration file `thalia-app.js`.
 * 
 * To load the JS on demand additional attributes must apply to the components element.
 * ```
 * [moduleIdentifier] := {Module.Identifier} |
 *                       {path/to/module} |
 *                       {http(s)://abs.olu.te/uri/to/module.js}
 * 
 * 
 * <div data-{modulename} 
 *      data-module-factory 
 *      data-module = "{moduleIdentifier}"
 *      data-deps = "{moduleIdentifier},{moduleIdentifier},..."
 *      data-callback = "{namespaceFunctionName}"
 * >...</div>
 * ```
 * 
 * To restrict module inclusion (external, only registered modules), set the following options:
 * ```
 * var myFactoryOptions = {
 * 
 *     // wether to allow inclusion per path, in the first place,
 *     // when set to 'false', external inclusion will be forbidden and
 *     // only "Module.Identifier" registered in config are allowed
 *     // default: true
 *     
 *     allowPath: true,
 * 	  
 *     // allow external inclusion like 'http(s)://...",
 *     // tries to catch also stuff like 'mailto:...' and similar
 *     // default: false
 *     
 *     allowExtern: false,
 * 	  
 *     // if external URIs are allowed, hostnames can be restriced, with 
 *     // this list of external hosts to allow, if empty allow all (!)
 *     // default: localhost, (current 'location.hostname')
 *     
 *     externHosts: [
 *         // '...', ...
 *     ]
 *     
 * };
 * ```
 * 
 * - Example: include a module per module path
 *   ```
 *   <div data-supermodule 
 *        data-component-factory 
 *        data-module = "components/supermodule"
 *   >...</div>
 *   ```
 *   The path must either be a relative Path, relative to the main application/require file or an absolute path, beginning with `/ ` or `http(s)://`.
 * 
 * 
 * - Example: include a module per module identifier
 *   ```
 *   <div data-supermodule 
 *       data-component-factory 
 *       data-module = "Components.Supermodul"
 *   >...</div>
 *   ```
 *   A module's identifier is defined inside the main require configuration, within the `path` and/or `shim` sections.
 * 
 * 
 * - Example: hyphothetical service module with dependencies
 *   ```
 *   <div data-supermodule 
 *        data-component-factory 
 *        data-module = "/service/api/frontend/supermodule.js"
 *        data-deps = "https://cdn.some.where/library.js,libs/superutil"
 *   >...</div>
 *   ```
 *   This example shows a component's ("Supermodul") markup and lets the browser first load and execute the dependencies, one extern "...library.js" and another local "libs/superutil". After those, the module's main script file "/service/api/frontend/supermodule.js" is loaded, from a (absolute) local service's URI, and executed.
 * 
 * 
 * 
 * @package     [Siteapp]
 * @subpackage  [Siteapp] module
 * @author      Björn Bartels <coding@bjoernbartels.earth>
 * @link        https://gitlab.bjoernbartels.earth/groups/themes
 * @license     http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0
 * @copyright   copyright (c) 2016 Björn Bartels <coding@bjoernbartels.earth>
 * 
 * @namespace   Siteapp
 * @module      Siteapp.ModuleFactory
 * @abstract
 */
/** global: Siteapp */
/** global: ModuleFactoryDefaults */

import {Exception}     from '../sys/siteapp.exception';


class ModuleFactoryException extends Exception {
	get name () {
		return "SiteappModuleFactoryException";
	}
};


const ModuleFactoryDefaults = {
	
	deps    : [],
	module  : null,
	callback: null,
	
	// wether to allow inclusion per path, in the first place,
	// when set to 'false', external inclusion will be forbidden and
	// only "Module.Identifier" registered in config are allowed
	
	allowPath: true,
	
	// allow external inclusion like 'http(s)://...",
	// tries to catch also stuff like 'mailto:...' and similar
	
	allowExtern: false,
	
	// if external URIs are allowed, hostnames can be restriced, with 
	// this list of external hosts to allow, if empty allow all (!)
	
	externHosts: [
		'localhost',
		location.hostname
	]
};


/**
 * Module factory abstract.
 * @module Siteapp.ModuleFactory
 */
const ModuleFactory = class ModuleFactory {

    /**
     * Creates a new instance of Siteapp.ModuleFactory.
     * 
     * @class
     * @fires Siteapp.ModuleFactory#init
     * @param {jQuery} element - jQuery object to attach the plugin to.
	 * @param {Object} options - object to extend the default configuration.
	 * 
     */
    constructor (element, options) {
    	if (!element) return;
    	
	    var $this = this;
	    this.$element = $(element);
	    
	    this.options = $.extend({}, ModuleFactoryDefaults, this.$element.data(), options);
	    Siteapp.sys.secureProperties(this.options, [
			'allowPath',
			'allowExtern',
			'externHosts'
		]);
	    
	    this._init();
	    
    }
	
    /**
     * initialize factory parameters
	 * @param {Object} options - optional object to extend the component's configuration.
     * @access public
     */
	_init (options) {
		
		this._dependencies = null;
		this._module       = null;
		this._callback     = null;
		
		if (typeof option == 'object') {
		    this.options = $.extend({}, this.options, options);
		}
	    
	    try {
        	//console.//log('ModuleFactory : init', this.options);

    		this._dependencies = this.options.deps;
    		this._module       = this.options.module;
    		this._callback     = this.options.callback;
    		
            this.inject();
	    } catch (ex) {
        	console.error('ModuleFactoryError : '+ex.message, this.options);
    		throw new ModuleFactoryException('ModuleFactoryError loading module: '+ex.message);	
	    } finally {
	    	return;
	    }
        
    }
	
	/**
	 * inject dependencies and module into page via 'require'
	 * @param {Array|String} dependencies - module dependency identifiers or paths to inject
	 * @param {String} module - module identifier or module path to inject.
	 * @param {function|String} callback - optional callback function or name of registered namespace 'func'
	 */
    inject ( _dependencies, _module, _callback ) {
    	if (!_dependencies) { _dependencies = this._dependencies; }
    	if (!_module)       { _module       = this._module; }
    	if (!_callback)     { _callback     = this._callback; }
    	
        if (typeof _dependencies == 'string' ) {
        	_dependencies = String(_dependencies).split(',');
        }
        if (typeof _dependencies.join != 'function' ) {
        	_dependencies = [];
        }

        var $factory = this;
    	//console.//log('ComponentFactory::inject : injecting...', _dependencies, _module, _callback);
    	if (_dependencies.length > 0) {
    		if ( !this._allowURIs(_dependencies) ) {
    			throw new Error('SECURITY ALERT: One or more of the dependencies requested are not allowed to be included!');
    		}
        	requirejs(_dependencies, () => {

            	//console.//log('ComponentFactory::inject : dependencies injected');
            	
        		$factory.injectModule( _module, _callback );
        		
		    });
    	} else {
    		this.injectModule( _module, _callback );
        }
    	
        	
    }
	
	/**
	 * inject actual module code into page via 'require'
	 * @param {String} module - module identifier or module path to inject.
	 * @param {function|String} callback - optional callback function or name of registered namespace 'func'
	 */
    injectModule ( _module, _callback ) {
    	if (!_module)       { _module   = this._module; }
    	if (!_callback)     { _callback = this._callback; }
        
    	if (typeof _module != 'string' ) {
        	console.warn('ComponentFactory::injectModule : given module must be a component indentifier or a path string', _module);
        	return;
        }

        var $factory = this;
        var $element = $factory.$element;
    	var $app     = $factory.application;

		if ( !this._allowURI(_module) ) {
			throw new Error('SECURITY ALERT: The module requested is not allowed to be included!');
		}
		
    	requirejs([_module], () => {
    		
        	//console.//log('ComponentFactory::injectModule : module injected');
    		
        	// destroy factory instance
    		$factory.destroy();
    		
    		// initialize plugin/modules on $element and it's children
	    	$element[$app.appName]();
			
	    	if ($app.NS.isFunc(_callback)) {
	    		$app.NS.func(_callback).apply($app, [$element]);
	    	}

	    });
    	
    }
    
    /**
     * Check list of URIs for allowance
     * 
     * @function
     * @access private
     * @param {[string]} URIs
     * @returns {boolean}
     */
	_allowURIs ( URIs ) {
		if (typeof URIs.join != 'function') {
			return false;
		}
		
		var allow = false;
		for (var idx in URIs) {
			allow = allow || this._allowURI(URIs[idx]);
		}
		
		return allow;
    }
    
    /**
     * Detect if URI is allowed to be requested (for a module or dependency)
     * 
     * @function
     * @access private
     * @param {string} URI
     * @returns {boolean}
     */
	_allowURI ( URI ) {

		// no absolute or relative paths?
		if ( !this.options.allowPath && (
			    (String(URI).indexOf('/') >= 0) ||
			    (String(URI).indexOf('/') < String(URI).length)
		) ) {
			return false;
		}
		
		// no external URLs?
		if ( !this.options.allowExtern && (this._hasProtocol(URI) || this._isExtern(URI)) ) {
			return false;
		}
		
		// is hostname allowed?
		if ( this.options.allowExtern && (this.options.externHosts.length > 0) ) {
			var has_host = false;
			for (var idx in this.options.externHosts) {
				has_host = has_host || this._hasHost(URI, this.options.externHosts[idx]);
			}
			if (!has_host) return false;
        }
		
		// finally...
		return true;
    }
    
    /**
     * Detect if URI is an external URI (ex: http://) 
     * 
     * @function
     * @access private
     * @param {string} URI
     * @returns {boolean}
     */
	_isExtern ( URI ) {
		return ( 
			( 
				(new RegExp("^(http(s)*:)*\\/\\/")).test(URI) ||
			    this._hasProtocol( URI ) 
			) && !this._hasHost(URI, location.hostname) 
		);
    }
    
    /**
     * Detect if URI starts with a protocol identifier (ex: http:..., tel:..., mailto:...) 
     * 
     * @function
     * @access private
     * @param {string} uri
     * @returns {boolean}
     */
	_hasProtocol ( URI ) {
		return (new RegExp("^[\\w|-]+:")).test(URI);
    }
    
    /**
     * Detect if URI contains a given hostname (ex: http://domain.tld..., //domain.tld...)
     * 
     * @function
     * @access private
     * @param {string} uri
     * @returns {boolean}
     */
	_hasHost ( URI, hostname ) {
		return (
			[ 2, 3, 7, 8 ].indexOf( String(URI).indexOf(hostname) ) != -1
			/*
			 "//_", "://_", "http://_", "https://_"
			 */
	    );
    }
    
    /**
     * destroy component's object in memory
     * @access public
     */
	destroy () {
		this.$element
	        .removeAttr('data-'+this.application.appName+'-module-factory')
	        .removeAttr('data-deps')
		    .removeAttr('data-module')
		    .removeAttr('data-callback')
	    ;
	    this.manager.destroyModule(this);
	}
	
	
	
	/**
	 * Retrieve loaded module
	 */
	get module () {
		return this._module;
	}
	
	/**
	 * Assing loaded module
	 */
	set module ( _module ) {
		if ( (_module instanceof Module) ) {
			this._module = _module;
		} else {
    		throw new ModuleFactoryException('Module to assing must be an instance of Siteapp.Module');	
		}
	}
	
	
    /**
     * Retrieve attached module manager.
     */
    get manager () { 
        return this._manager; 
    }
    
    /**
     * Attach application object.
     */
    set manager ( _manager ) { 
    	if (_manager instanceof ModuleManager) {
    		this._manager = _manager;
    	} else {
    		throw new ModuleFactoryException('Invalid module manager object to attach, must be an instance of Siteapp.ModuleManager');
    	}
    }
	
	
    /**
     * Retrieve attached application.
     */
    get application () { 
        return this._app; 
    }
    
    /**
     * Attach application object.
     */
    set application ( app ) { 
    	if (app instanceof Siteapp) {
    		this._app = app;
    	} else {
    		throw new ModuleFactoryException('Invalid application object to attach, must be an instance of Siteapp');
    	}
    }
    
};

export default ModuleFactory;