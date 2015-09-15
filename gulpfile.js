var gulp = require('gulp');
var requireDir = require('require-dir');

var _tasks = requireDir('./gulp-tasks');

_tasks.toString();

gulp.task('default',["test","build-html"],function () {
  gulp.watch('src/**/*.html',['build-html']);
  gulp.watch('src/**/*.jsx',['test']);
  gulp.watch('test/**/*.js',['test']);
});
