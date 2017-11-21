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
 * @subpackage  [Siteapp] storage
 * @author      Björn Bartels <coding@bjoernbartels.earth>
 * @link        https://gitlab.bjoernbartels.earth/groups/themes
 * @license     http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0
 * @copyright   copyright (c) 2016 Björn Bartels <coding@bjoernbartels.earth>
 * 
 * @namespace   Siteapp
 * @module      Siteapp.StorageManager
 */

"use strict";

//import Siteapp          from '../siteapp.core';
import {Exception}      from '../sys/siteapp.exception';
import {StorageAdapter} from './siteapp.storageAdapter';

const Siteapp_StorageManager_VERSION = '0.0.1';

const Siteapp_StorageManager_DEFAULTS = {
		
};

class StorageManagerException extends Exception {
	get name () {
		return "SiteappStorageManagerException";
	}
};

class StorageManager {
	
    /**
     * Create a new instance of the storage manager.
     * @class
     * @name StorageManager
     * @param {Object} options - Overrides to the default plugin settings.
     */
    constructor (options) {
    	
        this.options = $.extend({}, Siteapp_StorageManager_DEFAULTS, options);

        this._init();
    }

    /**
     * Setup objects
     */
    _init () {
    	this._version = Siteapp_StorageManager_VERSION;

        this._namespaces   = {};
        
        this._adapters     = {};
        
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
    		throw new StorageManagerException('Invalid application object to attach');
    	}
    }
    
    /**
     * Retrieve current version.
     */
    get version () { 
        return this._version; 
    }
    
    /**
     * Retrieve list of available storage tyoes.
     */
    get types () { 
        return [
        	'memory',
        	'elementData',
        	'sessionStorage',
        	'cookie',
        	'localStorage',
        	'service'
        ]; 
    }
    
    /**
     * Retrieve available storage adapters.
     */
    get namespaces () { 
        return this._namespaces; 
    }

	setNamespaceAdapter ( _namespace, adapter ) {
		if ( !(adapter instanceof StorageAdapter)) {
    		throw new StorageManagerException('Invalid storage adapter object to set');
		}
		if (typeof this.namespaces[_namespace] == 'undefined') {
			this.namespaces[_namespace] = {
				data: {},
				adapters: {}
			}
		}
		this.namespaces[_namespace].adapters[adapter.type] = adapter;
	}
}

export {StorageManager};
    
