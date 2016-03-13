import {HomeController} from './home/home.controller';
import {routerConfig} from './app.routes';

export module Blog {
    let moduleDependencies = [
        'ui.router'
    ];

    angular.module('Blog', moduleDependencies)
        .config(routerConfig)
        .controller('HomeController', HomeController);
}
