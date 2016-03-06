'use strict';

var node;
var fs = require('fs');
var gulp = require('gulp');
var path = require('path');
var spawn = require('child_process').spawn;

var conf = {
	paths: {
		src: 'src',
		dist: 'dist',
		app: 'server/app.js',
        typings: 'typings'
	}
}

var $ = require('gulp-load-plugins')({
	pattern: ['gulp-*', 'del']
});

var tsProject = $.typescript.createProject('tsconfig.json', {
	typescript: require('typescript')
});

var runServer = function () {
	if (node) {
		node.kill();
	}

	node = spawn('node', [path.join(conf.paths.dist, conf.paths.app)], {
		stdio: 'inherit'
	});
	node.on('close', function (code) {
		if (code === 8) {
			gulp.log('Error detected, waiting for changes...');
		}
	});
};

gulp.task('clean', function () {
	return $.del([path.join(conf.paths.dist, '/')]);
});

gulp.task('typings', function () {
    if (!fs.existsSync(conf.paths.typings)) {
        gulp.src("./typings.json")
            .pipe($.typings());
        }
    }
);

gulp.task('compile-ts', ['typings'], function () {
	var tsResult = tsProject.src()
		.pipe($.typescript(tsProject));

	return tsResult.js.pipe(gulp.dest(path.join(conf.paths.dist, '/')));
});


gulp.task('lint-ts', function () {
	// // there is actually a bug in tslint -> waiting for fix
	// return;

	return gulp.src(path.join(conf.paths.src, '/**/*.ts'))
		.pipe($.tslint())
		.pipe($.tslint.report('prose'));
});

gulp.task('build', ['clean', 'compile-ts'], function () {});

gulp.task('watch', ['build'], function () {
	gulp.watch(path.join(conf.paths.src, '/**/*.ts'), ['server'])
});

gulp.task('server', ['lint-ts', 'compile-ts'], function () {
	runServer();
});

gulp.task('serve', ['lint-ts', 'watch'], function () {
	runServer();
});

gulp.task('serve:prod', ['build'], function () {
	spawn('node', [path.join(conf.paths.dist, conf.paths.app)], {
		stdio: 'inherit'
	});
});