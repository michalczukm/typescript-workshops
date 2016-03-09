import {Post} from '../model/post.model';

export interface PostsRepository {
    getAll(): Array<Post>;
}