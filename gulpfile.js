var gulp = require('gulp');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');
var _tasks = requireDir('./gulp-tasks');

_tasks.toString();

gulp.task('default',function () {
  runSequence(
    "clean-dist",
    "test",
    "build-html",
    "browser-bundle",
    "browser-vendor",
    "browser-sync-proxy",
    "compress-dist"
  );
  gulp.watch('src/**/*.html',['build-html-watch']);
  gulp.watch(['src/**/*.jsx','src/**/*.js'],['test','browser-bundle-watch']);
  gulp.watch('test/**/*.js',['test']);
});
