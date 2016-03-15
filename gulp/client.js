var gulp = require('gulp');
var bowerFiles = require('main-bower-files');
var eventStream = require('event-stream');
var path = require('path');
var del = require('del');
var webpack = require('webpack-stream');
var conf = require('./config');

var $ = require('gulp-load-plugins')({
	pattern: ['gulp-*']
});

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
    return gulp.src(path.join(conf.client.ts.src, conf.client.ts.app))
        .pipe(
            webpack(webpackConfig, null, function (err, stats) {
                if (err) {
                    conf.errorHandler('webpack')(err);
                }
                $.util.log('[webpack]', stats.toString());
            })
        )
        .pipe(gulp.dest(conf.client.ts.dist));
});

gulp.task('watch-ts', function () {
    gulp.watch(path.join(conf.client.ts.src, '/**/*.ts'), ['webpack'])
        .on('error', conf.errorHandler('watch-ts'));
});

gulp.task('resources', function() {
   gulp.src([path.join(conf.client.src, '/**/*.*'), '!' + path.join(conf.client.src,'/**/*.+(ts|css|html)')])
       .pipe(gulp.dest(conf.client.dist)); 
});

gulp.task('html', function() {
   gulp.src(path.join(conf.client.html.src, '/**/*.html'))
       .pipe(gulp.dest(conf.client.dist));
});

gulp.task('watch-html', function () {
    gulp.watch(path.join(conf.client.html.src, '/**/*.html'), ['html'])
        .on('error', conf.errorHandler('watch-html'));
});

gulp.task('inject', ['webpack'], function () {
    gulp.src(conf.client.html.index)
        .pipe($.inject(gulp.src(bowerFiles(), { read: false }), { name: 'bower' }))
        .pipe($.inject(
            gulp.src(path.join('./**/*.+(js|css)'), { read: false, cwd: conf.client.dist } )
        ))
        .pipe(gulp.dest(conf.client.dist));
});

gulp.task('clean:client', function () {
    return del.sync([path.join(conf.client.dist, '/')]);
});

gulp.task('css', function () {
    gulp.src(path.join(conf.client.css.src, '/**/*.css'))
        .pipe(gulp.dest(conf.client.css.dist));
});

gulp.task('watch-css', function () {
    gulp.watch(path.join(conf.client.css.src, '/**/*.css'), ['css'])
        .on('error', conf.errorHandler('watch-css'));
});


// main tasks
gulp.task('build:client', ['clean:client', 'html', 'css', 'typings', 'resources', 'inject']);
gulp.task('watch:client', ['watch-ts', 'watch-css']);
gulp.task('serve:client', ['build:client', 'watch:client']);
