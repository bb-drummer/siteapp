//import $ from 'jquery';

/* <!-- essential core */
import Siteapp from '../../siteapp.core';
//Siteapp.addToJquery($); // done during 'init'

//Touch and Triggers previously were almost purely sede effect driven,
//so no // need to add it to Siteapp, just init them.
import { Keyboard }   from '../../util/siteapp.util.keyboard';
import { MediaQuery } from '../../util/siteapp.util.mediaQuery';
import { Triggers }   from '../../util/siteapp.util.triggers';

Siteapp.prototype.Keyboard   = Keyboard;
Siteapp.prototype.MediaQuery = MediaQuery;
Siteapp.prototype.Triggers   = Triggers;

Siteapp.Keyboard   = Siteapp.prototype.Keyboard;
Siteapp.MediaQuery = Siteapp.prototype.MediaQuery;
Siteapp.Triggers   = Siteapp.prototype.Triggers;

//Extra Core Components: Sorage/Module-Mamagment, Log, Debug
import { Exception } from '../../sys/siteapp.exception';
import { Debugger }  from '../../sys/siteapp.debug';
import { Log }       from '../../sys/siteapp.log';

Siteapp.prototype.Exception = Exception;
Siteapp.prototype.Debugger  = Debugger;
Siteapp.prototype.Log       = Log;

Siteapp.Exception = Siteapp.prototype.Exception;
Siteapp.Debugger  = Siteapp.prototype.Debugger;
Siteapp.Log       = Siteapp.prototype.Log;

/* essential core --> */

/* Foundation compatiblitiy */
Siteapp.prototype.rtl           = Siteapp.prototype.utilities.rtl;
Siteapp.prototype.GetYoDigits   = Siteapp.prototype.utilities.genUUID;
Siteapp.prototype.transitionend = Siteapp.prototype.utilities.transitionend;


//import { Abide } from '../../components/siteapp.abide';
//Siteapp.plugin(Abide, 'Abide');

//finally, assign [Siteapp] class to global/window namespace
window.Siteapp = Siteapp;


export { Siteapp };
