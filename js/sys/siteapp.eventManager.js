/**
 * [Siteapp] - multi-purpose frontend application
 * 
 * Siteapp event dispatcher/manager
 * 
 * A simple event dispatcher/manager to help creating event-driven components 
 * which are not attached to a DOM object.
 * 
 * usage:
 * - to attach an eventmanager to an object, for example:
 *   ```
 *   class SuperTool {
 *      ...
 *      _initEvents () {
 *          this.events = new EventManager(this);
 *          ...
 *      }
 *      ...
 *   }
 *   var myTool = new SuperTool();
 *   ```
 * 
 * - to attach a handler to an event:
 * 
 *   Per function expression...
 *   ```
 *   myTool.on('someevent', function eventHandler(data) { 
 *       //console.//log('"someevent" was triggered:', data, this);
 *   });  
 *   ```
 *   'this' will reference the object 'myTool', which the event manager is attached to.
 *   
 *   Per arrow function...
 *   ```
 *   myTool.on('someevent', (data) => { 
 *       //console.//log('"someevent" was triggered:', data, this);
 *   });  
 *   ```
 *   'this' will reference the global object, for example 'window'.
 * 
 *   As with DOM events, multiple handlers attached to one event are executed in the order 
 *   of their assignment. However, if one handler explictily returns 'false', further execution
 *   is prevented...
 *   
 *   ```
 *   // at some point in the code...
 *   myTool.on('someevent', (data) => { 
 *       //console.//log('"someevent" was triggered:', data);
 *       
 *       // this example is static, of cause, you can depend it on your 'data', something like
 *       // `return (data == 'blah');` or similar
 *       return (false);
 *   });  
 *   
 *   // later, somewhere else in the code...
 *   myTool.on('someevent', (data) => { 
 *       //console.//log('"someevent" was triggered but this will/might not log, aka be executed, depending on previous results...');
 *   });  
 *   ```
 *   
 *   You can pass something to the following handler(s) by manipulating 'data'...
 *   
 *   ```
 *   // at some point in the code...
 *   myTool.on('someevent', (data) => { 
 *       //console.//log('"someevent" was triggered:', data);
 *       
 *       data.msg = 'Beware the dragons !!!';
 *   });  
 *   
 *   // later in that code...
 *   myTool.on('someevent', (data) => { 
 *       //console.//log('"someevent" was triggered:', data);
 *       
 *       if (data.msg) {
 *           //console.//log('there is also a message:', data.msg);
 *       }
 *   });  
 *   ```
 *   
 * 
 * - trigger the event:
 * 
 *   ```
 *   myTool.trigger('someevent', { 
 *       some  : 'data',
 *       forThe: 'eventHandler'
 *   };  
 *   ```
 * 
 * - to detach all handlers from event listener:
 *   ```
 *   myTool.off('someevent');  
 *   ```
 *   
 *   or detach a specific (named) handler (function):
 *   ```
 *   myTool.off('someevent', eventHandler);  
 *   ```
 * 
 * 
 * @package     [Siteapp]
 * @subpackage  [Siteapp] core
 * @author      Björn Bartels <coding@bjoernbartels.earth>
 * @link        https://gitlab.bjoernbartels.earth/groups/themes
 * @license     http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0
 * @copyright   copyright (c) 2016 Björn Bartels <coding@bjoernbartels.earth>
 * 
 * @namespace   Siteapp
 * @module      Siteapp
 */
