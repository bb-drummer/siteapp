Siteapp [![Build Status](https://travis-ci.org/bb-drummer/siteapp.svg?branch=master)](https://travis-ci.org/bb-drummer/siteapp)
======

just another application framework


---


## About


**Siteapp** is a (mini) application framework to assist in building custom frontend applications. 

It is basically an abstraction of _Zurb Foundation_'s ([-> homepage](https://foundation.zurb.com/)) core mechanism. 

So, **" Why, the heck, another framework ?! "** ... or ... **where this started from** ...

While fooling around with _Foundation_ for some time I stumbled across a comment inside its core code:

> // TODO: consider not making this a jQuery function
> // TODO: need way to reflow vs. re-initialize

so, I gave it a thought

> " yeah, why not? let's go for it... ^^ "

coded here and there, tried this, tried that, played around some more, tried something other...
And then eventually, when 'I stepped back and took a look from above', I noticed

> " well... this has become just a _tiny little_ more than... 'not [] a jQuery function' "

I took another look into my other _Foundation_ utilizing projects and picked some of the, so to say, best-of's and combined and refactored them into abstracted components. That way, the framework organically grew to what it is now: 

> ***a framework to assist in building custom frontend applications which provides mechanisms and basic objects/classes to help creating and, automatically, instantiating custom modules/plugins related, but not restricted, to frontend/UI components.***


## Documentation

Learn how to utilize the **Siteapp** framework within your project:

- [Installation](#installation)
- [Import the framework](#import-the-framework)
- [basic core usage](#basic-core-usage)
- [basic module usage](#basic-module-usage)

Due to the abstraction itself and its _organic_ growth (sorry for that O:) ) there are some objects to be utilized and mechanisms to apply by extending applications and/or components. There are a lot of new objects and there are a few ones inherited from the _Foundation_ core:

- [Application core](docs/core.md)
  - [Extending](docs/core.md#extending-the-base-object) the base object
  - [Initializing](docs/core.md#initializing-the-application) the application
  - [Shortcuts](docs/core.md#shortcuts)
  - [`require` shim](docs/core.md#require-shim-configuration) configuration
  - the generic [EventManager](docs/core.md#generic-eventmanager)

- [Module management](docs/modules.md)
  - the [ModuleManager](docs/modules.md#modulemanager)
  - the [Module](docs/modules.md#module-object) object
  - the [ModuleFactory](docs/modules.md#modulefactory-component) component

- [Storage management](docs/storage.md)
  - the [StorageManager](docs/storage.md#storagemanager)
  - the [StorageAdapter](docs/storage.md#storageadapter) object

- [UI management](docs/ui.md)
  - the [UiManager](docs/ui.md#uimanager)
  - the [Screenlayer](docs/ui.md#screenlayer-object) object
  - the (default) [PanelAdapter](docs/ui.md#default-paneladapter-object) object
  - the [Screenpanel](docs/ui.md#Screenpanel-object) object
  - the generic [Action](docs/ui.md#generic-action-object) object

inherited and extended,modified and/or abstracted from _Foundation_ core are

- Foundation.core
- Foundation.util.*
- Foundation.Triggers
- Foundation.Keyboard
- Foundation.MediaQuery



### Installation

Checkout the repository, (npm) install and run the tests
```
$> git clone https://gitlab.bjoernbartels.earth/js/siteapp.git
[...]

$> cd siteapp
$> npm install && npm test
[...]

$>
```
Afterwards, presuming the tests ran without failure, the framework's ready-to-use files can be found in the `dist/js/`folder.

_Note:_ although there are some SASS/CSS files with the sources, **Siteapp** is not intended to provide styling for components, at this point.


### Import the framework

The framework could be imported via `require`
```
const Siteapp = require('path/to/siteapp');
```
or `import`
```
import Siteapp from 'path/to/siteapp';
```
Alternatively, it can also simply be included in the HTML page, for example
```
<script type="text/javascript" src="path/to/siteapp.min.js"></script>
```

_Note:_ the corresponding `.min` files are stripped off of most `console` statements, so for development the non-minimized files should be used for better debugging.


### Basic core usage

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



### Basic module usage

To create a custom module, simply extend the base class and register the component to the _ModuleManager_
```
class MyModule extends Siteapp.Module {
     
     constructor (element, options) {
         super(element, options);
         
         // more to do?
         
         myApp.Modules.initialize(this);
     }

     /* the actual module stuff */

};

myApp.Modules.register(MyModule);
```
Now, inside the page's markup, include a corresponding element
```
[...]
    <div data-myapp-my-module>
        <!-- (initial) component markup comes here... -->
    </div>
[...]
```

Please, see the [ModuleManager](docs/modulemanager.md) and [Module class](docs/module-class.md) documentation for a more detailed explanation and more advanced usage.


## So now, what's up with _Foundation_?

A setup which kind of ports **Siteapp** back to _Foundation_, namely only its core part, can be found either in
`js/entries/siteapp-foundation.js` (source) or in `dist/js/siteapp-foundation.js` (compiled).

Simply, import the framework shim and then the _Foundation_ plugins needed and/or already created
```
const Foundation = require('path/to/siteapp-foundation.js');

// some Foundation plugin
require('path/to/foundation.dropdown.js');

// start-up
$(document).foundation();
```

_Note_: due to the abstraction and its extended features the shimmed port is taller in file-size than the original _Foundation_ core. So, if not utilizing the extended features of **Siteapp** at all, using the original _Foundation_ framework instead would be more appropriate.



## Status

| platform | status |
| --- | --- |
| [CI (Travis-CI)](https://travis-ci.org/bb-drummer/siteapp) | [![Build Status](https://travis-ci.org/bb-drummer/siteapp.svg?branch=master)](https://travis-ci.org/bb-drummer/siteapp) |
| [QA (Scrutinizer-CI)](https://scrutinizer-ci.com/g/bb-drummer/siteapp/) | [![Build Status](https://scrutinizer-ci.com/g/bb-drummer/siteapp/badges/build.png?b=master)](https://scrutinizer-ci.com/g/bb-drummer/siteapp/build-status/master) [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/bb-drummer/siteapp/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/bb-drummer/siteapp/?branch=master) |
| [GitLab](https://gitlab.bjoernbartels.earth/js/siteapp/) | [![pipeline status](https://gitlab.bjoernbartels.earth/js/siteapp/badges/master/pipeline.svg)](https://gitlab.bjoernbartels.earth/js/siteapp/commits/master) |


---


### Work-In-Progress disclaimer

This project is now still a work in progress!
Some of its features and options are or may be a subject to change!

DO NOT USE IN PRODUCTION ENVIRONMENTS !

When using this software, absolutely no warranties of any sort are granted. Please see the license file for more information.

