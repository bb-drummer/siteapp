/**
 * [Siteapp] - multi-purpose frontend application
 * 
 * Siteapp application logger
 *     
 * @package     [Siteapp]
 * @subpackage  [Siteapp] core
 * @author      Björn Bartels <coding@bjoernbartels.earth>
 * @link        https://gitlab.bjoernbartels.earth/groups/themes
 * @license     http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0
 * @copyright   copyright (c) 2016 Björn Bartels <coding@bjoernbartels.earth>
 * 
 * @namespace   Siteapp
 * @module      Siteapp.Log
 */
	
var Log = {
	logentries		: [],
	loglevel		: 0,
	logtypes		: ['debug','info','warn','exception'],
	_currentIndex	: 0,

	log				: function ( message, type, context ) { this.logentries.push(arguments); return (this); },
	get				: function () { return (arguments.length > 0) ? this.logentries[parseInt(arguments[0])] : this.logentries; },
	clear			: function () { this.logentries = []; this._currentIndex = 0; return (this); },

	setLevel		: function () { if (arguments.length > 0) { this.loglevel = parseInt(arguments[0]); } else { this.loglevel = 0; } return (this); },
	
	_app : ( context ) => {
		if (context) {
			this.__app = context;
		} else {
			return this.__app;
		}
    }
};

export {Log};
