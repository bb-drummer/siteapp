# Siteapp application core

...


## Basic usage

A minimal setup, right away, would be
```
const myApp = new Siteapp( /* options */ );
```
or extending the base class like
```
class MyApp extends Siteapp {
     /* extending stuff */
};

const myApp = new MyApp();
```
then start the app simply with
```
myApp.run();
```
or assign the app as a plugin to _jQuery_ 
```
myApp.addToJquery();
$(document).siteapp();
```



## Extending the base object

...


## Initializing the application

...


## Shortcuts

...


### `${X}` app shortcut

retrieves instantiated application core object

- instance name inital, ex: `$M` 

...


### `$${Xxy}` and `$${X}` element plugin shortcut

retrieves instantiated module attached to a DOM element
...

- long: full instance name, ex: `$$MyApp`
- short: instance name inital, ex: `$$M` 

...

list/array of instances
```
var plgins = $$M('[data-myapp-my-module]');
```

single instance
```
var plgin = $$M('.unique.selector');
```


## `require` shim configuration

...

```
require.config({
    shim : {
        // ...
    },
    
    "Siteapp" : {
        // ...
    },
    
    "Siteapp.sys.EventManager" : {
        // ...
    },
    
    "Siteapp.Storage" : {
        // ...
    },
    
    "Siteapp.Modules" : {
        // ...
    },
    
    "Siteapp.Ui" : {
        // ...
    },
    
    
    
    "SomeCustomModules" : {
        // ...
        deps: ['Siteapp.Ui']
    },
    
});


```


## generic EventManager

provides event handling for events which are **NOT** attached to a DOM element
...


assume a custom module...
```
class MyModule extends Siteapp.Module {
	
    constructor(element, options, app) {
    	super(element, options, app);
    	
    	this.events = new Siteapp.sys.EventManager(this);
    	
    	this.manager.initialize(this);
    	
    	this.on( 'my-trigger', function () {
    		
    		// do something when fired...
    		
    	} );
    }

}

myApp.Modules.register(MyModule, 'MyModule');
```

then, somewhere else, for example, inside another module
```
// ... somewhere else...

var plgin = $('[data-siteapp-my-events]').data('siteappPlugin');
    	
plgin.trigger('my-trigger');

```
