/**
 * [Siteapp] - multi-purpose frontend application
 * 
 * Siteapp Module Abstract
 *     
 * @package     [Siteapp]
 * @subpackage  [Siteapp] module
 * @author      Björn Bartels <coding@bjoernbartels.earth>
 * @link        https://gitlab.bjoernbartels.earth/groups/themes
 * @license     http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0
 * @copyright   copyright (c) 2016 Björn Bartels <coding@bjoernbartels.earth>
 * 
 * @namespace   Siteapp
 * @module      Siteapp.Module
 * @abstract
 */
	

import {Exception} from '../sys/siteapp.exception';

const Siteapp_Module_DEFAULTS = {
};

class ModuleException extends Exception {

	get name () {
		return "SiteappModuleException";
	}
	
};

/**
 * Module module abstract.
 * @module Siteapp.Module
 */
const Module = class Module {

    /**
     * Sets-up the module basics.
     * ! (to override by extending class)
     * 
     * - set 'this.$element' here, if needed
     * 
     * @function
     */
    _setup (element, options) {
	}
    
    /**
     * Initializes the module.
     * ! (to override by extending class)
     * 
     * - call '[Siteapp].{ModuleManager}.initialze(this)' here, if needed
     * 
     * @function
     */
    _init () {
    	//console.//log ('module init:', this.manager.functionName(this));
	}
    
    /**
     * Sets-up events and event handling the module. 
     * ! (to override by extending class)
     * 
     * @function
     */
    _events () {
	}
    
    /**
     * Destroys the module.
     * ! (to override by extending class)
     * 
     * @function
     */
    _destroy () {
    	//console.//log ('module destroy:', this.manager.functionName(this));
	}
    
    /**
     * Reinitializes the module.
     * ! (to override by extending class)
     * 
     * @function
     */
    reflow() {
    	//console.//log ('module reflow:', this.manager.functionName(this));
	}
    
    // ... and add your own propertiesfrom here...
    
    //
    // ...
    //
    
    
    
    // HERE BE DRAGONS !!!
    // only modify/override the following properties and methods if you know what you are doing
    
    
    /**
     * Create a new instance of a module.
     * 
     * @class
     * @name Module
     * @param {jQuery} element - jQuery object to apply the module to.
     * @param {Object} options - Overrides to the default module settings.
     */
    constructor(element, options, app) {
    	
	    this._setup(element, options);
	    if ( element && (!this.$element || !this.$element.jquery) ) {
	    	// make sure, we have a jQuery object here
	    	this.$element = $(element);
	    }
	    
        this.options = $.extend({}, Siteapp_Module_DEFAULTS, (this.$element ? this.$element.data() : {}), options);
	    
	    if (app instanceof Siteapp) {
	    	this.application = app;
	    }
	    
	    var moduleName = Siteapp.sys.hyphenate( Siteapp.sys.functionName(this) );
	    if (!this.uuid) {
		    this.uuid = moduleName+'-'+Siteapp.sys.genUUID(6);
	    }
	    
        var attrName = moduleName;
        if (this.manager.options.namespacedModuleTriggers) {
        	attrName   = this.application.appName+'-'+moduleName;
        }

	    if(!this.$element.attr(`data-${attrName}`)){ this.$element.attr(`data-${attrName}`, this.uuid); }
	    
	    if(!this.$element.data(this.application.appName+'Plugin')){ this.$element.data(this.application.appName+'Plugin', this); }
	    /**
	     * Fires when the module has initialized.
	     * @event Module#init
	     */
	    this.$element.trigger(`init.${moduleName}`);
	}
    
    /**
     * Destroys the module.
     * 
     * @function
     */
    destroy() {
        this._destroy();
        var moduleName = Siteapp.sys.functionName(this);
        var attrName = moduleName;
        if (this.manager.options.namespacedModuleTriggers) {
        	attrName   = this.application.appName+'-'+moduleName;
        }
        
        this.$element.removeAttr(`data-${attrName}`).removeData(this.application.appName+'Plugin')
            /**
             * Fires when the module has been destroyed.
             * @event Module#destroyed
             */
            .trigger(`destroyed.${attrName}`);
        for(var prop in this){
          this[prop] = null; //clean up script to prep for garbage collection.
        }
    }

    /**
     * Hide the main module element.
     * 
     * @function
     */
    hide() {
    	this.$element.hide();
    }
    
    /**
     * Show the main module element.
     * 
     * @function
     */
    show() {
    	this.$element.show();
    }

    /**
     * generate trigger markup attribute
     * 
     * @function
     * @private
     */
    get _triggerAttribute() {
    	
    	var attr = [
    		'data-', 
    		     (this.manager.namespacedModuleTriggers ? this.application.appName+'-' : ''), 
    		     Siteapp.sys.hyphenate(Siteapp.sys.functionName(this)).toLowerCase(),
    		''
    	];
    	
    	return attr.join('');
    }

    /**
     * generate trigger markup data-... options
     * 
     * @function
     * @private
     */
    get _triggerDataOptions() {
    	
    	var dataAttrs = [];
    	$.each(this.options, (key, val) => {
	    	 if ( (val === null) || ( (val instanceof Object) && !(val instanceof Array) ) ) {
		     //if ( (val === null) || ( (typeof val == 'object') && !(typeof val.join == 'undefined') ) ) {
	    		 dataAttrs.push(''); 
	    	 } else {
		    	 dataAttrs.push(' data-'+Siteapp.sys.hyphenate(key)+'='+ JSON.stringify(val) +'');
	    	 }
	    });
    	
    	return dataAttrs.join('');
    }

    /**
     * generate trigger markup tag
     * 
     * @function
     * @private
     */
    get _triggerTag() {
    	if (!this._tagName) {
    		this._tagName = 'div';
    	}
    	var html = [
    		'<'+this._tagName+' ', 
    		     this._triggerAttribute,
    		     this._triggerDataOptions,
    		'>', 
    		    '<!-- modulecontent -->',
    		'</'+this._tagName+'>'
    	];
    	
    	return html.join('');
    }

    /**
     * set trigger markup tagname
     * 
     * @function
     * @private
     */
    set _triggerTag( tag ) {
    	if ( (typeof tag == 'string') && (tag != '') ) {
    		this._tagName = tag.toLowerCase();
    	}
    }

    /**
     * Retrieves module markup, generates 
     * 
     * @function
     */
    get markup() {
    	var html = this._triggerTag;
    	if (this.$element) {
    		html = html.replace( '<!-- modulecontent -->', (this.$element.html() || '') );
    	}
    	return (html);
    }
    
    /**
     * Return initial markup
     * 
     * @function
     */
    toString() {
    	return (this.markup);
    }
    
    /**
     * return initial markup elements
     * 
     * @function
     */
    toElement() {
    	if (this.$element) {
    		return this.$element;
    	}
    	return $(this.toString());
    }
    
    /**
     * Retrieve attached module manager.
     */
    get manager () { 
        return this._manager; 
    }
    
    /**
     * Attach application object.
     */
    set manager ( _manager ) { 
    	if (_manager instanceof ModuleManager) {
    		this._manager = _manager;
    	} else {
    		throw new ModuleException('Invalid module manager object to attach, must be an instance of Siteapp.ModuleManager');
    	}
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
    		throw new ModuleException('Invalid application object to attach, must be an instance of Siteapp');
    	}
    }
}

//
// now, after extending, the module gets registered:
// [Siteapp].[ModuleManager].register({Moduleclass}, 'Moduletriggername');
//

export default Module;