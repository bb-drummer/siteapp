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
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Exception; });
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
    get: function () {
      return "SiteappException";
    }
  }]);

  return Exception;
}(Error);

;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sys_siteapp_exception__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
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



var Siteapp_Module_DEFAULTS = {};

var ModuleException = function (_Exception) {
  _inherits(ModuleException, _Exception);

  function ModuleException() {
    _classCallCheck(this, ModuleException);

    return _possibleConstructorReturn(this, (ModuleException.__proto__ || Object.getPrototypeOf(ModuleException)).apply(this, arguments));
  }

  _createClass(ModuleException, [{
    key: 'name',
    get: function () {
      return "SiteappModuleException";
    }
  }]);

  return ModuleException;
}(__WEBPACK_IMPORTED_MODULE_0__sys_siteapp_exception__["a" /* Exception */]);

;

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
    get: function () {

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
    get: function () {

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
    get: function () {
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
    set: function (tag) {
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
    get: function () {
      var html = this._triggerTag;
      if (this.$element) {
        html = html.replace('<!-- modulecontent -->', this.$element.html() || '');
      }
      return html;
    }
  }, {
    key: 'manager',
    get: function () {
      return this._manager;
    }

    /**
     * Attach application object.
     */
    ,
    set: function (_manager) {
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
    get: function () {
      return this._app;
    }

    /**
     * Attach application object.
     */
    ,
    set: function (app) {
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

/* harmony default export */ __webpack_exports__["a"] = (Module);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rtl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GenerateUUID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return transitionend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return secureProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return functionName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return parseValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return hyphenate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return throttle; });


// Core Siteapp Utilities, utilized in a number of places.

/**
 * Returns a boolean for RTL support
 */

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
            get: function () {
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



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sys_siteapp_exception__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__module_siteapp_module__ = __webpack_require__(1);
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



var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
        get: function () {
            return "SiteappModuleManagerException";
        }
    }]);

    return ModuleManagerException;
}(__WEBPACK_IMPORTED_MODULE_0__sys_siteapp_exception__["a" /* Exception */]);

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

            if (_module instanceof __WEBPACK_IMPORTED_MODULE_1__module_siteapp_module__["a" /* default */]) {
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
         * @param {name} - the trigger name, so it will reference the 'data' attribute [data-(namespace-)name]
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
            if (_module instanceof __WEBPACK_IMPORTED_MODULE_1__module_siteapp_module__["a" /* default */]) {
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
         * @param {Object} module - The constructor of the module.
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
                    v;
                    void 0;
                } else {
                    this.application._plugins[moduleName] = this.application[className] = this._modules[moduleName];
                }
            }
        }

        /**
         * @function
         * Populates the _uuids array with pointers to each individual module instance.
         * Adds the `siteappPlugin` data-attribute to programmatically created modules 
         * to allow use of $(selector).Siteapp(method) calls.
         * Also fires the initialization event for each module, consolidating repeditive code.
         * 
         * @param {Object} module - an instance of a module, usually `this` in context.
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
         * @function
         * Removes the modules uuid from the _uuids array.
         * Removes the siteappPlugin data attribute, as well as the data-module-name attribute.
         * Also fires the destroyed event for the module, consolidating repeditive code.
         * 
         * @param {Object} module - an instance of a module, usually `this` in context.
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
         * @function
         * Causes one or more active modules to re-initialize, resetting event listeners, 
         * recalculating positions, etc.
         * 
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
                    var type = typeof modules,
                        $this = this,
                        fns = {
                        'object': function (_modules) {
                            _modules.forEach(function (p) {
                                //console.//log('(re)init...:', _namespace, p, $('[data-'+ p +']'), ($('[data-'+ p +']'))[_namespace]);
                                $('[data-' + p + ']')[_namespace]('_init');
                            });
                        },
                        'string': function () {
                            //console.//log('(re)init...:', _namespace, modules, $('[data-'+ modules +']'), ($('[data-'+ modules +']'))[_namespace]);
                            $('[data-' + modules + ']')[_namespace]('_init');
                        },
                        'undefined': function () {
                            //console.//log('(re)init...:', _namespace, '*all*', $('[data-'+ modules +']'), ($('[data-'+ modules +']'))[_namespace]);
                            this['object'](Object.keys($this._modules));
                        }
                    };
                    fns[type](modules);
                }
            } catch (err) {
                void 0;
            } finally {
                return modules;
            }
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
                    } finally {
                        return;
                    }
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
        get: function () {
            return this._app;
        }

        /**
         * Attach application object.
         */
        ,
        set: function (app) {
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
        get: function () {
            return this._version;
        }
    }]);

    return ModuleManager;
}();

