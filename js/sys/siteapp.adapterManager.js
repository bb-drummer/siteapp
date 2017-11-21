/**
 * [Siteapp] - multi-purpose frontend application
 * 
 * Siteapp (Data) Storage Manager
 * 
 * storage types:
 * - memory (default)
 * - cookie
 * - localStorage
 * - service
 *     
 * @package     [Siteapp]
 * @subpackage  [Siteapp] core
 * @author      Björn Bartels <coding@bjoernbartels.earth>
 * @link        https://gitlab.bjoernbartels.earth/groups/themes
 * @license     http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0
 * @copyright   copyright (c) 2016 Björn Bartels <coding@bjoernbartels.earth>
 * 
 * @namespace   Siteapp
 * @module      Siteapp.AdapterManager
 */

"use strict";

//import Siteapp          from '../siteapp.core';
import {Exception}      from '../sys/siteapp.exception';

const Siteapp_AdapterManager_VERSION = '0.0.1';

const Siteapp_AdapterManager_DEFAULTS = {
		
};

class AdapterManagerException extends Exception {
	get name () {
		return "SiteappAdapterManagerException";
	}
};

const AdapterManager = class AdapterManager {
	
    /**
     * Create a new instance of the storage manager.
     * @class
     * @name AdapterManager
     * @param {Object} options - Overrides to the default plugin settings.
     */
    constructor (options) {
    	
        this.options = $.extend({}, Siteapp_AdapterManager_DEFAULTS, options);

        this._init();
    }

    /**
     * Setup objects
     */
    _init () {
    	this._version = Siteapp_AdapterManager_VERSION;

        this._adapters     = {};
        
    }
    
    /**
     * Registera an adapter.
     * 
     * @function
     * @param {object} adapter
     * @param {string} name
     */
    register ( adapter, name ) {
    	var namespace = Siteapp.sys.hyphenate(Siteapp.sys.functionName(adapter));
    	if ("" == name) {
    		name = Siteapp.sys.functionName(adapter);
    	}
    	if (this.isRegistered(name)) {
    		console.warn(`An adapter with the name "${name}" has already been registered.`)
    	} else {
    		this._adapters[name] = adapter;
    	}
    	return this;
    }
    
    /**
     * Unregisters an adapter.
     * 
     * @function
     * @param {object} adapter
     * 
     */
    get ( name ) {

    	if (!this.isRegistered(name)) {
    		console.warn(`An adapter with the name "${name}" has not been registered.`)
    	} else {
    		return this.adapters[name];
    	}
    }
    
    /**
     * Unregisters an adapter.
     * 
     * @function
     * @param {object} adapter
     * 
     */
    unregister ( adapter ) {
    	if ( (typeof adapter != 'string')) {
    		adapter = Siteapp.sys.functionName(adapter);
    	}
    	if (this.isRegistered(name)) {
    		this._adapters[name] = undefined;
    	}
    	return this;
    }
    
    /**
     * Checks is an adapter is registered by name.
     * 
     * @function
     * @param {string} name
     * @returns {boolean}
     */
    isRegistered ( name ) {
    	
    	return (typeof this._adapters[name] != 'undefined');
    }
    
    /**
     * Retrieves an adapter is registered by name.
     * 
     * @function
     * @param {string} name
     * @returns {object}
     */
    getAdapterByName ( name ) {
    	if (this.isRegistered(name)) {
    		return this._adapters[name];
    	}
    	return null;
    }
    
    /**
     * Retrive registered adapters
     * 
     * @var [{object}] adapters
     */
    get adapters () {
    	return this._adapters;
    }
    
    
    /**
     * Retrieve attached application.
     */
    get application () { 
        return this._app; 
    }
    
    /**
     * Attach application object.
     */
    set application ( app ) { 
    	if (app instanceof Siteapp) {
    		this._app = app;
    	} else {
    		throw new AdapterManagerException('Invalid application object to attach');
    	}
    }
    
    /**
     * Retrieve current version.
     */
    get version () { 
        return this._version; 
    }
}

export default AdapterManager;
    
