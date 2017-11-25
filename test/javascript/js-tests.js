//import Siteapp from '../../dist/js/siteapp.min.js';
if (!window) {
	var window = {};
}
/*

class TestApp extends Siteapp {};

var testApp = new TestApp();

//window.Siteapp = Siteapp;
//window.MyApp   = MyApp;

testApp.addToGlobal(window);
testApp.addToJquery($);
testApp.addPluginShortcut(window);

//window.testApp   = testApp;

*/
!function (e) {
  function __webpack_require__(n) {
    if (t[n]) return t[n].exports;var i = t[n] = { i: n, l: !1, exports: {} };return e[n].call(i.exports, i, i.exports, __webpack_require__), i.l = !0, i.exports;
  }var t = {};__webpack_require__.m = e, __webpack_require__.c = t, __webpack_require__.i = function (e) {
    return e;
  }, __webpack_require__.d = function (e, t, n) {
    __webpack_require__.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: n });
  }, __webpack_require__.n = function (e) {
    var t = e && e.__esModule ? function getDefault() {
      return e["default"];
    } : function getModuleExports() {
      return e;
    };return __webpack_require__.d(t, "a", t), t;
  }, __webpack_require__.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 29);
}([function (e, t, n) {
  "use strict";
  function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;
  }function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }n.d(t, "a", function () {
    return a;
  });var i = function () {
    function defineProperties(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (e, t, n) {
      return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e;
    };
  }(),
      a = function (e) {
    function Exception() {
      return _classCallCheck(this, Exception), _possibleConstructorReturn(this, (Exception.__proto__ || Object.getPrototypeOf(Exception)).apply(this, arguments));
    }return _inherits(Exception, e), i(Exception, [{ key: "name", get: function () {
        return "SiteappException";
      } }]), Exception;
  }(Error);
}, function (e, t, n) {
  "use strict";
  function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;
  }function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }var i = n(0),
      a = function () {
    function defineProperties(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (e, t, n) {
      return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e;
    };
  }(),
      r = {},
      o = function (e) {
    function ModuleException() {
      return _classCallCheck(this, ModuleException), _possibleConstructorReturn(this, (ModuleException.__proto__ || Object.getPrototypeOf(ModuleException)).apply(this, arguments));
    }return _inherits(ModuleException, e), a(ModuleException, [{ key: "name", get: function () {
        return "SiteappModuleException";
      } }]), ModuleException;
  }(i["a"]),
      s = function () {
    function Module(e, t, n) {
      _classCallCheck(this, Module), this._setup(e, t), !e || this.$element && this.$element.jquery || (this.$element = $(e)), this.options = $.extend({}, r, this.$element ? this.$element.data() : {}, t), n instanceof Siteapp && (this.application = n);var i = Siteapp.sys.hyphenate(Siteapp.sys.functionName(this));this.uuid || (this.uuid = i + "-" + Siteapp.sys.genUUID(6));var a = i;this.manager.options.namespacedModuleTriggers && (a = this.application.appName + "-" + i), this.$element.attr("data-" + a) || this.$element.attr("data-" + a, this.uuid), this.$element.data(this.application.appName + "Plugin") || this.$element.data(this.application.appName + "Plugin", this), this.$element.trigger("init." + i);
    }return a(Module, [{ key: "_setup", value: function _setup(e, t) {} }, { key: "_init", value: function _init() {} }, { key: "_events", value: function _events() {} }, { key: "_destroy", value: function _destroy() {} }, { key: "reflow", value: function reflow() {} }]), a(Module, [{ key: "destroy", value: function destroy() {
        this._destroy();var e = Siteapp.sys.functionName(this),
            t = e;this.manager.options.namespacedModuleTriggers && (t = this.application.appName + "-" + e), this.$element.removeAttr("data-" + t).removeData(this.application.appName + "Plugin").trigger("destroyed." + t);for (var n in this) {
          this[n] = null;
        }
      } }, { key: "hide", value: function hide() {
        this.$element.hide();
      } }, { key: "show", value: function show() {
        this.$element.show();
      } }, { key: "toString", value: function toString() {
        return this.markup;
      } }, { key: "toElement", value: function toElement() {
        return this.$element ? this.$element : $(this.toString());
      } }, { key: "_triggerAttribute", get: function () {
        return ["data-", this.manager.namespacedModuleTriggers ? this.application.appName + "-" : "", Siteapp.sys.hyphenate(Siteapp.sys.functionName(this)).toLowerCase(), ""].join("");
      } }, { key: "_triggerDataOptions", get: function () {
        var e = [];return $.each(this.options, function (t, n) {
          null === n || n instanceof Object && !(n instanceof Array) ? e.push("") : e.push(" data-" + Siteapp.sys.hyphenate(t) + "=" + JSON.stringify(n));
        }), e.join("");
      } }, { key: "_triggerTag", get: function () {
        return this._tagName || (this._tagName = "div"), ["<" + this._tagName + " ", this._triggerAttribute, this._triggerDataOptions, ">", "\x3c!-- modulecontent --\x3e", "</" + this._tagName + ">"].join("");
      }, set: function (e) {
        "string" == typeof e && "" != e && (this._tagName = e.toLowerCase());
      } }, { key: "markup", get: function () {
        var e = this._triggerTag;return this.$element && (e = e.replace("\x3c!-- modulecontent --\x3e", this.$element.html() || "")), e;
      } }, { key: "manager", get: function () {
        return this._manager;
      }, set: function (e) {
        if (!(e instanceof ModuleManager)) throw new o("Invalid module manager object to attach, must be an instance of Siteapp.ModuleManager");this._manager = e;
      } }, { key: "application", get: function () {
        return this._app;
      }, set: function (e) {
        if (!(e instanceof Siteapp)) throw new o("Invalid application object to attach, must be an instance of Siteapp");this._app = e;
      } }]), Module;
  }();t["a"] = s;
}, function (e, t, n) {
  "use strict";
  function rtl() {
    return "rtl" === $("html").attr("dir");
  }function GenerateUUID(e, t) {
    return e = e || 6, Math.round(Math.pow(36, e + 1) - Math.random() * Math.pow(36, e)).toString(36).slice(1) + (t ? "-" + t : "");
  }function transitionend(e) {
    var t,
        n = { transition: "transitionend", WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "otransitionend" },
        i = document.createElement("div");for (var a in n) {
      void 0 !== i.style[a] && (t = n[a]);
    }return t || (t = setTimeout(function () {
      e.triggerHandler("transitionend", [e]);
    }, 1), "transitionend");
  }function secureProperties(e, t, n) {
    var i = function $SECURITY_ALERT() {
      throw new Error("SECURITY ALERT: You are not allowed to do that in this context!");
    },
        a = {};for (var r in t) {
      e.hasOwnProperty(t[r]) && function () {
        var o = t[r],
            s = e[o];a[o] = s, !1 === n ? Object.defineProperty(e, o, { get: function () {
            return a[o];
          }, set: i }) : Object.defineProperty(e, o, { value: a[o], writable: !1 });
      }();
    }return e;
  }function functionName(e) {
    if (void 0 === Function.prototype.name) {
      var t = /function\s([^(]{1,})\(/,
          n = t.exec(e.toString());return n && n.length > 1 ? n[1].trim() : "";
    }return void 0 === e.prototype ? e.constructor.name : e.prototype.constructor.name;
  }function parseValue(e) {
    return !!/true/.test(e) || !/false/.test(e) && (isNaN(1 * e) ? e : parseFloat(e));
  }function hyphenate(e) {
    return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  }function throttle(e, t) {
    var n = null;return function () {
      var i = this,
          a = arguments;null === n && (n = setTimeout(function () {
        e.apply(i, a), n = null;
      }, t));
    };
  }n.d(t, "a", function () {
    return rtl;
  }), n.d(t, "c", function () {
    return GenerateUUID;
  }), n.d(t, "d", function () {
    return transitionend;
  }), n.d(t, "h", function () {
    return secureProperties;
  }), n.d(t, "e", function () {
    return functionName;
  }), n.d(t, "f", function () {
    return parseValue;
  }), n.d(t, "g", function () {
    return hyphenate;
  }), n.d(t, "b", function () {
    return throttle;
  });
}, function (e, t, n) {
  "use strict";
  function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;
  }function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }var i = n(0),
      a = n(1),
      r = function () {
    function defineProperties(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (e, t, n) {
      return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e;
    };
  }(),
      o = "0.0.1",
      s = { namespacedModuleTriggers: !0, overrideRegistered: !1, mapModulesToApplication: !1 },
      u = function (e) {
    function ModuleManagerException() {
      return _classCallCheck(this, ModuleManagerException), _possibleConstructorReturn(this, (ModuleManagerException.__proto__ || Object.getPrototypeOf(ModuleManagerException)).apply(this, arguments));
    }return _inherits(ModuleManagerException, e), r(ModuleManagerException, [{ key: "name", get: function () {
        return "SiteappModuleManagerException";
      } }]), ModuleManagerException;
  }(i["a"]),
      l = function () {
    function ModuleManager(e) {
      _classCallCheck(this, ModuleManager), this._uuid = this.functionName(this) + "-" + this.genUUID(6), this.options = $.extend({}, s, e), this._init();
    }return r(ModuleManager, [{ key: "_init", value: function _init() {
        this._version = o, this._modules = {}, this._uuids = [];
      } }, { key: "initialize", value: function initialize(e, t) {
        if (e instanceof a["a"]) return this.initializeModule(e, t);
      } }, { key: "register", value: function register(e, t) {
        if (e instanceof Object) return this.registerModule(e, t);
      } }, { key: "destroy", value: function destroy(e) {
        var t = e;if (e instanceof a["a"] && (t = this.hyphenate(this.functionName(e.$element.data(this.application.appName + "Plugin").constructor)), void 0 !== this._modules[this.application.appName + "-" + t])) return this.destroyModule(e);
      } }, { key: "registerModule", value: function registerModule(e, t) {
        var n = void 0 !== t ? t : this.functionName(e),
            i = this.hyphenate(n);e._app = e.prototype._app = this.application, e._manager = e.prototype._manager = this;var a = i;this.options.namespacedModuleTriggers && (a = this.application.appName + "-" + a);var r = this._modules[a];if ((this.options.overrideRegistered || void 0 === r) && (this._modules[a] = this[n] = e, this.options.mapModulesToApplication)) {
          var o = this.application._plugins[a];this.options.overrideRegistered || void 0 === o ? this.application._plugins[a] = this.application[n] = this._modules[a] : v;
        }
      } }, { key: "initializeModule", value: function initializeModule(e, t) {
        var n = void 0 !== t ? this.hyphenate(t) : this.hyphenate(this.functionName(e.constructor)),
            i = n;this.options.namespacedModuleTriggers && (i = this.application.appName + "-" + i), e.uuid || (e.uuid = n + "-" + this.genUUID(6)), e.$element.attr("data-" + i) || e.$element.attr("data-" + i, e.uuid), e.$element.data(this.application.appName + "Plugin") || e.$element.data(this.application.appName + "Plugin", e), e.$element.trigger("init." + this.application.appName + "." + n), this._uuids.push(e.uuid), this.options.mapModulesToApplication && this.application._uuids.push(e.uuid);
      } }, { key: "destroyModule", value: function destroyModule(e) {
        var t = this.hyphenate(this.functionName(e.$element.data(this.application.appName + "Plugin").constructor)),
            n = t;this.options.namespacedModuleTriggers && (n = this.application.appName + "-" + n), this._uuids.splice(this._uuids.indexOf(e.uuid), 1), this.options.mapModulesToApplication && this.application._uuids.splice(this.application._uuids.indexOf(e.uuid), 1), e.$element.removeAttr("data-" + n).removeData(this.application.appName + "Plugin").trigger("destroyed." + this.application.appName + "." + t);for (var i in e) {
          e[i] = null;
        }
      } }, { key: "reInit", value: function reInit(e) {
        var t = e instanceof $,
            n = this,
            i = n.application.appName;try {
          if (t && e.length > 0) e.each(function () {
            $(this).data(i + "Plugin")._init();
          });else {
            var a = typeof e,
                r = this;({ object: function (e) {
                e.forEach(function (e) {
                  $("[data-" + e + "]")[i]("_init");
                });
              }, string: function () {
                $("[data-" + e + "]")[i]("_init");
              }, undefined: function () {
                this["object"](Object.keys(r._modules));
              } })[a](e);
          }
        } catch (e) {} finally {
          return e;
        }
      } }, { key: "reflow", value: function reflow(e, t) {
        void 0 === t ? t = Object.keys(this._modules) : "string" == typeof t && (t = [t]), void 0 === e && (e = document);var n = this;$.each(t, function (t, i) {
          var a = n._modules[i];$(e).find("[data-" + i + "]").addBack("[data-" + i + "]").each(function () {
            var e = $(this),
                t = {};if (e.data(n.application.appName + "Plugin")) {
              var i = e.data(n.application.appName + "Plugin");return void (i.reflow && i.reflow());
            }e.attr("data-options") && e.attr("data-options").split(";").forEach(function (e, i) {
              var a = e.split(":").map(function (e) {
                return e.trim();
              });a[0] && (t[a[0]] = n.parseValue(a[1]));
            });try {
              e.data(n.application.appName + "Plugin", new a(e, t));
            } catch (e) {
              throw new u(e.message);
            } finally {
              return;
            }
          });
        });
      } }, { key: "functionName", value: function functionName(e) {
        return this.application.utilities.functionName(e);
      } }, { key: "genUUID", value: function genUUID(e, t) {
        return this.application.utilities.genUUID(e, t);
      } }, { key: "parseValue", value: function parseValue(e) {
        return this.application.utilities.parseValue(e);
      } }, { key: "hyphenate", value: function hyphenate(e) {
        return this.application.utilities.hyphenate(e);
      } }, { key: "application", get: function () {
        return this._app;
      }, set: function (e) {
        if (!(e instanceof Siteapp)) throw new u("Invalid application object to attach");this._app = e;
      } }, { key: "version", get: function () {
        return this._version;
      } }]), ModuleManager;
  }();t["a"] = l;
}, function (e, t, n) {
  "use strict";
  function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }var i = n(2),
      a = n(5),
      r = function () {
    function defineProperties(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (e, t, n) {
      return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e;
    };
  }(),
      o = "0.0.1",
      s = function () {
    function Siteapp(e) {
      _classCallCheck(this, Siteapp), this.options = $.extend({}, this.defaults, e), this._initializeApplication();
    }return r(Siteapp, [{ key: "_initializeApplication", value: function _initializeApplication() {
        this._version = o, this._plugins = {}, this._uuids = [], this._initTriggers(), this._initMediaQuery(), this.options.disableStorage || this._setupStorageManager(), this.options.disableModules || this._setupMainModuleManager(), this.options.disableUi || this._setupMainUiManager(), this._dependencyInjections();
      } }, { key: "_initTriggers", value: function _initTriggers() {
        this.Triggers && (this.Triggers._ns = this.appName, this.Triggers.init($, this));
      } }, { key: "_initMediaQuery", value: function _initMediaQuery() {
        this.MediaQuery && (this.MediaQuery._ns = this.appName, this.MediaQuery._init());
      } }, { key: "_setupStorageManager", value: function _setupStorageManager() {
        this.StorageManager && !this.options.disableStorage && (this.options.storageManager ? this.Storage = new this.StorageManager(this.options.storageManager) : this.Storage = new this.StorageManager(), this.Storage._app = this, this.StorageAdapter && this.Storage.setNamespaceAdapter(this.appName + "Storage", new this.StorageAdapter(this.appName, "memory", {}, this.Storage)));
      } }, { key: "_setupMainModuleManager", value: function _setupMainModuleManager() {
        this.ModuleManager && !this.options.disableModules && (this.ModuleManager.prototype._app = this, this.options.moduleManager ? this.Modules = new this.ModuleManager(this.options.moduleManager) : this.Modules = new this.ModuleManager(), this.Modules._app = this, this.ModuleFactory && (this.ModuleFactory.prototype._app = this, this.ModuleFactory.prototype._manager = this.Modules, this.Modules.registerModule(this.ModuleFactory)), this.Module && (this.Module.prototype._app = this, this.Module.prototype._manager = this.Modules));
      } }, { key: "_setupMainUiManager", value: function _setupMainUiManager() {
        this.UiManager && !this.options.disableUi && (this.options.uiManager ? this.Ui = new this.UiManager(this.options.uiManager) : this.Ui = new this.UiManager(), this.Ui._app = this, this.UiManager.Screenlayer && (this.UiManager.Screenlayer.prototype._app = this, this.UiManager.Screenlayer.prototype._manager = this.Ui, this.Ui.registerModule(this.UiManager.Screenlayer)), this.UiManager.Screenpanel && (this.UiManager.Screenpanel.prototype._app = this, this.UiManager.Screenpanel.prototype._manager = this.Ui, this.Ui.registerModule(this.UiManager.Screenpanel)), this.UiManager.Action && (this.UiManager.Action.prototype._app = this, this.UiManager.Action.prototype._manager = this.Ui, this.Ui.registerModule(this.UiManager.Action)));
      } }, { key: "_dependencyInjections", value: function _dependencyInjections() {
        void 0 !== this.Triggers && (this.Triggers._ns = this.appName, this.Triggers._app = this), void 0 !== this.MediaQuery && (this.MediaQuery._ns = this.appName, this.MediaQuery._app = this), void 0 !== this.Keyboard && (this.Keyboard._ns = this.appName, this.Keyboard._app = this), void 0 !== this.Exception && (this.Exception._ns = this.appName, this.Exception._app = this), void 0 !== this.Debugger && (this.Debugger._ns = this.appName, this.Debugger._app = this), void 0 !== this.Logger && (this.Logger._ns = this.appName, this.Logger._app = this), void 0 !== this.Module && (this.Module._ns = this.appName, this.Module._app = this), void 0 !== this.ModuleFactory && (this.ModuleFactory._ns = this.appName, this.ModuleFactory._app = this), void 0 !== this.Plugin && (this.Plugin._ns = this.appName, this.Plugin._app = this);
      } }, { key: "addToGlobal", value: function addToGlobal(e, t) {
        var e = e || window || {},
            n = this.utilities.functionName(this),
            i = String(n).charAt(0).toLowerCase() + n.slice(1);if (void 0 === e[i] && (e[i] = this), !1 !== t) {
          var a = "$" + String(i).charAt(0).toUpperCase();void 0 === e[a] && (e[a] = e[i]);
        }return e;
      } }, { key: "addPluginShortcut", value: function addPluginShortcut(e) {
        var e = e || window || {},
            t = this,
            n = this.utilities.functionName(this),
            i = "$$" + String(n).charAt(0).toUpperCase(),
            a = "$$" + String(n).charAt(0).toUpperCase() + n.slice(1),
            r = function (e) {
          var n = $(e);if (1 == n.length) return n.data(t.appName + "Plugin");var i = [];return n.each(function (e, n) {
            var a = $(n).data(t.appName + "Plugin");i[a.uuid] = a;
          }), i;
        };return void 0 === e[i] && (e[i] = r), void 0 === e[a] && (e[a] = r), e;
      } }, { key: "addToJquery", value: function addToJquery(e) {
        var t = this,
            n = function (e) {
          return t.run(this, e), this;
        };return e.fn[this.appName] = n, e;
      } }, { key: "reInit", value: function reInit(e) {
        return this.Modules && !this.options.Modules && this.Modules.reInit(e), this.Ui && !this.options.disableUi && this.Ui.reInit(e), this;
      } }, { key: "reflow", value: function reflow(e, t) {
        return this.Modules && !this.options.disableModules && this.Modules.reflow(e, t), this.Ui && !this.options.disableUi && this.Ui.reflow(e, t), this;
      } }, { key: "run", value: function run(e, t) {
        this.options.hasJS && this.hasJS(), void 0 === e ? e = document : 1 === arguments.length && "string" == typeof e && 0 === $(e).length && (t = e, e = document);var n = $(e),
            i = typeof t,
            a = this;if ("undefined" === i) this.MediaQuery && "function" == typeof this.MediaQuery._init && this.MediaQuery._init(), this.reflow(n);else {
          if ("string" !== i) throw new TypeError("We're sorry, " + i + " is not a valid parameter. You must use a string representing the method you wish to invoke.");if (this.options.disablePrivateMethods && "_init" !== t && t.charAt(0) == this.options.privateMethodsIndicator) throw new TypeError("We're sorry, invoking private module/plugin methods is restricted.");var r = [];arguments.length > 2 && (r = Array.prototype.slice.call(arguments, 2));var o = n.data(a.appName + "Plugin");if (void 0 !== o && void 0 !== o[t]) 1 === n.length ? o[t].apply(o, r) : n.each(function (e, n) {
            o[t].apply($(n).data(a.appName + "Plugin"), r);
          });else if (n.length > 0) throw new ReferenceError("We're sorry, '" + t + "' is not an available method for " + (o ? a.utilities.functionName(o) : "this element") + ".");
        }return this;
      } }, { key: "hasJS", value: function hasJS() {
        var e = $("." + this.options.classnameNoJS);e.length && e.removeClass(this.options.classnameNoJS);
      } }, { key: "plugin", value: function plugin(e, t) {
        return this.Modules.registerModule(e, t);
      } }, { key: "registerPlugin", value: function registerPlugin(e, t) {
        return this.Modules.initializeModule(e, t);
      } }, { key: "unregisterPlugin", value: function unregisterPlugin(e) {
        return this.Modules.destroyModule(e);
      } }, { key: "appName", get: function () {
        return this.options.namespace;
      } }, { key: "instanceName", get: function () {
        return this.utilities.functionName(this);
      } }, { key: "version", get: function () {
        return this._version;
      }, set: function (e) {
        this._version = e;
      } }, { key: "NS", get: function () {
        return this.Namespace;
      } }, { key: "D", get: function () {
        return this.Debugger;
      } }, { key: "L", get: function () {
        return this.Log;
      } }]), Siteapp;
  }();s.prototype.defaults = { namespace: "siteapp", lang: "en_US", disableStorage: !1, disableUi: !1, disableModules: !1, hasJS: !0, classnameNoJS: "no-js", disablePrivateMethods: !0, privateMethodsIndicator: "_" }, s.prototype.libs = {}, s.prototype.utilities = { throttle: i["b"], genUUID: i["c"], transitionend: i["d"], functionName: i["e"], parseValue: i["f"], hyphenate: i["g"], rtl: i["a"], secureProperties: i["h"], EventManager: a["a"] }, s.prototype.sys = s.prototype.utilities, s.utilities = s.prototype.utilities, s.sys = s.prototype.utilities, function () {
    Date.now && window.Date.now || (window.Date.now = Date.now = function () {
      return new Date().getTime();
    });for (var e = ["webkit", "moz"], t = 0; t < e.length && !window.requestAnimationFrame; ++t) {
      var n = e[t];window.requestAnimationFrame = window[n + "RequestAnimationFrame"], window.cancelAnimationFrame = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"];
    }if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
      var i = 0;window.requestAnimationFrame = function (e) {
        var t = Date.now(),
            n = Math.max(i + 16, t);return setTimeout(function () {
          e(i = n);
        }, n - t);
      }, window.cancelAnimationFrame = clearTimeout;
    }window.performance && window.performance.now || (window.performance = { start: Date.now(), now: function () {
        return Date.now() - this.start;
      } });
  }(), Function.prototype.bind || (Function.prototype.bind = function (e) {
    if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be " + "bound is not callable");var t = Array.prototype.slice.call(arguments, 1),
        n = this,
        i = function () {},
        a = function () {
      return n.apply(this instanceof i ? this : e, t.concat(Array.prototype.slice.call(arguments)));
    };return this.prototype && (i.prototype = this.prototype), a.prototype = new i(), a;
  }), t["a"] = s;
}, function (e, t, n) {
  "use strict";
  function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }var i = function () {
    function defineProperties(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (e, t, n) {
      return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e;
    };
  }(),
      a = function () {
    function EventManager(e) {
      _classCallCheck(this, EventManager), this._eventList = {}, this._initTarget(e);
    }return i(EventManager, [{ key: "_initTarget", value: function _initTarget(e) {
        if (e) {
          var t = this;e.events = t, e.on = function (e, n) {
            t.attachEvent(e, n);
          }, e.off = function (e, n) {
            t.detachEvent(e, n);
          }, e.trigger = function (e) {
            for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) {
              i[a - 1] = arguments[a];
            }t.raiseEvent(e, i);
          }, this.target = e;
        }
      } }, { key: "_getEvent", value: function _getEvent(e, t) {
        if (!this._eventList[e]) {
          if (!t) return null;this._eventList[e] = [];
        }return this._eventList[e];
      } }, { key: "attachEvent", value: function attachEvent(e, t) {
        this._getEvent(e, !0).push(t);
      } }, { key: "detachEvent", value: function detachEvent(e, t) {
        var n = this._getEvent(e);if (n) if ("function" == typeof t) {
          var i = function (e, t) {
            for (var n = e.length; n < e.length; n++) {
              if (e[n] && e[n] === t) return n;
            }return -1;
          }(n, t);i > -1 && n.splice(i, 1);
        } else delete this._eventList[e];
      } }, { key: "raiseEvent", value: function raiseEvent(e, t) {
        var n = this._getEventHandler(e),
            i = this.target;n && n.apply(i, t);
      } }, { key: "_getEventHandler", value: function _getEventHandler(e) {
        var t = this._getEvent(e, !1),
            n = this;return t && 0 !== t.length ? function () {
          for (var e = arguments.length, i = Array(e), a = 0; a < e; a++) {
            i[a] = arguments[a];
          }for (var r = 0; r < t.length; r++) {
            if (!1 === (void 0 !== n.target ? t[r].apply(n.target, i) : t[r].apply(this, i))) break;
          }
        } : null;
      } }]), EventManager;
  }();t["a"] = a;
}, function (e, t, n) {
  "use strict";
  function findFocusable(e) {
    return !!e && e.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function () {
      return !(!$(this).is(":visible") || $(this).attr("tabindex") < 0);
    });
  }function parseKey(e) {
    var t = a[e.which || e.keyCode] || String.fromCharCode(e.which).toUpperCase();return t = t.replace(/\W+/, ""), e.shiftKey && (t = "SHIFT_" + t), e.ctrlKey && (t = "CTRL_" + t), e.altKey && (t = "ALT_" + t), e.metaKey && (t = "META_" + t), t = t.replace(/_$/, "");
  }n.d(t, "a", function () {
    return o;
  });var i = n(2),
      a = { 9: "TAB", 13: "ENTER", 27: "ESCAPE", 32: "SPACE", 35: "END", 36: "HOME", 37: "ARROW_LEFT", 38: "ARROW_UP", 39: "ARROW_RIGHT", 40: "ARROW_DOWN" },
      r = {},
      o = { keys: function getKeyCodes(e) {
      var t = {};for (var n in e) {
        t[e[n]] = e[n];
      }return t;
    }(a), parseKey: parseKey, handleKey: function (e, t, a) {
      var o,
          s,
          u,
          l = r[t],
          c = this.parseKey(e);if (l) if (o = void 0 === l.ltr ? l : n.i(i["a"])() ? $.extend({}, l.ltr, l.rtl) : $.extend({}, l.rtl, l.ltr), s = o[c], (u = a[s]) && "function" == typeof u) {
        var p = u.apply(null, [e]);(a.handled || "function" == typeof a.handled) && a.handled(p);
      } else (a.unhandled || "function" == typeof a.unhandled) && a.unhandled();
    }, findFocusable: findFocusable, register: function (e, t) {
      r[e] = t;
    }, trapFocus: function (e) {
      var t = findFocusable(e),
          n = t.eq(0),
          i = t.eq(-1);e.on("keydown." + o._ns + ".trapfocus", function (e) {
        e.target === i[0] && "TAB" === parseKey(e) ? (e.preventDefault(), n.focus()) : e.target === n[0] && "SHIFT_TAB" === parseKey(e) && (e.preventDefault(), i.focus());
      });
    }, releaseFocus: function (e) {
      e.off("keydown." + o._ns + ".trapfocus");
    }, unregister: function (e) {
      "" != e ? ($(window).off("keydown." + this.application.appName + "." + e), void 0 !== r[e] && delete r[e]) : ($(window).off("keydown." + this.application.appName), r = {});
    }, addKeyHandlers: function (e, t) {
      var n = this,
          i = (this._app, "keydown." + this._ns),
          a = {},
          r = {};if ("" == t) {
        Siteapp.sys.genUUID(6);
      }i = i + "." + t;for (var o in e) {
        if (e.hasOwnProperty(o)) {
          var s = t + "" + o;a[o] = s, r[s] = e[o];
        }
      }$(window).on(i, function (e) {
        this.id = t + "" + Siteapp.sys.genUUID(6), n.handleKey(e, t, r);
      }), this.register(t, a);
    } };
}, function (e, t, n) {
  "use strict";
  function parseStyleToObject(e) {
    var t = {};return "string" != typeof e ? t : (e = e.trim().slice(1, -1)) ? t = e.split("&").reduce(function (e, t) {
      var n = t.replace(/\+/g, " ").split("="),
          i = n[0],
          a = n[1];return i = decodeURIComponent(i), a = void 0 === a ? null : decodeURIComponent(a), e.hasOwnProperty(i) ? Array.isArray(e[i]) ? e[i].push(a) : e[i] = [e[i], a] : e[i] = a, e;
    }, {}) : t;
  }n.d(t, "a", function () {
    return i;
  });var i = { queries: [], current: "", atLeast: function (e) {
      var t = this.get(e);return !!t && window.matchMedia(t).matches;
    }, get: function (e) {
      for (var t in this.queries) {
        var n = this.queries[t];if (e === n.name) return n.value;
      }return null;
    }, _init: function () {
      var e,
          t = this,
          n = $(".Siteapp-mq").css("font-family");e = parseStyleToObject(n);for (var i in e) {
        t.queries.push({ name: i, value: "only screen and (min-width: " + e[i] + ")" });
      }this.current = this._getCurrentSize(), this._watcher();
    }, _getCurrentSize: function () {
      var e;for (var t in this.queries) {
        var n = this.queries[t];window.matchMedia(n.value).matches && (e = n);
      }return "object" == typeof e ? e.name : e;
    }, _watcher: function () {
      var e = this;$(window).on("resize." + i._ns + ".mediaquery", function () {
        var t = e._getCurrentSize();t !== e.current && ($(window).trigger("changed." + i._ns + ".mediaquery", [t, e.current]), e.current = t);
      });
    } };window.matchMedia || (window.matchMedia = function () {
    var e = window.styleMedia || window.media;if (!e) {
      var t = document.createElement("style"),
          n = document.getElementsByTagName("script")[0],
          i = null;t.type = "text/css", t.id = "matchmediajs-test", n.parentNode.insertBefore(t, n), i = "getComputedStyle" in window && window.getComputedStyle(t, null) || t.currentStyle, e = { matchMedium: function (e) {
          var n = "@media " + e + "{ #matchmediajs-test { width: 1px; } }";return t.styleSheet ? t.styleSheet.cssText = n : t.textContent = n, "1px" === i.width;
        } };
    }return function (t) {
      return { matches: e.matchMedium(t || "all"), media: t || "all" };
    };
  }());
}, function (e, t, n) {
  "use strict";
  function debounceGlobalListener(e, t, n) {
    var i = void 0,
        a = Array.prototype.slice.call(arguments, 3);$(window).off(t).on(t, function (t) {
      i && clearTimeout(i), i = setTimeout(function () {
        n.apply(null, a);
      }, e || 10);
    });
  }n.d(t, "a", function () {
    return r;
  });var i = function () {
    for (var e = ["WebKit", "Moz", "O", "Ms", ""], t = 0; t < e.length; t++) {
      if (e[t] + "MutationObserver" in window) return window[e[t] + "MutationObserver"];
    }return !1;
  }(),
      a = function (e, t) {
    e.data(t).split(" ").forEach(function (n) {
      $("#" + n)["close" === t ? "trigger" : "triggerHandler"](t + "." + r._ns + ".trigger", [e]);
    });
  },
      r = { Listeners: { Basic: {}, Global: {} }, Initializers: {} };r.Listeners.Basic = { openListener: function () {
      a($(this), "open");
    }, closeListener: function () {
      $(this).data("close") ? a($(this), "close") : $(this).trigger("close." + r._ns + ".trigger");
    }, toggleListener: function () {
      $(this).data("toggle") ? a($(this), "toggle") : $(this).trigger("toggle." + r._ns + ".trigger");
    }, closeableListener: function (e) {
      e.stopPropagation();var t = $(this).data("closable");"" !== t ? Motion.animateOut($(this), t, function () {
        $(this).trigger("closed." + r._ns);
      }) : $(this).fadeOut().trigger("closed." + r._ns);
    }, toggleFocusListener: function () {
      var e = $(this).data("toggle-focus");$("#" + e).triggerHandler("toggle." + r._ns + ".trigger", [$(this)]);
    } }, r.Initializers.addOpenListener = function (e) {
    e.off("click." + r._ns + ".trigger", r.Listeners.Basic.openListener), e.on("click." + r._ns + ".trigger", "[data-open]", r.Listeners.Basic.openListener);
  }, r.Initializers.addCloseListener = function (e) {
    e.off("click." + r._ns + ".trigger", r.Listeners.Basic.closeListener), e.on("click." + r._ns + ".trigger", "[data-close]", r.Listeners.Basic.closeListener);
  }, r.Initializers.addToggleListener = function (e) {
    e.off("click." + r._ns + ".trigger", r.Listeners.Basic.toggleListener), e.on("click." + r._ns + ".trigger", "[data-toggle]", r.Listeners.Basic.toggleListener);
  }, r.Initializers.addCloseableListener = function (e) {
    e.off("close." + r._ns + ".trigger", r.Listeners.Basic.closeableListener), e.on("close." + r._ns + ".trigger", "[data-closeable], [data-closable]", r.Listeners.Basic.closeableListener);
  }, r.Initializers.addToggleFocusListener = function (e) {
    e.off("focus." + r._ns + ".trigger blur." + r._ns + ".trigger", r.Listeners.Basic.toggleFocusListener), e.on("focus." + r._ns + ".trigger blur." + r._ns + ".trigger", "[data-toggle-focus]", r.Listeners.Basic.toggleFocusListener);
  }, r.Listeners.Global = { resizeListener: function (e) {
      i || e.each(function () {
        $(this).triggerHandler("resizeme." + r._ns + ".trigger");
      }), e.attr("data-events", "resize");
    }, scrollListener: function (e) {
      i || e.each(function () {
        $(this).triggerHandler("scrollme." + r._ns + ".trigger");
      }), e.attr("data-events", "scroll");
    }, closeMeListener: function (e, t) {
      var n = e.namespace.split(".")[0];$("[data-" + n + "]").not('[data-yeti-box="' + t + '"]').each(function () {
        var e = $(this);e.triggerHandler("close." + r._ns + ".trigger", [e]);
      });
    } }, r.Initializers.addClosemeListener = function (e) {
    var t = $("[data-yeti-box]"),
        n = ["dropdown", "tooltip", "reveal"];if (e && ("string" == typeof e ? n.push(e) : "object" == typeof e && "string" == typeof e[0] && n.concat(e)), t.length) {
      var i = n.map(function (e) {
        return "closeme." + r._ns + "." + e;
      }).join(" ");$(window).off(i).on(i, r.Listeners.Global.closeMeListener);
    }
  }, r.Initializers.addResizeListener = function (e) {
    var t = $("[data-resize]");t.length && debounceGlobalListener(e, "resize." + r._ns + ".trigger", r.Listeners.Global.resizeListener, t);
  }, r.Initializers.addScrollListener = function (e) {
    var t = $("[data-scroll]");t.length && debounceGlobalListener(e, "scroll." + r._ns + ".trigger", r.Listeners.Global.scrollListener, t);
  }, r.Initializers.addMutationEventsListener = function (e) {
    if (!i) return !1;var t = e.find("[data-resize], [data-scroll], [data-mutate]"),
        n = function (e) {
      var t = $(e[0].target);switch (e[0].type) {case "attributes":
          "scroll" === t.attr("data-events") && "data-events" === e[0].attributeName && t.triggerHandler("scrollme." + r._ns + ".trigger", [t, window.pageYOffset]), "resize" === t.attr("data-events") && "data-events" === e[0].attributeName && t.triggerHandler("resizeme." + r._ns + ".trigger", [t]), "style" === e[0].attributeName && (t.closest("[data-mutate]").attr("data-events", "mutate"), t.closest("[data-mutate]").triggerHandler("mutateme." + r._ns + ".trigger", [t.closest("[data-mutate]")]));break;case "childList":
          if (t.closest("[data-mutate]").attr("data-events", "mutate"), t.closest("[data-mutate]").triggerHandler("mutateme." + r._ns + ".trigger", [t.closest("[data-mutate]")]), t.data(r._ns + "Plugin")) {
            t.data(r._ns + "Plugin").reflow && t.thalia("reflow");
          } else t.thalia();$(t.closest("[data-mutate]")).trigger("mutateme");break;default:
          return !1;}
    };if (t.length) for (var a = 0; a <= t.length - 1; a++) {
      var o = new i(n);o.observe(t[a], { attributes: !0, childList: !0, characterData: !1, subtree: !0, attributeFilter: ["data-events", "style"] });
    }
  }, r.Initializers.addSimpleListeners = function () {
    var e = $(document);r.Initializers.addOpenListener(e), r.Initializers.addCloseListener(e), r.Initializers.addToggleListener(e), r.Initializers.addCloseableListener(e), r.Initializers.addToggleFocusListener(e);
  }, r.Initializers.addGlobalListeners = function () {
    var e = $(document);r.Initializers.addMutationEventsListener(e), r.Initializers.addResizeListener(), r.Initializers.addScrollListener(), r.Initializers.addClosemeListener();
  }, r.init = function (e, t) {
    if (void 0 === e.triggersInitialized) {
      e(document);"complete" === document.readyState ? (r.Initializers.addSimpleListeners(), r.Initializers.addGlobalListeners()) : e(document).ready(function () {
        r.Initializers.addSimpleListeners(), r.Initializers.addGlobalListeners();
      }), e.triggersInitialized = !0;
    }t && (t.Triggers = r, t.IHearYou = r.Initializers.addGlobalListeners);
  };
}, function (e, t, n) {
  "use strict";
  function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;
  }function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }var i = n(0),
      a = function () {
    function defineProperties(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (e, t, n) {
      return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e;
    };
  }(),
      r = function (e) {
    function ModuleFactoryException() {
      return _classCallCheck(this, ModuleFactoryException), _possibleConstructorReturn(this, (ModuleFactoryException.__proto__ || Object.getPrototypeOf(ModuleFactoryException)).apply(this, arguments));
    }return _inherits(ModuleFactoryException, e), a(ModuleFactoryException, [{ key: "name", get: function () {
        return "SiteappModuleFactoryException";
      } }]), ModuleFactoryException;
  }(i["a"]),
      o = { deps: [], module: null, callback: null, allowPath: !0, allowExtern: !1, externHosts: ["localhost", location.hostname] },
      s = function () {
    function ModuleFactory(e, t) {
      if (_classCallCheck(this, ModuleFactory), e) {
        this.$element = $(e), this.options = $.extend({}, o, this.$element.data(), t), Siteapp.sys.secureProperties(this.options, ["allowPath", "allowExtern", "externHosts"]), this._init();
      }
    }return a(ModuleFactory, [{ key: "_init", value: function _init(e) {
        this._dependencies = null, this._module = null, this._callback = null, "object" == typeof option && (this.options = $.extend({}, this.options, e));try {
          this._dependencies = this.options.deps, this._module = this.options.module, this._callback = this.options.callback, this.inject();
        } catch (e) {
          throw new r("ModuleFactoryError loading module: " + e.message);
        } finally {
          return;
        }
      } }, { key: "inject", value: function inject(e, t, n) {
        e || (e = this._dependencies), t || (t = this._module), n || (n = this._callback), "string" == typeof e && (e = String(e).split(",")), "function" != typeof e.join && (e = []);var i = this;if (e.length > 0) {
          if (!this._allowURIs(e)) throw new Error("SECURITY ALERT: One or more of the dependencies requested are not allowed to be included!");requirejs(e, function () {
            i.injectModule(t, n);
          });
        } else this.injectModule(t, n);
      } }, { key: "injectModule", value: function injectModule(e, t) {
        if (e || (e = this._module), t || (t = this._callback), "string" == typeof e) {
          var n = this,
              i = n.$element,
              a = n.application;if (!this._allowURI(e)) throw new Error("SECURITY ALERT: The module requested is not allowed to be included!");requirejs([e], function () {
            n.destroy(), i[a.appName](), a.NS.isFunc(t) && a.NS.func(t).apply(a, [i]);
          });
        }
      } }, { key: "_allowURIs", value: function _allowURIs(e) {
        if ("function" != typeof e.join) return !1;var t = !1;for (var n in e) {
          t = t || this._allowURI(e[n]);
        }return t;
      } }, { key: "_allowURI", value: function _allowURI(e) {
        if (!this.options.allowPath && (String(e).indexOf("/") >= 0 || String(e).indexOf("/") < String(e).length)) return !1;if (!this.options.allowExtern && (this._hasProtocol(e) || this._isExtern(e))) return !1;if (this.options.allowExtern && this.options.externHosts.length > 0) {
          var t = !1;for (var n in this.options.externHosts) {
            t = t || this._hasHost(e, this.options.externHosts[n]);
          }if (!t) return !1;
        }return !0;
      } }, { key: "_isExtern", value: function _isExtern(e) {
        return (new RegExp("^(http(s)*:)*\\/\\/").test(e) || this._hasProtocol(e)) && !this._hasHost(e, location.hostname);
      } }, { key: "_hasProtocol", value: function _hasProtocol(e) {
        return new RegExp("^[\\w|-]+:").test(e);
      } }, { key: "_hasHost", value: function _hasHost(e, t) {
        return -1 != [2, 3, 7, 8].indexOf(String(e).indexOf(t));
      } }, { key: "destroy", value: function destroy() {
        this.$element.removeAttr("data-" + this.application.appName + "-module-factory").removeAttr("data-deps").removeAttr("data-module").removeAttr("data-callback"), this.manager.destroyModule(this);
      } }, { key: "module", get: function () {
        return this._module;
      }, set: function (e) {
        if (!(e instanceof Module)) throw new r("Module to assing must be an instance of Siteapp.Module");this._module = e;
      } }, { key: "manager", get: function () {
        return this._manager;
      }, set: function (e) {
        if (!(e instanceof ModuleManager)) throw new r("Invalid module manager object to attach, must be an instance of Siteapp.ModuleManager");this._manager = e;
      } }, { key: "application", get: function () {
        return this._app;
      }, set: function (e) {
        if (!(e instanceof Siteapp)) throw new r("Invalid application object to attach, must be an instance of Siteapp");this._app = e;
      } }]), ModuleFactory;
  }();t["a"] = s;
}, function (e, t, n) {
  "use strict";
  function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;
  }function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }n.d(t, "a", function () {
    return u;
  });var i = n(0),
      a = n(11),
      r = function () {
    function defineProperties(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (e, t, n) {
      return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e;
    };
  }(),
      o = {},
      s = function (e) {
    function StorageAdapterException() {
      return _classCallCheck(this, StorageAdapterException), _possibleConstructorReturn(this, (StorageAdapterException.__proto__ || Object.getPrototypeOf(StorageAdapterException)).apply(this, arguments));
    }return _inherits(StorageAdapterException, e), r(StorageAdapterException, [{ key: "name", get: function () {
        return "SiteappStorageAdapterException";
      } }]), StorageAdapterException;
  }(i["a"]),
      u = function () {
    function StorageAdapter(e, t, n, i, a) {
      _classCallCheck(this, StorageAdapter), this.options = $.extend({}, o, a), this._init(e, t, n, i);
    }return r(StorageAdapter, [{ key: "_init", value: function _init(e, t, n, i) {
        this.data = n || {}, this.manager = i || null, this.namespace = e || "data" + Siteapp.prototype.genUUID(), this.type = t || "memory";
      } }, { key: "getItem", value: function getItem(e) {
        return this.data[e];
      } }, { key: "setItem", value: function setItem(e, t) {
        var n = this.data;return n[e] = t, this.data = n, this;
      } }, { key: "data", get: function () {
        return this._data;
      }, set: function (e) {
        if (!(e instanceof Object)) throw new s("data set must be an object");this._data = e;
      } }, { key: "namespace", get: function () {
        return this._namespace;
      }, set: function (e) {
        if ("string" != typeof e) throw new s("namespace must be a string");this._namespace = e;
      } }, { key: "type", get: function () {
        return this._type;
      }, set: function (e) {
        if ("string" != typeof e) throw new s("type identifier must be a string");if (-1 == this.manager.types.indexOf(e)) throw new s('type identifier must be one of "' + a["a"].types.join('", "') + '"');this._type = e;
      } }, { key: "manager", get: function () {
        return this._manager;
      }, set: function (e) {
        if (null !== e && !(e instanceof a["a"])) throw new s("manager must be an instance of Siteapp.StorageManager");this._manager = e;
      } }]), StorageAdapter;
  }();
}, function (e, t, n) {
  "use strict";
  function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;
  }function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }n.d(t, "a", function () {
    return l;
  });var i = n(0),
      a = n(10),
      r = function () {
    function defineProperties(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (e, t, n) {
      return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e;
    };
  }(),
      o = "0.0.1",
      s = {},
      u = function (e) {
    function StorageManagerException() {
      return _classCallCheck(this, StorageManagerException), _possibleConstructorReturn(this, (StorageManagerException.__proto__ || Object.getPrototypeOf(StorageManagerException)).apply(this, arguments));
    }return _inherits(StorageManagerException, e), r(StorageManagerException, [{ key: "name", get: function () {
        return "SiteappStorageManagerException";
      } }]), StorageManagerException;
  }(i["a"]),
      l = function () {
    function StorageManager(e) {
      _classCallCheck(this, StorageManager), this.options = $.extend({}, s, e), this._init();
    }return r(StorageManager, [{ key: "_init", value: function _init() {
        this._version = o, this._namespaces = {}, this._adapters = {};
      } }, { key: "setNamespaceAdapter", value: function setNamespaceAdapter(e, t) {
        if (!(t instanceof a["a"])) throw new u("Invalid storage adapter object to set");void 0 === this.namespaces[e] && (this.namespaces[e] = { data: {}, adapters: {} }), this.namespaces[e].adapters[t.type] = t;
      } }, { key: "application", get: function () {
        return this._app;
      }, set: function (e) {
        if (!(e instanceof Siteapp)) throw new u("Invalid application object to attach");this._app = e;
      } }, { key: "version", get: function () {
        return this._version;
      } }, { key: "types", get: function () {
        return ["memory", "elementData", "sessionStorage", "cookie", "localStorage", "service"];
      } }, { key: "namespaces", get: function () {
        return this._namespaces;
      } }]), StorageManager;
  }();
}, function (e, t, n) {
  "use strict";
  n.d(t, "a", function () {
    return a;
  });var i = this,
      a = { debugentries: [], types: ["log", "debug", "info", "warn", "error"], add: function (e) {
      var t = { type: e.type || "info", message: e.message || "", time: e.time || new Date() };return this.debugentries.push(t), this;
    }, clear: function () {
      return this.debugentries = [], this;
    }, toEntry: function () {
      var e = arguments;return 1 == e.length && (e[1] = e[0], e[0] = "info"), { type: e[0] || "info", message: e[1] || "", time: new Date() };
    }, debug: function () {
      return (console || "function" == typeof console.debug) && $LCARS.getInstance().config.debug, this;
    }, log: function (e) {
      var t = this.toEntry("log", e);return this.add(t).console(t), this;
    }, info: function (e) {
      var t = this.toEntry("info", e);return this.add(t).console(t), this;
    }, warn: function (e) {
      var t = this.toEntry("warn", e);return this.add(t).console(t), this;
    }, error: function (e) {
      var t = this.toEntry("error", e);return this.add(t).console(t), this;
    }, console: function (e) {
      if (!(console && e && e.type && e.message && e.time && $LCARS.getInstance().config.debug)) return this;[String(e.type).toUpperCase(), ": ", String(e.message), " - ", String(e.time), ""].join("");return console[e.type], this;
    }, get: function () {
      if (0 === arguments.length) return this.debugentries;if (1 == arguments.length) {
        var e = [];for (var t in this.debugentries) {
          this.debugentries[t].type == arguments[0] && e.push(this.debugentries[t]);
        }return e;
      }return !1;
    }, getInstance: function () {
      return this;
    }, _app: function (e) {
      if (!e) return i.__app;i.__app = e;
    } };
}, function (e, t, n) {
  "use strict";
  n.d(t, "a", function () {
    return a;
  });var i = this,
      a = { logentries: [], loglevel: 0, logtypes: ["debug", "info", "warn", "exception"], _currentIndex: 0, log: function (e, t, n) {
      return this.logentries.push(arguments), this;
    }, get: function () {
      return arguments.length > 0 ? this.logentries[parseInt(arguments[0])] : this.logentries;
    }, clear: function () {
      return this.logentries = [], this._currentIndex = 0, this;
    }, setLevel: function () {
      return arguments.length > 0 ? this.loglevel = parseInt(arguments[0]) : this.loglevel = 0, this;
    }, _app: function (e) {
      if (!e) return i.__app;i.__app = e;
    } };
}, function (e, t, n) {
  "use strict";
  function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;
  }function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }var i = n(1),
      a = function () {
    function defineProperties(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (e, t, n) {
      return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e;
    };
  }(),
      r = { screenlayer: null, targetMode: "append", activeClass: "active", panelSelector: "> *" },
      o = function (e) {
    function Paneladapter(e, t) {
      _classCallCheck(this, Paneladapter);var n = _possibleConstructorReturn(this, (Paneladapter.__proto__ || Object.getPrototypeOf(Paneladapter)).call(this, e, t));return n.options = $.extend({}, n.options, r, t, n.$element.data()), n.events = new Siteapp.sys.EventManager(n), n;
    }return _inherits(Paneladapter, e), a(Paneladapter, [{ key: "getActiveIndex", value: function getActiveIndex() {
        return this.getActivePanel().index();
      } }, { key: "getActivePanel", value: function getActivePanel() {
        return this.$container.find("> ." + this.options.activeClass);
      } }, { key: "setActive", value: function setActive(e) {
        var t;return e && (t = $(e), this.setInactive(), t.addClass(this.options.activeClass), this.trigger("activatepanel", t), this.$element.trigger("activatepanel", t)), this;
      } }, { key: "setInactive", value: function setInactive(e) {
        var t;return t = e ? $(e) : this.$container.find(this.options.itemSelector), t.removeClass(this.options.activeClass), this.trigger("deactivatepanel", t), this.$element.trigger("deactivatepanel", t), this;
      } }, { key: "isActive", value: function isActive(e) {
        return !!e && $(e).hasClass(this.options.activeClass);
      } }, { key: "addPanel", value: function addPanel(e, t) {
        if (e) {
          if (!1 === t) {
            this.$container.append(e);var n = this.$container.children().last();
          } else {
            this.getActivePanel().appendTo(e);var n = this.getActivePanel().next();
          }this.trigger("addpanel", n), this.$element.trigger("addpanel", n), this.selectPanel(n), this.reflow();
        }
      } }, { key: "removePanel", value: function removePanel(e) {
        if (e) {
          var t = this.$container.find(e);t && (this.trigger("removepanel"), this.$element.trigger("removepanel", t), t.remove(), this.reflow());
        }
      } }, { key: "selectPanel", value: function selectPanel(e) {
        var t = this.$container.find(e);1 == t.length && (this.setActive(t), this.trigger("selectpanel", t), this.$element.trigger("selectpanel", t));
      } }, { key: "container", set: function (e) {
        this.$container = e.jquery ? e : $(e);
      }, get: function () {
        return this.$container ? this.$container : this.$element;
      } }]), Paneladapter;
  }(i["a"]);t["a"] = o;
}, function (e, t, n) {
  "use strict";
  function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;
  }function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }var i = n(1),
      a = function () {
    function defineProperties(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (e, t, n) {
      return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e;
    };
  }(),
      r = { type: "default", adapter: "default", configurable: !0, removable: !0, adapters: { default: {} } },
      o = function (e) {
    function Screenlayer(e, t) {
      _classCallCheck(this, Screenlayer);var n = _possibleConstructorReturn(this, (Screenlayer.__proto__ || Object.getPrototypeOf(Screenlayer)).call(this, e, t));return Siteapp.sys.functionName(n), n;
    }return _inherits(Screenlayer, e), a(Screenlayer, [{ key: "setAdapter", value: function setAdapter(e) {
        this.application.Ui.Paneladapters.isRegistered(e) && (this.options.adapter = e, this.$element.data("adapter", e), this.$element.attr("data-adapter", e));
      } }, { key: "minimize", value: function minimize() {
        this.$element.addClass("screenlayer-minimized"), this.hide();
      } }, { key: "restore", value: function restore() {
        this.$element.removeClass("screenlayer-minimized"), this.show();
      } }, { key: "setActive", value: function setActive() {
        this._active = !0, this.$element.addClass("screenlayer-active");
      } }, { key: "setInactive", value: function setInactive() {
        this._active = !1, this.$element.removeClass("screenlayer-active");
      } }, { key: "focus", value: function focus() {
        this.manager.focusLayer(this);
      } }, { key: "panelAdapter", get: function () {
        return "" != this.options.adapter ? this.application.Ui.getAdapterByName(this.options.adapter) : null;
      } }, { key: "isActive", get: function () {
        return !0 === this._active;
      } }]), a(Screenlayer, [{ key: "_setup", value: function _setup(e, t) {
        this.$element = e, this.options = $.extend({}, r, this.options, t);var n = Siteapp.sys.functionName(this);this.className = "earthTheme.Ui." + n, this._init();
      } }, { key: "_init", value: function _init() {
        this.events = new Siteapp.sys.EventManager(this), this._events(), this._initPanelAdapter();var e = Siteapp.sys.functionName(this);this.manager.connectLayer(this, e);
      } }, { key: "_initPanelAdapter", value: function _initPanelAdapter() {} }, { key: "_events", value: function _events() {
        this._addKeyHandler(), this._addClickHandler();
      } }, { key: "_addClickHandler", value: function _addClickHandler() {} }, { key: "_addKeyHandler", value: function _addKeyHandler() {} }, { key: "_removeKeyHandler", value: function _removeKeyHandler() {} }, { key: "_destroy", value: function _destroy() {
        this._removeKeyHandler(), this.$element.find("*").off("." + _this.application.NS), this.$element.off("." + _this.application.NS), this.$element.remove();
      } }]), Screenlayer;
  }(i["a"]);t["a"] = o;
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });var i = n(4),
      a = n(6),
      r = n(7),
      o = n(8),
      s = n(0),
      u = n(12),
      l = n(13),
      c = n(1),
      p = n(9),
      f = n(3),
      h = n(10),
      d = n(11),
      g = n(20),
      y = n(18),
      _ = n(15),
      v = n(19),
      m = n(14);i["a"].prototype.Keyboard = a["a"], i["a"].prototype.MediaQuery = r["a"], i["a"].prototype.Triggers = o["a"], i["a"].Keyboard = i["a"].prototype.Keyboard, i["a"].MediaQuery = i["a"].prototype.MediaQuery, i["a"].Triggers = i["a"].prototype.Triggers, i["a"].prototype.Exception = s["a"], i["a"].prototype.Debugger = u["a"], i["a"].prototype.Log = l["a"], i["a"].Exception = i["a"].prototype.Exception, i["a"].Debugger = i["a"].prototype.Debugger, i["a"].Log = i["a"].prototype.Log, i["a"].prototype.Module = c["a"], i["a"].Module = c["a"], i["a"].prototype.ModuleFactory = p["a"], i["a"].ModuleFactory = p["a"], i["a"].prototype.ModuleManager = f["a"], i["a"].ModuleManager = f["a"], i["a"].prototype.StorageAdapter = h["a"], i["a"].StorageAdapter = h["a"], i["a"].prototype.StorageManager = d["a"], i["a"].StorageManager = d["a"], i["a"].prototype.UiManager = g["a"], i["a"].UiManager = g["a"], i["a"].prototype.UiManager.Action = y["a"], i["a"].UiManager.Action = y["a"], i["a"].prototype.UiManager.Screenlayer = _["a"], i["a"].UiManager.Screenlayer = _["a"], i["a"].prototype.UiManager.Screenpanel = v["a"], i["a"].UiManager.Screenpanel = v["a"], i["a"].prototype.UiManager.Paneladapter = m["a"], i["a"].UiManager.Paneladapter = m["a"], i["a"].prototype.rtl = i["a"].prototype.utilities.rtl, i["a"].prototype.GetYoDigits = i["a"].prototype.utilities.genUUID, i["a"].prototype.transitionend = i["a"].prototype.utilities.transitionend, i["a"].rtl = i["a"].prototype.utilities.rtl, i["a"].GetYoDigits = i["a"].prototype.utilities.genUUID, i["a"].transitionend = i["a"].prototype.utilities.transitionend, i["a"].prototype.Plugin = i["a"].Module, i["a"].Plugin = i["a"].Module, window.Siteapp = i["a"], t["default"] = i["a"];
}, function (e, t, n) {
  "use strict";
  function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;
  }function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }var i = n(0),
      a = function () {
    function defineProperties(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (e, t, n) {
      return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e;
    };
  }(),
      r = "0.0.1",
      o = {},
      s = function (e) {
    function AdapterManagerException() {
      return _classCallCheck(this, AdapterManagerException), _possibleConstructorReturn(this, (AdapterManagerException.__proto__ || Object.getPrototypeOf(AdapterManagerException)).apply(this, arguments));
    }return _inherits(AdapterManagerException, e), a(AdapterManagerException, [{ key: "name", get: function () {
        return "SiteappAdapterManagerException";
      } }]), AdapterManagerException;
  }(i["a"]),
      u = function () {
    function AdapterManager(e) {
      _classCallCheck(this, AdapterManager), this.options = $.extend({}, o, e), this._init();
    }return a(AdapterManager, [{ key: "_init", value: function _init() {
        this._version = r, this._adapters = {};
      } }, { key: "register", value: function register(e, t) {
        Siteapp.sys.hyphenate(Siteapp.sys.functionName(e));return "" == t && (t = Siteapp.sys.functionName(e)), this.isRegistered(t) || (this._adapters[t] = e), this;
      } }, { key: "get", value: function get(e) {
        if (this.isRegistered(e)) return this.adapters[e];
      } }, { key: "unregister", value: function unregister(e) {
        return "string" != typeof e && (e = Siteapp.sys.functionName(e)), this.isRegistered(name) && (this._adapters[name] = void 0), this;
      } }, { key: "isRegistered", value: function isRegistered(e) {
        return void 0 !== this._adapters[e];
      } }, { key: "getAdapterByName", value: function getAdapterByName(e) {
        return this.isRegistered(e) ? this._adapters[e] : null;
      } }, { key: "adapters", get: function () {
        return this._adapters;
      } }, { key: "application", get: function () {
        return this._app;
      }, set: function (e) {
        if (!(e instanceof Siteapp)) throw new s("Invalid application object to attach");this._app = e;
      } }, { key: "version", get: function () {
        return this._version;
      } }]), AdapterManager;
  }();t["a"] = u;
}, function (e, t, n) {
  "use strict";
  function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;
  }function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }var i = n(1),
      a = function () {
    function defineProperties(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (e, t, n) {
      return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e;
    };
  }(),
      r = { target: "layer", layer: "_blank", request: { headers: { "X-Requested-With": "XMLHttpRequest" }, success: null, failure: null, complete: null }, removable: !1 },
      o = function (e) {
    function Action(e, t) {
      _classCallCheck(this, Action);var n = _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, e, t));return n.options = $.extend({}, r, n.$element.data(), n.options), Siteapp.sys.secureProperties(n.options, ["removable"]), n._init(), n.manager.initialize(n), n;
    }return _inherits(Action, e), a(Action, [{ key: "openInLayer", value: function openInLayer() {
        var e = this,
            t = e.targetLayer;t && $.ajax({ url: e.$element.attr("href"), beforeSend: e._ajaxBeforeSend.bind(e), success: function (n) {
            if (t.panelAdapter instanceof Siteapp.UiManager.Paneladapter) {
              try {
                var i = JSON.parse(n);
              } catch (e) {
                var i = n;
              }var a = null,
                  r = 0 == e.$element.find(".label").length ? e.$element.attr("title") ? e.$element.attr("title") : e.$element.attr("href") : e.$element.find(".label").first().text();"object" != typeof i ? (a = 0 == $(i).find("body").length ? i : $(i).find("body").html(), t.panelAdapter.addPanel({ title: r, body: a, footer: null })) : void 0 !== i.body ? t.panelAdapter.addPanel(i) : t.panelAdapter.addPanel({ title: null, body: n, footer: null });
            }"function" == typeof e.options.request.success && e.options.request.success.apply(e, arguments);
          }, failure: function (t) {
            "function" == typeof e.options.request.failure && e.options.request.failure.apply(e, arguments);
          }, complete: function (t) {
            "function" == typeof e.options.request.complete && e.options.request.complete.apply(e, arguments);
          } });
      } }, { key: "sendToModule", value: function sendToModule() {
        location.href = this.$element.attr("href");
      } }, { key: "link", value: function link() {
        location.href = this.$element.attr("href");
      } }, { key: "_init", value: function _init() {
        this.events = new Siteapp.sys.EventManager(this), this._events();
      } }, { key: "_events", value: function _events() {
        this._addKeyHandler(), this._addClickHandler();
      } }, { key: "_addClickHandler", value: function _addClickHandler() {
        var e = "." + this.application.appName,
            t = this;this.$element.off("click tap"), this.$element.on("click." + e + " tap." + e, function (e) {
          return "layer" == t.options.target ? t.openInLayer() : "module" == t.options.target ? t.sendToModule() : t.link(), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), !1;
        });
      } }, { key: "_addKeyHandler", value: function _addKeyHandler() {} }, { key: "_ajaxBeforeSend", value: function _ajaxBeforeSend(e) {
        var t = this.options.request.headers;t["X-Requested-With"] = this.application.appName;for (var n in t) {
          "" != t[n] && e.setRequestHeader(n, t[n]);
        }
      } }, { key: "targetLayer", get: function () {
        return "layer" == this.options.target && "" != this.options.layer ? this.application.Ui.getLayerByName(this.options.layer) : null;
      } }, { key: "href", get: function () {
        return this.$element.attr("href");
      } }]), Action;
  }(i["a"]);t["a"] = o;
}, function (e, t, n) {
  "use strict";
  function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;
  }function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }var i = n(1),
      a = function () {
    function defineProperties(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (e, t, n) {
      return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e;
    };
  }(),
      r = { title: null, body: null, footer: null, activeClass: "active", minimizedClass: "minimized" },
      o = function (e) {
    function Screenpanel(e, t) {
      _classCallCheck(this, Screenpanel);var n = _possibleConstructorReturn(this, (Screenpanel.__proto__ || Object.getPrototypeOf(Screenpanel)).call(this, e, t));return Siteapp.sys.functionName(n), n;
    }return _inherits(Screenpanel, e), a(Screenpanel, [{ key: "template", value: function template(e) {
        var t = Siteapp.sys.functionName(this);this.manager.options.namespacedModuleTriggers && (t = this.application.appName + "-" + t);var n = ["<div data-", t, ">", "<div data-", t, "-header>", "" == e.title ? "" : ['<h2 class="title">', e.title, "</h2>"].join(""), '<div class="wm-button-group">', '<button class="wm-previous" data-previous>', '<i href="#" class="icon fa-caret-left"><span class="label">previous</span></i>', "</button>", '<button class="wm-next" data-next>', '<i href="#" class="icon fa-caret-right"><span class="label">next</span></i>', "</button>", '<button class="wm-minimize" data-minimize disabled>', '<i href="#" class="icon fa-window-minimize"><span class="label">minimize</span></i>', "</button>", '<button class="wm-maximize" data-maximize disabled>', '<i href="#" class="icon fa-window-maximize"><span class="label">maximize</span></i>', "</button>", '<button class="wm-close" data-close>', '<i href="#" class="icon fa-close"><span class="label">close</span></i>', "</button>", "</div>", "</div>", "<div data-", t, "-body>", e.body, "</div>", "" == e.footer ? "" : ["<div data-", t, "-footer>", e.footer, "</div>"].join(""), "</div>"].join("");return $(n);
      } }, { key: "minimize", value: function minimize() {
        this.$element.addClass(this.options.minimizedClass), this.hide(), this.trigger("minimize");
      } }, { key: "restore", value: function restore() {
        this.$element.removeClass(this.options.minimizedClass), this.show(), this.trigger("restore");
      } }, { key: "setActive", value: function setActive() {
        this._active = !0, this.$element.addClass(this.options.activeClass), this.trigger("activate");
      } }, { key: "setInactive", value: function setInactive() {
        this._active = !1, this.$element.removeClass(this.options.activeClass), this.trigger("deactivate");
      } }, { key: "title", get: function () {
        return this.options.title ? String(this.options.title) : "";
      } }, { key: "body", get: function () {
        return this.options.body ? String(this.options.body) : "";
      } }, { key: "footer", get: function () {
        return this.options.footer ? String(this.options.footer) : "";
      } }, { key: "isActive", get: function () {
        return !0 === this._active;
      } }]), a(Screenpanel, [{ key: "_setup", value: function _setup(e, t) {
        this.$element = e, this.options = $.extend({}, r, this.options, t);var n = Siteapp.sys.functionName(this);this.className = "earthTheme.Ui." + n, this._init();
      } }, { key: "_init", value: function _init() {
        this.events = new Siteapp.sys.EventManager(this), this._events(), this.manager.initialize(this);
      } }, { key: "_events", value: function _events() {
        this._addKeyHandler(), this._addClickHandler();
      } }, { key: "_addClickHandler", value: function _addClickHandler() {} }, { key: "_addKeyHandler", value: function _addKeyHandler() {} }, { key: "_removeKeyHandler", value: function _removeKeyHandler() {} }, { key: "_destroy", value: function _destroy() {
        this._removeKeyHandler(), this.$element.find("*").off("." + this.application.appName), this.$element.off("." + this.application.appName), this.$element.remove();
      } }]), Screenpanel;
  }(i["a"]);t["a"] = o;
}, function (e, t, n) {
  "use strict";
  function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;
  }function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }var i = n(3),
      a = n(17),
      r = n(14),
      o = (n(15), function () {
    function defineProperties(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (e, t, n) {
      return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e;
    };
  }()),
      s = function get(e, t, n) {
    null === e && (e = Function.prototype);var i = Object.getOwnPropertyDescriptor(e, t);if (void 0 === i) {
      var a = Object.getPrototypeOf(e);return null === a ? void 0 : get(a, t, n);
    }if ("value" in i) return i.value;var r = i.get;if (void 0 !== r) return r.call(n);
  },
      u = function (e) {
    function Ui() {
      return _classCallCheck(this, Ui), _possibleConstructorReturn(this, (Ui.__proto__ || Object.getPrototypeOf(Ui)).apply(this, arguments));
    }return _inherits(Ui, e), o(Ui, [{ key: "connectLayer", value: function connectLayer(e, t) {
        this.initialize(e, t);
      } }, { key: "disconnectLayer", value: function disconnectLayer(e) {
        this.destroy(e);
      } }, { key: "focusLayer", value: function focusLayer(e) {
        e instanceof Siteapp.UiManager.Screenlayer && (this.unfocusLayers(), e.setActive(), e.$element.css({ zIndex: 1 }));
      } }, { key: "unfocusLayers", value: function unfocusLayers() {
        this.deactivateLayers(), this.layers.map(function (e, t) {
          t instanceof Siteapp.UiManager.Screenlayer && (t.setInactive(), t.$element.css({ zIndex: -1 }));
        });
      } }, { key: "activateLayer", value: function activateLayer(e) {
        e instanceof Siteapp.UiManager.Screenlayer && e.setActive();
      } }, { key: "deactivateLayers", value: function deactivateLayers() {
        var e = this.activeLayer;e instanceof Siteapp.UiManager.Screenlayer && e.setInactive();
      } }, { key: "getLayerByName", value: function getLayerByName(e) {
        var t = null;for (var n in this.layers) {
          var i = this.layers[n];i.options.name && i.options.name == e && (t = i);
        }return t;
      } }, { key: "getAdapterByName", value: function getAdapterByName(e) {
        var t = null;if (this.Paneladapters.isRegistered(e)) for (var n in this.adapters) {
          var i = this.adapters[n];i.options.name && i.options.name == e && (t = i);
        }return t;
      } }, { key: "_init", value: function _init() {
        s(Ui.prototype.__proto__ || Object.getPrototypeOf(Ui.prototype), "_init", this).call(this), this._screenlayers = [], this._paneladapters = [], this._events(), this._initPanelAdapterManager();
      } }, { key: "_initPanelAdapterManager", value: function _initPanelAdapterManager() {
        this.Paneladapters = new a["a"](), this.Paneladapters.application = this.application, this.Paneladapters.register(r["a"], "default");
      } }, { key: "_events", value: function _events() {
        this._addKeyHandler(), this._addClickHandler();
      } }, { key: "_addClickHandler", value: function _addClickHandler() {} }, { key: "_addKeyHandler", value: function _addKeyHandler() {
        var e = { ESCAPE: function (e) {}, X: function (e) {}, ALT_CTRL_X: function (e) {}, META_A: function (e) {} };Siteapp.Keyboard.addKeyHandlers(e, "UiKeys" + this._uuid);
      } }, { key: "_destroy", value: function _destroy() {
        Siteapp.Keyboard.unregister("UiKeys" + this._uuid), this.$element.find("*").off("." + _this.application.appName), this.$element.off("." + _this.application.appName), this.$element.remove();
      } }, { key: "activeLayer", get: function () {
        for (var e in this.layers) {
          if (this.layers[e].isActive) return this.layers[e];
        }return null;
      } }, { key: "layers", get: function () {
        var e = this,
            t = [],
            n = [],
            i = e.application.appName;return $.each(this._modules, function (t, a) {
          var r = Siteapp.sys.hyphenate(Siteapp.sys.functionName(a));e.options.namespacedModuleTriggers ? n.push("[data-" + i + "-" + r + "]") : n.push("[data-" + r + "]");
        }), $(n.join(",")).each(function (e, n) {
          var a = $(n).data(i + "Plugin");a instanceof Siteapp.UiManager.Screenlayer && (t[a.uuid] = a);
        }), this._screenlayers = t, this._screenlayers;
      } }, { key: "adapters", get: function () {
        var e = this,
            t = [],
            n = [],
            i = e.application.appName;return $.each(this._modules, function (t, a) {
          var r = Siteapp.sys.hyphenate(Siteapp.sys.functionName(a));e.options.namespacedModuleTriggers ? n.push("[data-" + i + "-" + r + "]") : n.push("[data-" + r + "]");
        }), $(n.join(",")).each(function (e, n) {
          var a = $(n).data(i + "Plugin");a instanceof Siteapp.UiManager.Paneladapter && (t[a.uuid] = a);
        }), this._paneladapters = t, this._paneladapters;
      } }]), Ui;
  }(i["a"]);t["a"] = u;
},,,, function (e, t, n) {
  "use strict";
  function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;
  }function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }Object.defineProperty(t, "__esModule", { value: !0 });var i = n(16),
      a = function (e) {
    function TestApp() {
      return _classCallCheck(this, TestApp), _possibleConstructorReturn(this, (TestApp.__proto__ || Object.getPrototypeOf(TestApp)).apply(this, arguments));
    }return _inherits(TestApp, e), TestApp;
  }(i["default"]),
      r = new a();window.Siteapp = i["default"], window.testApp = r;
},,,,, function (e, t, n) {
  e.exports = n(24);
}]);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Siteapp = window.Siteapp;
var testApp = window.testApp;

