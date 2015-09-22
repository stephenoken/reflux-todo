var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync-proxy', function() {
    return browserSync.init({
        proxy: "http://localhost:3000/"
    });
});

gulp.task('browser-bundle-watch',['browser-bundle'],browserSync.reload);
gulp.task('build-html-watch',['build-html'],browserSync.reload);
