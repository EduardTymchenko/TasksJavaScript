const gulp = require('gulp');
const csso = require('gulp-csso');
const connect = require('gulp-connect');

function serv(){
        connect.server({
          root: 'app',
          livereload: true
        });
}

function styleCompress(){
    return gulp.src('./app/css_test/**/*.css')
    .pipe(csso())
    .pipe(gulp.dest('./app/css_ok'))
    .pipe(connect.reload());
}

function watcher(){
gulp.watch('./app/css_test/**/*.css',styleCompress);
}

exports.styleCompress = styleCompress;
exports.watcher = watcher;
exports.serv = serv;

exports.default = gulp.parallel(watcher, serv);