/* harmony default export */ __webpack_exports__["a"] = (ModuleManager);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_siteapp_util_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sys_siteapp_eventManager__ = __webpack_require__(5);
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


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
                method = function (selector) {
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
            var invoke = function (method) {
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
                type = typeof method,
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
        get: function () {
            return this.options.namespace;
        }

        /**
         * retrieve the application's instance name
         */

    }, {
        key: 'instanceName',
        get: function () {
            return this.utilities.functionName(this);
        }

        /**
         * Retrieve current version.
         */

    }, {
        key: 'version',
        get: function () {
            return this._version;
        }

        /**
         * Retrieve current version.
         */
        ,
        set: function (ver) {
            this._version = ver;
        }

        /**
         * Namespace alias.
         */

    }, {
        key: 'NS',
        get: function () {
            return this.Namespace;
        }

        /**
         * Debugger alias.
         */

    }, {
        key: 'D',
        get: function () {
            return this.Debugger;
        }

        /**
         * Logger alias.
         */

    }, {
        key: 'L',
        get: function () {
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
    throttle: __WEBPACK_IMPORTED_MODULE_0__util_siteapp_util_core__["b" /* throttle */],

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
    genUUID: __WEBPACK_IMPORTED_MODULE_0__util_siteapp_util_core__["c" /* GenerateUUID */],

    /**
     * Vendor polyfill for 'transitionend'
     * 
     * @function
     * @param {jQuery} $elem
     * @returns {String}
     */
    transitionend: __WEBPACK_IMPORTED_MODULE_0__util_siteapp_util_core__["d" /* transitionend */],

    /**
     * Polyfill to get the name of a function/class instance in IE9
     * 
     * @function
     * @param {function} fn
     * @returns {string}
     */
    functionName: __WEBPACK_IMPORTED_MODULE_0__util_siteapp_util_core__["e" /* functionName */],

    /**
     * Normalize value
     * 
     * @function
     * @param {mixed} str
     * @returns {boolean|number|string}
     */
    parseValue: __WEBPACK_IMPORTED_MODULE_0__util_siteapp_util_core__["f" /* parseValue */],

    /**
     * Convert PascalCase to kebab-case
     * @see http://stackoverflow.com/a/8955580
     * 
     * @function
     * @param {string} str
     * @returns {string}
     */
    hyphenate: __WEBPACK_IMPORTED_MODULE_0__util_siteapp_util_core__["g" /* hyphenate */],

    /**
     * Returns a boolean for RTL support
     * 
     * @function
     * @returns {boolean}
     */
    rtl: __WEBPACK_IMPORTED_MODULE_0__util_siteapp_util_core__["a" /* rtl */],

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
    secureProperties: __WEBPACK_IMPORTED_MODULE_0__util_siteapp_util_core__["h" /* secureProperties */],

    /**
     * Event distpatcher/manager to create event driven components not attached to a DOM element
     * @var {EventManager} EventManager
     * @see Siteapp.EventManager
     */
    EventManager: __WEBPACK_IMPORTED_MODULE_1__sys_siteapp_eventManager__["a" /* default */]

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
            now: function () {
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
            fNOP = function () {},
            fBound = function () {
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
/* harmony default export */ __webpack_exports__["a"] = (Siteapp);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
                var getArrayIndex = function (array, item) {
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
            var h = function () {
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

/* harmony default export */ __webpack_exports__["a"] = (EventManager);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Keyboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__siteapp_util_core__ = __webpack_require__(2);
/*******************************************
 *                                         *
 * This util was created by Marius Olbertz *
 * Please thank Marius on GitHub /owlbertz *
 * or the web http://www.mariusolbertz.de/ *
 *                                         *
 ******************************************/





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
    handleKey: function (event, component, functions) {
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
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__siteapp_util_core__["a" /* rtl */])()) cmds = $.extend({}, commandList.ltr, commandList.rtl);else cmds = $.extend({}, commandList.rtl, commandList.ltr);
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

    register: function (namespace, cmds) {
        commands[namespace] = cmds;
        //console.//log('registered keyboard component:', namespace, cmds, commands);
    },


    // TODO9438: These references to Keyboard need to not require global. Will 'this' work in this context?
    //
    /**
     * Traps the focus in the given element.
     * @param  {jQuery} $element  jQuery object to trap the foucs into.
     */
    trapFocus: function ($element) {
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
    releaseFocus: function ($element) {
        $element.off('keydown.' + Keyboard._ns + '.trapfocus');
    },


    /**
     * Removes keyboard event handlers. If no namespace is given, all 
     * keyboard handlers will be removed.
     * 
     * @param {string} namespace - keyboard event namespace
     */
    unregister: function (namespace) {
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
    addKeyHandlers: function (handlers, namespace) {

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



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaQuery; });
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
  atLeast: function (size) {
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
  get: function (size) {
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
  _init: function () {
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
  _getCurrentSize: function () {
    var matched;

    for (var i in this.queries) {
      var query = this.queries[i];

      if (window.matchMedia(query.value).matches) {
        matched = query;
      }
    }

    if (typeof matched === 'object') {
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
  _watcher: function () {
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
      matchMedium: function (media) {
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



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Triggers; });


var MutationObserver = function () {
  var prefixes = ['WebKit', 'Moz', 'O', 'Ms', ''];
  for (var i = 0; i < prefixes.length; i++) {
    if (prefixes[i] + 'MutationObserver' in window) {
      return window[prefixes[i] + 'MutationObserver'];
    }
  }
  return false;
}();

var triggers = function (el, type) {
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
  openListener: function () {
    triggers($(this), 'open');
  },
  closeListener: function () {
    var id = $(this).data('close');
    if (id) {
      triggers($(this), 'close');
    } else {
      $(this).trigger('close.' + Triggers._ns + '.trigger');
    }
  },
  toggleListener: function () {
    var id = $(this).data('toggle');
    if (id) {
      triggers($(this), 'toggle');
    } else {
      $(this).trigger('toggle.' + Triggers._ns + '.trigger');
    }
  },
  closeableListener: function (e) {
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
  toggleFocusListener: function () {
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
  resizeListener: function ($nodes) {
    if (!MutationObserver) {
      //fallback for IE 9
      $nodes.each(function () {
        $(this).triggerHandler('resizeme.' + Triggers._ns + '.trigger');
      });
    }
    //trigger all listening elements and signal a resize event
    $nodes.attr('data-events', "resize");
  },
  scrollListener: function ($nodes) {
    if (!MutationObserver) {
      //fallback for IE 9
      $nodes.each(function () {
        $(this).triggerHandler('scrollme.' + Triggers._ns + '.trigger');
      });
    }
    //trigger all listening elements and signal a scroll event
    $nodes.attr('data-events', "scroll");
  },
  closeMeListener: function (e, pluginId) {
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
    } else if (typeof pluginName === 'object' && typeof pluginName[0] === 'string') {
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
  var listeningElementsMutation = function (mutationRecordsList) {
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



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sys_siteapp_exception__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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



var ModuleFactoryException = function (_Exception) {
  _inherits(ModuleFactoryException, _Exception);

  function ModuleFactoryException() {
    _classCallCheck(this, ModuleFactoryException);

    return _possibleConstructorReturn(this, (ModuleFactoryException.__proto__ || Object.getPrototypeOf(ModuleFactoryException)).apply(this, arguments));
  }

  _createClass(ModuleFactoryException, [{
    key: 'name',
    get: function () {
      return "SiteappModuleFactoryException";
    }
  }]);

  return ModuleFactoryException;
}(__WEBPACK_IMPORTED_MODULE_0__sys_siteapp_exception__["a" /* Exception */]);

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

      if (typeof option == 'object') {
        this.options = $.extend({}, this.options, options);
      }

      try {
        //console.//log('ModuleFactory : init', this.options);

        this._dependencies = this.options.deps;
        this._module = this.options.module;
        this._callback = this.options.callback;

        this.inject();
      } catch (ex) {
        void 0;
        throw new ModuleFactoryException('ModuleFactoryError loading module: ' + ex.message);
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
      //console.//log('ComponentFactory::inject : injecting...', _dependencies, _module, _callback);
      if (_dependencies.length > 0) {
        if (!this._allowURIs(_dependencies)) {
          throw new Error('SECURITY ALERT: One or more of the dependencies requested are not allowed to be included!');
        }
        requirejs(_dependencies, function () {

          //console.//log('ComponentFactory::inject : dependencies injected');

          $factory.injectModule(_module, _callback);
        });
      } else {
        this.injectModule(_module, _callback);
      }
    }

    /**
     * inject actual module code into page via 'require'
     * @param {String} module - module identifier or module path to inject.
     * @param {function|String} callback - optional callback function or name of registered namespace 'func'
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
    get: function () {
      return this._module;
    }

    /**
     * Assing loaded module
     */
    ,
    set: function (_module) {
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
    get: function () {
      return this._manager;
    }

    /**
     * Attach application object.
     */
    ,
    set: function (_manager) {
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
    get: function () {
      return this._app;
    }

    /**
     * Attach application object.
     */
    ,
    set: function (app) {
      if (app instanceof Siteapp) {
        this._app = app;
      } else {
        throw new ModuleFactoryException('Invalid application object to attach, must be an instance of Siteapp');
      }
    }
  }]);

  return ModuleFactory;
}();

/* harmony default export */ __webpack_exports__["a"] = (ModuleFactory);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageAdapter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sys_siteapp_exception__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__siteapp_storageManager__ = __webpack_require__(11);
/**
 * [Siteapp] - multi-purpose frontend application
 * 
 * Siteapp (Data) Storage Adapter
 * 
 * storage types:
 * - memory (default)
 * - cookie
 * - localStorage
 * - service
 *     
 * @package     [Siteapp]
 * @subpackage  [Siteapp] storage
 * @author      Björn Bartels <coding@bjoernbartels.earth>
 * @link        https://gitlab.bjoernbartels.earth/groups/themes
 * @license     http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0
 * @copyright   copyright (c) 2016 Björn Bartels <coding@bjoernbartels.earth>
 * 
 * @namespace   Siteapp
 * @module      Siteapp.StorageAdapter
 */



//import Siteapp          from '../siteapp.core';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Siteapp_StorageAdapter_VERSION = '0.0.1';

var Siteapp_StorageAdapter_DEFAULTS = {};

var StorageAdapterException = function (_Exception) {
  _inherits(StorageAdapterException, _Exception);

  function StorageAdapterException() {
    _classCallCheck(this, StorageAdapterException);

    return _possibleConstructorReturn(this, (StorageAdapterException.__proto__ || Object.getPrototypeOf(StorageAdapterException)).apply(this, arguments));
  }

  _createClass(StorageAdapterException, [{
    key: 'name',
    get: function () {
      return "SiteappStorageAdapterException";
    }
  }]);

  return StorageAdapterException;
}(__WEBPACK_IMPORTED_MODULE_0__sys_siteapp_exception__["a" /* Exception */]);

;

var StorageAdapter = function () {

  /**
   * Create a new instance of the storage manager.
   * @class
   * @name StorageAdapter
   * @param {Object} options - Overrides to the default plugin settings.
   */
  function StorageAdapter(namespace, type, data, manager, options) {
    _classCallCheck(this, StorageAdapter);

    this.options = $.extend({}, Siteapp_StorageAdapter_DEFAULTS, options);

    this._init(namespace, type, data, manager);
  }

  /**
   * Setup objects
   */


  _createClass(StorageAdapter, [{
    key: '_init',
    value: function _init(namespace, type, data, manager) {
      this.data = data || {};
      this.manager = manager || null;
      this.namespace = namespace || 'data' + Siteapp.prototype.genUUID();
      this.type = type || 'memory';
    }
  }, {
    key: 'getItem',
    value: function getItem(name) {
      return this.data[name];
    }
  }, {
    key: 'setItem',
    value: function setItem(name, data) {
      var thisData = this.data;
      thisData[name] = data;
      this.data = thisData;

      return this;
    }

    /**
     * Retrieve current data set
     */

  }, {
    key: 'data',
    get: function () {
      return this._data;
    }

    /**
     * Set current data set
     */
    ,
    set: function (_data) {
      if (!(_data instanceof Object)) {
        throw new StorageAdapterException('data set must be an object');
      }
      this._data = _data;
    }

    /**
     * Retrieve current data namespace
     */

  }, {
    key: 'namespace',
    get: function () {
      return this._namespace;
    }

    /**
     * Set current data namespace
     */
    ,
    set: function (_namespace) {
      if (typeof _namespace != 'string') {
        throw new StorageAdapterException('namespace must be a string');
      }
      this._namespace = _namespace;
    }

    /**
     * Retrieve current data storage type
     */

  }, {
    key: 'type',
    get: function () {
      return this._type;
    }

    /**
     * Set current data storage type
     */
    ,
    set: function (_type) {
      if (typeof _type != 'string') {
        throw new StorageAdapterException('type identifier must be a string');
      }
      if (this.manager.types.indexOf(_type) == -1) {
        throw new StorageAdapterException('type identifier must be one of "' + __WEBPACK_IMPORTED_MODULE_1__siteapp_storageManager__["a" /* StorageManager */].types.join('", "') + '"');
      }
      this._type = _type;
    }

    /**
     * Retrieve attached storage manager instance
     */

  }, {
    key: 'manager',
    get: function () {
      return this._manager;
    }

    /**
     * Attach storage manager instance
     */
    ,
    set: function (_manager) {
      if (_manager !== null && !(_manager instanceof __WEBPACK_IMPORTED_MODULE_1__siteapp_storageManager__["a" /* StorageManager */])) {
        throw new StorageAdapterException('manager must be an instance of Siteapp.StorageManager');
      }
      this._manager = _manager;
    }
  }]);

  return StorageAdapter;
}();



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sys_siteapp_exception__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__siteapp_storageAdapter__ = __webpack_require__(10);
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
 * @subpackage  [Siteapp] storage
 * @author      Björn Bartels <coding@bjoernbartels.earth>
 * @link        https://gitlab.bjoernbartels.earth/groups/themes
 * @license     http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0
 * @copyright   copyright (c) 2016 Björn Bartels <coding@bjoernbartels.earth>
 * 
 * @namespace   Siteapp
 * @module      Siteapp.StorageManager
 */



//import Siteapp          from '../siteapp.core';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Siteapp_StorageManager_VERSION = '0.0.1';

var Siteapp_StorageManager_DEFAULTS = {};

var StorageManagerException = function (_Exception) {
  _inherits(StorageManagerException, _Exception);

  function StorageManagerException() {
    _classCallCheck(this, StorageManagerException);

    return _possibleConstructorReturn(this, (StorageManagerException.__proto__ || Object.getPrototypeOf(StorageManagerException)).apply(this, arguments));
  }

  _createClass(StorageManagerException, [{
    key: 'name',
    get: function () {
      return "SiteappStorageManagerException";
    }
  }]);

  return StorageManagerException;
}(__WEBPACK_IMPORTED_MODULE_0__sys_siteapp_exception__["a" /* Exception */]);

;

var StorageManager = function () {

  /**
   * Create a new instance of the storage manager.
   * @class
   * @name StorageManager
   * @param {Object} options - Overrides to the default plugin settings.
   */
  function StorageManager(options) {
    _classCallCheck(this, StorageManager);

    this.options = $.extend({}, Siteapp_StorageManager_DEFAULTS, options);

    this._init();
  }

  /**
   * Setup objects
   */


  _createClass(StorageManager, [{
    key: '_init',
    value: function _init() {
      this._version = Siteapp_StorageManager_VERSION;

      this._namespaces = {};

      this._adapters = {};
    }

    /**
     * Retrieve attached application.
     */

  }, {
    key: 'setNamespaceAdapter',
    value: function setNamespaceAdapter(_namespace, adapter) {
      if (!(adapter instanceof __WEBPACK_IMPORTED_MODULE_1__siteapp_storageAdapter__["a" /* StorageAdapter */])) {
        throw new StorageManagerException('Invalid storage adapter object to set');
      }
      if (typeof this.namespaces[_namespace] == 'undefined') {
        this.namespaces[_namespace] = {
          data: {},
          adapters: {}
        };
      }
      this.namespaces[_namespace].adapters[adapter.type] = adapter;
    }
  }, {
    key: 'application',
    get: function () {
      return this._app;
    }

    /**
     * Attach application object.
     */
    ,
    set: function (app) {
      if (app instanceof Siteapp) {
        this._app = app;
      } else {
        throw new StorageManagerException('Invalid application object to attach');
      }
    }

    /**
     * Retrieve current version.
     */

  }, {
    key: 'version',
    get: function () {
      return this._version;
    }

    /**
     * Retrieve list of available storage tyoes.
     */

  }, {
    key: 'types',
    get: function () {
      return ['memory', 'elementData', 'sessionStorage', 'cookie', 'localStorage', 'service'];
    }

    /**
     * Retrieve available storage adapters.
     */

  }, {
    key: 'namespaces',
    get: function () {
      return this._namespaces;
    }
  }]);

  return StorageManager;
}();



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Debugger; });
var _this = this;

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

var Debugger = {
	/* manage debug data */
	debugentries: [],

	types: ['log', 'debug', 'info', 'warn', 'error'],

	add: function (oEntry) {
		var entry = {
			type: oEntry.type || 'info',
			message: oEntry.message || '',
			time: oEntry.time || new Date()
		};
		this.debugentries.push(entry);
		return this;
	},

	clear: function () {
		this.debugentries = [];
		return this;
	},

	toEntry: function () {
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

	debug: function () {
		if ((console || typeof console.debug == 'function') && $LCARS.getInstance().config.debug) {
			void 0;
		}
		return this;
	},

	log: function (msg) {
		var entry = this.toEntry('log', msg);this.add(entry).console(entry);return this;
	},

	info: function (msg) {
		var entry = this.toEntry('info', msg);this.add(entry).console(entry);return this;
	},

	warn: function (msg) {
		var entry = this.toEntry('warn', msg);this.add(entry).console(entry);return this;
	},

	error: function (msg) {
		var entry = this.toEntry('error', msg);this.add(entry).console(entry);return this;
	},

	console: function (data) {
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
	},

	get: function () {
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

	getInstance: function () {
		return this;
	},

	_app: function (context) {
		if (context) {
			_this.__app = context;
		} else {
			return _this.__app;
		}
	}

};



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Log; });
var _this = this;

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

	log: function (message, type, context) {
		this.logentries.push(arguments);return this;
	},
	get: function () {
		return arguments.length > 0 ? this.logentries[parseInt(arguments[0])] : this.logentries;
	},
	clear: function () {
		this.logentries = [];this._currentIndex = 0;return this;
	},

	setLevel: function () {
		if (arguments.length > 0) {
			this.loglevel = parseInt(arguments[0]);
		} else {
			this.loglevel = 0;
		}return this;
	},

	_app: function (context) {
		if (context) {
			_this.__app = context;
		} else {
			return _this.__app;
		}
	}
};



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__module_siteapp_module__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
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
        * @param {Boolean} $append2active
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
        set: function (element) {
            this.$container = element.jquery ? element : $(element);
        }

        /**
         * Retrieves current container element.
         * 
         * @var {jQuery} $ontainer
         */
        ,
        get: function () {
            if (!this.$container) {
                return this.$element;
            }
            return this.$container;
        }
    }]);

    return Paneladapter;
}(__WEBPACK_IMPORTED_MODULE_0__module_siteapp_module__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Paneladapter);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__module_siteapp_module__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
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
    get: function () {
      if (this.options.adapter != '') {
        return this.application.Ui.getAdapterByName(this.options.adapter);
      }
      return null;
    }
  }, {
    key: 'isActive',
    get: function () {
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
}(__WEBPACK_IMPORTED_MODULE_0__module_siteapp_module__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Screenlayer);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__siteapp_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_siteapp_util_keyboard__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_siteapp_util_mediaQuery__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_siteapp_util_triggers__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sys_siteapp_exception__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sys_siteapp_debug__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sys_siteapp_log__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__module_siteapp_module__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__module_siteapp_moduleFactory__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__module_siteapp_moduleManager__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__storage_siteapp_storageAdapter__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__storage_siteapp_storageManager__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ui_siteapp_ui__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ui_siteapp_action__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ui_siteapp_screenlayer__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ui_siteapp_screenpanel__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ui_siteapp_paneladapter__ = __webpack_require__(14);

/* <!-- essential core */


// Touch and Triggers previously were almost purely sede effect driven,
// so no // need to add it to Siteapp, just init them.




__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].prototype.Keyboard = __WEBPACK_IMPORTED_MODULE_1__util_siteapp_util_keyboard__["a" /* Keyboard */];
__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].prototype.MediaQuery = __WEBPACK_IMPORTED_MODULE_2__util_siteapp_util_mediaQuery__["a" /* MediaQuery */];
__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].prototype.Triggers = __WEBPACK_IMPORTED_MODULE_3__util_siteapp_util_triggers__["a" /* Triggers */];

__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].Keyboard = __WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].prototype.Keyboard;
__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].MediaQuery = __WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].prototype.MediaQuery;
__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].Triggers = __WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].prototype.Triggers;

