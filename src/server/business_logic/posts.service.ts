import {InMemoryPostsRepository} from '../data_access/in-memory-posts.repository';
import {Repository} from '../data_access/repository';
import {Post} from '../model/post.model';
import moment = require('moment');

export class PostsService {
    private postsRepository: Repository<Post>;
    
    constructor() {
        this.postsRepository = new InMemoryPostsRepository();
    }
    
    public getAll(): Array<Post> {
        return this.postsRepository.getAll();
    }
}