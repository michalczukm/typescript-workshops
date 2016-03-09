import {PostsService} from '../business_logic/posts.service';
import express = require('express');
import {InMemoryPostsRepository} from '../data_access/in-memory-posts.repository';

let router: express.Router = express.Router();

export function postsController(
    postsService: PostsService
): express.Router {

    router.get('/', (request: express.Request, response: express.Response) => {
        var posts = postsService.getAll();
        response.json(posts);
    });

    return router;
}
