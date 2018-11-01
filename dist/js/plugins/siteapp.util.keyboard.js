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
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = {Siteapp: window.Siteapp};

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _siteapp = __webpack_require__(0);

var _siteappUtil = __webpack_require__(27);

_siteapp.Siteapp.prototype.Keyboard = _siteappUtil.Keyboard;

/***/ }),

/***/ 27:
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

var _siteappUtil = __webpack_require__(31);

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

/***/ 31:
/***/ (function(module, exports) {

module.exports = {rtl: window.Siteapp.rtl, GetYoDigits: window.Siteapp.GetYoDigits, transitionend: window.Siteapp.transitionend};

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ })

/******/ });