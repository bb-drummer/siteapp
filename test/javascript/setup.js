//import Siteapp from '../../dist/js/siteapp.min.js';

class MyApp extends Siteapp {};

var myApp = new MyApp();

//window.Siteapp = Siteapp;
//window.MyApp   = MyApp;

myApp.addToGlobal(window);
myApp.addToGlobal($);

//window.myApp   = myApp;