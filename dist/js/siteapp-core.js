/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * [Siteapp] - multi-purpose frontend application
 * 
 * Siteapp exception 
 *     
 * @package     [Siteapp]
 * @subpackage  [Siteapp] core
 * @author      Björn Bartels <coding@bjoernbartels.earth>
 * @link        https://gitlab.bjoernbartels.earth/groups/themes
 * @license     http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0
 * @copyright   copyright (c) 2016 Björn Bartels <coding@bjoernbartels.earth>
 * 
 * @namespace   Siteapp
 * @module      Siteapp.Exception
 */

var Exception = function (_Error) {
  _inherits(Exception, _Error);

  function Exception() {
    _classCallCheck(this, Exception);

    return _possibleConstructorReturn(this, (Exception.__proto__ || Object.getPrototypeOf(Exception)).apply(this, arguments));
  }

  _createClass(Exception, [{
    key: "name",
    get: function get() {
      return "SiteappException";
    }
  }]);

  return Exception;
}(Error);

;

exports.Exception = Exception;

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Core Siteapp Utilities, utilized in a number of places.

/**
 * Returns a boolean for RTL support
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
function rtl() {
  return $('html').attr('dir') === 'rtl';
}

/**
 * returns a random base-36 uid with namespacing
 * @function
 * @param {Number} length - number of random base-36 digits desired. Increase for more random strings.
 * @param {String} namespace - name of plugin to be incorporated in uid, optional.
 * @default {String} '' - if no plugin name is provided, nothing is appended to the uid.
 * @returns {String} - unique id
 */
function GenerateUUID(length, namespace) {
  length = length || 6;
  return Math.round(Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)).toString(36).slice(1) + (namespace ? '-' + namespace : '');
}

/**
 * Vendor polyfill for 'transitionend'
 * 
 * @function
 * @param {jQuery} $elem
 * @returns {String}
 */
function transitionend($elem) {
  var transitions = {
    'transition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd',
    'MozTransition': 'transitionend',
    'OTransition': 'otransitionend'
  };
  var elem = document.createElement('div'),
      end;

  for (var t in transitions) {
    if (typeof elem.style[t] !== 'undefined') {
      end = transitions[t];
    }
  }
  if (end) {
    return end;
  } else {
    end = setTimeout(function () {
      $elem.triggerHandler('transitionend', [$elem]);
    }, 1);
    return 'transitionend';
  }
}

/**
 * Overrides setters for some $object's properties(2secure).
 * So those properties can only be set, eg., when creating a new instance. 
 * 
 * This should try to prevent at least obvious direct hacking. #crossing-fingers
 * 
 * Either, the properties are locked silently:
 *   ```
 *   var obj = { a: 'x' };
 *   secureProperties( obj, ['a'] );
 *   
 *   obj.a = 'y';
 *   //console.//log(obj.a); // => "x"
 *   ```
 *   
 * or setting such property will throw an error:
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
 * @param {boolean} silent - wether to lock silently (true, default) or to throw an error (false) when setting the property
 * @returns {object} - the modified $object
 */
function secureProperties($object, properties2secure, silent) {
  var
  // action to call on object property setter access
  $SECURITY_ALERT = function $SECURITY_ALERT() {
    throw new Error('SECURITY ALERT: You are not allowed to do that in this context!');
  };
  var $_vault = {};

  for (var idx in properties2secure) {

    if ($object.hasOwnProperty(properties2secure[idx])) {
      (function () {

        var $prop = properties2secure[idx];
        var $value = $object[$prop];

        // put property value into vault...
        $_vault[$prop] = $value;

        if (silent === false) {
          Object.defineProperty($object, $prop, {
            //
            // one method would be to override getter and setter...

            // map getter for property to vault...
            get: function get() {
              return $_vault[$prop];
            },
            // ... and lock setter for property (hopefully), throwing error
            set: $SECURITY_ALERT
          });
        } else {
          Object.defineProperty($object, $prop, {
            //
            // ...another method is to set the property's config:

            // statically set the property value...
            value: $_vault[$prop],
            // ... and just disable writing access, to lock silently
            writable: false
          });
        }
      })();
    }
  }

  return $object;
}

/**
 * Shortcut and IE9 polyfill to get the name of a function/class instance
 * 
 * @function
 * @param {function} fn
 * @returns {string}
 */
