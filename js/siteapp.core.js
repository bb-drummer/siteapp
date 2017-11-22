/**
 * [Siteapp] - multi-purpose frontend application
 * 
 * Siteapp core module
 *     
 * @package     [Siteapp]
 * @subpackage  [Siteapp] core
 * @author      Björn Bartels <coding@bjoernbartels.earth>
 * @link        https://gitlab.bjoernbartels.earth/groups/themes
 * @license     http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0
 * @copyright   copyright (c) 2016 Björn Bartels <coding@bjoernbartels.earth>
 * 
 * @namespace   Siteapp
 * @module      Siteapp
 */
"use strict";

var Siteapp_VERSION = '0.0.1';

// Global [Siteapp] object
// This is attached to the window, or used as a module for AMD/Browserify
const Siteapp = class Siteapp {
    
    /**
     * Create a new instance of the application.
     * @class
     * @name Plugin
     * @param {jQuery} element - jQuery object to apply the plugin to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    constructor (options) { 
    	
        this.options = $.extend({}, this.defaults, options);

        this._initializeApplication();
    }
    
    /**
     * Setup objects
     * @access private
     */
    _initializeApplication () {
    	this._version = Siteapp_VERSION;
    	
        this._plugins   = {};
        this._uuids     = [];
        
        this._initTriggers();
        
        this._initMediaQuery();

        if (!this.options.disableStorage) { 
        	this._setupStorageManager();
        }
        if (!this.options.disableModules) { 
        	this._setupMainModuleManager();
        }
        if (!this.options.disableUi) { 
        	this._setupMainUiManager();
        }
        
        this._dependencyInjections();
        
    }

    /**
     * Setup events
     * @access private
     */
    _initTriggers () {
    	if (this.Triggers) {
    		this.Triggers._ns = this.appName;
    		this.Triggers.init($, this);
    	}
    }

    /**
     * Setup events
     * @access private
     */
    _initMediaQuery () {
    	if (this.MediaQuery) {
    		this.MediaQuery._ns = this.appName;
    		this.MediaQuery._init();
    	}
    }

    /**
     * Setup storage manager
     * @access private
     */
    _setupStorageManager () {
    	if (this.StorageManager && !this.options.disableStorage) {
    	    if ( this.options.storageManager ) {
        	    this.Storage = new this.StorageManager(this.options.storageManager);
    	    } else {
        	    this.Storage = new this.StorageManager();
    	    }
    	    this.Storage._app = this;
    	    
        	if (this.StorageAdapter) {
        	    this.Storage.setNamespaceAdapter(
        	    	this.appName+'Storage', 
        	    	new this.StorageAdapter(this.appName, 'memory', {}, this.Storage)
        	    );
        	}
    	}
    }

    /**
     * Setup main module manager
     * @access private
     */
    _setupMainModuleManager () {

    	if (this.ModuleManager && !this.options.disableModules) {
    	    this.ModuleManager.prototype._app = this;
    	    if ( this.options.moduleManager ) {
        	    this.Modules = new this.ModuleManager(this.options.moduleManager);
    	    } else {
        	    this.Modules = new this.ModuleManager();
    	    }
    	    this.Modules._app = this;

    	    if (this.ModuleFactory) {
        	    this.ModuleFactory.prototype._app     = this;
        	    this.ModuleFactory.prototype._manager = this.Modules;
        	    // register the module factory
    	    	this.Modules.registerModule(this.ModuleFactory);
    	    }
    	    if (this.Module) {
        	    this.Module.prototype._app     = this;
        	    this.Module.prototype._manager = this.Modules;
    	    }
    	}
    }
    
    /**
     * Setup main UI manager
     * @access private
     */
    _setupMainUiManager () {

    	if (this.UiManager && !this.options.disableUi) {
    	    if ( this.options.uiManager ) {
        	    this.Ui = new this.UiManager(this.options.uiManager);
    	    } else {
        	    this.Ui = new this.UiManager();
    	    }
    	    this.Ui._app = this;

    	    if (this.UiManager.Screenlayer) {
        	    this.UiManager.Screenlayer.prototype._app     = this;
        	    this.UiManager.Screenlayer.prototype._manager = this.Ui;
    	    	this.Ui.registerModule(this.UiManager.Screenlayer);
    	    }

    	    if (this.UiManager.Screenpanel) {
        	    this.UiManager.Screenpanel.prototype._app     = this;
        	    this.UiManager.Screenpanel.prototype._manager = this.Ui;
    	    	this.Ui.registerModule(this.UiManager.Screenpanel);
    	    }

    	    if (this.UiManager.Action) {
        	    this.UiManager.Action.prototype._app     = this;
        	    this.UiManager.Action.prototype._manager = this.Ui;
    	    	this.Ui.registerModule(this.UiManager.Action);
    	    }
    	}
    }
    
    /**
     * Setup sub objects
     * @access private
     */
    _dependencyInjections () {
    	// core stuff
        if (typeof this.Triggers != 'undefined') {
        	this.Triggers._ns  = this.appName;
        	this.Triggers._app = this;
        }
        if (typeof this.MediaQuery != 'undefined') {
        	this.MediaQuery._ns  = this.appName;
        	this.MediaQuery._app = this;
        }
        if (typeof this.Keyboard != 'undefined') {
        	this.Keyboard._ns  = this.appName;
        	this.Keyboard._app = this;
        }
        // extension
        if (typeof this.Exception != 'undefined') {
        	this.Exception._ns  = this.appName;
        	this.Exception._app = this;
        }
        if (typeof this.Debugger != 'undefined') {
        	this.Debugger._ns  = this.appName;
        	this.Debugger._app = this;
        }
        if (typeof this.Logger != 'undefined') {
        	this.Logger._ns  = this.appName;
        	this.Logger._app = this;
        }
        
        // object/class abstracts
        if (typeof this.Module != 'undefined') {
        	this.Module._ns  = this.appName;
        	this.Module._app = this;
        }
        if (typeof this.ModuleFactory != 'undefined') {
        	this.ModuleFactory._ns  = this.appName;
        	this.ModuleFactory._app = this;
        }
        if (typeof this.Plugin != 'undefined') {
        	this.Plugin._ns  = this.appName;
        	this.Plugin._app = this;
        }
        
        // namespace storage
        if (typeof this.Namespace != 'undefined') {
        	this.Namespace._ns  = this.appName;
        	this.Namespace._app = this;
        }
    }

    /**
     * Add (Siteapp) application object and its shortcut to global namespace.
     * 
     * The application shortcut is a sequence of '$' appended by your Siteapp 
     * instance name.
     * 
     * For example:
     * in some absent data scope, eg. a callback used by require, an app instance
     * is created, like:
     * ``` 
     * require(...
     *     class MyApp extends Siteapp({...});
     *     var myApp = new MyApp();
     *     // maybe do something different first...
     *     myApp.run(); // alternatively: $(document).myapp();
     *     ...
     * ```
     * to access your (global) application object from some other obscure ;) data 
     * scope, just do:
     * ```
     * MyApp.reflow();
     * ```
     * or via its shortcut:
     * ```
     * $M.reflow();
     * ```
     * 
     * @function
     * @param {object} global - leave empty to detect 'window' in Browser
     * @param {boolean} add$Shortcut
     * @returns {object}
     */
    addToGlobal (global, add$Shortcut) {
    	var global = global || ((window) ? window : {}),
    	    name   = this.utilities.functionName(this),
    	    appId  = String( name ).charAt(0).toLowerCase() + name.slice(1)
    	;

    	if (typeof global[appId] == 'undefined') {
        	global[appId] = this;
        	
    	}
    	console.log('appid:', appId, global[appId]);
    	
    	if (add$Shortcut !== false) {
    		var shortcut = "$"+String(appId).charAt(0).toUpperCase();

        	if (typeof global[shortcut] == 'undefined') {
            	global[shortcut] = global[appId];
        	}
    	}
    	return global;
    }

    /**
     * Add shortcut to an element's (Siteapp) module/plugin instance.
     * 
     * The plugin shortcut is a sequence of '$$' appended by your Siteapp 
     * instance name.
     * 
     * For example:
     * assume an app instance, like:
     * ``` 
     * var MyApp = new Siteapp(......);
     * ```
     * to retrive the plugin object attached to one element, just do:
     * ```
     * var thePlugin = $$M('#someElementWithPlugin');
     * ```
     * or
     * ```
     * var thePlugin = $$MyApp('#someElementWithPlugin');
     * ```
     * then, use the plugin as desired...
     * ```
     * if (thePlugin instanceof MyPluginClass) { 
     *     thePlugin.doSomething()...
     * }
     * ```
     * 
     * @function
     * @param {object} global - leave empty to detect 'window' in Browser
     * @returns {object|array}
     */
    addPluginShortcut (global) {
    	var global     = global || ((window) ? window : {}),
    	    $app       = this,
    	    name       = this.utilities.functionName(this),
    	    methodName = "$$"+String( name ).charAt(0).toUpperCase(),
    	    methodLong = "$$"+String( name ).charAt(0).toUpperCase() + name.slice(1),
    	    
    	    method     = (selector) => {
    	    	var $elem = $(selector);
    	    	if ($elem.length == 1) {
    	    	    return ($elem.data($app.appName+'Plugin'));
    	    	} else {
    	    		var plugins = [];
    	    		$elem.each((idx, plgn) => { 
    	    			var obj    = {},
    	    			    plugin = $(plgn).data($app.appName+'Plugin')
    	    			; 
    	    			plugins[plugin.uuid] = plugin; 
    	    		});
    	    		return plugins;
    	    	}
    	    }
    	    
    	;

    	if (typeof global[methodName] == 'undefined') {
        	global[methodName] = method;
    	}
    	if (typeof global[methodLong] == 'undefined') {
        	global[methodLong] = method;
    	}
    	return global;
    }

    /**
     * Adds (Siteapp) application plugin to jQuery
     * 
     * adds a function/mapping for [Siteapp].run to the given jQuery object
     * with the name taken from the application namespace option
     * 
     * @see Siteapp.run
     * @function
     * @param {jQuery} $ 
     * @returns {jQuery}
     */
    addToJquery ($) {
    	
        /**
         * The Siteapp jQuery plugin.
         * @param {String|Array} method - An action to perform on the current jQuery object.
         */
    	var $app = this;
        var invoke = function(method) {
            $app.run(this, method);
            return this;
        };
        
        // add to jQuery object
        $.fn[this.appName] = invoke;
        
        return $;
    }

    /**
     * (re)initialize modules attached to corresponding elements
     * 
     * @function
     * @see ModuleManager.reInit
     */
    reInit (plugins) {
    	console.log('app re-init:', this.utilities.functionName(this));
    	
    	// re-init (generic) modules
    	if (this.Modules && !this.options.Modules) {
    		this.Modules.reInit(plugins);
    	}
    	// re-init UI modules
    	if (this.Ui && !this.options.disableUi) { 
    		this.Ui.reInit(plugins);
    	}
    	
    	return this;
    } 
    
    /**
     * (re)apply modules on corrensponding elements
     * 
     * @function
     * @see ModuleManager.reflow
     */
    reflow (elem, plugins) {
    	console.log('app reflow:', this.utilities.functionName(this));
    	
    	// reflow (generic) modules
    	if (this.Modules && !this.options.disableModules) {
    		this.Modules.reflow(elem, plugins);
    	}
    	// reflow UI modules
    	if (this.Ui && !this.options.disableUi) {
    		this.Ui.reflow(elem, plugins);
    	}
    	
    	return this;
    } 
    
    /**
     * Initializes the application cycle and 'reflow' modules, if no parameter is given.
     * If only an element is given, invokes all elements' 'reflow'.
     * If a method name is given, invokes an element's plugin method if available.
     * If only a method name is given, tries to invoke a plugin's method attached to 'document'.
     * 
     * Throws an error if the given method is not available.
     * 
     * example:
     * ```
     * MyApp.run();  // -> init application and reflow all modules
     * ```
     * just a selector:
     * ```
     * MyApp.run('.someelements');  // -> reflows all modules attached to elements matching the selector
     * ```
     * with selector and method name:
     * ```
     * MyApp.run('.someelements', 'doSomething');  // -> invokes a module's 'doSomething' method elements matching the selector
     * ```
     * just a method name:
     * ```
     * MyApp.run('doSomething');  // -> invokes a module's 'doSomething' method attached to 'document'
     * ```
     * 
     * 
     * @function
     * @param {jQuery|HTMLElement} element - reference element to start with applying the method/reflow
     * @param {String|Array} method - An action to perform on the current jQuery object.
     * @returns {Siteapp}
     */
    run ( elem, method ) {
    	if (this.options.hasJS) {
    		this.hasJS();
    	}
    	if (typeof elem === 'undefined') {
    		elem = document;
    	} else {
    		if ( (arguments.length === 1) && (typeof elem === 'string') ) {
    			if ( $(elem).length === 0 ) {
    				// no element found by selector, so assume methodname
    				method = elem;
    				elem   = document;
    			}   
    		}
    	}
    	var $element = $(elem),
    	    type     = typeof method,
    	    $app     = this
    	;
	
	    if (type === 'undefined') {
	    	// needs to initialize the Siteapp object, or an individual plugin.
	    	if (this.MediaQuery && (typeof this.MediaQuery._init == 'function')) {
	    		this.MediaQuery._init();
	    	}
	        this.reflow($element);
	    } else if (type === 'string') {
	    	if ( 
	    			this.options.disablePrivateMethods && 
	    			(method !== '_init') && // (re)allow '_init' method ;)
	    			(method.charAt(0) == this.options.privateMethodsIndicator) 
	        ) {
		    	// error for calling private plugin methods
		    	throw new TypeError(`We're sorry, invoking private module/plugin methods is restricted.`);
	    	}
	    	
	    	// an individual method to invoke on a plugin/module or group of plugins/modules
	        var args = [];
	        if ((arguments.length > 2)) { 
	        	args = Array.prototype.slice.call(arguments, 2); 
	        	//collect all the arguments, if necessary
	        }
	        var plugClass = $element.data($app.appName+'Plugin'); 
	        // determine the class of plugin
	        
	        if (plugClass !== undefined && plugClass[method] !== undefined) { 
	        	// make sure both the class and method exist
	            if ($element.length === 1) { 
	            	// if there's only one, call it directly.
	                plugClass[method].apply( plugClass, args );
	            } else {
	            	$element.each(function (i, el) { 
	                	// otherwise loop through the jQuery collection and invoke the method on each
	                    plugClass[method].apply( $(el).data($app.appName+'Plugin'), args );
	                });
	            }
	        } else if ($element.length > 0) {
	        	// error for no class or no method, but only if elements were explicitly selected
	   	 	    console.log('plugin method:', plugClass, method, $element);
	            throw new ReferenceError("We're sorry, '" + method + "' is not an available method for " + (plugClass ? $app.utilities.functionName(plugClass) : 'this element') + '.');
	        }
	    } else {
	    	// error for invalid argument type
	    	throw new TypeError(`We're sorry, ${type} is not a valid parameter. You must use a string representing the method you wish to invoke.`);
	    }
	    return this;
    }
    
    /**
     * Removes -no JavaScript- indicator class from elements
     * @function
     */
    hasJS() { 
    	var $noJS = $('.'+this.options.classnameNoJS);

        if($noJS.length){
            $noJS.removeClass( this.options.classnameNoJS );
        }
    }

    /**
     * retrieve the application's (namespace) name
     */
    get appName ( ) { 
        return this.options.namespace;
    }
    
    /**
     * retrieve the application's instance name
     */
    get instanceName ( ) { 
        return this.utilities.functionName(this);
    }
    
    /**
     * Retrieve current version.
     */
    get version () { 
        return this._version; 
    }
    
    /**
     * Retrieve current version.
     */
    set version ( ver ) {
    	this._version = ver;
    }

    /**
     * Namespace alias.
     */
    get NS () { 
        return this.Namespace;
    }

    /**
     * Debugger alias.
     */
    get D () { 
        return this.Debugger;
    }

    /**
     * Logger alias.
     */
    get L () { 
        return this.Log;
    }
    
    
    //
    // Since we are more or less directly deriving from it,
    // these methods make [Siteapp] compatible with Foundation 
    // back again, mapping all plugins to the main module
    // manager.
    //
    
    
    /**
     * [BC] Siteapp.plugin alias for ModuleManager.registerModule
     * @function
     * @deprecated
     * @see ModuleManager.registerModule
     */
    plugin (_plugin, name) {
    	return this.Modules.registerModule(_plugin, name);
    } 

    /**
     * [BC] Siteapp.registerPlugin alias for ModuleManager.initializeModule
     * @function
     * @deprecated
     * @see ModuleManager.initializeModule
     */
    registerPlugin (plugin, name) {
    	return this.Modules.initializeModule(plugin, name);
    } 

    /**
     * [BC] Siteapp.unregisterPlugin alias for ModuleManager.destroyModule
     * @function
     * @deprecated
     * @see ModuleManager.destroyModule
     */
    unregisterPlugin (plugin) {
    	return this.Modules.destroyModule(plugin);
    } 
    
    
};

