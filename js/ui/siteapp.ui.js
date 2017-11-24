/**
 * [Siteapp] - multi-purpose frontend application
 * 
 * Siteapp ui object
 *     
 * @package     [Siteapp]
 * @subpackage  [Siteapp] UI
 * @author      Björn Bartels <coding@bjoernbartels.earth>
 * @link        https://gitlab.bjoernbartels.earth/groups/themes
 * @license     http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0
 * @copyright   copyright (c) 2016 Björn Bartels <coding@bjoernbartels.earth>
 * 
 * @namespace   Siteapp
 * @module      Siteapp.Ui
 */
import ModuleManager   from '../module/siteapp.moduleManager';
import AdapterManager  from '../sys/siteapp.adapterManager';
import Paneladapter    from './siteapp.paneladapter';
import Screenlayer     from './siteapp.screenlayer';


const Siteapp_ModuleManager_DEFAULTS = {
		
	/* UI modes: 'flow', 'window', false */
	mode : 'flow',
	
	/* UI modes: 'flow', 'window', false */
	mode : 'flow',
	
	/* disable UI link redirection, true = same as mode = 'none' */
	disableUiNavigation: false,
	
	/* disable fullscreen mode entirely */
	disableFullscreen: false,

	/* enable background modes */
	enableBackground          : true,
	enableBackgroundAnimation : true,
	enableBackgroundNightDay  : true,
	
	/* screen adapters */
	screenAdapters: [
		'default'
	]
	
};

