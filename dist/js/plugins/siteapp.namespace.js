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
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = {Siteapp: window.Siteapp};

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__siteapp_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__siteapp_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__siteapp_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sys_siteapp_namespace__ = __webpack_require__(25);



__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["Siteapp"].prototype.Namespace = __WEBPACK_IMPORTED_MODULE_1__sys_siteapp_namespace__["a" /* Namespace */];
__WEBPACK_IMPORTED_MODULE_0__siteapp_core__["Siteapp"].Namespace = __WEBPACK_IMPORTED_MODULE_0__siteapp_core__["Siteapp"].prototype.Namespace;

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Namespace; });
/**
 * [Siteapp] - multi-purpose application & CMS theme
 * 
 * Siteapp namespace container/storage
 *     
 * @package     [Siteapp]
 * @subpackage  [Siteapp] utilities
 * @author      Björn Bartels <coding@bjoernbartels.earth>
 * @link        https://gitlab.bjoernbartels.earth/groups/themes
 * @license     http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0
 * @copyright   copyright (c) 2016 Björn Bartels <coding@bjoernbartels.earth>
 * 
 * @namespace   Siteapp
 * @module      Siteapp.Namespace
 */

var Namespace = {

    /**
     * namespace for variables
     */
    vars: {},

    /**
     * namespace for functions
     */
    funcs: {},

    /**
     * namespace for plugins/extensions
     */
    plugins: {},

    /**
     * namespace for components
     */
    components: {},

    /**
     * namespace for script-path for head.load.js
     */
    scripts: {},

    /**
     * expand nested namespaces or set variables & objects, example: Namespace.exp('test.newscope.more.variable', 'anyContent');
     * @param namespace
     * @param value
     * @returns {Namespace}
     */
    exp: function (namespace, value) {
        var namespaceArr = namespace.split('.');
        var parent = this;
        if (namespaceArr[0] === "Namespace") namespaceArr = namespaceArr.slice(1);
        for (var i = 0; i < namespaceArr.length; i++) {
            var partname = namespaceArr[i];
            if (i + 1 == namespaceArr.length && typeof value !== 'undefined') parent[partname] = value;else if (typeof parent[partname] === 'undefined') parent[partname] = {};
            parent = parent[partname];
        }
        return parent;
    },

    /**
     * check if namespace/object is exists
     * @param namespace
     * @returns {boolean}
     */
    is: function (namespace) {
        var obj = Namespace;
        var parts = namespace.split('.');
        for (var i = 0; i < parts.length; i++) {
            var part = parts[i];
            if (typeof obj === "object" && part in obj) {
                obj = obj[part];
            } else return false;
        }
        return true;
    }
};

/**
 * retrieve a method
 * @param name
 * @returns {*}
 */
Namespace.func = function (name) {
    if (typeof Namespace.funcs[name] != 'function') {
        void 0;
        return function () {
            return;
        };
    }
    return Namespace.funcs[name];
};

/**
 * register a new method
 * @param name
 * @param method
 * @returns {*}
 */
Namespace.registerFunc = function (name, method) {
    if (typeof Namespace.funcs[name] != 'undefined') {
        void 0;
        return false;
    }
    if (typeof method != 'function') {
        void 0;
        return false;
    }
    Namespace.funcs[name] = method;
    return Namespace.funcs[name];
};

/**
 * check if a given method exists
 * @param name
 * @returns {boolean}
 */
Namespace.isFunc = function (name) {
    return typeof Namespace.funcs[name] == 'function';
};

//------------------------------------------

/**
 * retrieve a plug-in
 * @param name
 * @returns {*}
 */
Namespace.plugin = function (name) {
    if (typeof Namespace.plugins[name] == 'undefined') {
        void 0;
        return function () {
            return;
        };
    }
    return Namespace.plugins[name];
};

/**
 * register a new plug-in
 * @param name
 * @param pluginObject
 * @returns {*}
 */
Namespace.registerPlugin = function (name, pluginObject) {
    if (typeof Namespace.plugins[name] != 'undefined') {
        void 0;
        return false;
    }
    if (typeof pluginObject != 'function' && typeof pluginObject != 'object') {
        void 0;
        return false;
    }
    Namespace.plugins[name] = pluginObject;
    return Namespace.plugins[name];
};

/**
 * check if a given plug-in exists
 * @param name
 * @returns {boolean}
 */
Namespace.isPlugin = function (name) {
    return typeof Namespace.plugins[name] != 'undefined';
};

//------------------------------------------

/**
 * retrieve a component
 * @param name
 * @returns {*}
 */
Namespace.component = function (name) {
    if (typeof Namespace.components[name] == 'undefined') {
        void 0;
        return function () {};
    }
    return Namespace.components[name];
};

/**
 * register a new component
 * @param name
 * @param componentObject
 * @returns {*}
 */
Namespace.registerComponent = function (name, componentObject) {
    if (typeof Namespace.components[name] != 'undefined') {
        void 0;
        return false;
    }
    if (typeof componentObject != 'function' && typeof componentObject != 'object') {
        void 0;
        return false;
    }
    Namespace.components[name] = componentObject;
    return Namespace.components[name];
};

/**
 * check if a given component exists
 * @param name
 * @returns {boolean}
 */
Namespace.isComponent = function (name) {
    return typeof Namespace.components[name] != 'undefined';
};

//------------------------------------------

/**
 * retrieve all components
 * @returns {Namespace.components|{}}
 */
Namespace.getComponents = function () {
    return Namespace.components;
};

/**
 * initialize a given component
 * @param name
 * @returns {*}
 */
Namespace.initComponent = function (name) {
    if (!Namespace.isComponent(name)) {
        return;
    }
    var oComponent = Namespace.component(name);
    if (typeof oComponent.init != 'function') {
        var theComponent = new oComponent();
        //console.info('ThaliaNameSpace Info: Komponente "'+name+'" wurde initialisiert');
        return theComponent;
    }

    oComponent.init();
    //console.info('ThaliaNameSpace Info: Komponente "'+name+'" wurde initialisiert');
    return oComponent;
};

/**
 * clean up/destroy a given component
 * @param name
 * @returns {*}
 */
Namespace.destroyComponent = function (name) {
    if (!Namespace.isComponent(name)) {
        return;
    }
    var oComponent = Namespace.component(name);
    if (typeof oComponent.destroy != 'function') {
        return;
    }

    oComponent.destroy();
    return oComponent;
};



/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ })

/******/ });