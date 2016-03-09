import {Post} from './model/post.model';
import {PostsService} from './business_logic/posts.service';
import {InMemoryPostsRepository} from './data_access/in-memory-posts.repository';
import express = require('express');
import bodyParser = require('body-parser');
import path = require('path');
import moment = require('moment');

const config = {
    port: 8000
}

var postsService = new PostsService(new InMemoryPostsRepository());

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve static resources - the dummy way
app.get('/', (request: express.Request, response: express.Response) => {
    let options = {
        root: __dirname + '/../../src/client'
    };

    response.sendFile('index.html', options);
});
app.use('/content', express.static(path.join(__dirname, '/../../src/client/content')));
app.use('/bower_components', express.static(path.join(__dirname, '/../../bower_components')));

// api
app.get('/api/posts', (request: express.Request, response: express.Response) => {
    let posts = postsService.getAll();
    return response.json(posts);
});

app.listen(config.port, function() {
     console.log(`Express server listening on port ${config.port}.`);
});