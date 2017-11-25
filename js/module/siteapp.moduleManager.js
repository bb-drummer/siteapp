/**
 * [Siteapp] - multi-purpose frontend application
 * 
 * Siteapp (Data) Module Manager
 * 
 * abstraction of plugin/module core, inspired by Zurb Foundation's core
 *     
 * @package     [Siteapp]
 * @subpackage  [Siteapp] module
 * @author      Björn Bartels <coding@bjoernbartels.earth>
 * @link        https://gitlab.bjoernbartels.earth/groups/themes
 * @license     http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0
 * @copyright   copyright (c) 2016 Björn Bartels <coding@bjoernbartels.earth>
 * 
 * @namespace   Siteapp
 * @module      Siteapp.ModuleManager
 */
/** global: Siteapp */
/** global: Siteapp_ModuleManager_DEFAULTS */
/** global: Siteapp_ModuleManager_VERSION */

"use strict";

import {Exception} from '../sys/siteapp.exception';
import Module      from '../module/siteapp.module';

const Siteapp_ModuleManager_VERSION = '0.0.1';

const Siteapp_ModuleManager_DEFAULTS = {

	/**
	 * use namespaced module trigger 'data-' attribute
	 * true  =>  data-{namespace}-{modulename} (default)
	 * false =>  data-{modulename}
     * 
	 * @var {booloean} namespacedModuleTriggers
	 * @default true
	 */
	namespacedModuleTriggers: true,
		
	/**
	 * Wether to override already registered modules ('true'). 
     * If set to 'false', throws a warning on occurance. 
     * The new module then will not be registered.
     * 
	 * @var {booloean} overrideRegistered
	 * @default false
	 */
	overrideRegistered: false,
	
	/**
	 * Since registered plugins/modules are stored under 
	 * [Siteapp].Modules.{PluginName}, this flag lets the
	 * module manager map them back to [Siteapp].{PluginName}
	 * for Foundation compatiblity when set to 'true'.
     * ATTENTION: Only do that on one/the main module manager,
	 * because, in that scope, one manager would override 
     * the registered modules of another module manager if 
     * modules are assigned the same name!
	 * @var {booloean} mapModulesToApplication
	 * @default false
	 */
	mapModulesToApplication: false
	
};

class ModuleManagerException extends Exception {
	get name () {
		return "SiteappModuleManagerException";
	}
};



