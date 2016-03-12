var path = require('path');

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
    dist: path.join(paths.dist, 'client'),
    css: {
        src: 'src/client/content/**/*.css',
        dist: 'dist/content'
    },
    ts: {
        app: 'app.js',
        src: 'src/client',
        dist: path.join(paths.dist, 'client')
    },
    html: {
        src: [
            'src/client/**/*.html',
            'index.html'
        ]
    }
}

exports.paths = paths;
exports.server = server;
exports.client = client;
