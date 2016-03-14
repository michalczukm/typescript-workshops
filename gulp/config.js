var path = require('path');
var util = require('gulp-util');

var paths = {
    dist: 'dist'
};

var server = {
	src: 'src/server',
	dist: path.join(paths.dist, 'server'),
	app: 'app.js',
    typings: 'typings'
};

var client = {
    src: 'src/client',
    dist: path.join(paths.dist, 'client'),
    css: {
        src: 'src/client/content',
        dist: path.join(paths.dist, 'client', 'content')
    },
    ts: {
        app: 'app.ts',
        src: 'src/client/app',
        dist: path.join(paths.dist, 'client')
    },
    html: {
        index: 'src/client/index.html',
        src: 'src/client/app'
    }
}

exports.errorHandler = function(title) {
  'use strict';

    return function(err) {
        util.log(util.colors.red('[' + title + ']'), err.toString());
        this.emit('end');
    };
};


exports.paths = paths;
exports.server = server;
exports.client = client;
