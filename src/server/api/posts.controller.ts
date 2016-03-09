import {PostsService} from '../business_logic/posts.service';
import express = require('express');

let router: express.Router = express.Router();

export function postsController(
    postsService: PostsService
): express.Router {

    router.get('/', (request: express.Request, response: express.Response) => {
        var posts = postsService.getAll();
        response.json(posts);
    });

    router.get('/:id', (request: express.Request, response: express.Response) => {
        var id: number = request.params.id;
        var post = postsService.getById(id);

        if (post == null) {
            response.sendStatus(404);
        } else {
            response.json(post);
        }
    });

    router.put('/:id', (request: express.Request, response: express.Response) => {
        // HTTP 501 code stands for `Not implemented`
        response.sendStatus(501);
    });

    return router;
}
