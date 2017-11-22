var $el = $('<div data-siteapp-myplugin></div>');
var myObj;

describe('Siteapp core', function() {
    it('exists on the window', function() {
	    myApp.addToGlobal(window, false);
        (window.myApp).should.be.an('object');
    });

    it('is a jQuery prototype function', function() {
		myApp.addToJquery($);
	    ($.fn.siteapp).should.be.a('function');
    });

    it('has a module plugin shortcut ("$$x", respectively "$$xyz") ', function() {
		myApp.addPluginShortcut(window);
	    (window['$$M']).should.be.a('function');
	    (window['$$MyApp']).should.be.a('function');
    });

    it('has a module plugin shortcut (long name "$$xyz") ', function() {
		myApp.addPluginShortcut(window);
    });

  
    describe('[BC] Foundation compatiblity tests', function() {
	    describe ('rtl()', function() {
		    it ('detects the text direction on the document', function() {
		        (myApp.rtl()).should.be.false;
		        $('html').attr('dir', 'rtl');
		
		        (myApp.rtl()).should.be.true;
		        $('html').attr('dir', 'ltr');
		    });
	    });
	
	    describe ('plugin()', function() {
		    afterEach(function() {
		        delete myApp._plugins['siteapp-plugin'];
		        delete myApp.Plugin;
		    });
		
		    it ('adds Siteapp modules', function() {
		        class Plugin extends myApp.Module {};
		        myApp.plugin(Plugin, 'Plugin');
		
		        (myApp.Modules._modules['siteapp-plugin']).should.be.a('function');
		        (myApp.plugin).should.be.a('function');
		    });
		
		    it ('uses the name of the module class/function if one is not provided', function() {
		        class Plugin extends myApp.Module {};
		        myApp.plugin(Plugin);
		
		        (myApp.Modules._modules['siteapp-plugin']).should.be.a('function');
		        (myApp.plugin).should.be.a('function');
		    });
	    });
	  
	    describe ('registerPlugin()', function() {
		    it ('registers a new instance of a plugin', function() {
			    class MyPlugin extends myApp.Module {};
			    myApp.plugin(Plugin, 'Myplugin');
			    
			    myObj = new myApp.Module( $el, {} );
			    $el.data(myApp.appName+'Plugin', myObj );
			    myApp.registerPlugin(myObj);
			    
			    (myObj).should.be.a('object');
			    (myObj.uuid).should.be.a('string');
			    (myObj.uuid).should.not.be.empty;
			    (myApp.Modules._uuids.indexOf(myObj.uuid)).should.not.equal(-1);
		    });
	    });
	
	    describe ('unregisterPlugin()', function() {
		    it('un-registers a plugin being destroyed', function() {
			    myApp.unregisterPlugin(myObj);
		        (myApp.Modules._uuids.indexOf(myObj.uuid)).should.equal(-1);
		    });
	    });
	
	    describe('GetYoDigits()', function() {
		    it ('generates a random ID matching a given length', function() {
		        var id = myApp.GetYoDigits(6);
		
		        id.should.be.a('string');
		        id.should.have.lengthOf(6);
		    });
		
		    it ('can append a namespace to the number', function() {
		        var id = myApp.GetYoDigits(6, 'plugin');
		
		        id.should.be.a('string');
		        id.should.have.lengthOf(6 + '-plugin'.length);
		        id.should.contain('-plugin');
		    });
	    });
	
	    describe ('run()', function() {
	
	    });
	
	    describe ('reInit()', function() {
	
	    });
	
	    describe('reflow()', function() {
	    });
	
	    describe('getFnName()', function() {
	    });
	
	    describe('transitionEnd()', function() {
	    });
	
	    describe('throttle()', function() {
	    });
	    
    });
});
