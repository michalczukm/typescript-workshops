import {Post} from '../model/post.model'
import moment = require('moment');

export class PostsService {
    private posts: Array<Post>;
    
    constructor() {
        this.posts = [
            <Post> {
                id: 1,
                name: 'First Post ever',
                date: moment().add(-10, 'days')
            },
            <Post> {
                id: 2,
                name: 'Another post',
                date: moment().add(-5, 'days')
            },
            <Post> {
                id: 3,
                name: 'Another great post',
                date: moment()
            },
        ];
    }
    
    
    public getAll(): Array<Post> {
        return this.posts;
    }
}