var $el = $('<div data-siteapp-myplugin></div>');
var myObj;

describe('Siteapp core', function () {
	it('exists on the window', function () {
		testApp.addToGlobal(window, false);
		window.testApp.should.be.an('object');
	});

	it('is a jQuery prototype function', function () {
		testApp.addToJquery($);
		$.fn.siteapp.should.be.a('function');
	});

	it('has a module plugin shortcuts ("$$T", respectively "$$TestApp") ', function () {
		testApp.addPluginShortcut(window);
		window['$$T'].should.be.a('function');
		window['$$TestApp'].should.be.a('function');
	});

	describe('[BC] Foundation compatiblity tests', function () {
		describe('rtl()', function () {
			it('detects the text direction on the document', function () {
				testApp.rtl().should.be.false;
				$('html').attr('dir', 'rtl');

				testApp.rtl().should.be.true;
				$('html').attr('dir', 'ltr');
			});
		});

		describe('plugin()', function () {
			afterEach(function () {
				delete testApp._plugins['siteapp-plugin'];
				delete testApp.Plugin;
			});

			it('adds Siteapp modules', function () {
				var Plugin = function (_testApp$Module) {
					_inherits(Plugin, _testApp$Module);

					function Plugin() {
						_classCallCheck(this, Plugin);

						return _possibleConstructorReturn(this, (Plugin.__proto__ || Object.getPrototypeOf(Plugin)).apply(this, arguments));
					}

					return Plugin;
				}(testApp.Module);

				;
				testApp.plugin(Plugin, 'Plugin');

				testApp.Modules._modules['siteapp-plugin'].should.be.a('function');
				testApp.plugin.should.be.a('function');
			});

			it('uses the name of the module class/function if one is not provided', function () {
				var Plugin = function (_testApp$Module2) {
					_inherits(Plugin, _testApp$Module2);

					function Plugin() {
						_classCallCheck(this, Plugin);

						return _possibleConstructorReturn(this, (Plugin.__proto__ || Object.getPrototypeOf(Plugin)).apply(this, arguments));
					}

					return Plugin;
				}(testApp.Module);

				;
				testApp.plugin(Plugin);

				testApp.Modules._modules['siteapp-plugin'].should.be.a('function');
				testApp.plugin.should.be.a('function');
			});
		});

		describe('registerPlugin()', function () {
			it('registers a new instance of a plugin', function () {
				var MyPlugin = function (_testApp$Module3) {
					_inherits(MyPlugin, _testApp$Module3);

					function MyPlugin() {
						_classCallCheck(this, MyPlugin);

						return _possibleConstructorReturn(this, (MyPlugin.__proto__ || Object.getPrototypeOf(MyPlugin)).apply(this, arguments));
					}

					return MyPlugin;
				}(testApp.Module);

				;
				testApp.plugin(Plugin, 'Myplugin');

				myObj = new testApp.Module($el, {});
				$el.data(testApp.appName + 'Plugin', myObj);
				testApp.registerPlugin(myObj);

				myObj.should.be.a('object');
				myObj.uuid.should.be.a('string');
				myObj.uuid.should.not.be.empty;
				testApp.Modules._uuids.indexOf(myObj.uuid).should.not.equal(-1);
			});
		});

		describe('unregisterPlugin()', function () {
			it('un-registers a plugin being destroyed', function () {
				testApp.unregisterPlugin(myObj);
				testApp.Modules._uuids.indexOf(myObj.uuid).should.equal(-1);
			});
		});

		describe('GetYoDigits()', function () {
			it('generates a random ID matching a given length', function () {
				var id = testApp.GetYoDigits(6);

				id.should.be.a('string');
				id.should.have.lengthOf(6);
			});

			it('can append a namespace to the number', function () {
				var id = testApp.GetYoDigits(6, 'plugin');

				id.should.be.a('string');
				id.should.have.lengthOf(6 + '-plugin'.length);
				id.should.contain('-plugin');
			});
		});

		describe('run()', function () {});

		describe('reInit()', function () {});

		describe('reflow()', function () {});

		describe('getFnName()', function () {});

		describe('transitionEnd()', function () {});

		describe('throttle()', function () {});
	});
});
describe('Keyboard event module', function () {
  /**
   * Creates a dummy event to parse.
   * Uses jQuery Event class constructor.
   * @param  {number} keyCode Key code of the key that is simulated.
   * @param  {object} opts    Options that say if modifiers are pressed.
   * @return {Event}          Event to use.
   */
  var createEvent = window.mockKeyboardEvent;
  var keyCodes = {
    'A': 65,
    'TAB': 9,
    'ENTER': 13,
    'ESCAPE': 27,
    'SPACE': 32,
    'ARROW_LEFT': 37,
    'ARROW_UP': 38,
    'ARROW_RIGHT': 39,
    'ARROW_DOWN': 40
  };

  it('exists on the Siteapp API', function () {
    window.Siteapp.Keyboard.should.be.an('object');
  });

  describe('parseKey()', function () {
    it('returns the character pressed for a normal key', function () {
      var event = createEvent(keyCodes['A']),
          parsedKey = testApp.Keyboard.parseKey(event);

      parsedKey.should.be.equal('A');
    });
    it('returns the character pressed for special keys', function () {
      for (var key in keyCodes) {
        var keyCode = keyCodes[key];
        var event = createEvent(keyCode),
            parsedKey = testApp.Keyboard.parseKey(event);

        parsedKey.should.be.equal(key);
      }
    });
    it('recognizes if CTRL was pressed', function () {
      var event = createEvent(keyCodes['A'], { ctrl: true }),
          parsedKey = testApp.Keyboard.parseKey(event);

      parsedKey.should.be.equal('CTRL_A');
    });
    it('recognizes if ALT was pressed', function () {
      var event = createEvent(keyCodes['A'], { alt: true }),
          parsedKey = testApp.Keyboard.parseKey(event);

      parsedKey.should.be.equal('ALT_A');
    });
    it('recognizes if SHIFT was pressed', function () {
      var event = createEvent(keyCodes['A'], { shift: true }),
          parsedKey = testApp.Keyboard.parseKey(event);

      parsedKey.should.be.equal('SHIFT_A');
    });
    it('recognizes if multiple modifiers were pressed', function () {
      var event = createEvent(keyCodes['A'], { shift: true, alt: true, ctrl: true }),
          parsedKey = testApp.Keyboard.parseKey(event);

      parsedKey.should.be.equal('ALT_CTRL_SHIFT_A');
    });
  });
  describe('handleKey()', function () {
    it('executes callback for given key event', function () {
      var spy = sinon.spy();

      // Register component
      testApp.Keyboard.register('MyComponent', {
        'ESCAPE': 'close'
      });

      var event = createEvent(keyCodes['ESCAPE']);

      testApp.Keyboard.handleKey(event, 'MyComponent', {
        close: function () {
          spy();
        }
      });

      spy.called.should.be.true;
    });
    it('executes handled callback for given key event', function () {
      var spy = sinon.spy();

      // Register component
      testApp.Keyboard.register('MyComponent', {
        'ESCAPE': 'close'
      });

      var event = createEvent(keyCodes['ESCAPE']);

      testApp.Keyboard.handleKey(event, 'MyComponent', {
        close: function () {
          // stuff
        },
        handled: function () {
          spy();
        }
      });

      spy.called.should.be.true;
    });
    it('executes unhandled callback for given key event', function () {
      var spy = sinon.spy();

      // Register component
      testApp.Keyboard.register('MyComponent', {});

      var event = createEvent(keyCodes['ESCAPE']);

      testApp.Keyboard.handleKey(event, 'MyComponent', {
        unhandled: function () {
          spy();
        }
      });

      spy.called.should.be.true;
    });
  });

  describe('findFocusable()', function () {
    it('finds focusable elements inside a container', function () {
      var $html = $('<div>\n            <a href="#">Link</a>\n            <button>Button</button>\n          </div>').appendTo('body');

      var $focusable = testApp.Keyboard.findFocusable($html);

      $focusable.length.should.be.equal(2);

      $html.remove();
    });

    it('does not find hidden focusable elements', function () {
      var $html = $('<div>\n            <a style="display: none;" href="#">Link</a>\n            <button style="display: none;">Button</button>\n          </div>').appendTo('body');

      var $focusable = testApp.Keyboard.findFocusable($html);

      $focusable.length.should.be.equal(0);

      $html.remove();
    });

    it('does not find disabled focusable elements', function () {
      var $html = $('<div>\n            <button disabled>Button</button>\n          </div>').appendTo('body');

      var $focusable = testApp.Keyboard.findFocusable($html);

      $focusable.length.should.be.equal(0);

      $html.remove();
    });

    it('does not find focusable elements with negative tabindex', function () {
      var $html = $('<div>\n            <button tabindex="-1">Button</button>\n          </div>').appendTo('body');

      var $focusable = testApp.Keyboard.findFocusable($html);

      $focusable.length.should.be.equal(0);

      $html.remove();
    });
  });

  describe('trapFocus()', function () {
    it('moves the focus to the first focusable element', function () {
      var $html = $('<div>\n            <a href="#">Link1</a>\n            <a href="#">Link2</a>\n            <a href="#">Link3</a>\n          </div>').appendTo('body');

      testApp.Keyboard.trapFocus($html);
      $html.find('a').last().focus();

      var event = createEvent(keyCodes['TAB']);
      $(document.activeElement).trigger(event);

      document.activeElement.should.be.equal($html.find('a').eq(0)[0]);

      $html.remove();
    });

    it('moves the focus to the last focusable element', function () {
      var $html = $('<div>\n            <a href="#">Link1</a>\n            <a href="#">Link2</a>\n            <a href="#">Link3</a>\n          </div>').appendTo('body');

      testApp.Keyboard.trapFocus($html);
      $html.find('a').first().focus();

      var event = createEvent(keyCodes['TAB'], { shift: true });
      $(document.activeElement).trigger(event);

      document.activeElement.should.be.equal($html.find('a').eq(2)[0]);

      $html.remove();
    });
  });

  describe('releaseFocus()', function () {
    it('stops trapping the focus at the end', function () {
      var $html = $('<div>\n            <a href="#">Link1</a>\n            <a href="#">Link2</a>\n            <a href="#">Link3</a>\n          </div>').appendTo('body');

      testApp.Keyboard.trapFocus($html);
      $html.find('a').last().focus();

      testApp.Keyboard.releaseFocus($html);

      var event = createEvent(keyCodes['TAB']);
      $(document.activeElement).trigger(event);

      document.activeElement.should.not.be.equal($html.find('a').eq(0)[0]);

      $html.remove();
    });

    it('stops trapping the focus at the top', function () {
      var $html = $('<div>\n            <a href="#">Link1</a>\n            <a href="#">Link2</a>\n            <a href="#">Link3</a>\n          </div>').appendTo('body');

      testApp.Keyboard.trapFocus($html);
      $html.find('a').first().focus();

      testApp.Keyboard.releaseFocus($html);

      var event = createEvent(createEvent(keyCodes['TAB'], { shift: true }));
      $(document.activeElement).trigger(event);

      document.activeElement.should.not.be.equal($html.find('a').eq(2)[0]);

      $html.remove();
    });
  });
});

