/**
 * 
 * This is [Siteapp] configured as what it essentially is:
 * An abstraction of the *Zurb Foundation* core, respectivly the plugin mechanism
 * 
 */

/* <!-- essential core */
import Siteapp from '../siteapp.core';

// Touch and Triggers previously were almost purely sede effect driven,
// so no // need to add it to Siteapp, just init them.
import { Keyboard }   from '../util/siteapp.util.keyboard';
import { MediaQuery } from '../util/siteapp.util.mediaQuery';
import { Triggers }   from '../util/siteapp.util.triggers';

Siteapp.prototype.Keyboard   = Keyboard;
Siteapp.prototype.MediaQuery = MediaQuery;
Siteapp.prototype.Triggers   = Triggers;

Siteapp.Keyboard   = Siteapp.prototype.Keyboard;
Siteapp.MediaQuery = Siteapp.prototype.MediaQuery;
Siteapp.Triggers   = Siteapp.prototype.Triggers;

//Extra Core Components: Storage/Module-Managment, Log, Debug
import { Exception } from '../sys/siteapp.exception';
 
Siteapp.prototype.Exception = Exception;
Siteapp.Exception           = Exception;

/* essential core --> */


// attach application module manager classes
import Module        from '../module/siteapp.module';
import ModuleFactory from '../module/siteapp.moduleFactory';
import ModuleManager from '../module/siteapp.moduleManager';

Siteapp.prototype.Module        = Module;
Siteapp.Module                  = Module;
Siteapp.prototype.ModuleFactory = ModuleFactory;
Siteapp.ModuleFactory           = ModuleFactory;
Siteapp.prototype.ModuleManager = ModuleManager;
Siteapp.ModuleManager           = ModuleManager;


/* Foundation compatiblitiy mappings */
Siteapp.prototype.rtl           = Siteapp.prototype.utilities.rtl;
Siteapp.prototype.GetYoDigits   = Siteapp.prototype.utilities.genUUID;
Siteapp.prototype.transitionend = Siteapp.prototype.utilities.transitionend;
//'Foundation.Plugin' alias for 'Siteapp.Module'
Siteapp.prototype.Plugin        = Siteapp.Module;
Siteapp.Plugin                  = Siteapp.prototype.Plugin;


var Foundation_VERSION = '7.x-proposal';

const ZurbFoundationConfig = {

	// application namespace
	namespace: 'foundation',
	
	// main module manager config
	moduleManager: {

		/**
		 * use namespaced module trigger 'data-' attribute
		 * true  =>  data-{namespace}-{modulename} (default)
		 * false =>  data-{modulename}
	     * 
		 * @var {booloean} namespacedModuleTriggers
		 * @default true
		 */
		namespacedModuleTriggers: false,
		
		/**
		 * Since registered plugins/modules are stored under 
		 * [Siteapp].Modules.{PluginName}, this flag lets the
		 * module manager map them back to [Siteapp].{PluginName}
		 * for Foundation compatiblity when set to 'true'.
	     * ATTENTION: Only do that on one/the main module manager,
		 * because, in that scope, one manager would override 
	     * the registered modules of another module manager if 
	     * modules are assigned the same name!
		 * @var {booloean} mapModulesToApplication
		 * @default false
		 */
		mapModulesToApplication: true
		
	}

};

// Global [Foundation] object
// This is attached to the window, or used as a module for AMD/Browserify
class Foundation extends Siteapp {
	
};

const zurbFoundation = new Foundation(ZurbFoundationConfig);
zurbFoundation.version = Foundation_VERSION;

window.Foundation = zurbFoundation;
zurbFoundation.addToJquery($);


export {Foundation};
