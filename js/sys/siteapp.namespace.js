/**
 * [Siteapp] - multi-purpose application & CMS theme
 * 
 * Siteapp namespace container/storage
 *     
 * @package     [Siteapp]
 * @subpackage  [Siteapp] utilities
 * @author      Björn Bartels <coding@bjoernbartels.earth>
 * @link        https://gitlab.bjoernbartels.earth/groups/themes
 * @license     http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0
 * @copyright   copyright (c) 2016 Björn Bartels <coding@bjoernbartels.earth>
 * 
 * @namespace   Siteapp
 * @module      Siteapp.Namespace
 */

var Namespace = {

    /**
     * namespace for variables
     */
    vars: {},

    /**
     * namespace for functions
     */
    funcs: {},

    /**
     * namespace for plugins/extensions
     */
    plugins: {},

    /**
     * namespace for components
     */
    components: {},

    /**
     * namespace for script-path for head.load.js
     */
    scripts: {},

    /**
     * expand nested namespaces or set variables & objects, example: Namespace.exp('test.newscope.more.variable', 'anyContent');
     * @param namespace
     * @param value
     * @returns {Namespace}
     */
    exp: function(namespace, value) {
        var namespaceArr = namespace.split('.');
        var parent = this;
        if (namespaceArr[0] === "Namespace") namespaceArr = namespaceArr.slice(1);
        for (var i = 0; i < namespaceArr.length; i++) {
            var partname = namespaceArr[i];
            if (i + 1 == namespaceArr.length && typeof value !== 'undefined') parent[partname] = value;
            else if (typeof parent[partname] === 'undefined') parent[partname] = {};
            parent = parent[partname];
        }
        return parent;
    },

    /**
     * check if namespace/object is exists
     * @param namespace
     * @returns {boolean}
     */
    is: function(namespace) {
        var obj = Namespace;
        var parts = namespace.split('.');
        for (var i = 0; i < parts.length; i++) {
            var part = parts[i];
            if (typeof obj === "object" && part in obj) {
                obj = obj[part];
            }
            else return false;
        }
        return true;
    }
};

/**
 * retrieve a method
 * @param name
 * @returns {*}
 */
Namespace.func = function ( name ) {
    if ( typeof Namespace.funcs[name] != 'function' ) {
        console.warn('ThaliaNameSpace Error: Methode "'+name+'" ist nicht definiert');
        return (function () { return; });
    }
    return Namespace.funcs[name];
};

/**
 * register a new method
 * @param name
 * @param method
 * @returns {*}
 */
Namespace.registerFunc = function ( name, method ) {
    if ( typeof Namespace.funcs[name] != 'undefined' ) {
        console.error('ThaliaNameSpace Error: Methode "'+name+'" ist bereits definiert');
        return (false);
    }
    if ( typeof method != 'function' ) {
        console.error('ThaliaNameSpace Error: zu registrierende Methode "'+name+'" ist keine Funktion');
        return (false);
    }
    Namespace.funcs[name] = method;
    return Namespace.funcs[name];
};

/**
 * check if a given method exists
 * @param name
 * @returns {boolean}
 */
Namespace.isFunc = function ( name ) {
    return ( typeof Namespace.funcs[name] == 'function' );
};

//------------------------------------------

/**
 * retrieve a plug-in
 * @param name
 * @returns {*}
 */
Namespace.plugin = function ( name ) {
    if ( typeof Namespace.plugins[name] == 'undefined' ) {
        console.warn('ThaliaNameSpace Error: Plug-In "'+name+'" ist nicht definiert');
        return (function () { return; });
    }
    return Namespace.plugins[name];
};

/**
 * register a new plug-in
 * @param name
 * @param pluginObject
 * @returns {*}
 */
Namespace.registerPlugin = function ( name, pluginObject ) {
    if ( typeof Namespace.plugins[name] != 'undefined' ) {
        console.error('ThaliaNameSpace Error: Plug-In "'+name+'" ist bereits definiert');
        return (false);
    }
    if ( (typeof pluginObject != 'function') && (typeof pluginObject != 'object') ) {
        console.error('ThaliaNameSpace Error: zu registrierendes Plug-In "'+name+'" ist kein Objekt');
        return (false);
    }
    Namespace.plugins[name] = pluginObject;
    return Namespace.plugins[name];
};

/**
 * check if a given plug-in exists
 * @param name
 * @returns {boolean}
 */
Namespace.isPlugin = function ( name ) {
    return ( typeof Namespace.plugins[name] != 'undefined' );
};

//------------------------------------------

/**
 * retrieve a component
 * @param name
 * @returns {*}
 */
Namespace.component = function ( name ) {
    if ( typeof Namespace.components[name] == 'undefined' ) {
        console.error('ThaliaNameSpace Error: Komponente "'+name+'" ist nicht definiert');
        return (function () {});
    }
    return Namespace.components[name];
};

/**
 * register a new component
 * @param name
 * @param componentObject
 * @returns {*}
 */
Namespace.registerComponent = function ( name, componentObject ) {
    if ( typeof Namespace.components[name] != 'undefined' ) {
        console.error('ThaliaNameSpace Error: Komponente "'+name+'" ist bereits definiert');
        return (false);
    }
    if ( (typeof componentObject != 'function') && (typeof componentObject != 'object') ) {
        console.error('ThaliaNameSpace Error: zu registrierende Komponente "'+name+'" ist kein Objekt');
        return (false);
    }
    Namespace.components[name] = componentObject;
    return Namespace.components[name];
};

/**
 * check if a given component exists
 * @param name
 * @returns {boolean}
 */
Namespace.isComponent = function ( name ) {
    return ( typeof Namespace.components[name] != 'undefined' );
};

//------------------------------------------

/**
 * retrieve all components
 * @returns {Namespace.components|{}}
 */
Namespace.getComponents = function () {
    return Namespace.components;
};

/**
 * initialize a given component
 * @param name
 * @returns {*}
 */
Namespace.initComponent = function ( name ) {
    if (!Namespace.isComponent(name)) {
        return;
    }
    var oComponent = Namespace.component(name);
    if ( typeof oComponent.init != 'function' ) {
        var theComponent = new oComponent;
        //console.info('ThaliaNameSpace Info: Komponente "'+name+'" wurde initialisiert');
        return theComponent;
    }

    oComponent.init();
    //console.info('ThaliaNameSpace Info: Komponente "'+name+'" wurde initialisiert');
    return oComponent;
};

/**
 * clean up/destroy a given component
 * @param name
 * @returns {*}
 */
Namespace.destroyComponent = function ( name ) {
    if (!Namespace.isComponent(name)) {
        return;
    }
    var oComponent = Namespace.component(name);
    if ( typeof oComponent.destroy != 'function' ) {
        return;
    }

    oComponent.destroy();
    return oComponent;
};

export {Namespace};
