/** @ngInject */
export function routerConfig($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider, $locationProvider: ng.ILocationProvider) {
    $stateProvider
        .state('root', {
            url: '/',
            abstract: true,
            templateUrl: 'layout/root.html',
            controllerAs: 'vm'
        })
        .state('root.home', {
            url: 'home',
            templateUrl: 'main/home.html',
            controller: 'HomeController',
            controllerAs: 'vm'
        });

    // default route
    $urlRouterProvider.when('/', '/home');
    $urlRouterProvider.otherwise('/');
    
    $locationProvider.html5Mode({
        enabled: true
    });
}
