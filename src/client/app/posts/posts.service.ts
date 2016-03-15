import {Post} from '../../../server/model/post';
import {Config} from '../config';

export class PostsService {
    /* @ngInject */
    constructor(
        private $http: ng.IHttpService,
        private config: Config
    ) { }
    
    getAll(): ng.IPromise<Post[]> {
        return this.$http.get<Post[]>(this.config.apiUrl + '/api/posts').then( response => {
            return response.data;
        });
    }
    
    getById(id: number): ng.IPromise<Post> {
        return this.$http.get<Post>(this.config.apiUrl + `/api/posts/${id}`).then( response => {
            return response.data;
        });
    }
}