//Extra Core Components: Storage/Module-Managment, Log, Debug




__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].prototype.Exception = __WEBPACK_IMPORTED_MODULE_4__sys_siteapp_exception__["a" /* Exception */];
__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].prototype.Debugger = __WEBPACK_IMPORTED_MODULE_5__sys_siteapp_debug__["a" /* Debugger */];
__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].prototype.Log = __WEBPACK_IMPORTED_MODULE_6__sys_siteapp_log__["a" /* Log */];

__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].Exception = __WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].prototype.Exception;
__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].Debugger = __WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].prototype.Debugger;
__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].Log = __WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].prototype.Log;

/* essential core --> */

// attach application module manager classes




__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].prototype.Module = __WEBPACK_IMPORTED_MODULE_7__module_siteapp_module__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].Module = __WEBPACK_IMPORTED_MODULE_7__module_siteapp_module__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].prototype.ModuleFactory = __WEBPACK_IMPORTED_MODULE_8__module_siteapp_moduleFactory__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].ModuleFactory = __WEBPACK_IMPORTED_MODULE_8__module_siteapp_moduleFactory__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].prototype.ModuleManager = __WEBPACK_IMPORTED_MODULE_9__module_siteapp_moduleManager__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].ModuleManager = __WEBPACK_IMPORTED_MODULE_9__module_siteapp_moduleManager__["a" /* default */];

