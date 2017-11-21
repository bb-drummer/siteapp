import { Siteapp } from './siteapp.core';
import { StorageAdapter } from '../../storage/siteapp.storageAdapter';

Siteapp.prototype.StorageAdapter = StorageAdapter;
Siteapp.StorageAdapter           = Siteapp.prototype.StorageAdapter;
