import {Post} from '../../../server/model/post';
import {PostsService} from './posts.service';
import moment = require('moment');

export class PostController {
    title: string;
    date: moment.Moment;
    content: string;
    
    /* @ngInject */
    constructor(
        private postsService: PostsService,
        private postId: number
    ) {
        this.activate();
    }
    
    private activate() {
        this.postsService.getById(this.postId)
            .then((post: Post) => {
                this.title = post.title;
                this.date = post.date;
                this.content = post.content;
            });
    }
}