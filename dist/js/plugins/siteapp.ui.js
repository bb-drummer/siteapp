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
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = {Siteapp: window.Siteapp};

/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _siteapp = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * [Siteapp] - multi-purpose frontend application
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Siteapp Module Abstract
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @package     [Siteapp]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @subpackage  [Siteapp] module
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author      Björn Bartels <coding@bjoernbartels.earth>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link        https://gitlab.bjoernbartels.earth/groups/themes
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license     http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright   copyright (c) 2016 Björn Bartels <coding@bjoernbartels.earth>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @namespace   Siteapp
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @module      Siteapp.Module
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @abstract
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
/** global: Siteapp */
/** global: Siteapp_Module_DEFAULTS */
/** global: ModuleManager */

var ModuleException = function (_Exception) {
  _inherits(ModuleException, _Exception);

  function ModuleException() {
    _classCallCheck(this, ModuleException);

    return _possibleConstructorReturn(this, (ModuleException.__proto__ || Object.getPrototypeOf(ModuleException)).apply(this, arguments));
  }

  _createClass(ModuleException, [{
    key: 'name',
    get: function get() {
      return "SiteappModuleException";
    }
  }]);

  return ModuleException;
}(_siteapp.Exception);

;

var Siteapp_Module_DEFAULTS = {};

/**
 * Module module abstract.
 * @module Siteapp.Module
 */
var Module = function () {
  _createClass(Module, [{
    key: '_setup',


    /**
     * Sets-up the module basics.
     * ! (to override by extending class)
     * 
     * - set 'this.$element' here, if needed
     * 
     * @function
     */
    value: function _setup(element, options) {}

    /**
     * Initializes the module.
     * ! (to override by extending class)
     * 
     * - call '[Siteapp].{ModuleManager}.initialze(this)' here, if needed
     * 
     * @function
     */

  }, {
    key: '_init',
    value: function _init() {}
    //console.//log ('module init:', this.manager.functionName(this));


    /**
     * Sets-up events and event handling the module. 
     * ! (to override by extending class)
     * 
     * @function
     */

  }, {
    key: '_events',
    value: function _events() {}

    /**
     * Destroys the module.
     * ! (to override by extending class)
     * 
     * @function
     */

  }, {
    key: '_destroy',
    value: function _destroy() {}
    //console.//log ('module destroy:', this.manager.functionName(this));


    /**
     * Reinitializes the module.
     * ! (to override by extending class)
     * 
     * @function
     */

  }, {
    key: 'reflow',
    value: function reflow() {}
    //console.//log ('module reflow:', this.manager.functionName(this));


    // ... and add your own propertiesfrom here...

    //
    // ...
    //


    // HERE BE DRAGONS !!!
    // only modify/override the following properties and methods if you know what you are doing


    /**
     * Create a new instance of a module.
     * 
     * @class
     * @name Module
     * @param {jQuery} element - jQuery object to apply the module to.
     * @param {Object} options - Overrides to the default module settings.
     */

  }]);

  function Module(element, options, app) {
    _classCallCheck(this, Module);

    this._setup(element, options);
    if (element && (!this.$element || !this.$element.jquery)) {
      // make sure, we have a jQuery object here
      this.$element = $(element);
    }

    this.options = $.extend({}, Siteapp_Module_DEFAULTS, this.$element ? this.$element.data() : {}, options);

    if (app instanceof Siteapp) {
      this.application = app;
    }

    var moduleName = Siteapp.sys.hyphenate(Siteapp.sys.functionName(this));
    if (!this.uuid) {
      this.uuid = moduleName + '-' + Siteapp.sys.genUUID(6);
    }

    var attrName = moduleName;
    if (this.manager.options.namespacedModuleTriggers) {
      attrName = this.application.appName + '-' + moduleName;
    }

    if (!this.$element.attr('data-' + attrName)) {
      this.$element.attr('data-' + attrName, this.uuid);
    }

    if (!this.$element.data(this.application.appName + 'Plugin')) {
      this.$element.data(this.application.appName + 'Plugin', this);
    }
    /**
     * Fires when the module has initialized.
     * @event Module#init
     */
    this.$element.trigger('init.' + moduleName);
  }

  /**
   * Destroys the module.
   * 
   * @function
   */


  _createClass(Module, [{
    key: 'destroy',
    value: function destroy() {
      this._destroy();
      var moduleName = Siteapp.sys.functionName(this);
      var attrName = moduleName;
      if (this.manager.options.namespacedModuleTriggers) {
        attrName = this.application.appName + '-' + moduleName;
      }

      this.$element.removeAttr('data-' + attrName).removeData(this.application.appName + 'Plugin')
      /**
       * Fires when the module has been destroyed.
       * @event Module#destroyed
       */
      .trigger('destroyed.' + attrName);
      for (var prop in this) {
        this[prop] = null; //clean up script to prep for garbage collection.
      }
    }

    /**
     * Hide the main module element.
     * 
     * @function
     */

  }, {
    key: 'hide',
    value: function hide() {
      this.$element.hide();
    }

    /**
     * Show the main module element.
     * 
     * @function
     */

  }, {
    key: 'show',
    value: function show() {
      this.$element.show();
    }

    /**
     * generate trigger markup attribute
     * 
     * @function
     * @private
     */

  }, {
    key: 'toString',


    /**
     * Return initial markup
     * 
     * @function
     */
    value: function toString() {
      return this.markup;
    }

    /**
     * return initial markup elements
     * 
     * @function
     */

  }, {
    key: 'toElement',
    value: function toElement() {
      if (this.$element) {
        return this.$element;
      }
      return $(this.toString());
    }

    /**
     * Retrieve attached module manager.
     */

  }, {
    key: '_triggerAttribute',
    get: function get() {

      var attr = ['data-', this.manager.namespacedModuleTriggers ? this.application.appName + '-' : '', Siteapp.sys.hyphenate(Siteapp.sys.functionName(this)).toLowerCase(), ''];

      return attr.join('');
    }

    /**
     * generate trigger markup data-... options
     * 
     * @function
     * @private
     */

  }, {
    key: '_triggerDataOptions',
    get: function get() {

      var dataAttrs = [];
      $.each(this.options, function (key, val) {
        if (val === null || val instanceof Object && !(val instanceof Array)) {
          //if ( (val === null) || ( (typeof val == 'object') && !(typeof val.join == 'undefined') ) ) {
          dataAttrs.push('');
        } else {
          dataAttrs.push(' data-' + Siteapp.sys.hyphenate(key) + '=' + JSON.stringify(val) + '');
        }
      });

      return dataAttrs.join('');
    }

    /**
     * generate trigger markup tag
     * 
     * @function
     * @private
     */

  }, {
    key: '_triggerTag',
    get: function get() {
      if (!this._tagName) {
        this._tagName = 'div';
      }
      var html = ['<' + this._tagName + ' ', this._triggerAttribute, this._triggerDataOptions, '>', '<!-- modulecontent -->', '</' + this._tagName + '>'];

      return html.join('');
    }

    /**
     * set trigger markup tagname
     * 
     * @function
     * @private
     */
    ,
    set: function set(tag) {
      if (typeof tag == 'string' && tag != '') {
        this._tagName = tag.toLowerCase();
      }
    }

    /**
     * Retrieves module markup, generates 
     * 
     * @function
     */

  }, {
    key: 'markup',
    get: function get() {
      var html = this._triggerTag;
      if (this.$element) {
        html = html.replace('<!-- modulecontent -->', this.$element.html() || '');
      }
      return html;
    }
  }, {
    key: 'manager',
    get: function get() {
      return this._manager;
    }

    /**
     * Attach application object.
     */
    ,
    set: function set(_manager) {
      if (_manager instanceof ModuleManager) {
        this._manager = _manager;
      } else {
        throw new ModuleException('Invalid module manager object to attach, must be an instance of Siteapp.ModuleManager');
      }
    }

    /**
     * Retrieve attached application.
     */

  }, {
    key: 'application',
    get: function get() {
      return this._app;
    }

    /**
     * Attach application object.
     */
    ,
    set: function set(app) {
      if (app instanceof Siteapp) {
        this._app = app;
      } else {
        throw new ModuleException('Invalid application object to attach, must be an instance of Siteapp');
      }
    }
  }]);

  return Module;
}();

