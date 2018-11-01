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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = {Siteapp: window.Siteapp};

/***/ }),

/***/ 1:
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

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _siteapp = __webpack_require__(0);

var _siteapp2 = __webpack_require__(2);

var _siteapp3 = _interopRequireDefault(_siteapp2);

var _siteapp4 = __webpack_require__(5);

var _siteapp5 = _interopRequireDefault(_siteapp4);

var _siteapp6 = __webpack_require__(6);

var _siteapp7 = _interopRequireDefault(_siteapp6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_siteapp.Siteapp.prototype.Module = _siteapp3.default;
_siteapp.Siteapp.Module = _siteapp.Siteapp.prototype.Module;
_siteapp.Siteapp.prototype.ModuleFactory = _siteapp5.default;
_siteapp.Siteapp.ModuleFactory = _siteapp.Siteapp.prototype.ModuleFactory;
_siteapp.Siteapp.prototype.ModuleManager = _siteapp7.default;
_siteapp.Siteapp.ModuleManager = _siteapp.Siteapp.prototype.ModuleManager;

/***/ }),

/***/ 2:
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

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _siteapp = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
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
/** global: Module */
/** global: ModuleManager */
/** global: ModuleFactoryDefaults */

var ModuleFactoryException = function (_Exception) {
  _inherits(ModuleFactoryException, _Exception);

  function ModuleFactoryException() {
    _classCallCheck(this, ModuleFactoryException);

    return _possibleConstructorReturn(this, (ModuleFactoryException.__proto__ || Object.getPrototypeOf(ModuleFactoryException)).apply(this, arguments));
  }

  _createClass(ModuleFactoryException, [{
    key: 'name',
    get: function get() {
      return "SiteappModuleFactoryException";
    }
  }]);

  return ModuleFactoryException;
}(_siteapp.Exception);

;

var ModuleFactoryDefaults = {

  deps: [],
  module: null,
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

  externHosts: ['localhost', location.hostname]
};

/**
 * Module factory abstract.
 * @module Siteapp.ModuleFactory
 */
