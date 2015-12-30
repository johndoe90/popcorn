var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('ts', shell.task([
    'node node_modules/typescript/lib/tsc.js -w'
]));

gulp.task('serve:compile', ['ts', 'serve:nocompile'], function(cb) {
    cb();
});

gulp.task('serve:nocompile', shell.task([
    'node node_modules/live-server/live-server.js'
]));

gulp.task('default', ['serve:nocompile']);