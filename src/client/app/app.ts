import {HomeController} from './home/home.controller';
import {routerConfig} from './app.routes';

export module Blog {
    export function init() {
        let moduleDependencies = [
            'ui.router'
        ];

        angular.module('Blog', moduleDependencies)
            .config(routerConfig)
            .controller('HomeController', HomeController);
    }
}
