/**
 * 
 * This is [Siteapp] base test setup
 * 
 */

/* <!-- essential core */
import Siteapp from './siteapp';

class TestApp extends Siteapp {};

var testApp = new TestApp();


//testApp.addToGlobal(window);
//testApp.addToJquery($);
//testApp.addPluginShortcut(window);


window.Siteapp = Siteapp;
window.testApp = testApp;

