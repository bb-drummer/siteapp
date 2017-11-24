function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyApp = function (_window$Siteapp) {
  _inherits(MyApp, _window$Siteapp);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).apply(this, arguments));
  }

  return MyApp;
}(window.Siteapp);

;

var myApp = new MyApp();

//window.Siteapp = Siteapp;
//window.MyApp   = MyApp;

myApp.addToGlobal(window);
myApp.addToGlobal($);

//window.myApp   = myApp;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var $el = $('<div data-siteapp-myplugin></div>');
var myObj;

describe('Siteapp core', function () {
	it('exists on the window', function () {
		myApp.addToGlobal(window, false);
		window.myApp.should.be.an('object');
	});

	it('is a jQuery prototype function', function () {
		myApp.addToJquery($);
		$.fn.siteapp.should.be.a('function');
	});

	it('has a module plugin shortcut ("$$x", respectively "$$xyz") ', function () {
		myApp.addPluginShortcut(window);
		window['$$M'].should.be.a('function');
		window['$$MyApp'].should.be.a('function');
	});

	it('has a module plugin shortcut (long name "$$xyz") ', function () {
		myApp.addPluginShortcut(window);
	});

	describe('[BC] Foundation compatiblity tests', function () {
		describe('rtl()', function () {
			it('detects the text direction on the document', function () {
				myApp.rtl().should.be.false;
				$('html').attr('dir', 'rtl');

				myApp.rtl().should.be.true;
				$('html').attr('dir', 'ltr');
			});
		});

		describe('plugin()', function () {
			afterEach(function () {
				delete myApp._plugins['siteapp-plugin'];
				delete myApp.Plugin;
			});

			it('adds Siteapp modules', function () {
				var Plugin = function (_myApp$Module) {
					_inherits(Plugin, _myApp$Module);

					function Plugin() {
						_classCallCheck(this, Plugin);

						return _possibleConstructorReturn(this, (Plugin.__proto__ || Object.getPrototypeOf(Plugin)).apply(this, arguments));
					}

					return Plugin;
				}(myApp.Module);

				;
				myApp.plugin(Plugin, 'Plugin');

				myApp.Modules._modules['siteapp-plugin'].should.be.a('function');
				myApp.plugin.should.be.a('function');
			});

			it('uses the name of the module class/function if one is not provided', function () {
				var Plugin = function (_myApp$Module2) {
					_inherits(Plugin, _myApp$Module2);

					function Plugin() {
						_classCallCheck(this, Plugin);

						return _possibleConstructorReturn(this, (Plugin.__proto__ || Object.getPrototypeOf(Plugin)).apply(this, arguments));
					}

					return Plugin;
				}(myApp.Module);

				;
				myApp.plugin(Plugin);

				myApp.Modules._modules['siteapp-plugin'].should.be.a('function');
				myApp.plugin.should.be.a('function');
			});
		});

		describe('registerPlugin()', function () {
			it('registers a new instance of a plugin', function () {
				var MyPlugin = function (_myApp$Module3) {
					_inherits(MyPlugin, _myApp$Module3);

					function MyPlugin() {
						_classCallCheck(this, MyPlugin);

						return _possibleConstructorReturn(this, (MyPlugin.__proto__ || Object.getPrototypeOf(MyPlugin)).apply(this, arguments));
					}

					return MyPlugin;
				}(myApp.Module);

				;
				myApp.plugin(Plugin, 'Myplugin');

				myObj = new myApp.Module($el, {});
				$el.data(myApp.appName + 'Plugin', myObj);
				myApp.registerPlugin(myObj);

				myObj.should.be.a('object');
				myObj.uuid.should.be.a('string');
				myObj.uuid.should.not.be.empty;
				myApp.Modules._uuids.indexOf(myObj.uuid).should.not.equal(-1);
			});
		});

		describe('unregisterPlugin()', function () {
			it('un-registers a plugin being destroyed', function () {
				myApp.unregisterPlugin(myObj);
				myApp.Modules._uuids.indexOf(myObj.uuid).should.equal(-1);
			});
		});

		describe('GetYoDigits()', function () {
			it('generates a random ID matching a given length', function () {
				var id = myApp.GetYoDigits(6);

				id.should.be.a('string');
				id.should.have.lengthOf(6);
			});

			it('can append a namespace to the number', function () {
				var id = myApp.GetYoDigits(6, 'plugin');

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
          parsedKey = myApp.Keyboard.parseKey(event);

      parsedKey.should.be.equal('A');
    });
    it('returns the character pressed for special keys', function () {
      for (var key in keyCodes) {
        var keyCode = keyCodes[key];
        var event = createEvent(keyCode),
            parsedKey = myApp.Keyboard.parseKey(event);

        parsedKey.should.be.equal(key);
      }
    });
    it('recognizes if CTRL was pressed', function () {
      var event = createEvent(keyCodes['A'], { ctrl: true }),
          parsedKey = myApp.Keyboard.parseKey(event);

      parsedKey.should.be.equal('CTRL_A');
    });
    it('recognizes if ALT was pressed', function () {
      var event = createEvent(keyCodes['A'], { alt: true }),
          parsedKey = myApp.Keyboard.parseKey(event);

      parsedKey.should.be.equal('ALT_A');
    });
    it('recognizes if SHIFT was pressed', function () {
      var event = createEvent(keyCodes['A'], { shift: true }),
          parsedKey = myApp.Keyboard.parseKey(event);

      parsedKey.should.be.equal('SHIFT_A');
    });
    it('recognizes if multiple modifiers were pressed', function () {
      var event = createEvent(keyCodes['A'], { shift: true, alt: true, ctrl: true }),
          parsedKey = myApp.Keyboard.parseKey(event);

      parsedKey.should.be.equal('ALT_CTRL_SHIFT_A');
    });
  });
  describe('handleKey()', function () {
    it('executes callback for given key event', function () {
      var spy = sinon.spy();

      // Register component
      myApp.Keyboard.register('MyComponent', {
        'ESCAPE': 'close'
      });

      var event = createEvent(keyCodes['ESCAPE']);

      myApp.Keyboard.handleKey(event, 'MyComponent', {
        close: function () {
          spy();
        }
      });

      spy.called.should.be.true;
    });
    it('executes handled callback for given key event', function () {
      var spy = sinon.spy();

      // Register component
      myApp.Keyboard.register('MyComponent', {
        'ESCAPE': 'close'
      });

      var event = createEvent(keyCodes['ESCAPE']);

      myApp.Keyboard.handleKey(event, 'MyComponent', {
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
      myApp.Keyboard.register('MyComponent', {});

      var event = createEvent(keyCodes['ESCAPE']);

      myApp.Keyboard.handleKey(event, 'MyComponent', {
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

      var $focusable = myApp.Keyboard.findFocusable($html);

      $focusable.length.should.be.equal(2);

      $html.remove();
    });

    it('does not find hidden focusable elements', function () {
      var $html = $('<div>\n            <a style="display: none;" href="#">Link</a>\n            <button style="display: none;">Button</button>\n          </div>').appendTo('body');

      var $focusable = myApp.Keyboard.findFocusable($html);

      $focusable.length.should.be.equal(0);

      $html.remove();
    });

    it('does not find disabled focusable elements', function () {
      var $html = $('<div>\n            <button disabled>Button</button>\n          </div>').appendTo('body');

      var $focusable = myApp.Keyboard.findFocusable($html);

      $focusable.length.should.be.equal(0);

      $html.remove();
    });

    it('does not find focusable elements with negative tabindex', function () {
      var $html = $('<div>\n            <button tabindex="-1">Button</button>\n          </div>').appendTo('body');

      var $focusable = myApp.Keyboard.findFocusable($html);

      $focusable.length.should.be.equal(0);

      $html.remove();
    });
  });

  describe('trapFocus()', function () {
    it('moves the focus to the first focusable element', function () {
      var $html = $('<div>\n            <a href="#">Link1</a>\n            <a href="#">Link2</a>\n            <a href="#">Link3</a>\n          </div>').appendTo('body');

      myApp.Keyboard.trapFocus($html);
      $html.find('a').last().focus();

      var event = createEvent(keyCodes['TAB']);
      $(document.activeElement).trigger(event);

      document.activeElement.should.be.equal($html.find('a').eq(0)[0]);

      $html.remove();
    });

    it('moves the focus to the last focusable element', function () {
      var $html = $('<div>\n            <a href="#">Link1</a>\n            <a href="#">Link2</a>\n            <a href="#">Link3</a>\n          </div>').appendTo('body');

      myApp.Keyboard.trapFocus($html);
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

      myApp.Keyboard.trapFocus($html);
      $html.find('a').last().focus();

      myApp.Keyboard.releaseFocus($html);

      var event = createEvent(keyCodes['TAB']);
      $(document.activeElement).trigger(event);

      document.activeElement.should.not.be.equal($html.find('a').eq(0)[0]);

      $html.remove();
    });

    it('stops trapping the focus at the top', function () {
      var $html = $('<div>\n            <a href="#">Link1</a>\n            <a href="#">Link2</a>\n            <a href="#">Link3</a>\n          </div>').appendTo('body');

      myApp.Keyboard.trapFocus($html);
      $html.find('a').first().focus();

      myApp.Keyboard.releaseFocus($html);

      var event = createEvent(createEvent(keyCodes['TAB'], { shift: true }));
      $(document.activeElement).trigger(event);

      document.activeElement.should.not.be.equal($html.find('a').eq(2)[0]);

      $html.remove();
    });
  });
});

describe('Log module', function () {

    it('Logger object is present within application namespace/class/object', function () {

        myApp.Log.should.be.an('object');
    });

    it('Shortcut returns Logger object', function () {

        myApp.L.should.be.an('object');
    });

    it('clear() empties the list of entries', function () {

        myApp.L.clear();

        myApp.L.logentries.should.be.empty;
    });

    it('log() adds a new one to the list of entries', function () {

        myApp.L.log('some log-entry...', 'some type', 'some context');

        myApp.L.logentries.should.not.be.empty;
    });

    it('get() retrieves the (complete) list of log-entries', function () {

        myApp.L.get().should.not.be.empty;
    });

    it('get(n) retrieves the n-th (zero-indexed) entry from the list of log-entries', function () {
        var lastentry = myApp.L.logentries.length - 1;
        myApp.L.get(lastentry).should.not.be.undefined;
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

        myApp.Modules.register(MyEvents, 'MyEvents');

        myApp.Modules.MyEvents.should.be.a('function');

        var $el = $('<div data-siteapp-my-events></div>');
        $('body').append($el);
        myApp.run();

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