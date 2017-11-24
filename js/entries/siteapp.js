
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
import { Debugger }  from '../sys/siteapp.debug';
import { Log }       from '../sys/siteapp.log';
 
Siteapp.prototype.Exception = Exception;
Siteapp.prototype.Debugger  = Debugger;
Siteapp.prototype.Log       = Log;
 
Siteapp.Exception = Siteapp.prototype.Exception;
Siteapp.Debugger  = Siteapp.prototype.Debugger;
Siteapp.Log       = Siteapp.prototype.Log;

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

// attach application storage manager classes
import { StorageAdapter } from '../storage/siteapp.storageAdapter';
import { StorageManager } from '../storage/siteapp.storageManager';

Siteapp.prototype.StorageAdapter = StorageAdapter;
Siteapp.StorageAdapter           = StorageAdapter;
Siteapp.prototype.StorageManager = StorageManager;
Siteapp.StorageManager           = StorageManager;

// attach application UI manager classes
import Ui           from '../ui/siteapp.ui';
import Action       from '../ui/siteapp.action';
import Screenlayer  from '../ui/siteapp.screenlayer';
import Screenpanel  from '../ui/siteapp.screenpanel';
import Paneladapter from '../ui/siteapp.paneladapter';

Siteapp.prototype.UiManager              = Ui;
Siteapp.UiManager                        = Ui;
Siteapp.prototype.UiManager.Action       = Action;
Siteapp.UiManager.Action                 = Action;
Siteapp.prototype.UiManager.Screenlayer  = Screenlayer;
Siteapp.UiManager.Screenlayer            = Screenlayer;
Siteapp.prototype.UiManager.Screenpanel  = Screenpanel;
Siteapp.UiManager.Screenpanel            = Screenpanel;
Siteapp.prototype.UiManager.Paneladapter = Paneladapter;
Siteapp.UiManager.Paneladapter           = Paneladapter;


/* Foundation compatiblitiy mappings */
Siteapp.prototype.rtl           = Siteapp.prototype.utilities.rtl;
Siteapp.prototype.GetYoDigits   = Siteapp.prototype.utilities.genUUID;
Siteapp.prototype.transitionend = Siteapp.prototype.utilities.transitionend;
Siteapp.rtl                     = Siteapp.prototype.utilities.rtl;
Siteapp.GetYoDigits             = Siteapp.prototype.utilities.genUUID;
Siteapp.transitionend           = Siteapp.prototype.utilities.transitionend;

//'Foundation.Plugin' alias for 'Siteapp.Module'
Siteapp.prototype.Plugin        = Siteapp.Module;
Siteapp.Plugin                  = Siteapp.Module;


//finally, assign [Siteapp] class to global/window namespace
window.Siteapp = Siteapp;


export {Siteapp};
