var gulp = require('gulp');
var filter = require('gulp-filter');
var cleancss = require('gulp-clean-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var stripDebug = require('gulp-strip-debug');
var confirm = require('gulp-prompt').confirm;
var rsync = require('gulp-rsync');
var replace = require('gulp-replace');
var octophant = require('octophant');
var sequence = require('run-sequence');
var inquirer = require('inquirer');
var exec = require('child_process').execSync;
var plumber = require('gulp-plumber');

var CONFIG = require('../config.js');
var CURRENT_VERSION = require('../../package.json').version;
var NEXT_VERSION;

/**
 * uglify stats (src -> min):
 * 

succeeding tests:

compress: true, mangle: true, tests: ok

-rw-r--r--   1 bba  staff  130397 25 Nov 13:38 siteapp-foundation.js
-rw-r--r--   1 bba  staff   36928 25 Nov 13:38 siteapp-foundation.min.js
-rw-r--r--   1 bba  staff  198189 25 Nov 13:38 siteapp.js
-rw-r--r--   1 bba  staff   61770 25 Nov 13:38 siteapp.min.js


compress: true, mangle: false, tests: ok

-rw-r--r--   1 bba  staff  130397 26 Nov 12:40 siteapp-foundation.js
-rw-r--r--   1 bba  staff   53643 26 Nov 12:40 siteapp-foundation.min.js
-rw-r--r--   1 bba  staff  198189 26 Nov 12:40 siteapp.js
-rw-r--r--   1 bba  staff   91178 26 Nov 12:40 siteapp.min.js


failing tests:

compress: false, mangle: true, tests: parse error

-rw-r--r--   1 bba  staff  130397 26 Nov 12:39 siteapp-foundation.js
-rw-r--r--   1 bba  staff   39555 26 Nov 12:39 siteapp-foundation.min.js
-rw-r--r--   1 bba  staff  198189 26 Nov 12:39 siteapp.js
-rw-r--r--   1 bba  staff   65886 26 Nov 12:39 siteapp.min.js


compress: false, mangle: false, tests: parse error

-rw-r--r--   1 bba  staff  130397 26 Nov 12:41 siteapp-foundation.js
-rw-r--r--   1 bba  staff   57188 26 Nov 12:41 siteapp-foundation.min.js
-rw-r--r--   1 bba  staff  198189 26 Nov 12:41 siteapp.js
-rw-r--r--   1 bba  staff   97081 26 Nov 12:41 siteapp.min.js


compress: custom, mangle: true, tests: parse error

-rw-r--r--   1 bba  staff  130397 26 Nov 12:59 siteapp-foundation.js
-rw-r--r--   1 bba  staff   37770 26 Nov 12:59 siteapp-foundation.min.js
-rw-r--r--   1 bba  staff  198189 26 Nov 12:59 siteapp.js
-rw-r--r--   1 bba  staff   63163 26 Nov 12:59 siteapp.min.js

 */
const uglifyConfig= {
  	  compress: true /* {
		    booleans         : true,
		    cascade          : true,
		    collapse_vars    : !true,
		    comparisons      : true,
		    conditionals     : true,
		    dead_code        : true,
		    drop_console     : false,
		    drop_debugger    : true,
		    evaluate         : !true,
		    expression       : false,
		    global_defs      : {},
		    hoist_funs       : true,
		    hoist_vars       : !false,
		    //ie8              : false,
		    if_return        : true,
		    //inline           : true,
		    join_vars        : true,
		    keep_fargs       : true,
		    keep_fnames      : !false,
		    keep_infinity    : false,
		    loops            : true,
		    negate_iife      : true,
		    passes           : 1,
		    properties       : !true,
		    pure_getters     : false,
		    pure_funcs       : null,
		    reduce_vars      : !true,
		    sequences        : true,
		    side_effects     : true,
		    switches         : true,
		    top_retain       : null, //['Siteapp'],
		    //typeofs          : true,
		    unsafe           : false,
		    unsafe_comps     : false,
		    //unsafe_Func      : false,
		    unsafe_math      : false,
		    unsafe_proto     : false,
		    unsafe_regexp    : false,
		    unused           : !true,
		    warnings         : false
	  }*/,
	  mangle: !true /*{
		    keep_fnames      : !false,
		  
	  }*/
};

gulp.task('deploy:prompt', function(cb) {
  inquirer.prompt([{
    type: 'input',
    name: 'version',
    message: 'What version are we moving to? (Current version is ' + CURRENT_VERSION + ')'
  }])
  .then(function(res) {
    NEXT_VERSION = res.version;
    cb();
  });
});

// Bumps the version number in any file that has one
gulp.task('deploy:version', function() {
  return gulp.src(CONFIG.VERSIONED_FILES, { base: process.cwd() })
    //.pipe(replace(CURRENT_VERSION, NEXT_VERSION))
    .pipe(gulp.dest('.'));
});

// Generates compiled CSS and JS files and puts them in the dist/ folder
gulp.task('deploy:dist', gulp.series(['sass:siteapp', 'javascript:siteapp', function() {
  var cssFilter = filter(['**/*.css'], { restore: true });
  var jsFilter  = filter(['**/*.js'], { restore: true });

  console.log(CONFIG.DIST_FILES)
  return gulp.src(CONFIG.DIST_FILES)
    .pipe(plumber())
    .pipe(cssFilter)
      .pipe(gulp.dest('./dist/css'))
      .pipe(cleancss({ compatibility: 'ie9' }))
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest('./dist/css'))
    .pipe(cssFilter.restore)
    .pipe(jsFilter)
      .pipe(stripDebug())
      .pipe(gulp.dest('./dist/js'))
      .pipe(stripDebug())
      .pipe(uglify(uglifyConfig))
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest('./dist/js'));
}]));