Siteapp.prototype.defaults  = {
		
	// applicatin namespace
	namespace: 'siteapp',
	
	// application language code (ISO)
	lang: 'en_US',
	
	
	
	// disable storage engine
	disableStorage: false,
	
	// disable UI manager
	disableUi: false,
	
	// disable module manager (well, TBH, it makes no sence to turn this one off)
	disableModules: false,
	
	
	// remove -noJS- indicator on start-up
	hasJS: true,
	
	// -noJS- indicator classname
	classnameNoJS: 'no-js',
	
	
	
	
	// disable calls to/invokations of private plugin/module methods 
	disablePrivateMethods: true,
	
	// indicator, first character of a methodname, to determine calls to/invokations of private plugin/module methods 
	privateMethodsIndicator: '_'
	
		
};


// is this still needed?
Siteapp.prototype.libs      = {};



/**
 * Add Siteapp Utils to Siteapp utilities/'sys' namespace
 */
import {
	
	rtl, 
	GenerateUUID, 
	transitionend, 
	secureProperties,
	functionName,
	parseValue,
	hyphenate,
	throttle
	
} from './util/siteapp.util.core';
import EventManager from './sys/siteapp.eventManager';

Siteapp.prototype.utilities = {
		
    /**
     * Function for applying a debounce effect to a function call.
     * @function
     * @param {Function} func - Function to be called at end of timeout.
     * @param {Number} delay - Time in ms to delay the call of `func`.
     * @returns function
     */
    throttle: throttle,
    
    /**
     * returns a random base-36 uid with namespacing
     * @function
     * @param {Number} length - number of random base-36 digits desired. Increase 
     *                          for more random strings.
     * @param {String} namespace - name of plugin to be incorporated in uid, optional.
     * @default {String} '' - if no plugin name is provided, nothing is appended 
     *                        to the uid.
     * @returns {String} - unique id
     */
    genUUID: GenerateUUID,
    
    /**
     * Vendor polyfill for 'transitionend'
     * 
     * @function
     * @param {jQuery} $elem
     * @returns {String}
     */
    transitionend: transitionend,
    
    /**
     * Polyfill to get the name of a function/class instance in IE9
     * 
     * @function
     * @param {function} fn
     * @returns {string}
     */
    functionName: functionName,

    /**
     * Normalize value
     * 
     * @function
     * @param {mixed} str
     * @returns {boolean|number|string}
     */
    parseValue: parseValue,

    /**
     * Convert PascalCase to kebab-case
     * @see http://stackoverflow.com/a/8955580
     * 
     * @function
     * @param {string} str
     * @returns {string}
     */
    hyphenate: hyphenate,
    
    /**
     * Returns a boolean for RTL support
     * 
     * @function
     * @returns {boolean}
     */
    rtl: rtl,

    /**
     * Overrides setters for some $object's properties(2secure).
     * So those properties can only be set, eg., when creating a new instance. 
     * 
     * This should try to prevent at least obvious direct hacking. #crossing-fingers
     * 
     * - example:
     *   ```
     *   var obj = { a: 'x' };
     *   secureProperties( obj, ['a'] );
     *   
     *   obj.a = 'y' // => ERROR
     *   ```
     *   
     * @function
     * @access private
     * @param {object} $object - target object
     * @param {[string]} properties2secure - list of property keys to secure
     * @returns {object} - the modified $object
     */
    secureProperties: secureProperties,
    
    /**
     * Event distpatcher/manager to create event driven components not attached to a DOM element
     * @var {EventManager} EventManager
     * @see Siteapp.EventManager
     */
    EventManager: EventManager

};

