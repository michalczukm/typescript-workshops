var gulp = require('gulp');
var bowerFiles = require('main-bower-files');
var eventStream = require('event-stream');
var path = require('path');
var del = require('del');
var webpack = require('webpack-stream');
var config = require('./config.gulpfile');

var $ = require('gulp-load-plugins')({
	pattern: ['gulp-*']
});

var errorHandler = config.errorHandler;
var conf = config.client;

// typescript compilation and bundling
var webpackConfig = {
    output: { filename: 'app.js' },
    devtool: 'source-map',
    sourceMap: true,
    module: {
        preLoaders: [{ test: /\.ts$/, exclude: /node_modules/, loader: 'tslint-loader' }], // TypeScript hints
        loaders: [
            { test: /\.ts$/, exclude: /node_modules/, loaders: ['ng-annotate', 'ts-loader'] }
        ]
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    }
};

gulp.task('webpack', function () {
    return gulp.src(path.join(conf.ts.src, conf.ts.app))
        .pipe(
            webpack(webpackConfig, null, function (err, stats) {
                if (err) {
                    errorHandler('webpack')(err);
                }
                $.util.log('[webpack]', stats.toString());
            })
        )
        .pipe(gulp.dest(conf.ts.dist));
});

gulp.task('watch-ts', function () {
    gulp.watch(path.join(conf.ts.src, '/**/*.ts'), ['webpack'])
        .on('error', errorHandler('watch-ts'));
});

gulp.task('resources', function() {
   gulp.src([path.join(conf.src, '/**/*.*'), '!' + path.join(conf.src,'/**/*.+(ts|css|html)')])
       .pipe(gulp.dest(conf.dist)); 
});

gulp.task('html', function() {
   gulp.src(path.join(conf.html.src, '/**/*.html'))
       .pipe(gulp.dest(conf.dist));
});

gulp.task('watch-html', function () {
    gulp.watch(path.join(conf.html.src, '/**/*.html'), ['html'])
        .on('error', errorHandler('watch-html'));
});

gulp.task('inject', ['webpack'], function () {
    gulp.src(conf.html.index)
        .pipe($.inject(gulp.src(bowerFiles(), { read: false }), { name: 'bower' }))
        .pipe($.inject(
            gulp.src(path.join('./**/*.+(js|css)'), { read: false, cwd: conf.dist } )
        ))
        .pipe(gulp.dest(conf.dist));
});

gulp.task('clean:client', function () {
    return del.sync([path.join(conf.dist, '/')]);
});

gulp.task('css', function () {
    gulp.src(path.join(conf.css.src, '/**/*.css'))
        .pipe(gulp.dest(conf.css.dist));
});

gulp.task('watch-css', function () {
    gulp.watch(path.join(conf.css.src, '/**/*.css'), ['css'])
        .on('error', errorHandler('watch-css'));
});


// main tasks
gulp.task('build:client', ['clean:client', 'html', 'css', 'typings', 'resources', 'inject']);
gulp.task('watch:client', ['watch-ts', 'watch-css', 'watch-html']);
gulp.task('serve:client', ['build:client', 'watch:client']);
