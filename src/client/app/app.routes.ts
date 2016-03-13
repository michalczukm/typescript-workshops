/** @ngInject */
export function routerConfig($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
    $stateProvider
        .state('root', {
            url: '/',
            templateUrl: './layout/root.html',
            controllerAs: 'vm'
        })
        .state('root.home', {
            url: 'home',
            templateUrl: './home/home.html',
            controller: 'HomeController',
            controllerAs: 'vm'
        });

    // default route
    $urlRouterProvider.otherwise('/home');
}
