import { Siteapp }       from './siteapp.core';
import Module            from '../../module/siteapp.module';
import ModuleFactory     from '../../module/siteapp.moduleFactory';
import ModuleManager     from '../../module/siteapp.moduleManager';

Siteapp.prototype.Module        = Module;
Siteapp.Module                  = Siteapp.prototype.Module;
Siteapp.prototype.ModuleFactory = ModuleFactory;
Siteapp.ModuleFactory           = Siteapp.prototype.ModuleFactory;
Siteapp.prototype.ModuleManager = ModuleManager;
Siteapp.ModuleManager           = Siteapp.prototype.ModuleManager;