/**
 * alias for utility namespace
 */
Siteapp.prototype.sys = Siteapp.prototype.utilities;
// map to 'own property'
Siteapp.utilities = Siteapp.prototype.utilities;
Siteapp.sys = Siteapp.prototype.utilities;



// Polyfill for requestAnimationFrame
(function() {
    if (!Date.now || !window.Date.now)
        window.Date.now = Date.now = function() { return new Date().getTime(); };

    var vendors = ['webkit', 'moz'];
    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
        var vp = vendors[i];
        window.requestAnimationFrame = window[vp+'RequestAnimationFrame'];
        window.cancelAnimationFrame = (window[vp+'CancelAnimationFrame']
                                    || window[vp+'CancelRequestAnimationFrame']);
    }
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)
        || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
        var lastTime = 0;
        window.requestAnimationFrame = function(callback) {
                var now = Date.now();
                var nextTime = Math.max(lastTime + 16, now);
                return setTimeout(function() { callback(lastTime = nextTime); },
                                                    nextTime - now);
        };
        window.cancelAnimationFrame = clearTimeout;
    }
    /**
     * Polyfill for performance.now, recommended by rAF
     */
    if(!window.performance || !window.performance.now){
        window.performance = {
            start: Date.now(),
            now: function(){ return Date.now() - this.start; }
        };
    }
})();



// Polyfill for {function-name}.bind(object)
if (!Function.prototype.bind) {
    Function.prototype.bind = function(oThis) {
        if (typeof this !== 'function') {
            // closest thing possible to the ECMAScript 5
            // internal IsCallable function
            throw new TypeError('Function.prototype.bind - what is trying to be '+
                    'bound is not callable');
        }

        var aArgs   = Array.prototype.slice.call(arguments, 1),
            fToBind = this,
            fNOP    = function() {},
            fBound  = function() {
                return fToBind.apply(
                    this instanceof fNOP ? this : oThis,
                    aArgs.concat(Array.prototype.slice.call(arguments))
                );
            };

        if (this.prototype) {
            // native functions don't have a prototype
            fNOP.prototype = this.prototype;
        }
        fBound.prototype = new fNOP();

        return fBound;
    };
}



//export {Siteapp};
export default Siteapp;


