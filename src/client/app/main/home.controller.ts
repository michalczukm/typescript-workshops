import {Post} from '../../../server/model/post';
import {PostsService} from '../posts/posts.service';
import moment = require('moment');

export class HomeController {
    private _: _.LoDashStatic;
    
    title: string = "Goyello TypeScript Workshops12345";
    viewsCount: number = 10000;
    posts: Array<Post>;
    latestPost: Post;
    
    /* @ngInject */
    constructor(
        private postsService: PostsService,
        lodash: _.LoDashStatic
    ) {
        this._ = lodash;
        this.activate();
    }
    
    private activate() {
        this.postsService.getAll()
            .then((result: Post[]) => {
                this.posts = result;
            })
            .then(() => {
                this.latestPost = this._.sortBy(this.posts, (post: Post) => {
                    return -post.date;
                })[0];
            });
    }
}
