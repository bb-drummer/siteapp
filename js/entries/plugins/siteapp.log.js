import { Siteapp } from './siteapp.core';
import { Log } from '../../sys/siteapp.log';

Siteapp.prototype.Log = Log;
Siteapp.Log           = Siteapp.prototype.Log;
