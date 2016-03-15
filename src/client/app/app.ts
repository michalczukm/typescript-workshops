import {HomeController} from './main/home.controller';
import {routerConfig} from './app.routes';
import {PostsService} from './posts/posts.service';

module Blog {
    let moduleDependencies = [
        'ui.router',
        'ngLodash'
    ];

    angular.module('Blog', moduleDependencies)
        .config(routerConfig)
        .controller('HomeController', HomeController)
        .service('postsService', PostsService);
}
