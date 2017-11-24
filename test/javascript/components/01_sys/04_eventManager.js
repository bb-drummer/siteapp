
describe ('EventManager module', function () {

    it ('EventManager class is present', function ( ) {

        (Siteapp.sys.EventManager).should.be.a('function');

    });
    
    it ('Instanciating EventManager class creates an object', function ( ) {
        var _events = new Siteapp.sys.EventManager();
        
        (_events).should.be.an('object');
        (_events).should.be.instanceOf(Siteapp.sys.EventManager);

    });
    
    it ('on() delegates a custom event attached to custom module', function ( ) {
    	
    	class MyEvents extends Siteapp.Module {
    		
    	    constructor(element, options, app) {
    	    	super(element, options, app);
    	    	
    	    	this.events = new Siteapp.sys.EventManager(this);
    	    	
    	    	this.manager.initialize(this);
    	    	
    	    	this.on( 'my-trigger', function () {
    	    		
    	    		(this).should.be.instanceOf(Siteapp.Module);
    	    		
    	    		this.event_was_triggered = true;
    	    		
    	    	} );
    	    }

    	}

    	myApp.Modules.register(MyEvents, 'MyEvents');

        (myApp.Modules.MyEvents).should.be.a('function');
        
        var $el = $('<div data-siteapp-my-events></div>');
        $('body').append($el);
    	myApp.run();
    	
    	var plgin = $('[data-siteapp-my-events]').data('siteappPlugin');
    	
    	(plgin.events._getEvent('my-trigger')).should.be.a('array');
    	(plgin.events._getEvent('my-trigger').length).should.not.equal(0);
    	
    });
    
    it ('trigger() fires a custom event attached to a custom module', function ( ) {
    	
    	var plgin = $('[data-siteapp-my-events]').data('siteappPlugin');
    	
    	plgin.trigger('my-trigger');

		(plgin.event_was_triggered).should.be.a('boolean');
		(plgin.event_was_triggered).should.be.true;
    	
    });
    
    it ('off() detaches a custom event from a custom module', function ( ) {
    	
    	var plgin = $('[data-siteapp-my-events]').data('siteappPlugin');
    	
    	plgin.off('my-trigger');
    	var event = plgin.events._getEvent('my-trigger');
    	
    	((event === null)).should.be.true;
    	
    });
    
});