var ModuleFactory = function () {

  /**
   * Creates a new instance of Siteapp.ModuleFactory.
   * 
   * @class
   * @fires Siteapp.ModuleFactory#init
   * @param {jQuery} element - jQuery object to attach the plugin to.
  * @param {Object} options - object to extend the default configuration.
  * 
   */
  function ModuleFactory(element, options) {
    _classCallCheck(this, ModuleFactory);

    if (!element) return;

    var $this = this;
    this.$element = $(element);

    this.options = $.extend({}, ModuleFactoryDefaults, this.$element.data(), options);
    Siteapp.sys.secureProperties(this.options, ['allowPath', 'allowExtern', 'externHosts']);

    this._init();
  }

  /**
   * initialize factory parameters
  * @param {Object} options - optional object to extend the component's configuration.
   * @access public
   */


  _createClass(ModuleFactory, [{
    key: '_init',
    value: function _init(options) {

      this._dependencies = null;
      this._module = null;
      this._callback = null;

      if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) == 'object') {
        this.options = $.extend({}, this.options, options);
      }

      try {

        this._dependencies = this.options.deps;
        this._module = this.options.module;
        this._callback = this.options.callback;

        this.inject();
      } catch (ex) {
        void 0;
        throw new ModuleFactoryException('ModuleFactoryError loading module: ' + ex.message);
      } finally {}
    }

    /**
     * inject dependencies and module into page via 'require'
     * @param {Array|String} _dependencies - module dependency identifiers or paths to inject
     * @param {String} _module - module identifier or module path to inject.
     * @param {function|String} _callback - optional callback function or name of registered namespace 'func'
     */

  }, {
    key: 'inject',
    value: function inject(_dependencies, _module, _callback) {
      if (!_dependencies) {
        _dependencies = this._dependencies;
      }
      if (!_module) {
        _module = this._module;
      }
      if (!_callback) {
        _callback = this._callback;
      }

      if (typeof _dependencies == 'string') {
        _dependencies = String(_dependencies).split(',');
      }
      if (typeof _dependencies.join != 'function') {
        _dependencies = [];
      }

      var $factory = this;

      if (_dependencies.length > 0) {
        if (!this._allowURIs(_dependencies)) {
          throw new Error('SECURITY ALERT: One or more of the dependencies requested are not allowed to be included!');
        }
        requirejs(_dependencies, function () {

          $factory.injectModule(_module, _callback);
        });
      } else {
        this.injectModule(_module, _callback);
      }
    }

    /**
     * inject actual module code into page via 'require'
     * @param {String} _module - module identifier or module path to inject.
     * @param {function|String} _callback - optional callback function or name of registered namespace 'func'
     */

  }, {
    key: 'injectModule',
    value: function injectModule(_module, _callback) {
      if (!_module) {
        _module = this._module;
      }
      if (!_callback) {
        _callback = this._callback;
      }

      if (typeof _module != 'string') {
        void 0;
        return;
      }

      var $factory = this;
      var $element = $factory.$element;
      var $app = $factory.application;

      if (!this._allowURI(_module)) {
        throw new Error('SECURITY ALERT: The module requested is not allowed to be included!');
      }

      requirejs([_module], function () {

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

  }, {
    key: '_allowURIs',
    value: function _allowURIs(URIs) {
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

  }, {
    key: '_allowURI',
    value: function _allowURI(URI) {

      // no absolute or relative paths?
      if (!this.options.allowPath && (String(URI).indexOf('/') >= 0 || String(URI).indexOf('/') < String(URI).length)) {
        return false;
      }

      // no external URLs?
      if (!this.options.allowExtern && (this._hasProtocol(URI) || this._isExtern(URI))) {
        return false;
      }

      // is hostname allowed?
      if (this.options.allowExtern && this.options.externHosts.length > 0) {
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

  }, {
    key: '_isExtern',
    value: function _isExtern(URI) {
      return (new RegExp("^(http(s)*:)*\\/\\/").test(URI) || this._hasProtocol(URI)) && !this._hasHost(URI, location.hostname);
    }

    /**
     * Detect if URI starts with a protocol identifier (ex: http:..., tel:..., mailto:...) 
     * 
     * @function
     * @access private
     * @param {string} uri
     * @returns {boolean}
     */

  }, {
    key: '_hasProtocol',
    value: function _hasProtocol(URI) {
      return new RegExp("^[\\w|-]+:").test(URI);
    }

    /**
     * Detect if URI contains a given hostname (ex: http://domain.tld..., //domain.tld...)
     * 
     * @function
     * @access private
     * @param {string} uri
     * @returns {boolean}
     */

  }, {
    key: '_hasHost',
    value: function _hasHost(URI, hostname) {
      return [2, 3, 7, 8].indexOf(String(URI).indexOf(hostname)) != -1
      /*
       "//_", "://_", "http://_", "https://_"
       */
      ;
    }

    /**
     * destroy component's object in memory
     * @access public
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this.$element.removeAttr('data-' + this.application.appName + '-module-factory').removeAttr('data-deps').removeAttr('data-module').removeAttr('data-callback');
      this.manager.destroyModule(this);
    }

    /**
     * Retrieve loaded module
     */

  }, {
    key: 'module',
    get: function get() {
      return this._module;
    }

    /**
     * Assing loaded module
     */
    ,
    set: function set(_module) {
      if (_module instanceof Module) {
        this._module = _module;
      } else {
        throw new ModuleFactoryException('Module to assing must be an instance of Siteapp.Module');
      }
    }

    /**
     * Retrieve attached module manager.
     */

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
        throw new ModuleFactoryException('Invalid module manager object to attach, must be an instance of Siteapp.ModuleManager');
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
        throw new ModuleFactoryException('Invalid application object to attach, must be an instance of Siteapp');
      }
    }
  }]);

  return ModuleFactory;
}();

exports.default = ModuleFactory;

/***/ }),

/***/ 6:
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

/***/ })

/******/ });