import {InMemoryPostsRepository} from '../data_access/in-memory-posts.repository';
import {Repository} from '../data_access/repository';
import {Post} from '../model/post.model';
import moment = require('moment');

export class PostsService {
    constructor(private postsRepository: Repository<Post>) {
    }

    public getAll(): Array<Post> {
        return this.postsRepository.getAll();
    }

    public getById(id: number): Post {
        return this.postsRepository.getById(id);
    }
}
