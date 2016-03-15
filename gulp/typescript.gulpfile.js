'use strict';

var fs = require('fs');
var gulp = require('gulp');
var config = require('./config.gulpfile');

var $ = require('gulp-load-plugins')({
	pattern: ['gulp-*']
});

var tsProject = $.typescript.createProject('tsconfig.json', {
	typescript: require('typescript')
});

gulp.task('typings', function () {
    if (!fs.existsSync(config.server.typings)) {
        gulp.src('./typings.json')
            .pipe($.typings());
        }
    }
);

gulp.task('compile-ts:server', ['typings'], function () {
	var tsResult = tsProject.src()
        .pipe($.filter(['**', '!*src/client/**/*.*']))
		.pipe($.typescript(tsProject));

	return tsResult.js
        .pipe(gulp.dest(config.paths.dist));
});