//
// now, after extending, the module gets registered:
// [Siteapp].[ModuleManager].register({Moduleclass}, 'Moduletriggername');
//

exports.default = Module;

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
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



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _siteapp = __webpack_require__(1);

var _siteapp2 = __webpack_require__(2);

var _siteapp3 = _interopRequireDefault(_siteapp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Siteapp_ModuleManager_VERSION = '0.0.1';

var Siteapp_ModuleManager_DEFAULTS = {

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

var ModuleManagerException = function (_Exception) {
    _inherits(ModuleManagerException, _Exception);

    function ModuleManagerException() {
        _classCallCheck(this, ModuleManagerException);

        return _possibleConstructorReturn(this, (ModuleManagerException.__proto__ || Object.getPrototypeOf(ModuleManagerException)).apply(this, arguments));
    }

    _createClass(ModuleManagerException, [{
        key: 'name',
        get: function get() {
            return "SiteappModuleManagerException";
        }
    }]);

    return ModuleManagerException;
}(_siteapp.Exception);

;

var ModuleManager = function () {

    /**
     * Create a new instance of the module manager.
     * @class
     * @name ModuleManager
     * @param {Object} options - Overrides to the default module settings.
     */
    function ModuleManager(options) {
        _classCallCheck(this, ModuleManager);

        this._uuid = this.functionName(this) + '-' + this.genUUID(6);
        this.options = $.extend({}, Siteapp_ModuleManager_DEFAULTS, options);

        this._init();
    }

    /**
     * Setup objects
     */


    _createClass(ModuleManager, [{
        key: '_init',
        value: function _init() {
            this._version = Siteapp_ModuleManager_VERSION;

            this._modules = {};
            this._uuids = [];
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

    }, {
        key: 'initialize',
        value: function initialize(_module, name) {
            //console.//log('initialize module...', _module);

            if (_module instanceof _siteapp3.default) {
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

    }, {
        key: 'register',
        value: function register(_module, name) {
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

    }, {
        key: 'destroy',
        value: function destroy(_module) {
            //console.//log('destroy module...', _module);
            var moduleName = _module;
            if (_module instanceof _siteapp3.default) {
                //console.//log('...is instance of Module...');
                moduleName = this.hyphenate(this.functionName(_module.$element.data(this.application.appName + 'Plugin').constructor));
                if (typeof this._modules[this.application.appName + '-' + moduleName] != 'undefined') {
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

    }, {
        key: 'registerModule',
        value: function registerModule(_module, name) {
            // Object key to use when adding to registry
            // Examples: Siteapp.Object1, Siteapp.Object2
            var className = typeof name != 'undefined' ? name : this.functionName(_module);
            // Object key to use when storing the module, also used to create the
            // identifying data attribute for the module
            // Examples: data-objecttriggername1, data-objecttriggername2
            var attrName = this.hyphenate(className);

            _module._app = _module.prototype._app = this.application;
            _module._manager = _module.prototype._manager = this;

            var moduleName = attrName;
            if (this.options.namespacedModuleTriggers) {
                moduleName = this.application.appName + '-' + moduleName;
            }
            // Add to the modules list (for reflowing)
            var mngrModule = this._modules[moduleName];
            if (!this.options.overrideRegistered && typeof mngrModule != 'undefined') {
                void 0;
                return;
            }
            this._modules[moduleName] = this[className] = _module;

            // Add to the application object for Foundation compatiblity
            if (this.options.mapModulesToApplication) {
                var appModule = this.application._plugins[moduleName];
                if (!this.options.overrideRegistered && typeof appModule != 'undefined') {
                    void 0;
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

    }, {
        key: 'initializeModule',
        value: function initializeModule(_module, name) {
            var moduleName = typeof name != 'undefined' ? this.hyphenate(name) : this.hyphenate(this.functionName(_module.constructor));
            var attrName = moduleName;
            if (this.options.namespacedModuleTriggers) {
                attrName = this.application.appName + '-' + attrName;
            }
            if (!_module.uuid) {
                _module.uuid = moduleName + '-' + this.genUUID(6);
            }

            if (!_module.$element.attr('data-' + attrName)) {
                _module.$element.attr('data-' + attrName, _module.uuid);
            }
            if (!_module.$element.data(this.application.appName + 'Plugin')) {
                _module.$element.data(this.application.appName + 'Plugin', _module);
            }
            /**
             * Fires when the module has initialized.
             * @event Module#init
             */
            _module.$element.trigger('init.' + this.application.appName + '.' + moduleName);

            this._uuids.push(_module.uuid);
            // Add UUID to the application registry for Foundation compatiblity
            if (this.options.mapModulesToApplication) {
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

    }, {
        key: 'destroyModule',
        value: function destroyModule(_module) {
            var moduleName = this.hyphenate(this.functionName(_module.$element.data(this.application.appName + 'Plugin').constructor));
            var attrName = moduleName;
            if (this.options.namespacedModuleTriggers) {
                attrName = this.application.appName + '-' + attrName;
            }

            this._uuids.splice(this._uuids.indexOf(_module.uuid), 1);
            // remove from the application object
            if (this.options.mapModulesToApplication) {
                this.application._uuids.splice(this.application._uuids.indexOf(_module.uuid), 1);
            }

            _module.$element.removeAttr('data-' + attrName).removeData(this.application.appName + 'Plugin')
            /**
             * Fires when the module has been destroyed.
             * @event Module#destroyed
             */
            .trigger('destroyed.' + this.application.appName + '.' + moduleName);

            for (var prop in _module) {
                _module[prop] = null; //clean up script to prep for garbage collection.
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

    }, {
        key: 'reInit',
        value: function reInit(modules) {
            //console.//log('module manager re-init:', this.functionName(this));
            var isJQ = modules instanceof $;
            var $app = this,
                _namespace = $app.application.appName;

            try {
                if (isJQ && modules.length > 0) {
                    modules.each(function () {
                        $(this).data(_namespace + 'Plugin')._init();
                    });
                } else {
                    var type = typeof modules === 'undefined' ? 'undefined' : _typeof(modules),
                        $this = this,
                        fns = {
                        'object': function object(_modules) {
                            _modules.forEach(function (p) {
                                //console.//log('(re)init...:', _namespace, p, $('[data-'+ p +']'), ($('[data-'+ p +']'))[_namespace]);
                                $('[data-' + p + ']')[_namespace]('_init');
                            });
                        },
                        'string': function string() {
                            //console.//log('(re)init...:', _namespace, modules, $('[data-'+ modules +']'), ($('[data-'+ modules +']'))[_namespace]);
                            $('[data-' + modules + ']')[_namespace]('_init');
                        },
                        'undefined': function undefined() {
                            //console.//log('(re)init...:', _namespace, '*all*', $('[data-'+ modules +']'), ($('[data-'+ modules +']'))[_namespace]);
                            this['object'](Object.keys($this._modules));
                        }
                    };
                    fns[type](modules);
                }
            } catch (err) {
                void 0;
            } finally {}
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

    }, {
        key: 'reflow',
        value: function reflow(elem, modules) {
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
            $.each(modules, function (i, name) {
                // Get the current module
                var module = $moduleManager._modules[name];

                //console.//log('trying to reflow...: ', name);

                // Localize the search to all elements inside elem, as well as elem 
                // itself, unless elem === document
                var $elem = $(elem).find('[data-' + name + ']').addBack('[data-' + name + ']');

                //console.//log('elements...: ', $elem.length, '[data-'+name+']');

                // For each module found, initialize it
                $elem.each(function () {
                    var $el = $(this),
                        opts = {};
                    // Don't double-dip on modules, invoke 'reFlow' if available
                    if ($el.data($moduleManager.application.appName + 'Plugin')) {
                        //console.//log('reflowing...: ', name, $el);

                        var plgIn = $el.data($moduleManager.application.appName + 'Plugin');
                        if (plgIn.reflow) {
                            plgIn.reflow();
                        }
                        void 0;
                        return;
                    }

                    // ... else try to (re)init the module/plugin
                    if ($el.attr('data-options')) {
                        var thing = $el.attr('data-options').split(';').forEach(function (e, i) {
                            var opt = e.split(':').map(function (el) {
                                return el.trim();
                            });
                            if (opt[0]) {
                                opts[opt[0]] = $moduleManager.parseValue(opt[1]);
                            }
                        });
                    }
                    try {
                        //console.//log('new instance...: ', $moduleManager.functionName(module), $el);
                        $el.data($moduleManager.application.appName + 'Plugin', new module($el, opts));
                    } catch (er) {
                        //console.//log('ERROR:', er);
                        throw new ModuleManagerException(er.message);
                    } finally {}
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

    }, {
        key: 'functionName',
        value: function functionName(fn) {
            return this.application.utilities.functionName(fn);
        }

        /**
         * Returns a random base-36 uid with namespacing
         */

    }, {
        key: 'genUUID',
        value: function genUUID(length, namespace) {
            return this.application.utilities.genUUID(length, namespace);
        }

        /**
         * Normalize value
         */

    }, {
        key: 'parseValue',
        value: function parseValue(str) {
            return this.application.utilities.parseValue(str);
        }

        /**
         * Convert PascalCase to kebab-case
         */

    }, {
        key: 'hyphenate',
        value: function hyphenate(str) {
            return this.application.utilities.hyphenate(str);
        }

        /**
         * Retrieve attached application.
         */

    }, {
        key: 'application',
        get: function get() {
            return this._app;
        }

        /**
         * Attach application object.
         */
        ,
        set: function set(app) {
            if (app instanceof Siteapp) {
                this._app = app;
            } else {
                throw new ModuleManagerException('Invalid application object to attach');
            }
        }

        /**
         * Retrieve current version.
         */

    }, {
        key: 'version',
        get: function get() {
            return this._version;
        }
    }]);

    return ModuleManager;
}();

exports.default = ModuleManager;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _siteapp = __webpack_require__(2);

var _siteapp2 = _interopRequireDefault(_siteapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * [Siteapp] - multi-purpose frontend application
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Siteapp ui paneladapter-layer
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @package     [Siteapp]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @subpackage  [Siteapp] UI
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author      Björn Bartels <coding@bjoernbartels.earth>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link        https://gitlab.bjoernbartels.earth/groups/themes
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license     http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright   copyright (c) 2016 Björn Bartels <coding@bjoernbartels.earth>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @namespace   Siteapp
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @module      Siteapp.Ui.Paneladapter
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
/** global: Siteapp */
/** global: Module */
/** global: PaneladapterConfig_DEFAULTS */


var PaneladapterConfig_DEFAULTS = {

    screenlayer: null,

    targetMode: 'append',

    activeClass: 'active',

    panelSelector: '> *'

};

var Paneladapter = function (_Module) {
    _inherits(Paneladapter, _Module);

    /**
     * Create a new instance of the paneladapter layer.
     * @class
     * @name Paneladapter
     * @extends Screenlayer
     * @extends Module
     * @param {jQuery} element - jQuery object to apply the module to.
     * @param {Object} options - Overrides to the default module settings.
     */
    function Paneladapter(element, options) {
        _classCallCheck(this, Paneladapter);

        var _this2 = _possibleConstructorReturn(this, (Paneladapter.__proto__ || Object.getPrototypeOf(Paneladapter)).call(this, element, options));

        _this2.options = $.extend({}, _this2.options, PaneladapterConfig_DEFAULTS, options, _this2.$element.data());

        _this2.events = new Siteapp.sys.EventManager(_this2);

        //console.//log('constructing a panel adapter ...');

        return _this2;
    }

    /**
     * get active panel index
     * 
    * @function
     * @return {integer}
     */


    _createClass(Paneladapter, [{
        key: 'getActiveIndex',
        value: function getActiveIndex() {
            return this.getActivePanel().index();
        }
    }, {
        key: 'getActivePanel',


        /**
         * get active panel
         * 
        * @function
         * @return {jQuery}
         */
        value: function getActivePanel() {
            return this.$container.find('> .' + this.options.activeClass);
        }
    }, {
        key: 'setActive',


        /**
         * Sets panel active class.
         * 
         * @function
         * @param {jQuery|HTMLElement} panel
         * @returns {Boolean}
         * @fires   Paneladapter#activatepanel
         */
        value: function setActive(panel) {
            var $panel;
            if (panel) {
                $panel = $(panel);
                this.setInactive();
                $panel.addClass(this.options.activeClass);
                this.trigger('activatepanel', $panel);
                this.$element.trigger('activatepanel', $panel);
            }
            return this;
        }

        /**
         * Removes panel active class on all panels or just the given panel.
         * 
         * @function
         * @param   {jQuery|HTMLElement} panel
         * @returns {Boolean}
         * @fires   Paneladapter#deactivatepanel
         */

    }, {
        key: 'setInactive',
        value: function setInactive(panel) {
            var $panel;
            if (panel) {
                $panel = $(panel);
            } else {
                $panel = this.$container.find(this.options.itemSelector);
            }

            $panel.removeClass(this.options.activeClass);
            this.trigger('deactivatepanel', $panel);
            this.$element.trigger('deactivatepanel', $panel);

            return this;
        }

        /**
         * Detects if given panel is set 'active'.
         * 
         * @function
         * @param {jQuery|HTMLElement} panel
         * @returns {Boolean}
         */

    }, {
        key: 'isActive',
        value: function isActive(panel) {
            if (panel) {
                return $(panel).hasClass(this.options.activeClass);
            }
            return false;
        }

        /**
         * Adds a new panel to the container and re-init flow.
         * 
        * @function
        * @param {jQuery|HTMLElement} panel
        * @param {Boolean} append2active
        * @fires   Paneladapter#addpanel
         */

    }, {
        key: 'addPanel',
        value: function addPanel(panel, append2active) {

            if (!panel) {
                return;
            }

            var _this = this;

            if (append2active === false) {
                // add panel item to end of container
                this.$container.append(panel);

                var $panel = this.$container.children().last();
            } else {
                // append panel item to current active item
                this.getActivePanel().appendTo(panel);

                var $panel = this.getActivePanel().next();
            }

            this.trigger('addpanel', $panel);
            this.$element.trigger('addpanel', $panel);

            this.selectPanel($panel);
            this.reflow();
        }
    }, {
        key: 'removePanel',


        /**
         * Remove a panel from the container and re-init flow.
         * 
        * @function
        * @param {jQuery|HTMLElement} panel
        * @fires   Paneladapter#removepanel
         */
        value: function removePanel(panel) {
            if (!panel) {
                return;
            }

            var _this = this;
            var $panel = this.$container.find(panel);

            if (!$panel) {
                //console.//log('panel to remove not found:', panel);
                return;
            }

            this.trigger('removepanel');
            this.$element.trigger('removepanel', $panel);

            $panel.remove();
            this.reflow();
        }
    }, {
        key: 'selectPanel',


        /**
         * select a panel from/within the container
         * 
        * @function
        * @param {jQuery|HTMLElement} panel
        * @fires Paneladapter#selectpanel
         */
        value: function selectPanel(panel) {

            var $panel = this.$container.find(panel);

            if ($panel.length == 1) {
                this.setActive($panel);
                this.trigger('selectpanel', $panel);
                this.$element.trigger('selectpanel', $panel);
            }
        }
    }, {
        key: 'container',


        /**
         * Sets current container element.
         * 
        * @var
        * @param {jQuery|HTMLElement} element
         */
        set: function set(element) {
            this.$container = element.jquery ? element : $(element);
        }

        /**
         * Retrieves current container element.
         * 
         * @var {jQuery} $ontainer
         */
        ,
        get: function get() {
            if (!this.$container) {
                return this.$element;
            }
            return this.$container;
        }
    }]);

    return Paneladapter;
}(_siteapp2.default);

exports.default = Paneladapter;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _siteapp = __webpack_require__(2);

var _siteapp2 = _interopRequireDefault(_siteapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * [Siteapp] - multi-purpose frontend application
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Siteapp UI screen-layer object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @package     [Siteapp]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @subpackage  [Siteapp] UI
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author      Björn Bartels <coding@bjoernbartels.earth>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link        https://gitlab.bjoernbartels.earth/groups/themes
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license     http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright   copyright (c) 2016 Björn Bartels <coding@bjoernbartels.earth>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @namespace   Siteapp
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @module      Siteapp.Ui.Screenlayer
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Siteapp_Screenlayer_DEFAULTS = {

  /* UI modes: 'flow', 'window', false */
  type: 'default',

  /* UI modes: 'flow', 'window', false */
  adapter: 'default',

  /* UI modes: 'flow', 'window', false */
  configurable: true,

  /* UI modes: 'flow', 'window', false */
  removable: true,

  /* screen layer adapters */
  adapters: {
    'default': {}
  }

};

var Screenlayer = function (_Module) {
  _inherits(Screenlayer, _Module);

  _createClass(Screenlayer, [{
    key: 'setAdapter',
    value: function setAdapter(adaptername) {
      if (this.application.Ui.Paneladapters.isRegistered(adaptername)) {
        this.options.adapter = adaptername;
        this.$element.data('adapter', adaptername);
        this.$element.attr('data-adapter', adaptername);
      }
    }

    /**
     * Minimizes screen layer.
     */

  }, {
    key: 'minimize',
    value: function minimize() {
      this.$element.addClass('screenlayer-minimized');
      this.hide();
    }

    /**
     * Restores minimized screen layer.
     */

  }, {
    key: 'restore',
    value: function restore() {
      this.$element.removeClass('screenlayer-minimized');
      this.show();
    }

    /**
     * Sets screen layer active class and status flag.
     */

  }, {
    key: 'setActive',
    value: function setActive() {
      this._active = true;
      this.$element.addClass('screenlayer-active');
    }

    /**
     * Removes screen layer active class and status flag.
     */

  }, {
    key: 'setInactive',
    value: function setInactive() {
      this._active = false;
      this.$element.removeClass('screenlayer-active');
    }

    /**
     * Focuses the screen layer, z-index to front, set active.
     */

  }, {
    key: 'focus',
    value: function focus() {
      this.manager.focusLayer(this);
    }

    /**
     * Gets current 'active' status flag.
     */

  }, {
    key: 'panelAdapter',
    get: function get() {
      if (this.options.adapter != '') {
        return this.application.Ui.getAdapterByName(this.options.adapter);
      }
      return null;
    }
  }, {
    key: 'isActive',
    get: function get() {
      return this._active === true;
    }

    /**
     * Create a new instance of the screen layer.
     * @class
     * @name Screenlayer
     * @extends Module
     * @param {jQuery} element - jQuery object to apply the module to.
     * @param {Object} options - Overrides to the default module settings.
     */

  }]);

  function Screenlayer(element, option) {
    _classCallCheck(this, Screenlayer);

    var _this2 = _possibleConstructorReturn(this, (Screenlayer.__proto__ || Object.getPrototypeOf(Screenlayer)).call(this, element, option));

    if (Siteapp.sys.functionName(_this2) == 'Screenlayer') {
      //console.//log('initializing default screenlayer module...');
    }
    return _this2;
  }

  /**
   * Setup a new instance of a Screenlayer.
   *  
   * @class
   * @name  Screenlayer
   * @param {jQuery} element - jQuery object to make into a screenlayer.
   *        Object should be of the screenlayer panel, rather than its anchor.
   * @param {Object} options - Overrides to the default plugin settings.
   */


  _createClass(Screenlayer, [{
    key: '_setup',
    value: function _setup(element, options) {

      this.$element = element;
      this.options = $.extend({}, Siteapp_Screenlayer_DEFAULTS, /*this.$element.data(),*/this.options, options);

      var layerName = Siteapp.sys.functionName(this);
      this.className = 'earthTheme.Ui.' + layerName; // ie9 back compat

      this._init();
    }

    /**
        * Initializes the screen layer by setting/checking options and attributes, 
        * adding helper variables...
        * Connects to UI manager
        * 
        * @function
        * @private
        */

  }, {
    key: '_init',
    value: function _init() {

      this.events = new Siteapp.sys.EventManager(this);
      this._events();

      this._initPanelAdapter();

      // usually: earthTheme.Ui.initialize(this) ,but in this case lets call the alias
      // because, we are 'connecting' a '(screen)layer' to a '(UI)manager'
      var layerName = Siteapp.sys.functionName(this);
      this.manager.connectLayer(this, layerName);
    }

    /**
        * Initializes the plugin by setting/checking options and attributes, adding helper variables, and saving the anchor.
        * @function
        * @private
        */

  }, {
    key: '_initPanelAdapter',
    value: function _initPanelAdapter() {}

    /**
     * Adds event listeners to the element utilizing the triggers utility library.
     * @function
     * @private
     */

  }, {
    key: '_events',
    value: function _events() {
      this._addKeyHandler();
      this._addClickHandler();
    }
  }, {
    key: '_addClickHandler',
    value: function _addClickHandler() {}

    /**
     * Adds keyboard event handlers for items within the tabs.
     * @private
     */

  }, {
    key: '_addKeyHandler',
    value: function _addKeyHandler() {}
    // Keyboard.addKeyHandlers...


    /**
     * Removes keyboard event handlers.
     * @private
     */

  }, {
    key: '_removeKeyHandler',
    value: function _removeKeyHandler() {}
    // Keyboard.unregister...


    /**
     * Destroys the screenlayer.
     * @function
     */

  }, {
    key: '_destroy',
    value: function _destroy() {
      this._removeKeyHandler();

      this.$element.find('*').off('.' + _this.application.NS);
      this.$element.off('.' + _this.application.NS);

      this.$element.remove();
    }
  }]);

  return Screenlayer;
}(_siteapp2.default);

exports.default = Screenlayer;

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _siteapp = __webpack_require__(0);

var _siteapp2 = __webpack_require__(26);

var _siteapp3 = _interopRequireDefault(_siteapp2);

var _siteapp4 = __webpack_require__(24);

var _siteapp5 = _interopRequireDefault(_siteapp4);

var _siteapp6 = __webpack_require__(8);

var _siteapp7 = _interopRequireDefault(_siteapp6);

var _siteapp8 = __webpack_require__(25);

var _siteapp9 = _interopRequireDefault(_siteapp8);

var _siteapp10 = __webpack_require__(7);

var _siteapp11 = _interopRequireDefault(_siteapp10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_siteapp.Siteapp.prototype.UiManager = _siteapp3.default;
_siteapp.Siteapp.UiManager = _siteapp3.default;
_siteapp.Siteapp.prototype.UiManager.Action = _siteapp5.default;
_siteapp.Siteapp.UiManager.Action = _siteapp5.default;
_siteapp.Siteapp.prototype.UiManager.Screenlayer = _siteapp7.default;
_siteapp.Siteapp.UiManager.Screenlayer = _siteapp7.default;
_siteapp.Siteapp.prototype.UiManager.Screenpanel = _siteapp9.default;
_siteapp.Siteapp.UiManager.Screenpanel = _siteapp9.default;
_siteapp.Siteapp.prototype.UiManager.Paneladapter = _siteapp11.default;
_siteapp.Siteapp.UiManager.Paneladapter = _siteapp11.default;

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * [Siteapp] - multi-purpose frontend application
 * 
 * Siteapp (Data) Storage Manager
 * 
 * storage types:
 * - memory (default)
 * - cookie
 * - localStorage
 * - service
 *     
 * @package     [Siteapp]
 * @subpackage  [Siteapp] core
 * @author      Björn Bartels <coding@bjoernbartels.earth>
 * @link        https://gitlab.bjoernbartels.earth/groups/themes
 * @license     http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0
 * @copyright   copyright (c) 2016 Björn Bartels <coding@bjoernbartels.earth>
 * 
 * @namespace   Siteapp
 * @module      Siteapp.AdapterManager
 */
/** global: Siteapp */
/** global: Siteapp_AdapterManager_VERSION */
/** global: Siteapp_AdapterManager_DEFAULTS */


//import Siteapp          from '../siteapp.core';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _siteapp = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Siteapp_AdapterManager_VERSION = '0.0.1';

var Siteapp_AdapterManager_DEFAULTS = {};

var AdapterManagerException = function (_Exception) {
  _inherits(AdapterManagerException, _Exception);

  function AdapterManagerException() {
    _classCallCheck(this, AdapterManagerException);

    return _possibleConstructorReturn(this, (AdapterManagerException.__proto__ || Object.getPrototypeOf(AdapterManagerException)).apply(this, arguments));
  }

  _createClass(AdapterManagerException, [{
    key: 'name',
    get: function get() {
      return "SiteappAdapterManagerException";
    }
  }]);

  return AdapterManagerException;
}(_siteapp.Exception);

;

var AdapterManager = function () {

  /**
   * Create a new instance of the storage manager.
   * @class
   * @name AdapterManager
   * @param {Object} options - Overrides to the default plugin settings.
   */
  function AdapterManager(options) {
    _classCallCheck(this, AdapterManager);

    this.options = $.extend({}, Siteapp_AdapterManager_DEFAULTS, options);

    this._init();
  }

  /**
   * Setup objects
   */


  _createClass(AdapterManager, [{
    key: '_init',
    value: function _init() {
      this._version = Siteapp_AdapterManager_VERSION;

      this._adapters = {};
    }

    /**
     * Registera an adapter.
     * 
     * @function
     * @param {object} adapter
     * @param {string} name
     */

  }, {
    key: 'register',
    value: function register(adapter, name) {
      var namespace = Siteapp.sys.hyphenate(Siteapp.sys.functionName(adapter));
      if ("" == name) {
        name = Siteapp.sys.functionName(adapter);
      }
      if (this.isRegistered(name)) {
        void 0;
      } else {
        this._adapters[name] = adapter;
      }
      return this;
    }

    /**
     * Unregisters an adapter.
     * 
     * @function
     * @param {object} adapter
     * 
     */

  }, {
    key: 'get',
    value: function get(name) {

      if (!this.isRegistered(name)) {
        void 0;
      } else {
        return this.adapters[name];
      }
    }

    /**
     * Unregisters an adapter.
     * 
     * @function
     * @param {object} adapter
     * 
     */

  }, {
    key: 'unregister',
    value: function unregister(adapter) {
      if (typeof adapter != 'string') {
        adapter = Siteapp.sys.functionName(adapter);
      }
      if (this.isRegistered(name)) {
        this._adapters[name] = undefined;
      }
      return this;
    }

    /**
     * Checks is an adapter is registered by name.
     * 
     * @function
     * @param {string} name
     * @returns {boolean}
     */

  }, {
    key: 'isRegistered',
    value: function isRegistered(name) {

      return typeof this._adapters[name] != 'undefined';
    }

    /**
     * Retrieves an adapter is registered by name.
     * 
     * @function
     * @param {string} name
     * @returns {object}
     */

  }, {
    key: 'getAdapterByName',
    value: function getAdapterByName(name) {
      if (this.isRegistered(name)) {
        return this._adapters[name];
      }
      return null;
    }

    /**
     * Retrive registered adapters
     * 
     * @var [{object}] adapters
     */

  }, {
    key: 'adapters',
    get: function get() {
      return this._adapters;
    }

    /**
     * Retrieve attached application.
     */

  }, {
    key: 'application',
    get: function get() {
      return this._app;
    }

    /**
     * Attach application object.
     */
    ,
    set: function set(app) {
      if (app instanceof Siteapp) {
        this._app = app;
      } else {
        throw new AdapterManagerException('Invalid application object to attach');
      }
    }

    /**
     * Retrieve current version.
     */

  }, {
    key: 'version',
    get: function get() {
      return this._version;
    }
  }]);

  return AdapterManager;
}();

exports.default = AdapterManager;

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _siteapp = __webpack_require__(2);

var _siteapp2 = _interopRequireDefault(_siteapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * [Siteapp] - multi-purpose frontend application
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Siteapp ui nav-action items
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @package     [Siteapp]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @subpackage  [Siteapp] UI
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author      Björn Bartels <coding@bjoernbartels.earth>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link        https://gitlab.bjoernbartels.earth/groups/themes
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license     http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright   copyright (c) 2016 Björn Bartels <coding@bjoernbartels.earth>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @namespace   Siteapp
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @module      Siteapp.Ui.Action
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
/** global: Siteapp */
/** global: Module */
/** global: ActionConfig */

var ActionConfig = {

	target: 'layer',

	layer: '_blank',

	request: {

		headers: {
			'X-Requested-With': 'XMLHttpRequest'
		},
		// callbacks
		success: null,
		failure: null,
		complete: null
	},

	removable: false

};

var _noOp = function _noOp() {};

var Action = function (_Module) {
	_inherits(Action, _Module);

	/**
  * Create a new instance of the nav-action layer.
  * 
  * @class
  * @name NavAction
  * @extends Screenlayer
  * @extends Module
  * @param {jQuery} element - jQuery object to apply the module to.
  * @param {Object} options - Overrides to the default module settings.
  */
	function Action(element, options) {
		_classCallCheck(this, Action);

		var _this = _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, element, options));

		_this.options = $.extend({}, ActionConfig, _this.$element.data(), _this.options);
		Siteapp.sys.secureProperties(_this.options, ['removable']);

		//console.//log('constructing a navigational action item ...');

		_this._init();
		_this.manager.initialize(_this);

		return _this;
	}

	// ... "Windowlink" stuff ?!

	/**
  * Retrieves target screen-layer via UI manager
  * 
  * @var {Screenlayer} targetLayer
  */


	_createClass(Action, [{
		key: 'openInLayer',


		/**
   * Follows link and open in (screen)layer.
   * 
   * @function
   */
		value: function openInLayer() {
			var $action = this,
			    $target = $action.targetLayer;
			if ($target) {

				$.ajax({
					url: $action.$element.attr('href'),

					beforeSend: $action._ajaxBeforeSend.bind($action),

					success: function success(data) {
						if ($target.panelAdapter instanceof Siteapp.UiManager.Paneladapter) {

							// prepare data
							try {
								var _data = JSON.parse(data);
							} catch (exception) {
								var _data = data;
							}

							var body = null,
							    title = $action.$element.find('.label').length == 0 ? $action.$element.attr('title') ? $action.$element.attr('title') : $action.$element.attr('href') : $action.$element.find('.label').first().text(),
							    footer = null;

							// show string data with panel adapter
							if ((typeof _data === 'undefined' ? 'undefined' : _typeof(_data)) != 'object') {
								//console.//log('panel body:', $(_data), $(_data).find('body') );
								body = $(_data).find('body').length == 0 ? _data : $(_data).find('body').html();

								//$target.panelAdapter.addPanel($item);
								$target.panelAdapter.addPanel({
									title: title,
									body: body,
									footer: footer
								});

								// show panel object with panel adapter
							} else if (typeof _data.body != 'undefined') {
								$target.panelAdapter.addPanel(_data);

								// 'try' to show data object with panel adapter
							} else {
								$target.panelAdapter.addPanel({
									title: null,
									body: data,
									footer: null
								});
							}
						}

						// user callback
						if (typeof $action.options.request.success == 'function') {
							$action.options.request.success.apply($action, arguments);
						}
					},

					failure: function failure(data) {
						// user callback
						if (typeof $action.options.request.failure == 'function') {
							$action.options.request.failure.apply($action, arguments);
						}
					},

					complete: function complete(data) {
						// user callback
						if (typeof $action.options.request.complete == 'function') {
							$action.options.request.complete.apply($action, arguments);
						}
					}

				});
			}
		}

		/**
   * Sends data to module.
   * 
   * @function
   */

	}, {
		key: 'sendToModule',
		value: function sendToModule() {
			location.href = this.$element.attr('href');
		}

		/**
   * Follows a (default) link
   * 
   * @function
   */

	}, {
		key: 'link',
		value: function link() {
			location.href = this.$element.attr('href');
		}

		/**
   * Initializes action's setup.
   * 
   * @private
   */

	}, {
		key: '_init',
		value: function _init() {

			this.events = new Siteapp.sys.EventManager(this);
			this._events();
		}

		/**
   * Adds event listeners to the element utilizing the triggers utility library.
   * 
   * @private
   */

	}, {
		key: '_events',
		value: function _events() {
			this._addKeyHandler();
			this._addClickHandler();
		}

		/**
   * Adds click event handlers.
   * @private
   */

	}, {
		key: '_addClickHandler',
		value: function _addClickHandler() {
			var namespace = '.' + this.application.appName,
			    $action = this;
			this.$element.off('click tap');

			this.$element.on('click.' + namespace + ' tap.' + namespace, function (oEvent) {

				if ($action.options.target == 'layer') {
					$action.openInLayer();
				} else if ($action.options.target == 'module') {
					$action.sendToModule();
				} else {
					$action.link();
				}

				// stop further event propagation
				oEvent.preventDefault();
				oEvent.stopPropagation();
				oEvent.stopImmediatePropagation();
				return false;
			});
		}

		/**
   * Adds keyboard event handlers.
   * @private
   */

	}, {
		key: '_addKeyHandler',
		value: function _addKeyHandler() {}
		// Keyboard.addKeyHandlers...


		/**
   * Modifies request headers.
   * @private
   */

	}, {
		key: '_ajaxBeforeSend',
		value: function _ajaxBeforeSend(request) {
			var headers = this.options.request.headers;

			headers['X-Requested-With'] = this.application.appName;

			for (var key in headers) {
				if (headers[key] != '') {
					request.setRequestHeader(key, headers[key]);
				}
			}
		}
	}, {
		key: 'targetLayer',
		get: function get() {
			if (this.options.target == 'layer' && this.options.layer != '') {
				return this.application.Ui.getLayerByName(this.options.layer);
			}
			return null;
		}

		/**
   * Retrieve action's 'href' attribute.
   * 
   * @var {string} href
   */

	}, {
		key: 'href',
		get: function get() {
			return this.$element.attr('href');
		}
	}]);

	return Action;
}(_siteapp2.default);

exports.default = Action;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _siteapp = __webpack_require__(2);

var _siteapp2 = _interopRequireDefault(_siteapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * [Siteapp] - multi-purpose frontend application
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Siteapp UI screen-panel object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @package     [Siteapp]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @subpackage  [Siteapp] UI
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author      Björn Bartels <coding@bjoernbartels.earth>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link        https://gitlab.bjoernbartels.earth/groups/themes
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license     http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright   copyright (c) 2016 Björn Bartels <coding@bjoernbartels.earth>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @namespace   Siteapp
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @module      Siteapp.Ui.Screenpanel
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Siteapp_Screenpanel_DEFAULTS = {

  title: null,

  body: null,

  footer: null,

  activeClass: 'active',

  minimizedClass: 'minimized'

};

var Screenpanel = function (_Module) {
  _inherits(Screenpanel, _Module);

  _createClass(Screenpanel, [{
    key: 'template',
    value: function template(vars) {
      var namespace = Siteapp.sys.functionName(this);
      if (this.manager.options.namespacedModuleTriggers) {
        namespace = this.application.appName + '-' + namespace;
      }

      // build flow panel item
      var panelHTML = ['<div data-', namespace, '>', '<div data-', namespace, '-header>', vars.title == '' ? '' : ['<h2 class="title">', vars.title, '</h2>'].join(''), '<div class="wm-button-group">', '<button class="wm-previous" data-previous>', '<i href="#" class="icon fa-caret-left"><span class="label">previous</span></i>', '</button>', '<button class="wm-next" data-next>', '<i href="#" class="icon fa-caret-right"><span class="label">next</span></i>', '</button>', '<button class="wm-minimize" data-minimize disabled>', '<i href="#" class="icon fa-window-minimize"><span class="label">minimize</span></i>', '</button>', '<button class="wm-maximize" data-maximize disabled>', '<i href="#" class="icon fa-window-maximize"><span class="label">maximize</span></i>', '</button>', '<button class="wm-close" data-close>', '<i href="#" class="icon fa-close"><span class="label">close</span></i>', '</button>', '</div>', '</div>', '<div data-', namespace, '-body>', vars.body, '</div>', vars.footer == '' ? '' : ['<div data-', namespace, '-footer>', vars.footer, '</div>'].join(''), '</div>'].join('');
      return $(panelHTML);
    }
  }, {
    key: 'minimize',


    /**
     * Minimizes screen layer.
     */
    value: function minimize() {
      this.$element.addClass(this.options.minimizedClass);
      this.hide();
      this.trigger('minimize');
    }

    /**
     * Restores minimized screen layer.
     */

  }, {
    key: 'restore',
    value: function restore() {
      this.$element.removeClass(this.options.minimizedClass);
      this.show();
      this.trigger('restore');
    }

    /**
     * Sets screen layer active class and status flag.
     */

  }, {
    key: 'setActive',
    value: function setActive() {
      this._active = true;
      this.$element.addClass(this.options.activeClass);
      this.trigger('activate');
    }

    /**
     * Removes screen layer active class and status flag.
     */

  }, {
    key: 'setInactive',
    value: function setInactive() {
      this._active = false;
      this.$element.removeClass(this.options.activeClass);
      this.trigger('deactivate');
    }

    /**
     * Gets current 'active' status flag.
     */

  }, {
    key: 'title',
    get: function get() {
      if (this.options.title) {
        return String(this.options.title);
      }
      return '';
    }
  }, {
    key: 'body',
    get: function get() {
      if (this.options.body) {
        return String(this.options.body);
      }
      return '';
    }
  }, {
    key: 'footer',
    get: function get() {
      if (this.options.footer) {
        return String(this.options.footer);
      }
      return '';
    }
  }, {
    key: 'isActive',
    get: function get() {
      return this._active === true;
    }

    /**
     * Create a new instance of the screen layer.
     * @class
     * @name Screenpanel
     * @extends Module
     * @param {jQuery} element - jQuery object to apply the module to.
     * @param {Object} options - Overrides to the default module settings.
     */

  }]);

  function Screenpanel(element, option) {
    _classCallCheck(this, Screenpanel);

    var _this = _possibleConstructorReturn(this, (Screenpanel.__proto__ || Object.getPrototypeOf(Screenpanel)).call(this, element, option));

    if (Siteapp.sys.functionName(_this) == 'Screenpanel') {
      //console.//log('initializing screenpanel module...');
    }
    return _this;
  }

  /**
   * Setup a new instance of a Screenpanel.
   *  
   * @class
   * @name  Screenpanel
   * @param {jQuery} element - jQuery object to make into a screenpanel. Object should be of the screenpanel panel, rather than its anchor.
   * @param {Object} options - Overrides to the default plugin settings.
   */


  _createClass(Screenpanel, [{
    key: '_setup',
    value: function _setup(element, options) {

      this.$element = element;
      this.options = $.extend({}, Siteapp_Screenpanel_DEFAULTS, /*this.$element.data(),*/this.options, options);

      var layerName = Siteapp.sys.functionName(this);
      this.className = 'earthTheme.Ui.' + layerName; // ie9 back compat

      this._init();
    }

    /**
        * Initializes the screen layer by setting/checking options and attributes, 
        * adding helper variables...
        * Connects to UI manager
        * 
        * @function
        * @private
        */

  }, {
    key: '_init',
    value: function _init() {

      this.events = new Siteapp.sys.EventManager(this);
      this._events();

      this.manager.initialize(this);
    }

    /**
     * Adds event listeners to the element utilizing the triggers utility library.
     * @function
     * @private
     */

  }, {
    key: '_events',
    value: function _events() {
      this._addKeyHandler();
      this._addClickHandler();
    }
  }, {
    key: '_addClickHandler',
    value: function _addClickHandler() {}

    /**
     * Adds keyboard event handlers for items within the tabs.
     * @private
     */

  }, {
    key: '_addKeyHandler',
    value: function _addKeyHandler() {}
    // Keyboard.addKeyHandlers...


    /**
     * Removes keyboard event handlers.
     * @private
     */

  }, {
    key: '_removeKeyHandler',
    value: function _removeKeyHandler() {}
    // Keyboard.unregister...


    /**
     * Destroys the screenpanel.
     * @function
     */

  }, {
    key: '_destroy',
    value: function _destroy() {
      this._removeKeyHandler();

      this.$element.find('*').off('.' + this.application.appName);
      this.$element.off('.' + this.application.appName);

      this.$element.remove();
    }
  }]);

  return Screenpanel;
}(_siteapp2.default);

exports.default = Screenpanel;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Siteapp_ModuleManage;

var _siteapp = __webpack_require__(6);

var _siteapp2 = _interopRequireDefault(_siteapp);

var _siteapp3 = __webpack_require__(21);

var _siteapp4 = _interopRequireDefault(_siteapp3);

var _siteapp5 = __webpack_require__(7);

var _siteapp6 = _interopRequireDefault(_siteapp5);

var _siteapp7 = __webpack_require__(8);

var _siteapp8 = _interopRequireDefault(_siteapp7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * [Siteapp] - multi-purpose frontend application
                                                                                                                                                                                                                   * 
                                                                                                                                                                                                                   * Siteapp ui object
                                                                                                                                                                                                                   *     
                                                                                                                                                                                                                   * @package     [Siteapp]
                                                                                                                                                                                                                   * @subpackage  [Siteapp] UI
                                                                                                                                                                                                                   * @author      Björn Bartels <coding@bjoernbartels.earth>
                                                                                                                                                                                                                   * @link        https://gitlab.bjoernbartels.earth/groups/themes
                                                                                                                                                                                                                   * @license     http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0
                                                                                                                                                                                                                   * @copyright   copyright (c) 2016 Björn Bartels <coding@bjoernbartels.earth>
                                                                                                                                                                                                                   * 
                                                                                                                                                                                                                   * @namespace   Siteapp
                                                                                                                                                                                                                   * @module      Siteapp.Ui
                                                                                                                                                                                                                   */


var Siteapp_ModuleManager_DEFAULTS = (_Siteapp_ModuleManage = {

	/* UI modes: 'flow', 'window', false */
	mode: 'flow'

}, _defineProperty(_Siteapp_ModuleManage, 'mode', 'flow'), _defineProperty(_Siteapp_ModuleManage, 'disableUiNavigation', false), _defineProperty(_Siteapp_ModuleManage, 'disableFullscreen', false), _defineProperty(_Siteapp_ModuleManage, 'enableBackground', true), _defineProperty(_Siteapp_ModuleManage, 'enableBackgroundAnimation', true), _defineProperty(_Siteapp_ModuleManage, 'enableBackgroundNightDay', true), _defineProperty(_Siteapp_ModuleManage, 'screenAdapters', ['default']), _Siteapp_ModuleManage);

var Ui = function (_ModuleManager) {
	_inherits(Ui, _ModuleManager);

	function Ui() {
		_classCallCheck(this, Ui);

		return _possibleConstructorReturn(this, (Ui.__proto__ || Object.getPrototypeOf(Ui)).apply(this, arguments));
	}

	_createClass(Ui, [{
		key: 'connectLayer',


		/**
   * Init-wrapper for a layer to connect to UI manager.
   * Calls 'initialze' and sets up special 'Ui' references.
   * 
   * For example, in your module's (aka 'layer's) constructor/init, 
   * instead of...
      * ```
      * [Siteapp].initialzeModule(this);
      * ```
      * do...
      * ```
      * [Siteapp].Ui.connectLayer(this);
      * ```
   */
		value: function connectLayer(layer2connect, name) {

			// set up further 'Ui' references, if any...
			this.initialize(layer2connect, name);
		}
	}, {
		key: 'disconnectLayer',
		value: function disconnectLayer(layer2disconnect) {

			// remove 'Ui' references, if any...
			this.destroy(layer2disconnect);
		}
	}, {
		key: 'focusLayer',
		value: function focusLayer(layer2focus) {
			if (layer2focus instanceof Siteapp.UiManager.Screenlayer) {

				this.unfocusLayers();

				layer2focus.setActive();
				layer2focus.$element.css({ zIndex: 1 });
			}
		}
	}, {
		key: 'unfocusLayers',
		value: function unfocusLayers() {
			this.deactivateLayers();

			this.layers.map(function (idx, layer) {

				if (layer instanceof Siteapp.UiManager.Screenlayer) {
					layer.setInactive();
					layer.$element.css({ zIndex: -1 });
				}
			});
		}
	}, {
		key: 'activateLayer',
		value: function activateLayer(layer2activate) {
			if (layer2activate instanceof Siteapp.UiManager.Screenlayer) {

				layer2activate.setActive();
			}
		}
	}, {
		key: 'deactivateLayers',
		value: function deactivateLayers() {
			var layer = this.activeLayer;

			if (layer instanceof Siteapp.UiManager.Screenlayer) {
				layer.setInactive();
			}
		}

		/**
   * Retrieve screen layer by name.
   * 
   * @param {string} layername
   * @returns {Screenlayer}
   */

	}, {
		key: 'getLayerByName',
		value: function getLayerByName(layername) {
			var result = null;
			for (var idx in this.layers) {
				var layer = this.layers[idx];
				if (layer.options.name && layer.options.name == layername) {
					result = layer;
				}
			};
			return result;
		}

		/**
   * Retrieve panel adapter by name.
   * 
   * @param {string} adaptername
   * @returns {Paneladapter}
   */

	}, {
		key: 'getAdapterByName',
		value: function getAdapterByName(adaptername) {
			var result = null;
			if (this.Paneladapters.isRegistered(adaptername)) {
				for (var idx in this.adapters) {
					var adapter = this.adapters[idx];
					if (adapter.options.name && adapter.options.name == adaptername) {
						result = adapter;
					}
				};
			}
			return result;
		}

		/**
   * Retrieve active/focused screen layer.
   * 
   * @var {Screenlayer} activeLayer
   */

	}, {
		key: '_init',


		/**
      * Initializes the UI manager by setting/checking options and attributes, 
      * adding helper variables, and saving the anchor.
      * @function
      * @private
      */
		value: function _init() {

			_get(Ui.prototype.__proto__ || Object.getPrototypeOf(Ui.prototype), '_init', this).call(this);

			this._screenlayers = [];
			this._paneladapters = [];

			this._events();

			this._initPanelAdapterManager();
		}

		/**
      * Initializes the panel adapter manager
      * 
      * @function
      * @private
      */

	}, {
		key: '_initPanelAdapterManager',
		value: function _initPanelAdapterManager() {
			this.Paneladapters = new _siteapp4.default();
			this.Paneladapters.application = this.application;

			// register the generic/default adapter
			this.Paneladapters.register(_siteapp6.default, 'default');
		}

		/**
   * Adds event listeners to the element, etc...
   * @function
   * @private
   */

	}, {
		key: '_events',
		value: function _events() {
			this._addKeyHandler();
			this._addClickHandler();
		}

		/**
   * Adds click event listeners.
   * @function
   * @private
   */

	}, {
		key: '_addClickHandler',
		value: function _addClickHandler() {}

		/**
   * Adds keyboard event handlers.
   * @private
   */

	}, {
		key: '_addKeyHandler',
		value: function _addKeyHandler() {
			var _this = this;

			var keyHandlerMap = {
				'ESCAPE': function ESCAPE(e) {/*console.//log('key event [ESC]:', e, this);*/},
				'X': function X(e) {/*console.//log('key event [X]:', e, this);*/},
				'ALT_CTRL_X': function ALT_CTRL_X(e) {/*console.//log('key event [ALT+CTRL+X]:', e, this);*/},
				'META_A': function META_A(e) {/*console.//log('key event [CMD+A]:', e, this);*/}
			};
			Siteapp.Keyboard.addKeyHandlers(keyHandlerMap, 'UiKeys' + this._uuid);
		}

		/**
   * Destroys the layoutbody.
   * @function
   */

	}, {
		key: '_destroy',
		value: function _destroy() {
			Siteapp.Keyboard.unregister('UiKeys' + this._uuid);
			this.$element.find('*').off('.' + _this.application.appName + '');
			this.$element.off('.' + _this.application.appName + '');
			this.$element.remove();
		}
	}, {
		key: 'activeLayer',
		get: function get() {
			for (var idx in this.layers) {
				if (this.layers[idx].isActive) {
					return this.layers[idx];
				}
			}
			return null;
		}

		/**
   * Retrieve registered screen layers.
   * 
   * @var [{Screenlayer}] layers
   */

	}, {
		key: 'layers',
		get: function get() {
			var $manager = this,
			    _layers = [],
			    layerAttrs = [],
			    namespace = $manager.application.appName;
			$.each(this._modules, function (idx, plugin) {
				var name = Siteapp.sys.hyphenate(Siteapp.sys.functionName(plugin));
				if ($manager.options.namespacedModuleTriggers) {
					layerAttrs.push('[data-' + namespace + '-' + name + ']');
				} else {
					layerAttrs.push('[data-' + name + ']');
				}
			});
			$(layerAttrs.join(',')).each(function (idx, elem) {
				var plugin = $(elem).data(namespace + 'Plugin');
				if (plugin instanceof Siteapp.UiManager.Screenlayer) {
					_layers[plugin.uuid] = plugin;
				}
			});
			this._screenlayers = _layers;
			return this._screenlayers;
		}

		/**
   * Retrieve registered screen layers.
   * 
   * @var [{Screenlayer}] layers
   */

	}, {
		key: 'adapters',
		get: function get() {
			var $manager = this,
			    _adapters = [],
			    adapterAttrs = [],
			    namespace = $manager.application.appName;
			$.each(this._modules, function (idx, plugin) {
				var name = Siteapp.sys.hyphenate(Siteapp.sys.functionName(plugin));
				if ($manager.options.namespacedModuleTriggers) {
					adapterAttrs.push('[data-' + namespace + '-' + name + ']');
				} else {
					adapterAttrs.push('[data-' + name + ']');
				}
			});
			$(adapterAttrs.join(',')).each(function (idx, elem) {
				var plugin = $(elem).data(namespace + 'Plugin');
				if (plugin instanceof Siteapp.UiManager.Paneladapter) {
					_adapters[plugin.uuid] = plugin;
				}
			});
			this._paneladapters = _adapters;
			return this._paneladapters;
		}
	}]);

	return Ui;
}(_siteapp2.default);

exports.default = Ui;

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);


/***/ })
/******/ ]);