// Copies standalone JavaScript plugins to dist/ folder
gulp.task('deploy:plugins', function() {
  return gulp.src('_build/assets/js/plugins/*.js')
    .pipe(stripDebug())
    .pipe(gulp.dest('dist/js/plugins'))
    .pipe(stripDebug())
    .pipe(uglify(uglifyConfig))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/js/plugins'));
});

// Generates a settings file
gulp.task('deploy:settings', function(cb) {
  var options = {
    title: 'Siteapp for Sites Settings',
    output: './scss/settings/_settings.scss',
    groups: {
      'grid': 'The Grid',
      'off-canvas': 'Off-canvas',
      'typography-base': 'Base Typography'
    },
    sort: [
      'global',
      'breakpoints',
      'grid',
      'typography-base',
      'typography-helpers'
    ],
    imports: ['util/util'],
    _siteappShim: true
  }

  octophant('./scss', options, cb);
});

// Writes a commit with the changes to the version numbers
gulp.task('deploy:commit', function(cb) {
  exec('git commit -am "Bump to version "' + NEXT_VERSION);
  exec('git tag v' + NEXT_VERSION);
  exec('git push origin develop --follow-tags');
  cb();
});
/*
// Uploads the documentation to the live server
gulp.task('deploy:docs', gulp.series(['build', function() {
  return gulp.src('./_build/**')
    .pipe(confirm('Make sure everything looks right before you deploy.'))
    .pipe(rsync({
      root: './_build',
      hostname: 'deployer@72.32.134.77',
      destination: '/home/deployer/sites/siteapp-sites-6-docs'
    }));
}]));

// Uploads the documentation to the live server in beta env
gulp.task('deploy:beta', gulp.series(['build', function() {
  return gulp.src('./_build/**')
    .pipe(confirm('Make sure everything looks right before you deploy.'))
    .pipe(rsync({
      root: './_build',
      hostname: 'deployer@72.32.134.77',
      destination: '/home/deployer/sites/scalingsexiness/siteapp-sites-6-docs'
    }));
}]));
*/

// This part of the deploy process hasn't been tested! It should be done manually for now
gulp.task('deploy:templates', function(done) {
  // exec('git clone https://github.com/zurb/siteapp-sites-template');
  // exec('cp scss/settings/_settings.scss siteapp-sites-template/scss/_settings.scss');
  // exec('cd siteapp-sites-template');
  // exec('git commit -am "Update settings file to match Siteapp "' + NEXT_VERSION);
  // exec('git push origin master');
  // exec('cd ..');
  // exec('rm -rf siteapp-sites-template');
  //
  // exec('git clone https://github.com/zurb/siteapp-zurb-template');
  // exec('cp scss/settings/_settings.scss siteapp-zurb-template/src/assets/scss/_settings.scss');
  // exec('cd siteapp-zurb-template');
  // exec('git commit -am "Update settings file to match Siteapp "' + NEXT_VERSION);
  // exec('git push origin master');
  // exec('cd ..');
  // exec('rm -rf siteapp-zurb-template');
  done();
});

// The Customizer runs this function to generate files it needs
gulp.task('deploy:custom', gulp.series(['sass:siteapp', 'javascript:siteapp', function() {
  gulp.src('./_build/assets/css/siteapp.css')
      .pipe(cleancss({ compatibility: 'ie9' }))
      .pipe(rename('siteapp.min.css'))
      .pipe(gulp.dest('./_build/assets/css'));

  return gulp.src('_build/assets/js/siteapp.js')
      .pipe(uglify())
      .pipe(rename('siteapp.min.js'))
      .pipe(gulp.dest('./_build/assets/js'));
}]));

gulp.task('deploy', gulp.series([/*'deploy:prompt', 'deploy:version',*/ 'deploy:dist', 'deploy:plugins', 'deploy:settings', /*'deploy:commit',*/ 'deploy:templates']));

gulp.task('deploy:prep', gulp.series([/*'deploy:prompt', 'deploy:version',*/ 'deploy:dist', 'deploy:plugins', 'deploy:settings']));


