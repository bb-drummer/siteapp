var gulp = require('gulp');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var onBabelError = require('./babel-error.js');
var rename = require('gulp-rename');
var webpackStream = require('webpack-stream');
var webpack2 = require('webpack');
var named = require('vinyl-named');

var CONFIG = require('../config.js');

// NOTE: This sets up all imports from within Siteapp as externals, for the purpose
// of replicating the "drop in dist file" approach of prior versions.
// THIS IS NOT RECOMMENDED FOR MOST USERS. Chances are you either want everything
// (just throw in siteapp.js or siteapp.min.js) or you should be using a build
// system.
var pluginsAsExternals = {
  'jquery': 'jQuery',
  './siteapp.core': '{Siteapp: window.Siteapp}',
  './siteapp.util.core' : '{rtl: window.Siteapp.rtl, GetYoDigits: window.Siteapp.GetYoDigits, transitionend: window.Siteapp.transitionend}',
  './siteapp.util.keyboard' : '{Keyboard: window.Siteapp.Keyboard}',
  './siteapp.util.mediaQuery' : '{MediaQuery: window.Siteapp.MediaQuery}',
  './siteapp.plugin' : '{Plugin: window.Siteapp.Plugin}',
};

var moduleConfig = {
  rules: [
    {
      test: /.js$/,
      use: [
        {
          loader: 'babel-loader'
        }
      ]
    }
  ]
}

// Core has to be dealt with slightly differently due to bootstrapping externals
// and the dependency on siteapp.util.core
//
gulp.task('javascript:plugin-core', function() {
  return gulp.src('js/entries/plugins/siteapp.core.js')
    .pipe(named())
    //.pipe(babel())
    .pipe(webpackStream({externals: {'jquery': 'jQuery'}, module: moduleConfig}, webpack2))
    .pipe(gulp.dest('_build/assets/js/plugins'));
});
gulp.task('javascript:plugins', gulp.series(['javascript:plugin-core', function() {
  return gulp.src(['js/entries/plugins/*.js', '!js/entries/plugins/siteapp.core.js'])
    .pipe(named())
    //.pipe(babel())
    .pipe(webpackStream({externals: pluginsAsExternals, module: moduleConfig}, webpack2))
    .pipe(gulp.dest('_build/assets/js/plugins'));
}]));

gulp.task('javascript:siteapp', gulp.series(['javascript:plugins', function() {
  return gulp.src('js/entries/*.js')
    .pipe(named())
    //.pipe(babel())
    .pipe(webpackStream({externals: {jquery: 'jQuery'}, module: moduleConfig}, webpack2))
    .pipe(gulp.dest('_build/assets/js'));
}]));
//gulp.task('javascript:siteapp', function() {
//  return gulp.src(CONFIG.JS_FILES)
//    .pipe(babel()
//      .on('error', onBabelError))
//    .pipe(gulp.dest('_build/assets/js/plugins'))
//    .pipe(concat('siteapp.js'))
//    .pipe(gulp.dest('_build/assets/js'));
//});

gulp.task('javascript:deps', function() {
  return gulp.src(CONFIG.JS_DEPS)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('_build/assets/js'));
});

gulp.task('javascript:docs', function() {
  return gulp.src(CONFIG.JS_DOCS)
    .pipe(concat('docs.js'))
    .pipe(gulp.dest('_build/assets/js'));
});

//Compiles JavaScript into a single file
gulp.task('javascript', gulp.series(['javascript:siteapp', 'javascript:deps'/*, 'javascript:docs'*/]));

