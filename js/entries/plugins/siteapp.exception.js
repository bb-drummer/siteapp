import { Siteapp } from './siteapp.core';
import { Exception } from '../../sys/siteapp.exception';

Siteapp.prototype.Exception = Exception;
Siteapp.Exception = Siteapp.prototype.Exception;
