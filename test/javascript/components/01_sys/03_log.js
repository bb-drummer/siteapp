
describe ('Log module', function () {

    it ('Logger object is present within application namespace/class/object', function ( ) {
    
        (testApp.Log).should.be.an('object');

    });

    it ('Shortcut returns Logger object', function ( ) {
    
        (testApp.L).should.be.an('object');

    });
    
    it ('clear() empties the list of entries', function ( ) {
    
         testApp.L.clear();
         
        (testApp.L.logentries).should.be.empty;
        
    });
    
    it ('log() adds a new one to the list of entries', function ( ) {
    
         testApp.L.log('some log-entry...', 'some type', 'some context');
         
        (testApp.L.logentries).should.not.be.empty;

    });
    
    it ('get() retrieves the (complete) list of log-entries', function ( ) {
         
        (testApp.L.get()).should.not.be.empty;
        
    });
    
    it ('get(n) retrieves the n-th (zero-indexed) entry from the list of log-entries', function ( ) {
         var lastentry = (testApp.L.logentries.length - 1);
        (testApp.L.get( lastentry ) ).should.not.be.undefined;
    });

});