import {InMemoryPostsRepository} from '../data_access/in-memory-posts.repository';
import {PostsRepository} from '../data_access/posts.repository';
import {Post} from '../model/post.model';
import moment = require('moment');

export class PostsService {
    private postsRepository: PostsRepository;
    
    constructor() {
        this.postsRepository = new InMemoryPostsRepository();
    }
    
    public getAll(): Array<Post> {
        return this.postsRepository.getAll();
    }
}