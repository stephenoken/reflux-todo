var gulp = require('gulp');
var clean = require('gulp-clean');
var gzip = require('gulp-gzip');
var minifyHTML = require('gulp-minify-html');
var gulpRemoveHtml = require('gulp-remove-html');
gulp.task('build-html',function () {
    return gulp.src('./src/**/*.html')
        .pipe(gulpRemoveHtml())
        .pipe(minifyHTML())
        .pipe(gulp.dest('./dist'));
});

gulp.task('compress-dist',function () {
    return gulp.src('./dist/**/*.*')
        .pipe(gzip())
        .pipe(gulp.dest('dist'));
});

gulp.task('clean-dist',function () {
  return gulp.src('./dist',{read: false})
      .pipe(clean());
});
