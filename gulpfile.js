var gulp = require('gulp');
var browser = require('browser-sync');
var requireDir = require('require-dir');
var port = process.env.SERVER_PORT || 3000;

requireDir('./gulp/tasks');

// Builds the documentation and framework files
gulp.task('build', gulp.series(['clean', 'copy', 'docs:all', 'sass', 'javascript', 'deploy']));

// Starts a BrowerSync instance
gulp.task('serve', gulp.series(['build', function(){
  browser.init({server: './_build', port: port});
}]));

// Watch files for changes
gulp.task('watch', function() {
  gulp.watch('docs/**/*', gulp.series(['docs', browser.reload]));
  gulp.watch(['docs/layout/*.html', 'docs/partials/*{html,hbs}', 'docs/assets/partials/*{html,hbs}', 'node_modules/foundation-docs/templates/*{html,hbs}'], gulp.series(['docs:all', browser.reload]));
  gulp.watch('scss/**/*', gulp.series(['sass', browser.reload]));
  gulp.watch(['docs/assets/scss/**/*', 'node_modules/foundation-docs/scss/**/*'], gulp.series(['sass:docs', browser.reload]));
  gulp.watch('js/**/*', gulp.series(['javascript', 'deploy', browser.reload]));
  gulp.watch(['docs/assets/js/**/*', 'node_modules/foundation-docs/js/**/*'], gulp.series(['javascript:docs', browser.reload]));
});

// Runs all of the above tasks and then waits for files to change
gulp.task('default', gulp.series(['serve', 'watch']));
