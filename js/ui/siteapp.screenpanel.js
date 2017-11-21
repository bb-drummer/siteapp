/**
 * [Siteapp] - multi-purpose frontend application
 * 
 * Siteapp UI screen-panel object
 *     
 * @package     [Siteapp]
 * @subpackage  [Siteapp] UI
 * @author      Björn Bartels <coding@bjoernbartels.earth>
 * @link        https://gitlab.bjoernbartels.earth/groups/themes
 * @license     http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0
 * @copyright   copyright (c) 2016 Björn Bartels <coding@bjoernbartels.earth>
 * 
 * @namespace   Siteapp
 * @module      Siteapp.Ui.Screenpanel
 */
import Module        from '../module/siteapp.module';

const Siteapp_Screenpanel_DEFAULTS = {

	title         : null,

	body          : null,
	
	footer        : null,
	
	activeClass   : 'active',
	
	minimizedClass: 'minimized'
	
};


const Screenpanel = class Screenpanel extends Module {
	
    template ( vars ) {
    	var namespace = Siteapp.sys.functionName(this);
    	if (this.manager.options.namespacedModuleTriggers) {
    		namespace = this.application.appName+'-'+namespace;
    	}
    	
  	    // build flow panel item
  	    var panelHTML = [
	        '<div data-', namespace,'>',
	            '<div data-', namespace,'-header>',
	                ((vars.title == '') ? '' : ['<h2 class="title">',
	                	vars.title,
	                '</h2>'].join('')),
	                '<div class="wm-button-group">',
  		                '<button class="wm-previous" data-previous>',
  		                    '<i href="#" class="icon fa-caret-left"><span class="label">previous</span></i>',
  		                '</button>',
  		                '<button class="wm-next" data-next>',
  		                    '<i href="#" class="icon fa-caret-right"><span class="label">next</span></i>',
  		                '</button>',
  		                '<button class="wm-minimize" data-minimize disabled>',
  		                    '<i href="#" class="icon fa-window-minimize"><span class="label">minimize</span></i>',
  		                '</button>',
  		                '<button class="wm-maximize" data-maximize disabled>',
  		                    '<i href="#" class="icon fa-window-maximize"><span class="label">maximize</span></i>',
  		                '</button>',
                          '<button class="wm-close" data-close>',
  		                    '<i href="#" class="icon fa-close"><span class="label">close</span></i>',
  		                  '</button>',
  		            '</div>',
  		        '</div>',
  		        '<div data-', namespace,'-body>',
  		           vars.body,
  		        '</div>',
  		        ((vars.footer == '') ? '' : ['<div data-', namespace,'-footer>',
  		        	vars.footer,
  		        '</div>'].join('')),
	        '</div>'
  	    ].join('');
        return ( $(panelHTML) );
    }
    
    get title () {
    	if (this.options.title) {
    		return String(this.options.title);
    	}
    	return '';
    }
    
    get body () {
    	if (this.options.body) {
    		return String(this.options.body);
    	}
    	return '';
    }
    
    get footer () {
    	if (this.options.footer) {
    		return String(this.options.footer);
    	}
    	return '';
    }
	
	/**
	 * Minimizes screen layer.
	 */
	minimize () {
		this.$element.addClass(this.options.minimizedClass);
		this.hide();
		this.trigger('minimize');
	}
	
	/**
	 * Restores minimized screen layer.
	 */
	restore () {
		this.$element.removeClass(this.options.minimizedClass);
		this.show();
		this.trigger('restore');
	}

	/**
	 * Sets screen layer active class and status flag.
	 */
	setActive () {
		this._active = true;
		this.$element.addClass(this.options.activeClass);
		this.trigger('activate');
	}
	
	/**
	 * Removes screen layer active class and status flag.
	 */
	setInactive () {
		this._active = false;
		this.$element.removeClass(this.options.activeClass);
		this.trigger('deactivate');
	}
	
	/**
	 * Gets current 'active' status flag.
	 */
	get isActive () {
		return this._active === true;
	}
	
    /**
     * Create a new instance of the screen layer.
     * @class
     * @name Screenpanel
     * @extends Module
     * @param {jQuery} element - jQuery object to apply the module to.
     * @param {Object} options - Overrides to the default module settings.
     */
	constructor (element, option) {
		super(element, option);
    	
		if (Siteapp.sys.functionName(this) == 'Screenpanel') {
			console.log('initializing screenpanel module...');
		}
	}
	
    /**
     * Setup a new instance of a Screenpanel.
     *  
     * @class
     * @name  Screenpanel
     * @param {jQuery} element - jQuery object to make into a screenpanel. Object should be of the screenpanel panel, rather than its anchor.
     * @param {Object} options - Overrides to the default plugin settings.
     */
	_setup(element, options) {
		
    	this.$element = element;
        this.options = $.extend({}, Siteapp_Screenpanel_DEFAULTS, /*this.$element.data(),*/ this.options, options);

        var layerName = Siteapp.sys.functionName(this);
        this.className = 'earthTheme.Ui.'+layerName; // ie9 back compat
        
        this._init();

        
    }
				
	/**
     * Initializes the screen layer by setting/checking options and attributes, 
     * adding helper variables...
     * Connects to UI manager
     * 
     * @function
     * @private
     */
    _init() {
    	
    	this.events = new Siteapp.sys.EventManager(this);
	    this._events();

        this.manager.initialize(this);
	    
    }

    /**
     * Adds event listeners to the element utilizing the triggers utility library.
     * @function
     * @private
     */
    _events() {
    	this._addKeyHandler();
    	this._addClickHandler();
    }
    
    _addClickHandler () {
    }
    
    /**
     * Adds keyboard event handlers for items within the tabs.
     * @private
     */
    _addKeyHandler() {
         // Keyboard.addKeyHandlers...
    }
    
    /**
     * Removes keyboard event handlers.
     * @private
     */
    _removeKeyHandler() {
        // Keyboard.unregister...
    }
    
    /**
     * Destroys the screenpanel.
     * @function
     */
    _destroy() {
    	this._removeKeyHandler();
    	
        this.$element.find('*').off('.'+this.application.appName);
        this.$element.off('.'+this.application.appName);
        
        this.$element.remove();
    }
    
	
}

export default Screenpanel;