// attach application storage manager classes



__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].prototype.StorageAdapter = __WEBPACK_IMPORTED_MODULE_10__storage_siteapp_storageAdapter__["a" /* StorageAdapter */];
__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].StorageAdapter = __WEBPACK_IMPORTED_MODULE_10__storage_siteapp_storageAdapter__["a" /* StorageAdapter */];
__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].prototype.StorageManager = __WEBPACK_IMPORTED_MODULE_11__storage_siteapp_storageManager__["a" /* StorageManager */];
__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].StorageManager = __WEBPACK_IMPORTED_MODULE_11__storage_siteapp_storageManager__["a" /* StorageManager */];

// attach application UI manager classes






__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].prototype.UiManager = __WEBPACK_IMPORTED_MODULE_12__ui_siteapp_ui__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].UiManager = __WEBPACK_IMPORTED_MODULE_12__ui_siteapp_ui__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].prototype.UiManager.Action = __WEBPACK_IMPORTED_MODULE_13__ui_siteapp_action__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].UiManager.Action = __WEBPACK_IMPORTED_MODULE_13__ui_siteapp_action__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].prototype.UiManager.Screenlayer = __WEBPACK_IMPORTED_MODULE_14__ui_siteapp_screenlayer__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].UiManager.Screenlayer = __WEBPACK_IMPORTED_MODULE_14__ui_siteapp_screenlayer__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].prototype.UiManager.Screenpanel = __WEBPACK_IMPORTED_MODULE_15__ui_siteapp_screenpanel__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].UiManager.Screenpanel = __WEBPACK_IMPORTED_MODULE_15__ui_siteapp_screenpanel__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].prototype.UiManager.Paneladapter = __WEBPACK_IMPORTED_MODULE_16__ui_siteapp_paneladapter__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].UiManager.Paneladapter = __WEBPACK_IMPORTED_MODULE_16__ui_siteapp_paneladapter__["a" /* default */];

