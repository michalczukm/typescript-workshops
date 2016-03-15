import {HomeController} from './main/home.controller';
import {routerConfig} from './app.routes';
import {PostsService} from './posts/posts.service';
import {PostController} from './posts/post.controller';
import {getConfig} from './app.config';

module Blog {
    let moduleDependencies = [
        'ui.router',
        'ngLodash'
    ];

    angular.module('Blog', moduleDependencies)
        .constant('config', getConfig()) 
        .config(routerConfig)
        .controller('HomeController', HomeController)
        .controller('PostController', PostController)
        .service('postsService', PostsService);
}
