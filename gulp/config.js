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
    src: 'src/client',
    dist: path.join(paths.dist, 'client'),
    css: {
        src: 'src/client/content',
        dist: path.join(paths.dist, 'client', 'content')
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