/* Foundation compatiblitiy mappings */
__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].prototype.rtl = __WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].prototype.utilities.rtl;
__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].prototype.GetYoDigits = __WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].prototype.utilities.genUUID;
__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].prototype.transitionend = __WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].prototype.utilities.transitionend;
__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].rtl = __WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].prototype.utilities.rtl;
__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].GetYoDigits = __WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].prototype.utilities.genUUID;
__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].transitionend = __WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].prototype.utilities.transitionend;

//'Foundation.Plugin' alias for 'Siteapp.Module'
__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].prototype.Plugin = __WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].Module;
__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].Plugin = __WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */].Module;

//finally, assign [Siteapp] class to global/window namespace
window.Siteapp = __WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */];

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["a" /* default */]);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sys_siteapp_exception__ = __webpack_require__(0);
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



//import Siteapp          from '../siteapp.core';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
    get: function () {
      return "SiteappAdapterManagerException";
    }
  }]);

  return AdapterManagerException;
}(__WEBPACK_IMPORTED_MODULE_0__sys_siteapp_exception__["a" /* Exception */]);

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
    get: function () {
      return this._adapters;
    }

    /**
     * Retrieve attached application.
     */

  }, {
    key: 'application',
    get: function () {
      return this._app;
    }

    /**
     * Attach application object.
     */
    ,
    set: function (app) {
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
    get: function () {
      return this._version;
    }
  }]);

  return AdapterManager;
}();

