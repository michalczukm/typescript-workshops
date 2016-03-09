import {InMemoryPostsRepository} from './data_access/in-memory-posts.repository';
import {PostsService} from './business_logic/posts.service';
import path = require('path');
import express = require('express');

let postsService = new PostsService(new InMemoryPostsRepository());

export function setRouting(app: express.Application): void {
    app.get('/api/posts', (request: express.Request, response: express.Response) => {
        let posts = postsService.getAll();
        return response.json(posts);
    });

    // serve static resources - the dummy way
    serveStatics(app);
}

function serveStatics(app: express.Application): void {
    app.get('/', (request: express.Request, response: express.Response) => {
        let options = {
            root: __dirname + '/../../src/client'
        };

        response.sendFile('index.html', options);
    });
    app.use('/content', express.static(path.join(__dirname, '/../../src/client/content')));
    app.use('/bower_components', express.static(path.join(__dirname, '/../../bower_components')));
}
