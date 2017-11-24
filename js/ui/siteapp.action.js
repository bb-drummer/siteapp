/**
 * [Siteapp] - multi-purpose frontend application
 * 
 * Siteapp ui nav-action items
 *     
 * @package     [Siteapp]
 * @subpackage  [Siteapp] UI
 * @author      Björn Bartels <coding@bjoernbartels.earth>
 * @link        https://gitlab.bjoernbartels.earth/groups/themes
 * @license     http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0
 * @copyright   copyright (c) 2016 Björn Bartels <coding@bjoernbartels.earth>
 * 
 * @namespace   Siteapp
 * @module      Siteapp.Ui.Action
 */
import Module        from '../module/siteapp.module';
	
const ActionConfig = {
		
	target       : 'layer',
		
	layer        : '_blank',
		
	request      : {
		
		headers : {
			'X-Requested-With' : 'XMLHttpRequest'
		},
		// callbacks
		success : null,
		failure : null,
		complete: null,
	},
	
	removable    : false
	
}

var _noOp = () => {};

const Action = class Action extends Module {
	
    /**
     * Create a new instance of the nav-action layer.
     * 
     * @class
     * @name NavAction
     * @extends Screenlayer
     * @extends Module
     * @param {jQuery} element - jQuery object to apply the module to.
     * @param {Object} options - Overrides to the default module settings.
     */
	constructor (element, option) {
		super(element, option);
		
        this.options = $.extend({}, ActionConfig, this.$element.data(), this.options);
		Siteapp.sys.secureProperties(this.options, ['removable']);
        
    	//console.//log('constructing a navigational action item ...');
    	
    	this._init();
        this.manager.initialize(this);

	}
	
	// ... "Windowlink" stuff ?!
	
	/**
	 * Retrieves target screen-layer via UI manager
	 * 
	 * @var {Screenlayer} targetLayer
	 */
	get targetLayer() {
		if ( (this.options.target == 'layer') && (this.options.layer != '')) {
			return this.application.Ui.getLayerByName(this.options.layer);
		}
		return null;
	}

	/**
	 * Retrieve action's 'href' attribute.
	 * 
	 * @var {string} href
	 */
	get href() {
		return this.$element.attr('href');
	}
	
	/**
	 * Follows link and open in (screen)layer.
	 * 
	 * @function
	 */
	openInLayer () {
		var $action = this,
		    $target = $action.targetLayer;
		if ($target) {
		    
		    $.ajax({
			    url: $action.$element.attr('href'),
			  
			    beforeSend : $action._ajaxBeforeSend.bind($action), 

	            success    : function (data) {
		        	if ($target.panelAdapter instanceof Siteapp.UiManager.Paneladapter) {
	            	
			        	// prepare data
		        		try {
			            	var _data = JSON.parse(data);
		        		} catch (exception) {
		        			var _data = data;
		        		}
		            	
		            	var body  = null,
		            	    title  = ( $action.$element.find('.label').length == 0 ) ? (
		        			           ( $action.$element.attr('title') ) ? $action.$element.attr('title') : $action.$element.attr('href') 
		        		           ) : $action.$element.find('.label').first().text(),
		        	        footer = null
		            	;

		   				// show string data with panel adapter
		            	if (typeof _data != 'object') {
		            		//console.//log('panel body:', $(_data), $(_data).find('body') );
			        	    body   = ( $(_data).find('body').length == 0 ) ? _data : $(_data).find('body').html(); 
			        	    
				        	//$target.panelAdapter.addPanel($item);
				            $target.panelAdapter.addPanel({
				        		title : title,
				        		body  : body,
				        		footer: footer
				        	});

			   		    // show panel object with panel adapter
			        	} else if (typeof _data.body != 'undefined') {
				        	$target.panelAdapter.addPanel(_data);
				        	
			   		    // 'try' to show data object with panel adapter
			        	} else {
				        	$target.panelAdapter.addPanel({
				        		title : null,
				        		body  : data,
				        		footer: null
				        	});
		            	}
		            	
	            	}
		        	
		        	// user callback
					if (typeof $action.options.request.success == 'function') {
						$action.options.request.success.apply($action, arguments);
					}	
		        }, 

	            failure    : function (data) {
		        	// user callback
					if (typeof $action.options.request.failure == 'function') {
						$action.options.request.failure.apply($action, arguments);
					}	
		        }, 

	            complete    : function (data) {
		        	// user callback
					if (typeof $action.options.request.complete == 'function') {
						$action.options.request.complete.apply($action, arguments);
					}	
		        }
				
		    });
			
		}
	}
	
	/**
	 * Sends data to module.
	 * 
	 * @function
	 */
	sendToModule () {
		location.href = this.$element.attr('href'); 
	}
	
	/**
	 * Follows a (default) link
	 * 
	 * @function
	 */
	link () {
		location.href = this.$element.attr('href'); 
	}

    
    /**
     * Initializes action's setup.
     * 
     * @private
     */
    _init() {
    	
    	this.events = new Siteapp.sys.EventManager(this);
	    this._events();
	    
    }

    /**
     * Adds event listeners to the element utilizing the triggers utility library.
     * 
     * @private
     */
    _events() {
    	this._addKeyHandler();
    	this._addClickHandler();
    }
    
    /**
     * Adds click event handlers.
     * @private
     */
    _addClickHandler () {
    	var namespace = '.'+this.application.appName,
    	    $action   = this
    	;
    	this.$element.off('click tap');
    	
    	this.$element.on('click.'+namespace+' tap.'+namespace, function (oEvent) {
    		
    		if ($action.options.target == 'layer') {
    			$action.openInLayer();
    		} else if ($action.options.target == 'module') {
    			$action.sendToModule();
    		} else {
    			$action.link();
    		}
    		
    		// stop further event propagation
    	    oEvent.preventDefault();
    	    oEvent.stopPropagation();
    	    oEvent.stopImmediatePropagation();
    	    return (false);
    	});
    	
    }
    
    /**
     * Adds keyboard event handlers.
     * @private
     */
    _addKeyHandler() {
         // Keyboard.addKeyHandlers...
    }
    
    /**
     * Modifies request headers.
     * @private
     */
    _ajaxBeforeSend ( request ) {
    	var headers = this.options.request.headers;
    	
    	headers['X-Requested-With'] = this.application.appName;
    	
    	for (var key in headers) {
    		if ( headers[key] != '' ) {
    	  	    request.setRequestHeader( key, headers[key] );
    		}
    	}
    }
    
}

export default Action;	

