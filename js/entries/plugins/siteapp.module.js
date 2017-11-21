import { Siteapp }       from './siteapp.core';
import Module            from '../../module/siteapp.module';

Siteapp.prototype.Module = Module;
Siteapp.Module           = Siteapp.prototype.Module;

// Foundation 'Plugin' alias
Siteapp.prototype.Plugin = Siteapp.Module;
Siteapp.Plugin           = Siteapp.prototype.Plugin;
