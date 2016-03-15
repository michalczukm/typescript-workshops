import {Post} from '../../../server/model/post';

export class PostsService {
    /* @ngInject */
    constructor(private $http: ng.IHttpService) {
    }
    
    getAll(): ng.IPromise<Post[]> {
        return this.$http.get<Post[]>('/api/posts').then( response => {
            return response.data;
        });
    }
    
    getById(id: number): ng.IPromise<Post> {
        return this.$http.get<Post>(`/api/posts/${id}`).then( response => {
            return response.data;
        });
    }
}