/* harmony default export */ __webpack_exports__["a"] = (AdapterManager);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__module_siteapp_module__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
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

var _noOp = function () {};

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
	function Action(element, option) {
		_classCallCheck(this, Action);

		var _this = _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, element, option));

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

					success: function (data) {
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
							if (typeof _data != 'object') {
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

					failure: function (data) {
						// user callback
						if (typeof $action.options.request.failure == 'function') {
							$action.options.request.failure.apply($action, arguments);
						}
					},

					complete: function (data) {
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
		get: function () {
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
		get: function () {
			return this.$element.attr('href');
		}
	}]);

	return Action;
}(__WEBPACK_IMPORTED_MODULE_0__module_siteapp_module__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Action);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__module_siteapp_module__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
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
    get: function () {
      if (this.options.title) {
        return String(this.options.title);
      }
      return '';
    }
  }, {
    key: 'body',
    get: function () {
      if (this.options.body) {
        return String(this.options.body);
      }
      return '';
    }
  }, {
    key: 'footer',
    get: function () {
      if (this.options.footer) {
        return String(this.options.footer);
      }
      return '';
    }
  }, {
    key: 'isActive',
    get: function () {
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
}(__WEBPACK_IMPORTED_MODULE_0__module_siteapp_module__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Screenpanel);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__module_siteapp_moduleManager__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sys_siteapp_adapterManager__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__siteapp_paneladapter__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__siteapp_screenlayer__ = __webpack_require__(15);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
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





var Siteapp_ModuleManager_DEFAULTS = {

	/* UI modes: 'flow', 'window', false */
	mode: 'flow',

	/* UI modes: 'flow', 'window', false */
	mode: 'flow',

	/* disable UI link redirection, true = same as mode = 'none' */
	disableUiNavigation: false,

	/* disable fullscreen mode entirely */
	disableFullscreen: false,

	/* enable background modes */
	enableBackground: true,
	enableBackgroundAnimation: true,
	enableBackgroundNightDay: true,

	/* screen adapters */
	screenAdapters: ['default']

};

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
			this.Paneladapters = new __WEBPACK_IMPORTED_MODULE_1__sys_siteapp_adapterManager__["a" /* default */]();
			this.Paneladapters.application = this.application;

			// register the generic/default adapter
			this.Paneladapters.register(__WEBPACK_IMPORTED_MODULE_2__siteapp_paneladapter__["a" /* default */], 'default');
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
				'ESCAPE': function (e) {/*console.//log('key event [ESC]:', e, this);*/},
				'X': function (e) {/*console.//log('key event [X]:', e, this);*/},
				'ALT_CTRL_X': function (e) {/*console.//log('key event [ALT+CTRL+X]:', e, this);*/},
				'META_A': function (e) {/*console.//log('key event [CMD+A]:', e, this);*/}
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
		get: function () {
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
		get: function () {
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
		get: function () {
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
}(__WEBPACK_IMPORTED_MODULE_0__module_siteapp_moduleManager__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Ui);

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__siteapp__ = __webpack_require__(16);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 
 * This is [Siteapp] base test setup
 * 
 */

/* <!-- essential core */


var TestApp = function (_Siteapp) {
  _inherits(TestApp, _Siteapp);

  function TestApp() {
    _classCallCheck(this, TestApp);

    return _possibleConstructorReturn(this, (TestApp.__proto__ || Object.getPrototypeOf(TestApp)).apply(this, arguments));
  }

  return TestApp;
}(__WEBPACK_IMPORTED_MODULE_0__siteapp__["default"]);

;

var testApp = new TestApp();

//testApp.addToGlobal(window);
//testApp.addToJquery($);
//testApp.addPluginShortcut(window);


window.Siteapp = __WEBPACK_IMPORTED_MODULE_0__siteapp__["default"];
window.testApp = testApp;

/***/ }),
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(24);


/***/ })
/******/ ]);