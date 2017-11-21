import { Siteapp }     from './siteapp.core';

import Ui           from '../../ui/siteapp.ui';
import Action       from '../../ui/siteapp.action';
import Screenlayer  from '../../ui/siteapp.screenlayer';
import Screenpanel  from '../../ui/siteapp.screenpanel';
import Paneladapter from '../../ui/siteapp.paneladapter';

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