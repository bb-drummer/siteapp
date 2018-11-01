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
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
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

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _siteapp = __webpack_require__(0);

var _siteapp2 = __webpack_require__(3);

_siteapp.Siteapp.prototype.StorageAdapter = _siteapp2.StorageAdapter;
_siteapp.Siteapp.StorageAdapter = _siteapp.Siteapp.prototype.StorageAdapter;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StorageAdapter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _siteapp = __webpack_require__(1);

var _siteapp2 = __webpack_require__(4);

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
    get: function get() {
      return "SiteappStorageAdapterException";
    }
  }]);

  return StorageAdapterException;
}(_siteapp.Exception);

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
    get: function get() {
      return this._data;
    }

    /**
     * Set current data set
     */
    ,
    set: function set(_data) {
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
    get: function get() {
      return this._namespace;
    }

    /**
     * Set current data namespace
     */
    ,
    set: function set(_namespace) {
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
    get: function get() {
      return this._type;
    }

    /**
     * Set current data storage type
     */
    ,
    set: function set(_type) {
      if (typeof _type != 'string') {
        throw new StorageAdapterException('type identifier must be a string');
      }
      if (this.manager.types.indexOf(_type) == -1) {
        throw new StorageAdapterException('type identifier must be one of "' + _siteapp2.StorageManager.types.join('", "') + '"');
      }
      this._type = _type;
    }

    /**
     * Retrieve attached storage manager instance
     */

  }, {
    key: 'manager',
    get: function get() {
      return this._manager;
    }

    /**
     * Attach storage manager instance
     */
    ,
    set: function set(_manager) {
      if (_manager !== null && !(_manager instanceof _siteapp2.StorageManager)) {
        throw new StorageAdapterException('manager must be an instance of Siteapp.StorageManager');
      }
      this._manager = _manager;
    }
  }]);

  return StorageAdapter;
}();

exports.StorageAdapter = StorageAdapter;

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),

/***/ 4:
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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StorageManager = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _siteapp = __webpack_require__(1);

var _siteapp2 = __webpack_require__(3);

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
    get: function get() {
      return "SiteappStorageManagerException";
    }
  }]);

  return StorageManagerException;
}(_siteapp.Exception);

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
      if (!(adapter instanceof _siteapp2.StorageAdapter)) {
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
        throw new StorageManagerException('Invalid application object to attach');
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

    /**
     * Retrieve list of available storage tyoes.
     */

  }, {
    key: 'types',
    get: function get() {
      return ['memory', 'elementData', 'sessionStorage', 'cookie', 'localStorage', 'service'];
    }

    /**
     * Retrieve available storage adapters.
     */

  }, {
    key: 'namespaces',
    get: function get() {
      return this._namespaces;
    }
  }]);

  return StorageManager;
}();

exports.StorageManager = StorageManager;

/***/ })

/******/ });