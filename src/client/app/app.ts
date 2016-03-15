import {HomeController} from './main/home.controller';
import {routerConfig} from './app.routes';
import {PostsService} from './posts/posts.service';
import {PostController} from './posts/post.controller';

module Blog {
    let moduleDependencies = [
        'ui.router',
        'ngLodash'
    ];

    angular.module('Blog', moduleDependencies)
        .config(routerConfig)
        .controller('HomeController', HomeController)
        .controller('PostController', PostController)
        .service('postsService', PostsService);
}
