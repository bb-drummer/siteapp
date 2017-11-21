var empty = require('is-empty-object');
var unique = require('array-uniq');
var path = require('path');

// custom module names where needed
const MODULES = {
  'offcanvas': 'OffCanvas'
};

/**
 * Creates an array of file paths that can be passed to `gulp.src()`.
 * @param {Object} config - Customizer configuration file.
 * @param {String[]} modules - Modules to include in the file list.
 * @returns {String[]} Array of file paths.
 */

module.exports = function(config, modules) {
  var dir = path.resolve(__dirname, '../../js/');
  var entry = "import $ from 'jquery';\n" +
              "import { Siteapp } from '" + dir + "/siteapp.core';\n" +
              "Siteapp.addToJquery($);\n" +
              "import { MediaQuery } from '" + dir + "/siteapp.util.mediaQuery';\n" +
              "Siteapp.MediaQuery = MediaQuery;\n" +
              "import { Triggers } from '" + dir + "/siteapp.util.triggers';\n" +
              "Triggers.init($, Siteapp);\n";

  // last 2 pieces work around https://github.com/zurb/siteapp-sites/issues/10287

  var libraries = [];

  if (empty(modules)) {
    modules = Object.keys(config);
  }

  for (var i in modules) {
    var name = modules[i];

    // Check if the module has JS files
    if (config[name] && config[name].js) {
      libraries.push(config[name].js);
    }
  }

  // add plugins into entry
  for (var i in libraries) {
    var file = libraries[i];
    var moduleName = MODULES[file] || file.charAt(0).toUpperCase() + file.slice(1);
    entry = entry + "import { " + moduleName + " } from '" + dir + "/siteapp." + file + "';\n";
    entry = entry + "Siteapp.plugin(" + moduleName + ", '" + moduleName + "');\n";
  }

  // return entry file as string
  return entry;
}