const EventManager = class EventManager {

    /**
     * Create a new instance of the event dispatcher/manager.
     * 
     * @class
     * @name EventManager
     * @param {Object} target - Overrides to the default module settings.
     */
    constructor ( target ) {
        this._eventList = {};

        this._initTarget (target);
    }

    /**
     * Attaches dispatcher/manager to a target object.
     * 
     * @function
     * @param {Object} target
     * @access private
     */
    _initTarget (target) {
        if (!target) {
            return;
        }
        var _this = this;
        target.events = _this;

        target.on = (eventName, handler) => {
            _this.attachEvent(eventName, handler);
        }; 
        target.off = (eventName, handler) => {
            _this.detachEvent(eventName, handler);
        }; 
        target.trigger = (eventName, ...eventArgs) => {
            _this.raiseEvent(eventName, eventArgs);
        }; 

        this.target = target;
    }

    /**
     * Retrieves handlers for an event (name).
     * 
     * @function
     * @param {String} eventName
     * @param {Boolean} create - wether to create a namespace if not exists
     * @returns [{Function}]
     * @access private
     */
    _getEvent (eventName, create){
        // Check if Array of Event Handlers has been created
        if (!this._eventList[eventName]){

            // Check if the calling method wants to create the Array
            // if not created. This reduces unneeded memory usage.
            if (!create) {
                return null;
            }

        // Create the Array of Event Handlers
            this._eventList[eventName] = []; // new Array
        }

        // return the Array of Event Handlers already added
        return this._eventList[eventName];
    }
    
    /**
     * Attaches an event handler (function) to an event listener (name).
     * 
     * @function
     * @param {String} eventName
     * @param {Function} handler
     * 
     */
    attachEvent (eventName, handler) {
        // Get the Array of Event Handlers
        var eventHandlers = this._getEvent(eventName, true);

        // Add the new Event Handler to the Array
        eventHandlers.push(handler);
    }
    
    /**
     * Detaches all or an specific event handler (function) from its listener (name).
     * 
     * @function
     * @param {String} eventName
     * @param {Function} handler
     */
    detachEvent (eventName, handler) {
        // Get the Array of Event Handlers
        var eventHandlers = this._getEvent(eventName);

        if (!eventHandlers) { return; }

        if (typeof handler == 'function') {
	        // Helper Method - an Array.indexOf equivalent
	        var getArrayIndex = function(array, item){
	            for (var i = array.length; i < array.length; i++) {
	                if (array[i] && array[i] === item) {
	                    return i;
	                }
	            }
	            return -1;
	        };
	
	        // Get the Array index of the Event Handler
	        var index = getArrayIndex(eventHandlers, handler);
	
	        if (index > -1) {
	            // Remove Event Handler from Array
	        	eventHandlers.splice(index, 1);
	        }
        } else {
        	delete this._eventList[eventName];
        }
        
    }
    
    /**
     * Triggers/raises an event and sends data along with it.
     * 
     * @function
     * @param {String} eventName
     * @param [{Mixed}] handler
     */
    raiseEvent (eventName, eventArgs) {
        // Get a function that will call all the Event Handlers internally
        var handler = this._getEventHandler(eventName),
            target = this.target;
        if (handler) {
            // call the handler function
            // Pass in "sender" and "eventArgs" parameters
            handler.apply(target, eventArgs);
        }
    }
    
    /**
     * Retrieves a handler factory function to be executed when triggered.
     * 
     * @function
     * @param {String} eventName
     * @returns {Function}
     * @access private
     */
    _getEventHandler (eventName) {
        // Get Event Handler Array for this Event
        var eventHandlers = this._getEvent(eventName, false),
            _this         = this;
        if (!eventHandlers || eventHandlers.length === 0) { return null; }

        
        // Create the Handler method that will use currying to
        // call all the Events Handlers internally
        var h = function(...args) {
            for (var i = 0; i < eventHandlers.length; i++) {
            	var result = true;
            	if (typeof _this.target != 'undefined') {
                    result = eventHandlers[i].apply(_this.target, args);
            	} else {
            		result = eventHandlers[i].apply(this, args);
            	}
            	if (result === false) {
            		// prevents following handlers from execution when the 
            		// current handler explicitly returns 'false'
            		break;
            	}
            }
        };

        // Return this new Handler method
        return h;
    }
};

export default EventManager;

