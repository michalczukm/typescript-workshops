'use strict';

var node;
var gulp = require('gulp');
var path = require('path');
var spawn = require('child_process').spawn;
var del = require('del');
var conf = require('./config');

var $ = require('gulp-load-plugins')({
	pattern: ['gulp-*']
});

var runServer = function () {
	if (node) {
		node.kill();
	}

	node = spawn('node', [path.join(conf.server.dist, conf.server.app)], {
		stdio: 'inherit'
	});
	node.on('close', function (code) {
		if (code === 8) {
			gulp.log('Error detected, waiting for changes...');
		}
	});
};

gulp.task('clean:server', function () {
	return del([path.join(conf.server.dist, '/')]);
});

gulp.task('lint-ts:server', function () {
	return gulp.src(path.join(conf.server.src, '/**/*.ts'))
		.pipe($.tslint())
		.pipe($.tslint.report('prose'));
});

gulp.task('build:server', ['clean:server', 'compile-ts:server'], function () {});

gulp.task('watch', ['build:server'], function () {
	gulp.watch(path.join(conf.server.src, '/**/*.ts'), ['serve:server'])
});

gulp.task('serve:server', ['lint-ts:server', 'compile-ts:server'], function () {
	runServer();
});
