import {AdapterManager} from '../../../../js/sys/siteapp.adapterManager.js';

describe ('Generic AdapterManager module', function () {

    it ('Generic AdapterManager class is present' /* + ' within application namespace/class/object' */, function ( ) {

        (AdapterManager).should.be.an('object');
        (AdapterManager).should.be.a('function');

    });
    
});