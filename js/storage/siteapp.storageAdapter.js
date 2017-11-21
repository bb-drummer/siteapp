/**
 * [Siteapp] - multi-purpose frontend application
 * 
 * Siteapp (Data) Storage Adapter
 * 
 * storage types:
 * - memory (default)
 * - cookie
 * - localStorage
 * - service
 *     
 * @package     [Siteapp]
 * @subpackage  [Siteapp] storage
 * @author      Björn Bartels <coding@bjoernbartels.earth>
 * @link        https://gitlab.bjoernbartels.earth/groups/themes
 * @license     http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0
 * @copyright   copyright (c) 2016 Björn Bartels <coding@bjoernbartels.earth>
 * 
 * @namespace   Siteapp
 * @module      Siteapp.StorageAdapter
 */

"use strict";

//import Siteapp          from '../siteapp.core';
import {Exception}      from '../sys/siteapp.exception';
import {StorageManager} from './siteapp.storageManager';

const Siteapp_StorageAdapter_VERSION = '0.0.1';

const Siteapp_StorageAdapter_DEFAULTS = {
		
};

class StorageAdapterException extends Exception {
	get name () {
		return "SiteappStorageAdapterException";
	}
};

class StorageAdapter {
	
    /**
     * Create a new instance of the storage manager.
     * @class
     * @name StorageAdapter
     * @param {Object} options - Overrides to the default plugin settings.
     */
    constructor (namespace, type, data, manager, options) {
    	
        this.options = $.extend({}, Siteapp_StorageAdapter_DEFAULTS, options);

        this._init(
        		namespace, type, data, manager
        );
    }

    /**
     * Setup objects
     */
    _init (namespace, type, data, manager) {
    	this.data      = data      || {};
    	this.manager   = manager   || null;
    	this.namespace = namespace || `data${Siteapp.prototype.genUUID()}`;
    	this.type      = type      || 'memory';
    }
    
    getItem ( name ) {
    	return this.data[name];
    } 
    
    setItem ( name, data ) {
    	var thisData = this.data;
    	thisData[name] = data;
    	this.data = thisData;
    	
    	return (this)
    } 
    
    /**
     * Retrieve current data set
     */
    get data () {
    	return this._data;
    }
    
    /**
     * Set current data set
     */
    set data ( _data ) {
    	if ( !(_data instanceof Object) ) {
    		throw new StorageAdapterException('data set must be an object');
    	}
    	this._data = _data;
    }
    
    
    /**
     * Retrieve current data namespace
     */
    get namespace () {
    	return this._namespace;
    }
    
    /**
     * Set current data namespace
     */
    set namespace ( _namespace ) {
    	if ( (typeof _namespace != 'string') ) {
    		throw new StorageAdapterException('namespace must be a string');
    	}
    	this._namespace = _namespace;
    }
    
    
    /**
     * Retrieve current data storage type
     */
    get type () {
    	return this._type;
    }
    
    /**
     * Set current data storage type
     */
    set type ( _type ) {
    	if ( (typeof _type != 'string') ) {
    		throw new StorageAdapterException('type identifier must be a string');
    	}
    	if ( (this.manager.types.indexOf(_type) == -1) ) {
    		throw new StorageAdapterException(`type identifier must be one of "${StorageManager.types.join('", "')}"`);
    	}
    	this._type = _type;
    }
    
    
    /**
     * Retrieve attached storage manager instance
     */
    get manager () {
    	return this._manager;
    }
    
    /**
     * Attach storage manager instance
     */
    set manager ( _manager ) {
    	if ( (_manager !== null) && !(_manager instanceof StorageManager) ) {
    		throw new StorageAdapterException('manager must be an instance of Siteapp.StorageManager');
    	}
    	this._manager = _manager;
    }
}

export {StorageAdapter};