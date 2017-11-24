"use strict";

// Core Siteapp Utilities, utilized in a number of places.

/**
 * Returns a boolean for RTL support
 */
function rtl() {
  return $('html').attr('dir') === 'rtl';
}

/**
 * returns a random base-36 uid with namespacing
 * @function
 * @param {Number} length - number of random base-36 digits desired. Increase for more random strings.
 * @param {String} namespace - name of plugin to be incorporated in uid, optional.
 * @default {String} '' - if no plugin name is provided, nothing is appended to the uid.
 * @returns {String} - unique id
 */
function GenerateUUID(length, namespace){
  length = length || 6;
  return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1) + (namespace ? `-${namespace}` : '');
}

/**
 * Vendor polyfill for 'transitionend'
 * 
 * @function
 * @param {jQuery} $elem
 * @returns {String}
 */
function transitionend($elem){
  var transitions = {
    'transition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd',
    'MozTransition': 'transitionend',
    'OTransition': 'otransitionend'
  };
  var elem = document.createElement('div'),
      end;

  for (var t in transitions){
    if (typeof elem.style[t] !== 'undefined'){
      end = transitions[t];
    }
  }
  if(end){
    return end;
  }else{
    end = setTimeout(function(){
      $elem.triggerHandler('transitionend', [$elem]);
    }, 1);
    return 'transitionend';
  }
}

/**
 * Overrides setters for some $object's properties(2secure).
 * So those properties can only be set, eg., when creating a new instance. 
 * 
 * This should try to prevent at least obvious direct hacking. #crossing-fingers
 * 
 * Either, the properties are locked silently:
 *   ```
 *   var obj = { a: 'x' };
 *   secureProperties( obj, ['a'] );
 *   
 *   obj.a = 'y';
 *   //console.//log(obj.a); // => "x"
 *   ```
 *   
 * or setting such property will throw an error:
 *   ```
 *   var obj = { a: 'x' };
 *   secureProperties( obj, ['a'] );
 *   
 *   obj.a = 'y' // => ERROR
 *   ```
 *   
 * @function
 * @access private
 * @param {object} $object - target object
 * @param {[string]} properties2secure - list of property keys to secure
 * @param {boolean} silent - wether to lock silently (true, default) or to throw an error (false) when setting the property
 * @returns {object} - the modified $object
 */
function secureProperties ( $object, properties2secure, silent ) {
	var 
		// action to call on object property setter access
	    $SECURITY_ALERT = function $SECURITY_ALERT () { 
		    throw new Error('SECURITY ALERT: You are not allowed to do that in this context!'); 
		}
		
    ;
	let $_vault = {};
	
	for ( var idx in properties2secure ) {
		
		if ( $object.hasOwnProperty( properties2secure[idx] ) ) {

			let $prop  = properties2secure[idx];
			let $value = $object[ $prop ];
			
			// put property value into vault...
			$_vault[ $prop ] = $value;
			
			if (silent === false) {
				Object.defineProperty($object, $prop, {
					//
					// one method would be to override getter and setter...
					
					// map getter for property to vault...
					get : function () { return $_vault[$prop] },
					// ... and lock setter for property (hopefully), throwing error
				    set : $SECURITY_ALERT 
				});
			} else {
				Object.defineProperty($object, $prop, {
				    //
					// ...another method is to set the property's config:
					
				    // statically set the property value...
					value   : $_vault[ $prop ],
				    // ... and just disable writing access, to lock silently
					writable: false
				});
			}
		}
		
		
	}
	
	return $object;
}

/**
 * Shortcut and IE9 polyfill to get the name of a function/class instance
 * 
 * @function
 * @param {function} fn
 * @returns {string}
 */
function functionName(fn) {
    if (Function.prototype.name === undefined) {
        var funcNameRegex = /function\s([^(]{1,})\(/;
        var results = (funcNameRegex).exec((fn).toString());
        return (results && results.length > 1) ? results[1].trim() : "";
    }
    else if (fn.prototype === undefined) {
        return fn.constructor.name;
    }
    else {
        return fn.prototype.constructor.name;
    }
}

/**
 * Normalize/try to cast string value
 * 
 * @function
 * @param {mixed} str
 * @returns {boolean|number|string}
 */
function parseValue(str){
    if(/true/.test(str)) return true;
    else if(/false/.test(str)) return false;
    else if(!isNaN(str * 1)) return parseFloat(str);
    return str;
}

/**
 * Convert PascalCase to kebab-case
 * @see http://stackoverflow.com/a/8955580
 * 
 * @function
 * @param {string} str
 * @returns {string}
 */
function hyphenate(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Function for applying a debounce effect to a function call.
 * @function
 * @param {Function} func - Function to be called at end of timeout.
 * @param {Number} delay - Time in ms to delay the call of `func`.
 * @returns function
 */
function throttle(func, delay) {
    var timer = null;

    return function () {
        var context = this, args = arguments;

        if (timer === null) {
            timer = setTimeout(function () {
                func.apply(context, args);
                timer = null;
            }, delay);
        }
    };
}

export {
	rtl, 
	GenerateUUID, 
	transitionend, 
	secureProperties,
	functionName,
	parseValue,
	hyphenate,
	throttle
};

