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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = {Siteapp: window.Siteapp};

/***/ }),

/***/ 22:
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

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _siteapp = __webpack_require__(0);

var _siteapp2 = __webpack_require__(22);

_siteapp.Siteapp.prototype.Debugger = _siteapp2.Debugger;
_siteapp.Siteapp.Debugger = _siteapp.Siteapp.prototype.Debugger;

/***/ })

/******/ });