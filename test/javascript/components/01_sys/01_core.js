//var Siteapp = window.Siteapp;
//var testApp = window.testApp;

var $el = $('<div data-siteapp-myplugin></div>');
var myObj;

describe('Siteapp core', function() {
    it('exists on the window', function() {
	    testApp.addToGlobal(window, false);
        (window.testApp).should.be.an('object');
    });

    it('is a jQuery prototype function', function() {
		testApp.addToJquery($);
	    ($.fn.siteapp).should.be.a('function');
    });

    it('has a module plugin shortcuts ("$$T", respectively "$$TestApp") ', function() {
		testApp.addPluginShortcut(window);
	    (window['$$T']).should.be.a('function');
	    (window['$$TestApp']).should.be.a('function');
    });
  
    describe('[BC] Foundation compatiblity tests', function() {
	    describe ('rtl()', function() {
		    it ('detects the text direction on the document', function() {
		        (testApp.rtl()).should.be.false;
		        $('html').attr('dir', 'rtl');
		
		        (testApp.rtl()).should.be.true;
		        $('html').attr('dir', 'ltr');
		    });
	    });
	
	    describe ('plugin()', function() {
		    afterEach(function() {
		        delete testApp._plugins['siteapp-plugin'];
		        delete testApp.Plugin;
		    });
		
		    it ('adds Siteapp modules', function() {
		        class Plugin extends testApp.Module {};
		        testApp.plugin(Plugin, 'Plugin');
		
		        (testApp.Modules._modules['siteapp-plugin']).should.be.a('function');
		        (testApp.plugin).should.be.a('function');
		    });
		
		    it ('uses the name of the module class/function if one is not provided', function() {
		        class Plugin extends testApp.Module {};
		        testApp.plugin(Plugin);
		
		        (testApp.Modules._modules['siteapp-plugin']).should.be.a('function');
		        (testApp.plugin).should.be.a('function');
		    });
	    });
	  
	    describe ('registerPlugin()', function() {
		    it ('registers a new instance of a plugin', function() {
			    class MyPlugin extends testApp.Module {};
			    testApp.plugin(Plugin, 'Myplugin');
			    
			    myObj = new testApp.Module( $el, {} );
			    $el.data(testApp.appName+'Plugin', myObj );
			    testApp.registerPlugin(myObj);
			    
			    (myObj).should.be.a('object');
			    (myObj.uuid).should.be.a('string');
			    (myObj.uuid).should.not.be.empty;
			    (testApp.Modules._uuids.indexOf(myObj.uuid)).should.not.equal(-1);
		    });
	    });
	
	    describe ('unregisterPlugin()', function() {
		    it('un-registers a plugin being destroyed', function() {
			    testApp.unregisterPlugin(myObj);
		        (testApp.Modules._uuids.indexOf(myObj.uuid)).should.equal(-1);
		    });
	    });
	
	    describe('GetYoDigits()', function() {
		    it ('generates a random ID matching a given length', function() {
		        var id = testApp.GetYoDigits(6);
		
		        id.should.be.a('string');
		        id.should.have.lengthOf(6);
		    });
		
		    it ('can append a namespace to the number', function() {
		        var id = testApp.GetYoDigits(6, 'plugin');
		
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
