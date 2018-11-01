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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _siteapp = __webpack_require__(0);

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

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Plugin = exports.Module = undefined;

var _siteapp = __webpack_require__(1);

var _siteapp2 = _interopRequireDefault(_siteapp);

var _siteapp3 = __webpack_require__(20);

var _siteapp4 = _interopRequireDefault(_siteapp3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Module = _siteapp2.default;
exports.Plugin = _siteapp4.default;

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _siteapp = __webpack_require__(1);

var _siteapp2 = _interopRequireDefault(_siteapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * [Siteapp] - multi-purpose frontend application
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Siteapp Plugin Abstract
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * alias class for Siteapp.Module
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @package     [Siteapp]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @subpackage  [Siteapp] module
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author      Björn Bartels <coding@bjoernbartels.earth>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link        https://gitlab.bjoernbartels.earth/groups/themes
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license     http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright   copyright (c) 2016 Björn Bartels <coding@bjoernbartels.earth>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @namespace   Siteapp
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @see         Siteapp.Module
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @module      Siteapp.Plugin
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @abstract
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * Module plugin abstract.
 * @module Siteapp.Plugin
 */
var Plugin = function (_Module) {
  _inherits(Plugin, _Module);

  function Plugin() {
    _classCallCheck(this, Plugin);

    return _possibleConstructorReturn(this, (Plugin.__proto__ || Object.getPrototypeOf(Plugin)).apply(this, arguments));
  }

  return Plugin;
}(_siteapp2.default);

exports.default = Plugin;

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ })

/******/ });