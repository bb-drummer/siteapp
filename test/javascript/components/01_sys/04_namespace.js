
describe ('(Data) Namespace module', function () {

    it ('Namespace object is present within application namespace/class/object', function ( ) {
    
        (myApp.Namespace).should.be.an('object');

    });

    it ('Shortcut returns Namespace object', function ( ) {
    
        (myApp.NS).should.be.an('object');

    });
    
});