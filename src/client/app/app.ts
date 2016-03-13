import {HomeController} from './home/home.controller';
import {routerConfig} from './app.routes';

module Blog {
    let moduleDependencies = [
        'ui.router'
    ];

    // angular.module('Blog', []);
    angular.module('Blog', moduleDependencies)
        .config(routerConfig)
        .controller('HomeController', HomeController);
}
