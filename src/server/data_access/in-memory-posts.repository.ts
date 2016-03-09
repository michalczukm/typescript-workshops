import {Post} from '../model/post';
import {Repository} from './repository';
import moment = require('moment');

export class InMemoryPostsRepository implements Repository<Post> {
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

    public getById(id: number): Post {
        // don't do that in production - returning `null`/`undefined` is mostly not a good idea
        return this.posts.filter((post: Post) => post.id == id)[0];
    }
}
