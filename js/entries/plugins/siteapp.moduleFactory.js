import { Siteapp }       from './siteapp.core';
import Module            from '../../module/siteapp.module';
import ModuleFactory     from '../../module/siteapp.moduleFactory';

Siteapp.prototype.Module        = Module;
Siteapp.Module                  = Siteapp.prototype.Module;
Siteapp.prototype.ModuleFactory = ModuleFactory;
Siteapp.ModuleFactory           = Siteapp.prototype.ModuleFactory;