const Ui = class Ui extends ModuleManager {
				
	
	/**
	 * Init-wrapper for a layer to connect to UI manager.
	 * Calls 'initialze' and sets up special 'Ui' references.
	 * 
	 * For example, in your module's (aka 'layer's) constructor/init, 
	 * instead of...
     * ```
     * [Siteapp].initialzeModule(this);
     * ```
     * do...
     * ```
     * [Siteapp].Ui.connectLayer(this);
     * ```
	 */
	connectLayer ( layer2connect, name ) {
		
		// set up further 'Ui' references, if any...
		this.initialize( layer2connect, name );
	}
	
	disconnectLayer ( layer2disconnect ) {

		
		// remove 'Ui' references, if any...
		this.destroy( layer2disconnect );
		
	}
	
	focusLayer ( layer2focus ) {
		if ( (layer2focus instanceof Siteapp.UiManager.Screenlayer) ) {
			
			this.unfocusLayers();
			
			layer2focus.setActive();
			layer2focus.$element.css({zIndex: 1});
			
		}
	}
	
	unfocusLayers (  ) {
		this.deactivateLayers();
		
		this.layers.map((idx, layer) => {
			
			if ( (layer instanceof Siteapp.UiManager.Screenlayer) ) {
				layer.setInactive();
				layer.$element.css({zIndex: -1});
			}
			
		});
	}
	
	activateLayer ( layer2activate ) {
		if ( (layer2activate instanceof Siteapp.UiManager.Screenlayer) ) {
			
			layer2activate.setActive();
			
		}
	}
	
	deactivateLayers ( ) {
		var layer = this.activeLayer;
		
		if ( (layer instanceof Siteapp.UiManager.Screenlayer) ) {
			layer.setInactive();
		}
	}
	
	/**
	 * Retrieve screen layer by name.
	 * 
	 * @param {string} layername
	 * @returns {Screenlayer}
	 */
	getLayerByName ( layername ) {
		var result = null;
		for (var idx in this.layers) {
			var layer = this.layers[idx];
			if (layer.options.name && (layer.options.name == layername)) {
				result = layer;
			}
		};
		return result;
	}
	
	/**
	 * Retrieve panel adapter by name.
	 * 
	 * @param {string} adaptername
	 * @returns {Paneladapter}
	 */
	getAdapterByName ( adaptername ) {
		var result = null;
		if (this.Paneladapters.isRegistered(adaptername)) {
			for (var idx in this.adapters) {
				var adapter = this.adapters[idx];
				if (adapter.options.name && (adapter.options.name == adaptername)) {
					result = adapter;
				}
			};
		}
		return result;
	}
	
	/**
	 * Retrieve active/focused screen layer.
	 * 
	 * @var {Screenlayer} activeLayer
	 */
	get activeLayer () {
		for (var idx in this.layers) {
			if ( this.layers[idx].isActive ) {
				return this.layers[idx];
			}
		}
		return null;
	}
	
	/**
	 * Retrieve registered screen layers.
	 * 
	 * @var [{Screenlayer}] layers
	 */
	get layers () {
		var $manager   = this,
	        _layers     = [],
	        layerAttrs = [],
		    namespace  = $manager.application.appName
	    ;
		$.each(this._modules, (idx, plugin) => {
			var name = Siteapp.sys.hyphenate( Siteapp.sys.functionName(plugin) );
			if ($manager.options.namespacedModuleTriggers) {
				layerAttrs.push(`[data-${namespace}-${name}]`);
			} else {
				layerAttrs.push(`[data-${name}]`);
			}
		});
		$(layerAttrs.join(',')).each((idx, elem) => {
			var plugin = $(elem).data(namespace+'Plugin');
			if (plugin instanceof Siteapp.UiManager.Screenlayer) {
				_layers[plugin.uuid] = plugin;
			}
		});
		this._screenlayers = _layers;
		return this._screenlayers;
	}
	
	/**
	 * Retrieve registered screen layers.
	 * 
	 * @var [{Screenlayer}] layers
	 */
	get adapters () {
		var $manager     = this,
	        _adapters    = [],
	        adapterAttrs = [],
		    namespace    = $manager.application.appName
	    ;
		$.each(this._modules, (idx, plugin) => {
			var name = Siteapp.sys.hyphenate( Siteapp.sys.functionName(plugin) );
			if ($manager.options.namespacedModuleTriggers) {
				adapterAttrs.push(`[data-${namespace}-${name}]`);
			} else {
				adapterAttrs.push(`[data-${name}]`);
			}
		});
		$(adapterAttrs.join(',')).each((idx, elem) => {
			var plugin = $(elem).data(namespace+'Plugin');
			if (plugin instanceof Siteapp.UiManager.Paneladapter) {
				_adapters[plugin.uuid] = plugin;
			}
		});
		this._paneladapters = _adapters;
		return this._paneladapters;
	}
	
	/**
     * Initializes the UI manager by setting/checking options and attributes, 
     * adding helper variables, and saving the anchor.
     * @function
     * @private
     */
    _init() {
    	
    	super._init();

    	this._screenlayers     = [];
    	this._paneladapters    = [];
    	
	    this._events();
	    
	    this._initPanelAdapterManager();
	    
	}
	
	/**
     * Initializes the panel adapter manager
     * 
     * @function
     * @private
     */
    _initPanelAdapterManager() {
	    this.Paneladapters = new AdapterManager();
	    this.Paneladapters.application = this.application;
	    
	    // register the generic/default adapter
	    this.Paneladapters.register(Paneladapter, 'default');
    }

    /**
     * Adds event listeners to the element, etc...
     * @function
     * @private
     */
    _events() {
    	this._addKeyHandler();
    	this._addClickHandler();
    }


    /**
     * Adds click event listeners.
     * @function
     * @private
     */
    _addClickHandler () {
    }
    
    /**
     * Adds keyboard event handlers.
     * @private
     */
    _addKeyHandler() {
        var _this = this;

        var keyHandlerMap = {
            'ESCAPE'     : (e) => { /*console.//log('key event [ESC]:', e, this);*/ } ,
            'X'          : (e) => { /*console.//log('key event [X]:', e, this);*/ } ,
            'ALT_CTRL_X' : (e) => { /*console.//log('key event [ALT+CTRL+X]:', e, this);*/ },
            'META_A'     : (e) => { /*console.//log('key event [CMD+A]:', e, this);*/ } 
        }
        Siteapp.Keyboard.addKeyHandlers( keyHandlerMap, 'UiKeys'+this._uuid );
    }
    
    /**
     * Destroys the layoutbody.
     * @function
     */
    _destroy() {
        Siteapp.Keyboard.unregister( 'UiKeys'+this._uuid );
        this.$element.find('*').off('.'+_this.application.appName+'');
        this.$element.off('.'+_this.application.appName+'');
        this.$element.remove();
    }
	
}

export default Ui;