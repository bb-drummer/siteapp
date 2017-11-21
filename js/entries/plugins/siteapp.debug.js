import { Siteapp } from './siteapp.core';
import { Debugger } from '../../sys/siteapp.debug';

Siteapp.prototype.Debugger = Debugger;
Siteapp.Debugger           = Siteapp.prototype.Debugger;
