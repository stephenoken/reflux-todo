var gulp = require('gulp');

gulp.task('build-html',function () {
    gulp.src('./src/**/*.html')
      .pipe(gulp.dest('dist'));
});
