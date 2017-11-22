
describe ('EventManager module', function () {

    it ('EventManager class is present', function ( ) {

        (Siteapp.sys.EventManager).should.be.a('function');

    });
    
    it ('Instanciating EventManager class creates an object', function ( ) {
        var _events = new Siteapp.sys.EventManager();
        
        (_events).should.be.an('object');
        (_events).should.be.instanceOf(Siteapp.sys.EventManager);

    });
    
});