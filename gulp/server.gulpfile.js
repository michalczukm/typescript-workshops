'use strict';

var node;
var gulp = require('gulp');
var path = require('path');
var spawn = require('child_process').spawn;
var del = require('del');
var config = require('./config.gulpfile');

var $ = require('gulp-load-plugins')({
	pattern: ['gulp-*']
});

var errorHandler = config.errorHandler;
var conf = config.server;

var runServer = function () {
	if (node) {
		node.kill();
	}

	node = spawn('node', [path.join(conf.dist, conf.app)], {
		stdio: 'inherit'
	});
	node.on('close', function (code) {
		if (code === 8) {
			gulp.log('Error detected, waiting for changes...');
		}
	});
};

gulp.task('clean:server', function () {
	return del.sync([path.join(conf.dist, '/')]);
});

gulp.task('lint-ts:server', function () {
	return gulp.src(path.join(conf.src, '/**/*.ts'))
		.pipe($.tslint())
		.pipe($.tslint.report('prose'));
});

gulp.task('build:server', ['clean:server', 'compile-ts:server'], function () {});

gulp.task('watch', ['build:server'], function () {
	gulp.watch(path.join(conf.src, '/**/*.ts'), ['serve:server'])
        .on('error', errorHandler('watch:server'));
});

gulp.task('serve:server', ['lint-ts:server', 'compile-ts:server'], function () {
	runServer();
});
