'use strict';

var gulp = require('gulp');
var wrench = require('wrench');
var del = require('del');
var path = require('path');
var conf = require('./gulp/config');
var install = require('gulp-install');

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});

gulp.task('clean', function () {
    del([path.join(conf.paths.dist, '/')]);
})

/**
 * Run server and serve client app
 */
gulp.task('serve', ['serve:server', 'serve:client' ]);

/**
 * Clean all previous distibution, run server and serve client
 */
gulp.task('default', ['clean'], function () {
  gulp.start('serve');
});

gulp.task('install', function (callback) {
    gulp.src(['./bower.json', './package.json', './typings.json'])
        .pipe(install());
});