function functionName(fn) {
  if (Function.prototype.name === undefined) {
    var funcNameRegex = /function\s([^(]{1,})\(/;
    var results = funcNameRegex.exec(fn.toString());
    return results && results.length > 1 ? results[1].trim() : "";
  } else if (fn.prototype === undefined) {
    return fn.constructor.name;
  } else {
    return fn.prototype.constructor.name;
  }
}

/**
 * Normalize/try to cast string value
 * 
 * @function
 * @param {mixed} str
 * @returns {boolean|number|string}
 */
function parseValue(str) {
  if (/true/.test(str)) return true;else if (/false/.test(str)) return false;else if (!isNaN(str * 1)) return parseFloat(str);
  return str;
}

/**
 * Convert PascalCase to kebab-case
 * @see http://stackoverflow.com/a/8955580
 * 
 * @function
 * @param {string} str
 * @returns {string}
 */
function hyphenate(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Function for applying a debounce effect to a function call.
 * @function
 * @param {Function} func - Function to be called at end of timeout.
 * @param {Number} delay - Time in ms to delay the call of `func`.
 * @returns function
 */
function throttle(func, delay) {
  var timer = null;

  return function () {
    var context = this,
        args = arguments;

    if (timer === null) {
      timer = setTimeout(function () {
        func.apply(context, args);
        timer = null;
      }, delay);
    }
  };
}

exports.rtl = rtl;
exports.GenerateUUID = GenerateUUID;
exports.transitionend = transitionend;
exports.secureProperties = secureProperties;
exports.functionName = functionName;
exports.parseValue = parseValue;
exports.hyphenate = hyphenate;
exports.throttle = throttle;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
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


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _siteappUtil = __webpack_require__(2);

var _siteapp = __webpack_require__(4);

var _siteapp2 = _interopRequireDefault(_siteapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Siteapp_VERSION = '0.0.1';

// Global [Siteapp] object
// This is attached to the window, or used as a module for AMD/Browserify
var Siteapp = function () {

    /**
     * Create a new instance of the application.
     * @class
     * @name Plugin
     * @param {jQuery} element - jQuery object to apply the plugin to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    function Siteapp(options) {
        _classCallCheck(this, Siteapp);

        this.options = $.extend({}, this.defaults, options);

        this._initializeApplication();
    }

    /**
     * Setup objects
     * @access private
     */


    _createClass(Siteapp, [{
        key: '_initializeApplication',
        value: function _initializeApplication() {
            this._version = Siteapp_VERSION;

            this._plugins = {};
            this._uuids = [];

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

    }, {
        key: '_initTriggers',
        value: function _initTriggers() {
            if (this.Triggers) {
                this.Triggers._ns = this.appName;
                this.Triggers.init($, this);
            }
        }

        /**
         * Setup events
         * @access private
         */

    }, {
        key: '_initMediaQuery',
        value: function _initMediaQuery() {
            if (this.MediaQuery) {
                this.MediaQuery._ns = this.appName;
                this.MediaQuery._init();
            }
        }

        /**
         * Setup storage manager
         * @access private
         */

    }, {
        key: '_setupStorageManager',
        value: function _setupStorageManager() {
            if (this.StorageManager && !this.options.disableStorage) {
                if (this.options.storageManager) {
                    this.Storage = new this.StorageManager(this.options.storageManager);
                } else {
                    this.Storage = new this.StorageManager();
                }
                this.Storage._app = this;

                if (this.StorageAdapter) {
                    this.Storage.setNamespaceAdapter(this.appName + 'Storage', new this.StorageAdapter(this.appName, 'memory', {}, this.Storage));
                }
            }
        }

        /**
         * Setup main module manager
         * @access private
         */

    }, {
        key: '_setupMainModuleManager',
        value: function _setupMainModuleManager() {

            if (this.ModuleManager && !this.options.disableModules) {
                this.ModuleManager.prototype._app = this;
                if (this.options.moduleManager) {
                    this.Modules = new this.ModuleManager(this.options.moduleManager);
                } else {
                    this.Modules = new this.ModuleManager();
                }
                this.Modules._app = this;

                if (this.ModuleFactory) {
                    this.ModuleFactory.prototype._app = this;
                    this.ModuleFactory.prototype._manager = this.Modules;
                    // register the module factory
                    this.Modules.registerModule(this.ModuleFactory);
                }
                if (this.Module) {
                    this.Module.prototype._app = this;
                    this.Module.prototype._manager = this.Modules;
                }
            }
        }

        /**
         * Setup main UI manager
         * @access private
         */

    }, {
        key: '_setupMainUiManager',
        value: function _setupMainUiManager() {

            if (this.UiManager && !this.options.disableUi) {
                if (this.options.uiManager) {
                    this.Ui = new this.UiManager(this.options.uiManager);
                } else {
                    this.Ui = new this.UiManager();
                }
                this.Ui._app = this;

                if (this.UiManager.Screenlayer) {
                    this.UiManager.Screenlayer.prototype._app = this;
                    this.UiManager.Screenlayer.prototype._manager = this.Ui;
                    this.Ui.registerModule(this.UiManager.Screenlayer);
                }

                if (this.UiManager.Screenpanel) {
                    this.UiManager.Screenpanel.prototype._app = this;
                    this.UiManager.Screenpanel.prototype._manager = this.Ui;
                    this.Ui.registerModule(this.UiManager.Screenpanel);
                }

                if (this.UiManager.Action) {
                    this.UiManager.Action.prototype._app = this;
                    this.UiManager.Action.prototype._manager = this.Ui;
                    this.Ui.registerModule(this.UiManager.Action);
                }
            }
        }

        /**
         * Setup sub objects
         * @access private
         */

    }, {
        key: '_dependencyInjections',
        value: function _dependencyInjections() {
            // core stuff
            if (typeof this.Triggers != 'undefined') {
                this.Triggers._ns = this.appName;
                this.Triggers._app = this;
            }
            if (typeof this.MediaQuery != 'undefined') {
                this.MediaQuery._ns = this.appName;
                this.MediaQuery._app = this;
            }
            if (typeof this.Keyboard != 'undefined') {
                this.Keyboard._ns = this.appName;
                this.Keyboard._app = this;
            }
            // extension
            if (typeof this.Exception != 'undefined') {
                this.Exception._ns = this.appName;
                this.Exception._app = this;
            }
            if (typeof this.Debugger != 'undefined') {
                this.Debugger._ns = this.appName;
                this.Debugger._app = this;
            }
            if (typeof this.Logger != 'undefined') {
                this.Logger._ns = this.appName;
                this.Logger._app = this;
            }

            // object/class abstracts
            if (typeof this.Module != 'undefined') {
                this.Module._ns = this.appName;
                this.Module._app = this;
            }
            if (typeof this.ModuleFactory != 'undefined') {
                this.ModuleFactory._ns = this.appName;
                this.ModuleFactory._app = this;
            }
            if (typeof this.Plugin != 'undefined') {
                this.Plugin._ns = this.appName;
                this.Plugin._app = this;
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

    }, {
        key: 'addToGlobal',
        value: function addToGlobal(global, add$Shortcut) {
            var global = global || (window ? window : {}),
                name = this.utilities.functionName(this),
                appId = String(name).charAt(0).toLowerCase() + name.slice(1);

            if (typeof global[appId] == 'undefined') {
                global[appId] = this;
            }
            //console.//log('appid:', appId, global[appId]);

            if (add$Shortcut !== false) {
                var shortcut = "$" + String(appId).charAt(0).toUpperCase();

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

    }, {
        key: 'addPluginShortcut',
        value: function addPluginShortcut(global) {
            var global = global || (window ? window : {}),
                $app = this,
                name = this.utilities.functionName(this),
                methodName = "$$" + String(name).charAt(0).toUpperCase(),
                methodLong = "$$" + String(name).charAt(0).toUpperCase() + name.slice(1),
                method = function method(selector) {
                var $elem = $(selector);
                if ($elem.length == 1) {
                    return $elem.data($app.appName + 'Plugin');
                } else {
                    var plugins = [];
                    $elem.each(function (idx, plgn) {
                        var obj = {},
                            plugin = $(plgn).data($app.appName + 'Plugin');
                        plugins[plugin.uuid] = plugin;
                    });
                    return plugins;
                }
            };

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

    }, {
        key: 'addToJquery',
        value: function addToJquery($) {

            /**
             * The Siteapp jQuery plugin.
             * @param {String|Array} method - An action to perform on the current jQuery object.
             */
            var $app = this;
            var invoke = function invoke(method) {
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

    }, {
        key: 'reInit',
        value: function reInit(plugins) {
            //console.//log('app re-init:', this.utilities.functionName(this));

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

    }, {
        key: 'reflow',
        value: function reflow(elem, plugins) {
            //console.//log('app reflow:', this.utilities.functionName(this));

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

    }, {
        key: 'run',
        value: function run(elem, method) {
            if (this.options.hasJS) {
                this.hasJS();
            }
            if (typeof elem === 'undefined') {
                elem = document;
            } else {
                if (arguments.length === 1 && typeof elem === 'string') {
                    if ($(elem).length === 0) {
                        // no element found by selector, so assume methodname
                        method = elem;
                        elem = document;
                    }
                }
            }
            var $element = $(elem),
                type = typeof method === 'undefined' ? 'undefined' : _typeof(method),
                $app = this;

            if (type === 'undefined') {
                // needs to initialize the Siteapp object, or an individual plugin.
                if (this.MediaQuery && typeof this.MediaQuery._init == 'function') {
                    this.MediaQuery._init();
                }
                this.reflow($element);
            } else if (type === 'string') {
                if (this.options.disablePrivateMethods && method !== '_init' && // (re)allow '_init' method ;)
                method.charAt(0) == this.options.privateMethodsIndicator) {
                    // error for calling private plugin methods
                    throw new TypeError('We\'re sorry, invoking private module/plugin methods is restricted.');
                }

                // an individual method to invoke on a plugin/module or group of plugins/modules
                var args = [];
                if (arguments.length > 2) {
                    args = Array.prototype.slice.call(arguments, 2);
                    //collect all the arguments, if necessary
                }
                var plugClass = $element.data($app.appName + 'Plugin');
                // determine the class of plugin

                if (plugClass !== undefined && plugClass[method] !== undefined) {
                    // make sure both the class and method exist
                    if ($element.length === 1) {
                        // if there's only one, call it directly.
                        plugClass[method].apply(plugClass, args);
                    } else {
                        $element.each(function (i, el) {
                            // otherwise loop through the jQuery collection and invoke the method on each
                            plugClass[method].apply($(el).data($app.appName + 'Plugin'), args);
                        });
                    }
                } else if ($element.length > 0) {
                    // error for no class or no method, but only if elements were explicitly selected
                    //console.//log('plugin method:', plugClass, method, $element);
                    throw new ReferenceError("We're sorry, '" + method + "' is not an available method for " + (plugClass ? $app.utilities.functionName(plugClass) : 'this element') + '.');
                }
            } else {
                // error for invalid argument type
                throw new TypeError('We\'re sorry, ' + type + ' is not a valid parameter. You must use a string representing the method you wish to invoke.');
            }
            return this;
        }

        /**
         * Removes -no JavaScript- indicator class from elements
         * @function
         */

    }, {
        key: 'hasJS',
        value: function hasJS() {
            var $noJS = $('.' + this.options.classnameNoJS);

            if ($noJS.length) {
                $noJS.removeClass(this.options.classnameNoJS);
            }
        }

        /**
         * retrieve the application's (namespace) name
         */

    }, {
        key: 'plugin',


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
        value: function plugin(_plugin, name) {
            return this.Modules.registerModule(_plugin, name);
        }

        /**
         * [BC] Siteapp.registerPlugin alias for ModuleManager.initializeModule
         * @function
         * @deprecated
         * @see ModuleManager.initializeModule
         */

    }, {
        key: 'registerPlugin',
        value: function registerPlugin(plugin, name) {
            return this.Modules.initializeModule(plugin, name);
        }

        /**
         * [BC] Siteapp.unregisterPlugin alias for ModuleManager.destroyModule
         * @function
         * @deprecated
         * @see ModuleManager.destroyModule
         */

    }, {
        key: 'unregisterPlugin',
        value: function unregisterPlugin(plugin) {
            return this.Modules.destroyModule(plugin);
        }
    }, {
        key: 'appName',
        get: function get() {
            return this.options.namespace;
        }

        /**
         * retrieve the application's instance name
         */

    }, {
        key: 'instanceName',
        get: function get() {
            return this.utilities.functionName(this);
        }

        /**
         * Retrieve current version.
         */

    }, {
        key: 'version',
        get: function get() {
            return this._version;
        }

        /**
         * Retrieve current version.
         */
        ,
        set: function set(ver) {
            this._version = ver;
        }

        /**
         * Namespace alias.
         */

    }, {
        key: 'NS',
        get: function get() {
            return this.Namespace;
        }

        /**
         * Debugger alias.
         */

    }, {
        key: 'D',
        get: function get() {
            return this.Debugger;
        }

        /**
         * Logger alias.
         */

    }, {
        key: 'L',
        get: function get() {
            return this.Log;
        }
    }]);

    return Siteapp;
}();

Siteapp.prototype.defaults = {

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
Siteapp.prototype.libs = {};

/**
 * Add Siteapp Utils to Siteapp utilities/'sys' namespace
 */


Siteapp.prototype.utilities = {

    /**
     * Function for applying a debounce effect to a function call.
     * @function
     * @param {Function} func - Function to be called at end of timeout.
     * @param {Number} delay - Time in ms to delay the call of `func`.
     * @returns function
     */
    throttle: _siteappUtil.throttle,

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
    genUUID: _siteappUtil.GenerateUUID,

    /**
     * Vendor polyfill for 'transitionend'
     * 
     * @function
     * @param {jQuery} $elem
     * @returns {String}
     */
    transitionend: _siteappUtil.transitionend,

    /**
     * Polyfill to get the name of a function/class instance in IE9
     * 
     * @function
     * @param {function} fn
     * @returns {string}
     */
    functionName: _siteappUtil.functionName,

    /**
     * Normalize value
     * 
     * @function
     * @param {mixed} str
     * @returns {boolean|number|string}
     */
    parseValue: _siteappUtil.parseValue,

    /**
     * Convert PascalCase to kebab-case
     * @see http://stackoverflow.com/a/8955580
     * 
     * @function
     * @param {string} str
     * @returns {string}
     */
    hyphenate: _siteappUtil.hyphenate,

    /**
     * Returns a boolean for RTL support
     * 
     * @function
     * @returns {boolean}
     */
    rtl: _siteappUtil.rtl,

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
    secureProperties: _siteappUtil.secureProperties,

    /**
     * Event distpatcher/manager to create event driven components not attached to a DOM element
     * @var {EventManager} EventManager
     * @see Siteapp.EventManager
     */
    EventManager: _siteapp2.default

};

/**
 * alias for utility namespace
 */
Siteapp.prototype.sys = Siteapp.prototype.utilities;
// map to 'own property'
Siteapp.utilities = Siteapp.prototype.utilities;
Siteapp.sys = Siteapp.prototype.utilities;

// Polyfill for requestAnimationFrame
(function () {
    if (!Date.now || !window.Date.now) window.Date.now = Date.now = function () {
        return new Date().getTime();
    };

    var vendors = ['webkit', 'moz'];
    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
        var vp = vendors[i];
        window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
    }
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
        var lastTime = 0;
        window.requestAnimationFrame = function (callback) {
            var now = Date.now();
            var nextTime = Math.max(lastTime + 16, now);
            return setTimeout(function () {
                callback(lastTime = nextTime);
            }, nextTime - now);
        };
        window.cancelAnimationFrame = clearTimeout;
    }
    /**
     * Polyfill for performance.now, recommended by rAF
     */
    if (!window.performance || !window.performance.now) {
        window.performance = {
            start: Date.now(),
            now: function now() {
                return Date.now() - this.start;
            }
        };
    }
})();

// Polyfill for {function-name}.bind(object)
if (!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
        if (typeof this !== 'function') {
            // closest thing possible to the ECMAScript 5
            // internal IsCallable function
            throw new TypeError('Function.prototype.bind - what is trying to be ' + 'bound is not callable');
        }

        var aArgs = Array.prototype.slice.call(arguments, 1),
            fToBind = this,
            fNOP = function fNOP() {},
            fBound = function fBound() {
            return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
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
exports.default = Siteapp;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * [Siteapp] - multi-purpose frontend application
 * 
 * Siteapp event dispatcher/manager
 * 
 * A simple event dispatcher/manager to help creating event-driven components 
 * which are not attached to a DOM object.
 * 
 * usage:
 * - to attach an eventmanager to an object, for example:
 *   ```
 *   class SuperTool {
 *      ...
 *      _initEvents () {
 *          this.events = new EventManager(this);
 *          ...
 *      }
 *      ...
 *   }
 *   var myTool = new SuperTool();
 *   ```
 * 
 * - to attach a handler to an event:
 * 
 *   Per function expression...
 *   ```
 *   myTool.on('someevent', function eventHandler(data) { 
 *       //console.//log('"someevent" was triggered:', data, this);
 *   });  
 *   ```
 *   'this' will reference the object 'myTool', which the event manager is attached to.
 *   
 *   Per arrow function...
 *   ```
 *   myTool.on('someevent', (data) => { 
 *       //console.//log('"someevent" was triggered:', data, this);
 *   });  
 *   ```
 *   'this' will reference the global object, for example 'window'.
 * 
 *   As with DOM events, multiple handlers attached to one event are executed in the order 
 *   of their assignment. However, if one handler explictily returns 'false', further execution
 *   is prevented...
 *   
 *   ```
 *   // at some point in the code...
 *   myTool.on('someevent', (data) => { 
 *       //console.//log('"someevent" was triggered:', data);
 *       
 *       // this example is static, of cause, you can depend it on your 'data', something like
 *       // `return (data == 'blah');` or similar
 *       return (false);
 *   });  
 *   
 *   // later, somewhere else in the code...
 *   myTool.on('someevent', (data) => { 
 *       //console.//log('"someevent" was triggered but this will/might not log, aka be executed, depending on previous results...');
 *   });  
 *   ```
 *   
 *   You can pass something to the following handler(s) by manipulating 'data'...
 *   
 *   ```
 *   // at some point in the code...
 *   myTool.on('someevent', (data) => { 
 *       //console.//log('"someevent" was triggered:', data);
 *       
 *       data.msg = 'Beware the dragons !!!';
 *   });  
 *   
 *   // later in that code...
 *   myTool.on('someevent', (data) => { 
 *       //console.//log('"someevent" was triggered:', data);
 *       
 *       if (data.msg) {
 *           //console.//log('there is also a message:', data.msg);
 *       }
 *   });  
 *   ```
 *   
 * 
 * - trigger the event:
 * 
 *   ```
 *   myTool.trigger('someevent', { 
 *       some  : 'data',
 *       forThe: 'eventHandler'
 *   };  
 *   ```
 * 
 * - to detach all handlers from event listener:
 *   ```
 *   myTool.off('someevent');  
 *   ```
 *   
 *   or detach a specific (named) handler (function):
 *   ```
 *   myTool.off('someevent', eventHandler);  
 *   ```
 * 
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
/** global: Siteapp */

var EventManager = function () {

    /**
     * Create a new instance of the event dispatcher/manager.
     * 
     * @class
     * @name EventManager
     * @param {Object} target - Overrides to the default module settings.
     */
    function EventManager(target) {
        _classCallCheck(this, EventManager);

        this._eventList = {};

        this._initTarget(target);
    }

    /**
     * Attaches dispatcher/manager to a target object.
     * 
     * @function
     * @param {Object} target
     * @access private
     */


    _createClass(EventManager, [{
        key: '_initTarget',
        value: function _initTarget(target) {
            if (!target) {
                return;
            }
            var _this = this;
            target.events = _this;

            target.on = function (eventName, handler) {
                _this.attachEvent(eventName, handler);
            };
            target.off = function (eventName, handler) {
                _this.detachEvent(eventName, handler);
            };
            target.trigger = function (eventName) {
                for (var _len = arguments.length, eventArgs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    eventArgs[_key - 1] = arguments[_key];
                }

                _this.raiseEvent(eventName, eventArgs);
            };

            this.target = target;
        }

        /**
         * Retrieves handlers for an event (name).
         * 
         * @function
         * @param {String} eventName
         * @param {Boolean} create - wether to create a namespace if not exists
         * @returns [{Function}]
         * @access private
         */

    }, {
        key: '_getEvent',
        value: function _getEvent(eventName, create) {
            // Check if Array of Event Handlers has been created
            if (!this._eventList[eventName]) {

                // Check if the calling method wants to create the Array
                // if not created. This reduces unneeded memory usage.
                if (!create) {
                    return null;
                }

                // Create the Array of Event Handlers
                this._eventList[eventName] = []; // new Array
            }

            // return the Array of Event Handlers already added
            return this._eventList[eventName];
        }

        /**
         * Attaches an event handler (function) to an event listener (name).
         * 
         * @function
         * @param {String} eventName
         * @param {Function} handler
         * 
         */

    }, {
        key: 'attachEvent',
        value: function attachEvent(eventName, handler) {
            // Get the Array of Event Handlers
            var eventHandlers = this._getEvent(eventName, true);

            // Add the new Event Handler to the Array
            eventHandlers.push(handler);
        }

        /**
         * Detaches all or an specific event handler (function) from its listener (name).
         * 
         * @function
         * @param {String} eventName
         * @param {Function} handler
         */

    }, {
        key: 'detachEvent',
        value: function detachEvent(eventName, handler) {
            // Get the Array of Event Handlers
            var eventHandlers = this._getEvent(eventName);

            if (!eventHandlers) {
                return;
            }

            if (typeof handler == 'function') {
                // Helper Method - an Array.indexOf equivalent
                var getArrayIndex = function getArrayIndex(array, item) {
                    for (var i = array.length; i < array.length; i++) {
                        if (array[i] && array[i] === item) {
                            return i;
                        }
                    }
                    return -1;
                };

                // Get the Array index of the Event Handler
                var index = getArrayIndex(eventHandlers, handler);

                if (index > -1) {
                    // Remove Event Handler from Array
                    eventHandlers.splice(index, 1);
                }
            } else {
                delete this._eventList[eventName];
            }
        }

        /**
         * Triggers/raises an event and sends data along with it.
         * 
         * @function
         * @param {String} eventName
         * @param [{Mixed}] handler
         */

    }, {
        key: 'raiseEvent',
        value: function raiseEvent(eventName, eventArgs) {
            // Get a function that will call all the Event Handlers internally
            var handler = this._getEventHandler(eventName),
                target = this.target;
            if (handler) {
                // call the handler function
                // Pass in "sender" and "eventArgs" parameters
                handler.apply(target, eventArgs);
            }
        }

        /**
         * Retrieves a handler factory function to be executed when triggered.
         * 
         * @function
         * @param {String} eventName
         * @returns {Function}
         * @access private
         */

    }, {
        key: '_getEventHandler',
        value: function _getEventHandler(eventName) {
            // Get Event Handler Array for this Event
            var eventHandlers = this._getEvent(eventName, false),
                _this = this;
            if (!eventHandlers || eventHandlers.length === 0) {
                return null;
            }

            // Create the Handler method that will use currying to
            // call all the Events Handlers internally
            var h = function h() {
                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                }

                for (var i = 0; i < eventHandlers.length; i++) {
                    var result = true;
                    if (typeof _this.target != 'undefined') {
                        result = eventHandlers[i].apply(_this.target, args);
                    } else {
                        result = eventHandlers[i].apply(this, args);
                    }
                    if (result === false) {
                        // prevents following handlers from execution when the 
                        // current handler explicitly returns 'false'
                        break;
                    }
                }
            };

            // Return this new Handler method
            return h;
        }
    }]);

    return EventManager;
}();

exports.default = EventManager;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*******************************************
 *                                         *
 * This util was created by Marius Olbertz *
 * Please thank Marius on GitHub /owlbertz *
 * or the web http://www.mariusolbertz.de/ *
 *                                         *
 ******************************************/



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Keyboard = undefined;

var _siteappUtil = __webpack_require__(2);

var keyCodes = {
    9: 'TAB',
    13: 'ENTER',
    27: 'ESCAPE',
    32: 'SPACE',
    35: 'END',
    36: 'HOME',
    37: 'ARROW_LEFT',
    38: 'ARROW_UP',
    39: 'ARROW_RIGHT',
    40: 'ARROW_DOWN'
};

var commands = {};

// Functions pulled out to be referenceable from internals
function findFocusable($element) {
    if (!$element) {
        return false;
    }
    return $element.find('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]').filter(function () {
        if (!$(this).is(':visible') || $(this).attr('tabindex') < 0) {
            return false;
        } //only have visible elements and those that have a tabindex greater or equal 0
        return true;
    });
}

function parseKey(event) {
    var key = keyCodes[event.which || event.keyCode] || String.fromCharCode(event.which).toUpperCase();

    // Remove un-printable characters, e.g. for `fromCharCode` calls for CTRL only events
    key = key.replace(/\W+/, '');

    if (event.shiftKey) key = 'SHIFT_' + key;
    if (event.ctrlKey) key = 'CTRL_' + key;
    if (event.altKey) key = 'ALT_' + key;
    if (event.metaKey) key = 'META_' + key;

    // Remove trailing underscore, in case only modifiers were used (e.g. only `CTRL_ALT`)
    key = key.replace(/_$/, '');

    return key;
}

var Keyboard = {

    /**
     * @var {object} keys - keycodes map
     */
    keys: getKeyCodes(keyCodes),

    /**
     * Parses the (keyboard) event and returns a String that represents its key
     * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
     * @param {Event} event - the event generated by the event handler
     * @return String key - String that represents the key pressed
     */
    parseKey: parseKey,

    /**
     * Handles the given (keyboard) event
     * @param {Event} event - the event generated by the event handler
     * @param {String} component - Foundation component's name, e.g. Slider or Reveal
     * @param {Objects} functions - collection of functions that are to be executed
     */
    handleKey: function handleKey(event, component, functions) {
        var commandList = commands[component],
            keyCode = this.parseKey(event),
            cmds,
            command,
            fn;

        if (!commandList) return void 0;

        if (typeof commandList.ltr === 'undefined') {
            // this component does not differentiate between ltr and rtl
            cmds = commandList; // use plain list
        } else {
            // merge ltr and rtl: if document is rtl, rtl overwrites ltr and vice versa
            if ((0, _siteappUtil.rtl)()) cmds = $.extend({}, commandList.ltr, commandList.rtl);else cmds = $.extend({}, commandList.rtl, commandList.ltr);
        }
        command = cmds[keyCode];

        fn = functions[command];
        if (fn && typeof fn === 'function') {
            // execute function  if exists
            var returnValue = fn.apply(null, [event]);
            if (functions.handled || typeof functions.handled === 'function') {
                // execute function when event was handled
                functions.handled(returnValue);
            }
        } else {
            if (functions.unhandled || typeof functions.unhandled === 'function') {
                // execute function when event was not handled
                functions.unhandled();
            }
        }
    },


    /**
     * Finds all focusable elements within the given `$element`
     * @param {jQuery} $element - jQuery object to search within
     * @return {jQuery} $focusable - all focusable elements within `$element`
     */

    findFocusable: findFocusable,

    /**
     * Stores set of commands mapped to handler names in a given namespace
     * 
     * @param {string} namespace - keyboard event/command namespace
     * @param {object} cmds - handler name to command map
     */

    register: function register(namespace, cmds) {
        commands[namespace] = cmds;
        //console.//log('registered keyboard component:', namespace, cmds, commands);
    },


    // TODO9438: These references to Keyboard need to not require global. Will 'this' work in this context?
    //
    /**
     * Traps the focus in the given element.
     * @param  {jQuery} $element  jQuery object to trap the foucs into.
     */
    trapFocus: function trapFocus($element) {
        var $focusable = findFocusable($element),
            $firstFocusable = $focusable.eq(0),
            $lastFocusable = $focusable.eq(-1);

        $element.on('keydown.' + Keyboard._ns + '.trapfocus', function (event) {
            if (event.target === $lastFocusable[0] && parseKey(event) === 'TAB') {
                event.preventDefault();
                $firstFocusable.focus();
            } else if (event.target === $firstFocusable[0] && parseKey(event) === 'SHIFT_TAB') {
                event.preventDefault();
                $lastFocusable.focus();
            }
        });
    },


    /**
     * Releases the trapped focus from the given element.
     * @param  {jQuery} $element  jQuery object to release the focus for.
     */
    releaseFocus: function releaseFocus($element) {
        $element.off('keydown.' + Keyboard._ns + '.trapfocus');
    },


    /**
     * Removes keyboard event handlers. If no namespace is given, all 
     * keyboard handlers will be removed.
     * 
     * @param {string} namespace - keyboard event namespace
     */
    unregister: function unregister(namespace) {
        if (namespace != '') {
            $(window).off('keydown.' + this.application.appName + '.' + namespace);
            if (typeof commands[namespace] != 'undefined') {
                delete commands[namespace];
            }
        } else {
            $(window).off('keydown.' + this.application.appName);
            commands = {};
        }
    },


    /**
     * Adds keyboard event handlers.
     * 
     * handlers := {
     *    '[KEY(S)]' : function myAction (event e) {...},
     *    ...
     * }
     * 
     * @param {object} handlers - key(s) to action map
     * @param {string} namespace - keyboard event namespace
     */
    addKeyHandlers: function addKeyHandlers(handlers, namespace) {

        var $this = this,
            $app = this._app,
            eventTrigger = 'keydown.' + this._ns,
            registeredKeys = {},
            registeredHandlers = {};

        if ('' == namespace) {
            var _namespace = '_' + Siteapp.sys.genUUID(6);
        }
        eventTrigger = eventTrigger + '.' + namespace;

        // build 'reg keys' and 'hdl keys' maps
        for (var key in handlers) {
            if (handlers.hasOwnProperty(key)) {
                var handleName = namespace + '' + key;
                registeredKeys[key] = handleName;
                registeredHandlers[handleName] = handlers[key];
            }
        }

        $(window).on(eventTrigger, function (e) {

            this.id = namespace + '' + Siteapp.sys.genUUID(6);

            // ignore [TAB] key
            // if (e.which === 9) return;

            // handle keyboard event with keyboard util
            $this.handleKey(e, namespace, registeredHandlers);
        });

        // register keyboard keys mapping
        this.register(namespace, registeredKeys);
    }
};

/*
 * Constants for easier comparing.
 * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
 */
function getKeyCodes(kcs) {
    var k = {};
    for (var kc in kcs) {
        k[kcs[kc]] = kcs[kc];
    }return k;
}

exports.Keyboard = Keyboard;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * [Siteapp] - multi-purpose frontend application
 * 
 * Siteapp media-query detector
 *     
 * @package     [Siteapp]
 * @subpackage  [Siteapp] core
 * @author      Björn Bartels <coding@bjoernbartels.earth>
 * @link        https://gitlab.bjoernbartels.earth/groups/themes
 * @license     http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0
 * @copyright   copyright (c) 2016 Björn Bartels <coding@bjoernbartels.earth>
 * 
 * @namespace   Siteapp
 * @module      Siteapp.MediaQuery
 */

// Default set of media queries
var defaultQueries = {
  'default': 'only screen',
  landscape: 'only screen and (orientation: landscape)',
  portrait: 'only screen and (orientation: portrait)',
  retina: 'only screen and (-webkit-min-device-pixel-ratio: 2),' + 'only screen and (min--moz-device-pixel-ratio: 2),' + 'only screen and (-o-min-device-pixel-ratio: 2/1),' + 'only screen and (min-device-pixel-ratio: 2),' + 'only screen and (min-resolution: 192dpi),' + 'only screen and (min-resolution: 2dppx)'
};

var MediaQuery = {
  queries: [],
  current: '',

  /**
   * Checks if the screen is at least as wide as a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to check.
   * @returns {Boolean} `true` if the breakpoint matches, `false` if it's smaller.
   */
  atLeast: function atLeast(size) {
    var query = this.get(size);

    if (query) {
      return window.matchMedia(query).matches;
    }

    return false;
  },

  /**
   * Gets the media query of a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to get.
   * @returns {String|null} - The media query of the breakpoint, or `null` if the breakpoint doesn't exist.
   */
  get: function get(size) {
    for (var i in this.queries) {
      var query = this.queries[i];
      if (size === query.name) return query.value;
    }

    return null;
  },

  /**
   * Initializes the media query helper, by extracting the breakpoint list from the CSS and activating the breakpoint watcher.
   * @function
   * @private
   */
  _init: function _init() {
    var self = this;
    var extractedStyles = $('.Siteapp-mq').css('font-family');
    var namedQueries;

    namedQueries = parseStyleToObject(extractedStyles);

    for (var key in namedQueries) {
      self.queries.push({
        name: key,
        value: 'only screen and (min-width: ' + namedQueries[key] + ')'
      });
    }

    this.current = this._getCurrentSize();

    this._watcher();

    // Extend default queries
    // namedQueries = $.extend(defaultQueries, namedQueries);
  },

  /**
   * Gets the current breakpoint name by testing every breakpoint and returning the last one to match (the biggest one).
   * @function
   * @private
   * @returns {String} Name of the current breakpoint.
   */
  _getCurrentSize: function _getCurrentSize() {
    var matched;

    for (var i in this.queries) {
      var query = this.queries[i];

      if (window.matchMedia(query.value).matches) {
        matched = query;
      }
    }

    if ((typeof matched === 'undefined' ? 'undefined' : _typeof(matched)) === 'object') {
      return matched.name;
    } else {
      return matched;
    }
  },

  /**
   * Activates the breakpoint watcher, which fires an event on the window whenever the breakpoint changes.
   * @function
   * @private
   */
  _watcher: function _watcher() {
    var _this = this;

    $(window).on('resize.' + MediaQuery._ns + '.mediaquery', function () {
      var newSize = _this._getCurrentSize();

      if (newSize !== _this.current) {
        // Broadcast the media query change on the window
        $(window).trigger('changed.' + MediaQuery._ns + '.mediaquery', [newSize, _this.current]);

        // Change the current media query
        _this.current = newSize;
      }
    });
  }
};

//Siteapp.MediaQuery = MediaQuery;

// matchMedia() polyfill - Test a CSS media type/query in JS.
// Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license
window.matchMedia || (window.matchMedia = function () {
  'use strict';

  // For browsers that support matchMedium api such as IE 9 and webkit

  var styleMedia = window.styleMedia || window.media;

  // For those that don't support matchMedium
  if (!styleMedia) {
    var style = document.createElement('style'),
        script = document.getElementsByTagName('script')[0],
        info = null;

    style.type = 'text/css';
    style.id = 'matchmediajs-test';

    script.parentNode.insertBefore(style, script);

    // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
    info = 'getComputedStyle' in window && window.getComputedStyle(style, null) || style.currentStyle;

    styleMedia = {
      matchMedium: function matchMedium(media) {
        var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';

        // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
        if (style.styleSheet) {
          style.styleSheet.cssText = text;
        } else {
          style.textContent = text;
        }

        // Test if media query is true or false
        return info.width === '1px';
      }
    };
  }

  return function (media) {
    return {
      matches: styleMedia.matchMedium(media || 'all'),
      media: media || 'all'
    };
  };
}());

// Thank you: https://github.com/sindresorhus/query-string
function parseStyleToObject(str) {
  var styleObject = {};

  if (typeof str !== 'string') {
    return styleObject;
  }

  str = str.trim().slice(1, -1); // browsers re-quote string style values

  if (!str) {
    return styleObject;
  }

  styleObject = str.split('&').reduce(function (ret, param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = parts[0];
    var val = parts[1];
    key = decodeURIComponent(key);

    // missing `=` should be `null`:
    // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
    val = val === undefined ? null : decodeURIComponent(val);

    if (!ret.hasOwnProperty(key)) {
      ret[key] = val;
    } else if (Array.isArray(ret[key])) {
      ret[key].push(val);
    } else {
      ret[key] = [ret[key], val];
    }
    return ret;
  }, {});

  return styleObject;
}

exports.MediaQuery = MediaQuery;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var MutationObserver = function () {
  var prefixes = ['WebKit', 'Moz', 'O', 'Ms', ''];
  for (var i = 0; i < prefixes.length; i++) {
    if (prefixes[i] + 'MutationObserver' in window) {
      return window[prefixes[i] + 'MutationObserver'];
    }
  }
  return false;
}();

var triggers = function triggers(el, type) {
  el.data(type).split(' ').forEach(function (id) {
    $('#' + id)[type === 'close' ? 'trigger' : 'triggerHandler'](type + '.' + Triggers._ns + '.trigger', [el]);
  });
};

var Triggers = {
  Listeners: {
    Basic: {},
    Global: {}
  },
  Initializers: {}
};

Triggers.Listeners.Basic = {
  openListener: function openListener() {
    triggers($(this), 'open');
  },
  closeListener: function closeListener() {
    var id = $(this).data('close');
    if (id) {
      triggers($(this), 'close');
    } else {
      $(this).trigger('close.' + Triggers._ns + '.trigger');
    }
  },
  toggleListener: function toggleListener() {
    var id = $(this).data('toggle');
    if (id) {
      triggers($(this), 'toggle');
    } else {
      $(this).trigger('toggle.' + Triggers._ns + '.trigger');
    }
  },
  closeableListener: function closeableListener(e) {
    e.stopPropagation();
    var animation = $(this).data('closable');

    if (animation !== '') {
      Motion.animateOut($(this), animation, function () {
        $(this).trigger('closed.' + Triggers._ns);
      });
    } else {
      $(this).fadeOut().trigger('closed.' + Triggers._ns);
    }
  },
  toggleFocusListener: function toggleFocusListener() {
    var id = $(this).data('toggle-focus');
    $('#' + id).triggerHandler('toggle.' + Triggers._ns + '.trigger', [$(this)]);
  }
};

// Elements with [data-open] will reveal a plugin that supports it when clicked.
Triggers.Initializers.addOpenListener = function ($elem) {
  $elem.off('click.' + Triggers._ns + '.trigger', Triggers.Listeners.Basic.openListener);
  $elem.on('click.' + Triggers._ns + '.trigger', '[data-open]', Triggers.Listeners.Basic.openListener);
};

// Elements with [data-close] will close a plugin that supports it when clicked.
// If used without a value on [data-close], the event will bubble, allowing it to close a parent component.
Triggers.Initializers.addCloseListener = function ($elem) {
  $elem.off('click.' + Triggers._ns + '.trigger', Triggers.Listeners.Basic.closeListener);
  $elem.on('click.' + Triggers._ns + '.trigger', '[data-close]', Triggers.Listeners.Basic.closeListener);
};

// Elements with [data-toggle] will toggle a plugin that supports it when clicked.
Triggers.Initializers.addToggleListener = function ($elem) {
  $elem.off('click.' + Triggers._ns + '.trigger', Triggers.Listeners.Basic.toggleListener);
  $elem.on('click.' + Triggers._ns + '.trigger', '[data-toggle]', Triggers.Listeners.Basic.toggleListener);
};

// Elements with [data-closable] will respond to close.'+Triggers._ns+'.trigger events.
Triggers.Initializers.addCloseableListener = function ($elem) {
  $elem.off('close.' + Triggers._ns + '.trigger', Triggers.Listeners.Basic.closeableListener);
  $elem.on('close.' + Triggers._ns + '.trigger', '[data-closeable], [data-closable]', Triggers.Listeners.Basic.closeableListener);
};

// Elements with [data-toggle-focus] will respond to coming in and out of focus
Triggers.Initializers.addToggleFocusListener = function ($elem) {
  $elem.off('focus.' + Triggers._ns + '.trigger blur.' + Triggers._ns + '.trigger', Triggers.Listeners.Basic.toggleFocusListener);
  $elem.on('focus.' + Triggers._ns + '.trigger blur.' + Triggers._ns + '.trigger', '[data-toggle-focus]', Triggers.Listeners.Basic.toggleFocusListener);
};

// More Global/complex listeners and triggers
Triggers.Listeners.Global = {
  resizeListener: function resizeListener($nodes) {
    if (!MutationObserver) {
      //fallback for IE 9
      $nodes.each(function () {
        $(this).triggerHandler('resizeme.' + Triggers._ns + '.trigger');
      });
    }
    //trigger all listening elements and signal a resize event
    $nodes.attr('data-events', "resize");
  },
  scrollListener: function scrollListener($nodes) {
    if (!MutationObserver) {
      //fallback for IE 9
      $nodes.each(function () {
        $(this).triggerHandler('scrollme.' + Triggers._ns + '.trigger');
      });
    }
    //trigger all listening elements and signal a scroll event
    $nodes.attr('data-events', "scroll");
  },
  closeMeListener: function closeMeListener(e, pluginId) {
    var plugin = e.namespace.split('.')[0];
    var plugins = $('[data-' + plugin + ']').not('[data-yeti-box="' + pluginId + '"]');

    plugins.each(function () {
      var _this = $(this);
      _this.triggerHandler('close.' + Triggers._ns + '.trigger', [_this]);
    });
  }

  // Global, parses whole document.
};Triggers.Initializers.addClosemeListener = function (pluginName) {
  var yetiBoxes = $('[data-yeti-box]'),
      plugNames = ['dropdown', 'tooltip', 'reveal'];

  if (pluginName) {
    if (typeof pluginName === 'string') {
      plugNames.push(pluginName);
    } else if ((typeof pluginName === 'undefined' ? 'undefined' : _typeof(pluginName)) === 'object' && typeof pluginName[0] === 'string') {
      plugNames.concat(pluginName);
    } else {
      void 0;
    }
  }
  if (yetiBoxes.length) {
    var listeners = plugNames.map(function (name) {
      return 'closeme.' + Triggers._ns + '.' + name;
    }).join(' ');

    $(window).off(listeners).on(listeners, Triggers.Listeners.Global.closeMeListener);
  }
};

function debounceGlobalListener(debounce, trigger, listener) {
  var timer = void 0,
      args = Array.prototype.slice.call(arguments, 3);
  $(window).off(trigger).on(trigger, function (e) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      listener.apply(null, args);
    }, debounce || 10); //default time to emit scroll event
  });
}

Triggers.Initializers.addResizeListener = function (debounce) {
  var $nodes = $('[data-resize]');
  if ($nodes.length) {
    debounceGlobalListener(debounce, 'resize.' + Triggers._ns + '.trigger', Triggers.Listeners.Global.resizeListener, $nodes);
  }
};

Triggers.Initializers.addScrollListener = function (debounce) {
  var $nodes = $('[data-scroll]');
  if ($nodes.length) {
    debounceGlobalListener(debounce, 'scroll.' + Triggers._ns + '.trigger', Triggers.Listeners.Global.scrollListener, $nodes);
  }
};

Triggers.Initializers.addMutationEventsListener = function ($elem) {
  if (!MutationObserver) {
    return false;
  }
  var $nodes = $elem.find('[data-resize], [data-scroll], [data-mutate]');
  //element callback
  var listeningElementsMutation = function listeningElementsMutation(mutationRecordsList) {
    var $target = $(mutationRecordsList[0].target);

    //trigger the event handler for the element depending on type
    switch (mutationRecordsList[0].type) {
      case "attributes":
        if ($target.attr("data-events") === "scroll" && mutationRecordsList[0].attributeName === "data-events") {
          $target.triggerHandler('scrollme.' + Triggers._ns + '.trigger', [$target, window.pageYOffset]);
        }
        if ($target.attr("data-events") === "resize" && mutationRecordsList[0].attributeName === "data-events") {
          $target.triggerHandler('resizeme.' + Triggers._ns + '.trigger', [$target]);
        }
        if (mutationRecordsList[0].attributeName === "style") {
          $target.closest("[data-mutate]").attr("data-events", "mutate");
          $target.closest("[data-mutate]").triggerHandler('mutateme.' + Triggers._ns + '.trigger', [$target.closest("[data-mutate]")]);
        }
        break;

      case "childList":
        ////console.//log('mutation closest:', $target.closest("[data-mutate]"));
        // init newly inserted components
        $target.closest("[data-mutate]").attr("data-events", "mutate");
        $target.closest("[data-mutate]").triggerHandler('mutateme.' + Triggers._ns + '.trigger', [$target.closest("[data-mutate]")]);
        if ($target.data(Triggers._ns + 'Plugin')) {
          var plgIn = $target.data(Triggers._ns + 'Plugin');
          if (plgIn.reflow) {
            $target.thalia('reflow');
            //plgIn.reflow(); 
          }
        } else {
          $target.thalia();
        }
        $($target.closest("[data-mutate]")).trigger('mutateme');
        //$($target.closest("[data-mutate]")).trigger('mutate');
        break;

      default:
        return false;
      //nothing
    }
  };

  if ($nodes.length) {
    //for each element that needs to listen for resizing, scrolling, or mutation add a single observer
    for (var i = 0; i <= $nodes.length - 1; i++) {
      var elementObserver = new MutationObserver(listeningElementsMutation);
      elementObserver.observe($nodes[i], { attributes: true, childList: true, characterData: false, subtree: true, attributeFilter: ["data-events", "style"] });
    }
  }
};

Triggers.Initializers.addSimpleListeners = function () {
  var $document = $(document);

  Triggers.Initializers.addOpenListener($document);
  Triggers.Initializers.addCloseListener($document);
  Triggers.Initializers.addToggleListener($document);
  Triggers.Initializers.addCloseableListener($document);
  Triggers.Initializers.addToggleFocusListener($document);
};

Triggers.Initializers.addGlobalListeners = function () {
  var $document = $(document);
  Triggers.Initializers.addMutationEventsListener($document);
  Triggers.Initializers.addResizeListener();
  Triggers.Initializers.addScrollListener();
  Triggers.Initializers.addClosemeListener();
};

Triggers.init = function ($, Siteapp) {
  if (typeof $.triggersInitialized === 'undefined') {
    var $document = $(document);

    if (document.readyState === "complete") {
      Triggers.Initializers.addSimpleListeners();
      Triggers.Initializers.addGlobalListeners();
    } else {
      $(document).ready(function () {
        //$(window).on('load', () => {
        Triggers.Initializers.addSimpleListeners();
        Triggers.Initializers.addGlobalListeners();
      });
    }

    $.triggersInitialized = true;
  }

  if (Siteapp) {
    Siteapp.Triggers = Triggers;
    // Legacy included to be backwards compatible for now.
    Siteapp.IHearYou = Triggers.Initializers.addGlobalListeners;
  }
};

exports.Triggers = Triggers;

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * [Siteapp] - multi-purpose application & CMS theme
 * 
 * Siteapp debugger
 *     
 * @package     [Siteapp]
 * @subpackage  [Siteapp] core
 * @author      Björn Bartels <coding@bjoernbartels.earth>
 * @link        https://gitlab.bjoernbartels.earth/groups/themes
 * @license     http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0
 * @copyright   copyright (c) 2016 Björn Bartels <coding@bjoernbartels.earth>
 * 
 * @namespace   Siteapp
 * @module      Siteapp.Debugger
 */
/** global: Siteapp */

var Debugger = {
	/* manage debug data */
	debugentries: [],

	types: ['log', 'debug', 'info', 'warn', 'error'],

	add: function add(oEntry) {
		var entry = {
			type: oEntry.type || 'info',
			message: oEntry.message || '',
			time: oEntry.time || new Date()
		};
		this.debugentries.push(entry);
		return this;
	},

	clear: function clear() {
		this.debugentries = [];
		return this;
	},

	toEntry: function toEntry() {
		var entry = arguments;
		if (entry.length == 1) {
			entry[1] = entry[0];
			entry[0] = 'info';
		}
		return {
			type: entry[0] || 'info',
			message: entry[1] || '',
			time: new Date()
		};
	},

	debug: function debug() {
		if ((console || typeof console.debug == 'function') && $LCARS.getInstance().config.debug) {
			void 0;
		}
		return this;
	},

	log: function log(msg) {
		var entry = this.toEntry('log', msg);this.add(entry).console(entry);return this;
	},

	info: function info(msg) {
		var entry = this.toEntry('info', msg);this.add(entry).console(entry);return this;
	},

	warn: function warn(msg) {
		var entry = this.toEntry('warn', msg);this.add(entry).console(entry);return this;
	},

	error: function error(msg) {
		var entry = this.toEntry('error', msg);this.add(entry).console(entry);return this;
	},

	console: function (_console) {
		function console(_x) {
			return _console.apply(this, arguments);
		}

		console.toString = function () {
			return _console.toString();
		};

		return console;
	}(function (data) {
		if (!console || !data || !data.type || !data.message || !data.time || !$LCARS.getInstance().config.debug) {
			return this;
		}
		var txt = [String(data.type).toUpperCase(), ': ', String(data.message), ' - ', String(data.time), ''].join('');
		if (typeof console[data.type] == 'function') {
			void 0;
		} else {
			//console.//log(txt);
		}
		return this;
	}),

	get: function get() {
		if (arguments.length === 0) {
			return this.debugentries;
		} else if (arguments.length == 1) {
			var entries = [];
			for (var iEntry in this.debugentries) {
				if (this.debugentries[iEntry].type == arguments[0]) entries.push(this.debugentries[iEntry]);
			}return entries;
		}
		return false;
	},

	getInstance: function getInstance() {
		return this;
	},

	_app: function _app(context) {
		if (context) {
			undefined.__app = context;
		} else {
			return undefined.__app;
		}
	}

};

exports.Debugger = Debugger;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * [Siteapp] - multi-purpose frontend application
 * 
 * Siteapp application logger
 *     
 * @package     [Siteapp]
 * @subpackage  [Siteapp] core
 * @author      Björn Bartels <coding@bjoernbartels.earth>
 * @link        https://gitlab.bjoernbartels.earth/groups/themes
 * @license     http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0
 * @copyright   copyright (c) 2016 Björn Bartels <coding@bjoernbartels.earth>
 * 
 * @namespace   Siteapp
 * @module      Siteapp.Log
 */

var Log = {
	logentries: [],
	loglevel: 0,
	logtypes: ['debug', 'info', 'warn', 'exception'],
	_currentIndex: 0,

	log: function log(message, type, context) {
		this.logentries.push(arguments);return this;
	},
	get: function get() {
		return arguments.length > 0 ? this.logentries[parseInt(arguments[0])] : this.logentries;
	},
	clear: function clear() {
		this.logentries = [];this._currentIndex = 0;return this;
	},

	setLevel: function setLevel() {
		if (arguments.length > 0) {
			this.loglevel = parseInt(arguments[0]);
		} else {
			this.loglevel = 0;
		}return this;
	},

	_app: function _app(context) {
		if (context) {
			undefined.__app = context;
		} else {
			return undefined.__app;
		}
	}
};

exports.Log = Log;

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Siteapp = undefined;

var _siteapp = __webpack_require__(3);

var _siteapp2 = _interopRequireDefault(_siteapp);

var _siteappUtil = __webpack_require__(5);

var _siteappUtil2 = __webpack_require__(6);

var _siteappUtil3 = __webpack_require__(7);

var _siteapp3 = __webpack_require__(0);

var _siteapp4 = __webpack_require__(10);

var _siteapp5 = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* <!-- essential core */
_siteapp2.default.prototype.Keyboard = _siteappUtil.Keyboard;

//Touch and Triggers previously were almost purely sede effect driven,
//so no // need to add it to Siteapp, just init them.

_siteapp2.default.prototype.MediaQuery = _siteappUtil2.MediaQuery;
_siteapp2.default.prototype.Triggers = _siteappUtil3.Triggers;

_siteapp2.default.Keyboard = _siteapp2.default.prototype.Keyboard;
_siteapp2.default.MediaQuery = _siteapp2.default.prototype.MediaQuery;
_siteapp2.default.Triggers = _siteapp2.default.prototype.Triggers;

//Extra Core Components: Sorage/Module-Mamagment, Log, Debug


_siteapp2.default.prototype.Exception = _siteapp3.Exception;
_siteapp2.default.prototype.Debugger = _siteapp4.Debugger;
_siteapp2.default.prototype.Log = _siteapp5.Log;

_siteapp2.default.Exception = _siteapp2.default.prototype.Exception;
_siteapp2.default.Debugger = _siteapp2.default.prototype.Debugger;
_siteapp2.default.Log = _siteapp2.default.prototype.Log;

/* essential core --> */

/* Foundation compatiblitiy */
_siteapp2.default.prototype.rtl = _siteapp2.default.prototype.utilities.rtl;
_siteapp2.default.prototype.GetYoDigits = _siteapp2.default.prototype.utilities.genUUID;
_siteapp2.default.prototype.transitionend = _siteapp2.default.prototype.utilities.transitionend;
_siteapp2.default.rtl = _siteapp2.default.prototype.utilities.rtl;
_siteapp2.default.GetYoDigits = _siteapp2.default.prototype.utilities.genUUID;
_siteapp2.default.transitionend = _siteapp2.default.prototype.utilities.transitionend;

// finally, assign [Siteapp] class to global/window namespace
window.Siteapp = _siteapp2.default;

exports.Siteapp = _siteapp2.default;

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ })
/******/ ]);