describe('Log module', function () {

    it('Logger object is present within application namespace/class/object', function () {

        testApp.Log.should.be.an('object');
    });

    it('Shortcut returns Logger object', function () {

        testApp.L.should.be.an('object');
    });

    it('clear() empties the list of entries', function () {

        testApp.L.clear();

        testApp.L.logentries.should.be.empty;
    });

    it('log() adds a new one to the list of entries', function () {

        testApp.L.log('some log-entry...', 'some type', 'some context');

        testApp.L.logentries.should.not.be.empty;
    });

    it('get() retrieves the (complete) list of log-entries', function () {

        testApp.L.get().should.not.be.empty;
    });

    it('get(n) retrieves the n-th (zero-indexed) entry from the list of log-entries', function () {
        var lastentry = testApp.L.logentries.length - 1;
        testApp.L.get(lastentry).should.not.be.undefined;
    });
});
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

describe('EventManager module', function () {

    it('EventManager class is present', function () {

        Siteapp.sys.EventManager.should.be.a('function');
    });

    it('Instanciating EventManager class creates an object', function () {
        var _events = new Siteapp.sys.EventManager();

        _events.should.be.an('object');
        _events.should.be.instanceOf(Siteapp.sys.EventManager);
    });

    it('on() delegates a custom event attached to custom module', function () {
        var MyEvents = function (_Siteapp$Module) {
            _inherits(MyEvents, _Siteapp$Module);

            function MyEvents(element, options, app) {
                _classCallCheck(this, MyEvents);

                var _this = _possibleConstructorReturn(this, (MyEvents.__proto__ || Object.getPrototypeOf(MyEvents)).call(this, element, options, app));

                _this.events = new Siteapp.sys.EventManager(_this);

                _this.manager.initialize(_this);

                _this.on('my-trigger', function () {

                    this.should.be.instanceOf(Siteapp.Module);

                    this.event_was_triggered = true;
                });
                return _this;
            }

            return MyEvents;
        }(Siteapp.Module);

        testApp.Modules.register(MyEvents, 'MyEvents');

        testApp.Modules.MyEvents.should.be.a('function');

        var $el = $('<div data-siteapp-my-events></div>');
        $('body').append($el);
        testApp.run();

        var plgin = $('[data-siteapp-my-events]').data('siteappPlugin');

        plgin.events._getEvent('my-trigger').should.be.a('array');
        plgin.events._getEvent('my-trigger').length.should.not.equal(0);
    });

    it('trigger() fires a custom event attached to a custom module', function () {

        var plgin = $('[data-siteapp-my-events]').data('siteappPlugin');

        plgin.trigger('my-trigger');

        plgin.event_was_triggered.should.be.a('boolean');
        plgin.event_was_triggered.should.be.true;
    });

    it('off() detaches a custom event from a custom module', function () {

        var plgin = $('[data-siteapp-my-events]').data('siteappPlugin');

        plgin.off('my-trigger');
        var event = plgin.events._getEvent('my-trigger');

        (event === null).should.be.true;
    });
});