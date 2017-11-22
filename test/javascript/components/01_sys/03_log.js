
describe ('Log module', function () {

    it ('Logger object is present within application namespace/class/object', function ( ) {
    
        (myApp.Log).should.be.an('object');

    });

    it ('Shortcut returns Logger object', function ( ) {
    
        (myApp.L).should.be.an('object');

    });
    
    it ('clear() empties the list of entries', function ( ) {
    
         myApp.L.clear();
         
        (myApp.L.logentries).should.be.empty;
        
    });
    
    it ('log() adds a new one to the list of entries', function ( ) {
    
         myApp.L.log('some log-entry...', 'some type', 'some context');
         
        (myApp.L.logentries).should.not.be.empty;

    });
    
    it ('get() retrieves the (complete) list of log-entries', function ( ) {
         
        (myApp.L.get()).should.not.be.empty;
        
    });
    
    it ('get(n) retrieves the n-th (zero-indexed) entry from the list of log-entries', function ( ) {
         var lastentry = (myApp.L.logentries.length - 1);
        (myApp.L.get( lastentry ) ).should.not.be.undefined;
    });

});