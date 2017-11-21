import { Siteapp } from './siteapp.core';
import { StorageAdapter } from '../../storage/siteapp.storageAdapter';
import { StorageManager } from '../../storage/siteapp.storageManager';

Siteapp.prototype.StorageAdapter = StorageAdapter;
Siteapp.StorageAdapter           = Siteapp.prototype.StorageAdapter;
Siteapp.prototype.StorageManager = StorageManager;
Siteapp.StorageManager           = Siteapp.prototype.StorageManager;