const ModuleManager = class ModuleManager {
	
    /**
     * Create a new instance of the module manager.
     * @class
     * @name ModuleManager
     * @param {Object} options - Overrides to the default module settings.
     */
    constructor (options) {

        this._uuid   = this.functionName(this)  + '-' + this.genUUID( 6 );
        this.options = $.extend({}, Siteapp_ModuleManager_DEFAULTS, options);

        this._init();
    }

    /**
     * Setup objects
     */
    _init () {
    	this._version = Siteapp_ModuleManager_VERSION;

        this._modules   = {};
        this._uuids     = [];
        
    }
    
    
    /**
     * Initialize a module/plugin or it's factory.
     * Creates a new module instance and attaches it to a corresponding element.
     * 
     * @function
     * @param {Module} _module - the module instance, usually 'this' when constructing/initiating the instance
     * @param {string} name - optional: alternative extra name to set as 'data' attribute
     *   
     */
    initialize ( _module, name ) {
		//console.//log('initialize module...', _module);
    	
    	if (_module instanceof Module) {
    		//console.//log('...is instance of Module...');
    		return this.initializeModule(_module, name);
    	}
    }
    
    /**
     * Register a module/plugin or it's factory to ModuleManager's namespace.
     * Element triggering that module/plugin will be initialized on next 'reflow'.
     * If no trigger name is given, the name of the module (constructor) is used.
     * 
     * @function
     * @param {Module} _module - the module to register
     * @param {string} name - the trigger name, so it will reference the 'data' attribute [data-(namespace-)name]
     * 
     */
    register ( _module, name ) {
		//console.//log('register module...', typeof _module);
    	if (_module instanceof Object) {
    		//console.//log('...is instance of Object...');
    		return this.registerModule(_module, name);
    	}
    }
    
    /**
     * Destroy a initialzed module/plugin.
     * 
     * @function
     * @param {Module} _module - the initialized module to destroy
     * 
     */
    destroy ( _module ) {
		//console.//log('destroy module...', _module);
        var moduleName = _module;
    	if (_module instanceof Module) {
    		//console.//log('...is instance of Module...');
            moduleName = this.hyphenate(this.functionName(_module.$element.data(this.application.appName+'Plugin').constructor));
        	if (typeof this._modules[this.application.appName+'-'+moduleName] != 'undefined') {
        		return this.destroyModule(_module);
        	}
    	}
    }

    /**
     * Defines a [Siteapp] module/plugin, adding it to the `Siteapp` namespace 
     * and the list of modules to initialize when reflowing.
     * 
     * @function
     * @param {Object} _module - The constructor of the module.
     * @param {Object} name - The constructor of the module.
     * 
     */
    registerModule (_module, name) {
        // Object key to use when adding to registry
        // Examples: Siteapp.Object1, Siteapp.Object2
        var className    = (typeof name != 'undefined') ? name : this.functionName(_module);
        // Object key to use when storing the module, also used to create the
        // identifying data attribute for the module
        // Examples: data-objecttriggername1, data-objecttriggername2
        var attrName     = this.hyphenate(className);

        _module._app     = _module.prototype._app     = this.application;
        _module._manager = _module.prototype._manager = this;
        
        var moduleName   = attrName;
        if (this.options.namespacedModuleTriggers) {
        	moduleName   = this.application.appName+'-'+moduleName;
        }
        // Add to the modules list (for reflowing)
    	var mngrModule = this._modules[moduleName];
        if ( !this.options.overrideRegistered && (typeof mngrModule != 'undefined') ) {
    		console.warn(`Module registration: A Module with the name "${attrName}" has already been registered for this manager`);
    		return
        }
        this._modules[moduleName] = this[className] = _module;

        // Add to the application object for Foundation compatiblity
        if ( this.options.mapModulesToApplication ) {
        	var appModule = this.application._plugins[moduleName];
        	if ( !this.options.overrideRegistered && (typeof appModule != 'undefined')) {
        		console.warn(`Module registration: A Module with the name "${attrName}" has already been mapped to the application object`);
        	} else {
        		this.application._plugins[moduleName] = this.application[className] = this._modules[moduleName];
        	}
        }
    }
    
    /**
     * Populates the _uuids array with pointers to each individual module instance.
     * Adds the `siteappPlugin` data-attribute to programmatically created modules 
     * to allow use of $(selector).Siteapp(method) calls.
     * Also fires the initialization event for each module, consolidating repeditive code.
     * 
     * @function
     * @param {Object} _module - an instance of a module, usually `this` in context.
     * @param {String} name - the name of the module, passed as a camelCased string.
     * @fires Module#init
     */
    initializeModule (_module, name) {
        var moduleName = (typeof name != 'undefined') ? this.hyphenate(name) : this.hyphenate(this.functionName(_module.constructor));
        var attrName   = moduleName;
        if (this.options.namespacedModuleTriggers) {
        	attrName   = this.application.appName+'-'+attrName;
        }
        if (!_module.uuid) {
            _module.uuid = moduleName + '-' + this.genUUID(6);
        }

        if(!_module.$element.attr('data-' + attrName)){ _module.$element.attr('data-' + attrName, _module.uuid); }
        if(!_module.$element.data(this.application.appName+'Plugin')){ _module.$element.data(this.application.appName+'Plugin', _module); }
        /**
         * Fires when the module has initialized.
         * @event Module#init
         */
        _module.$element.trigger('init.'+this.application.appName+'.' + moduleName);

        this._uuids.push(_module.uuid);
        // Add UUID to the application registry for Foundation compatiblity
        if ( this.options.mapModulesToApplication ) {
            this.application._uuids.push(_module.uuid);
        }

        return;
    }
    
    /**
     * Removes the modules uuid from the _uuids array.
     * Removes the siteappPlugin data attribute, as well as the data-module-name attribute.
     * Also fires the destroyed event for the module, consolidating repeditive code.
     * 
     * @function
     * @param {Object} _module - an instance of a module, usually `this` in context.
     * @fires Module#destroyed
     */
    destroyModule (_module) {
        var moduleName = this.hyphenate(this.functionName(_module.$element.data(this.application.appName+'Plugin').constructor));
        var attrName   = moduleName;
        if (this.options.namespacedModuleTriggers) {
        	attrName   = this.application.appName+'-'+attrName;
        }

        this._uuids.splice(this._uuids.indexOf(_module.uuid), 1);
        // remove from the application object
        if ( this.options.mapModulesToApplication ) {
            this.application._uuids.splice(this.application._uuids.indexOf(_module.uuid), 1);
        }
        
        _module.$element
            .removeAttr('data-' + attrName)
            .removeData(this.application.appName+'Plugin')
            /**
             * Fires when the module has been destroyed.
             * @event Module#destroyed
             */
            .trigger('destroyed.'+this.application.appName+'.' + moduleName);
        
        for(var prop in _module){
        	_module[prop] = null;//clean up script to prep for garbage collection.
        }
        
        return;
    }

    /**
     * Causes one or more active modules to re-initialize, resetting event listeners, 
     * recalculating positions, etc.
     * 
     * @function
     * @param {String} modules - optional string of an individual module key, 
     *                           attained by calling `$(element).data('moduleName')`, 
     *                           or string of a module class i.e. `'dropdown'`
     * @default If no argument is passed, reflow all currently active modules.
     */
     reInit (modules) {
     	 //console.//log('module manager re-init:', this.functionName(this));
         var isJQ = modules instanceof $;
         var $app = this,
	         _namespace = $app.application.appName
	     ;
	
         try {
            if (isJQ && (modules.length > 0)){
	            modules.each(function(){
	                $(this).data(_namespace+'Plugin')._init();
                });
            } else {
                var type = typeof modules,
                    $this = this,
                    fns = {
	                    'object' : function (_modules) {
	                     _modules.forEach(function (p) {
	                    	    //console.//log('(re)init...:', _namespace, p, $('[data-'+ p +']'), ($('[data-'+ p +']'))[_namespace]);
	                            $('[data-'+ p +']')[_namespace]('_init');
	                        });
	                    },
	                    'string' : function () {
                    	    //console.//log('(re)init...:', _namespace, modules, $('[data-'+ modules +']'), ($('[data-'+ modules +']'))[_namespace]);
	                        $('[data-'+ modules +']')[_namespace]('_init');
	                    },
	                    'undefined' : function () {
                    	    //console.//log('(re)init...:', _namespace, '*all*', $('[data-'+ modules +']'), ($('[data-'+ modules +']'))[_namespace]);
	                        this['object'](Object.keys($this._modules));
	                    }
	                }
                ;
                fns[type](modules);
            }
        } catch(err) {
            console.error(err);
        } finally {
        }
        return modules;
    }
    
    /**
     * Initialize modules on any elements within `elem` (and `elem` itself) that 
     * aren't already initialized.
     * @param {Object} elem - jQuery object containing the element to check inside. 
     *                        Also checks the element itself, unless it's the `document` 
     *                        object.
     * @param {String|Array} modules - A list of modules to initialize. Leave this 
     *                                 out to initialize everything.
     */
    reflow (elem, modules) {
    	//console.//log('module manager reflow:', this.functionName(this), elem);
    	//console.//log('modules:', this._modules, modules);
        
    	var onlySpecificModules = false;
        // If modules is undefined, just grab everything
        if (typeof modules === 'undefined') {
        	modules = Object.keys(this._modules);
        	onlySpecificModules = false;
        }
        // If modules is a string, convert it to an array with one item
        else if (typeof modules === 'string') {
        	modules = [modules];
        	onlySpecificModules = true;
        }
        if (typeof elem === 'undefined') {
        	elem = document;
        }
        var $moduleManager = this;

        //
        // Iterate through each module and re-flow...
        //
        $.each(modules, function(i, name) {
            // Get the current module
            var module = $moduleManager._modules[name];

        	//console.//log('trying to reflow...: ', name);
        	
            // Localize the search to all elements inside elem, as well as elem 
            // itself, unless elem === document
            var $elem = $(elem).find('[data-'+name+']').addBack('[data-'+name+']');
            
        	//console.//log('elements...: ', $elem.length, '[data-'+name+']');

            // For each module found, initialize it
            $elem.each(function() {
                var $el = $(this),
                    opts = {}
                ;
                // Don't double-dip on modules, invoke 'reFlow' if available
                if ($el.data($moduleManager.application.appName+'Plugin')) {
                	//console.//log('reflowing...: ', name, $el);
                	
                	var plgIn = $el.data($moduleManager.application.appName+'Plugin');
                	if ( plgIn.reflow ) { plgIn.reflow(); }
                    console.warn("Tried to initialize "+name+" on an element that "+
                            "already has a ["+$moduleManager.functionName($moduleManager.application)+"] module.");
                    return;
                }

                // ... else try to (re)init the module/plugin
                if($el.attr('data-options')){
                    var thing = $el.attr('data-options').split(';').forEach(function(e, i){
                        var opt = e.split(':').map(function(el){ return el.trim(); });
                        if (opt[0]) { 
                        	opts[opt[0]] = $moduleManager.parseValue(opt[1]);
                        }
                    });
                }
                try {
                	//console.//log('new instance...: ', $moduleManager.functionName(module), $el);
                    $el.data($moduleManager.application.appName+'Plugin', new module($el, opts));
                } catch(er) {
                    //console.//log('ERROR:', er);
                	throw new ModuleManagerException(er.message);
                } finally {
                }
                return;
            });
        });
        
    } // reflow
    
    
    // 
    // some (internal) shortcuts
    //
    
    /**
     * Polyfill to get the name of a function in IE9
     */
    functionName (fn) {
        return this.application.utilities.functionName(fn);
    }

    /**
     * Returns a random base-36 uid with namespacing
     */
    genUUID (length, namespace) {
    	return this.application.utilities.genUUID (length, namespace);
    }

    /**
     * Normalize value
     */
    parseValue (str){
    	return this.application.utilities.parseValue (str);
    }

    /**
     * Convert PascalCase to kebab-case
     */
    hyphenate (str) {
    	return this.application.utilities.hyphenate (str);
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
    		throw new ModuleManagerException('Invalid application object to attach');
    	}
    }
    
    /**
     * Retrieve current version.
     */
    get version () { 
        return this._version; 
    }
    
    
}

    
export default ModuleManager;