/**
 * [Siteapp] - multi-purpose frontend application
 * 
 * Siteapp ui paneladapter-layer
 *     
 * @package     [Siteapp]
 * @subpackage  [Siteapp] UI
 * @author      Björn Bartels <coding@bjoernbartels.earth>
 * @link        https://gitlab.bjoernbartels.earth/groups/themes
 * @license     http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0
 * @copyright   copyright (c) 2016 Björn Bartels <coding@bjoernbartels.earth>
 * 
 * @namespace   Siteapp
 * @module      Siteapp.Ui.Paneladapter
 */
import Module from '../module/siteapp.module';

const PaneladapterConfig_DEFAULTS = {
        
    screenlayer  : null,
        
    targetMode   : 'append',
    	
    activeClass  : 'active',
    
    panelSelector : '> *'
    
}

const Paneladapter = class Paneladapter extends Module {
    
    /**
     * Create a new instance of the paneladapter layer.
     * @class
     * @name Paneladapter
     * @extends Screenlayer
     * @extends Module
     * @param {jQuery} element - jQuery object to apply the module to.
     * @param {Object} options - Overrides to the default module settings.
     */
    constructor (element, options) {
        super(element, options);
        
        this.options = $.extend({}, this.options, PaneladapterConfig_DEFAULTS, options, this.$element.data());
        
        this.events = new Siteapp.sys.EventManager(this);
        
        console.log('constructing a panel adapter ...');

    }
    
    /**
     * get active panel index
     * 
	 * @function
     * @return {integer}
     */
    getActiveIndex ( ) {
        return this.getActivePanel().index();
    };
  
    /**
     * get active panel
     * 
	 * @function
     * @return {jQuery}
     */
    getActivePanel ( ) {
        return this.$container.find('> .'+this.options.activeClass);
    };
  
	/**
	 * Sets panel active class.
	 * 
	 * @function
	 * @param {jQuery|HTMLElement} panel
	 * @returns {Boolean}
	 * @fires   Paneladapter#activatepanel
	 */
	setActive ( panel ) {
		var $panel;
		if (panel) {
	        $panel = $(panel);
			this.setInactive();
			$panel.addClass(this.options.activeClass);
	        this.trigger('activatepanel', $panel);
	        this.$element.trigger('activatepanel', $panel);
		}
		return this;
	}
	
	/**
	 * Removes panel active class on all panels or just the given panel.
	 * 
	 * @function
	 * @param   {jQuery|HTMLElement} panel
	 * @returns {Boolean}
	 * @fires   Paneladapter#deactivatepanel
	 */
	setInactive ( panel ) {
		var $panel;
		if (panel) {
	        $panel = $(panel);
		} else {
	        $panel = this.$container.find(this.options.itemSelector);
		}
		
        $panel.removeClass(this.options.activeClass);
        this.trigger('deactivatepanel', $panel);
        this.$element.trigger('deactivatepanel', $panel);
        
		return this;
	}
	
	/**
	 * Detects if given panel is set 'active'.
	 * 
	 * @function
	 * @param {jQuery|HTMLElement} panel
	 * @returns {Boolean}
	 */
	isActive ( panel ) {
		if (panel) {
			return $(panel).hasClass(this.options.activeClass);
		}
		return false;
	}
	
    /**
     * Adds a new panel to the container and re-init flow.
     * 
	 * @function
	 * @param {jQuery|HTMLElement} panel
	 * @param {Boolean} $append2active
	 * @fires   Paneladapter#addpanel
     */
    addPanel ( panel, append2active ) {
    	
        if (!panel) {
            return
        }

        var _this = this;
        
        if (append2active === false) {
	        // add panel item to end of container
	        this.$container.append(panel);
	  
	        var $panel = this.$container.children().last();
        } else {
	        // append panel item to current active item
	        this.getActivePanel().appendTo(panel);
	  
	        var $panel = this.getActivePanel().next();
        } 

        this.trigger('addpanel', $panel);
        this.$element.trigger('addpanel', $panel);

        this.selectPanel($panel);
        this.reflow();

    };
  
    /**
     * Remove a panel from the container and re-init flow.
     * 
	 * @function
	 * @param {jQuery|HTMLElement} panel
	 * @fires   Paneladapter#removepanel
     */
    removePanel ( panel ) {
        if (!panel) {
            return;
        }

        var _this = this;
        var $panel = this.$container.find(panel);
      
        if (!$panel) {
            console.log('panel to remove not found:', panel);
            return;
        }

        this.trigger('removepanel');
        this.$element.trigger('removepanel', $panel);
        
        $panel.remove();
        this.reflow();
    };
  
    /**
     * select a panel from/within the container
     * 
	 * @function
	 * @param {jQuery|HTMLElement} panel
	 * @fires Paneladapter#selectpanel
     */
    selectPanel (panel) {

        var $panel = this.$container.find(panel);
        
        if ($panel.length == 1) {
            this.setActive($panel);
            this.trigger('selectpanel', $panel);
	        this.$element.trigger('selectpanel', $panel);
        } 
        
    };

    
    /**
     * Sets current container element.
     * 
	 * @var
	 * @param {jQuery|HTMLElement} element
     */
    set container ( element ) {
        this.$container = (element.jquery ? element : $(element));
    }

    /**
     * Retrieves current container element.
     * 
     * @var {jQuery} $ontainer
     */
    get container () {
    	if (!this.$container) {
    		return this.$element;
    	}
        return this.$container;
    }
    
    
}

export default Paneladapter;
