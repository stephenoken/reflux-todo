var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var middleware  = require('connect-gzip-static')('./dist');

gulp.task('browser-sync-proxy', function() {
    return browserSync.init({
        proxy: "http://localhost:3000/dist"
    },function (err, bs) {
        bs.addMiddleware("*", middleware, {
          override: true
      });
    });

});
