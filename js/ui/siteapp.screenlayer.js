/**
 * [Siteapp] - multi-purpose frontend application
 * 
 * Siteapp UI screen-layer object
 *     
 * @package     [Siteapp]
 * @subpackage  [Siteapp] UI
 * @author      Björn Bartels <coding@bjoernbartels.earth>
 * @link        https://gitlab.bjoernbartels.earth/groups/themes
 * @license     http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0
 * @copyright   copyright (c) 2016 Björn Bartels <coding@bjoernbartels.earth>
 * 
 * @namespace   Siteapp
 * @module      Siteapp.Ui.Screenlayer
 */
import Module        from '../module/siteapp.module';

const Siteapp_Screenlayer_DEFAULTS = {
	
	/* UI modes: 'flow', 'window', false */
	type : 'default',
	
	/* UI modes: 'flow', 'window', false */
	adapter : 'default',
	
	/* UI modes: 'flow', 'window', false */
	configurable : true,
	
	/* UI modes: 'flow', 'window', false */
	removable : true,
	
	/* screen layer adapters */
	adapters: {
		'default' : {}
	},
	
};


const Screenlayer = class Screenlayer extends Module {


	get panelAdapter ( ) {
		if (this.options.adapter != '') {
			return this.application.Ui.getAdapterByName(this.options.adapter);
		}
		return null;
	}

	setAdapter ( adaptername ) {
		if (this.application.Ui.Paneladapters.isRegistered(adaptername)) {
			this.options.adapter = adaptername;
			this.$element.data('adapter', adaptername);
			this.$element.attr('data-adapter', adaptername);
		}
	}
	
	/**
	 * Minimizes screen layer.
	 */
	minimize () {
		this.$element.addClass('screenlayer-minimized');
		this.hide();
	}
	
	/**
	 * Restores minimized screen layer.
	 */
	restore () {
		this.$element.removeClass('screenlayer-minimized');
		this.show();
	}

	/**
	 * Sets screen layer active class and status flag.
	 */
	setActive () {
		this._active = true;
		this.$element.addClass('screenlayer-active');
	}
	
	/**
	 * Removes screen layer active class and status flag.
	 */
	setInactive () {
		this._active = false;
		this.$element.removeClass('screenlayer-active');
	}
	
	/**
	 * Focuses the screen layer, z-index to front, set active.
	 */
	focus () {
		this.manager.focusLayer(this);
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
     * @name Screenlayer
     * @extends Module
     * @param {jQuery} element - jQuery object to apply the module to.
     * @param {Object} options - Overrides to the default module settings.
     */
	constructor (element, option) {
		super(element, option);
    	
		if (Siteapp.sys.functionName(this) == 'Screenlayer') {
			console.log('initializing default screenlayer module...');
		}
	}
	
    /**
     * Setup a new instance of a Screenlayer.
     *  
     * @class
     * @name  Screenlayer
     * @param {jQuery} element - jQuery object to make into a screenlayer.
     *        Object should be of the screenlayer panel, rather than its anchor.
     * @param {Object} options - Overrides to the default plugin settings.
     */
	_setup(element, options) {
		
    	this.$element = element;
        this.options = $.extend({}, Siteapp_Screenlayer_DEFAULTS, /*this.$element.data(),*/ this.options, options);

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
    	
    	this._initPanelAdapter();

		// usually: earthTheme.Ui.initialize(this) ,but in this case lets call the alias
    	// because, we are 'connecting' a '(screen)layer' to a '(UI)manager'
        var layerName = Siteapp.sys.functionName(this);
        this.manager.connectLayer(this, layerName);
	    
    }
	
	/**
     * Initializes the plugin by setting/checking options and attributes, adding helper variables, and saving the anchor.
     * @function
     * @private
     */
    _initPanelAdapter() {
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
     * Destroys the screenlayer.
     * @function
     */
    _destroy() {
    	this._removeKeyHandler();
    	
        this.$element.find('*').off('.'+_this.application.NS);
        this.$element.off('.'+_this.application.NS);
        
        this.$element.remove();
    }
	
}

export default Screenlayer;