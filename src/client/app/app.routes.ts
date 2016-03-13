/** @ngInject */
export function routerConfig($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider, $locationProvider: ng.ILocationProvider) {
    $stateProvider
        .state('root', {
            url: '/',
            templateUrl: 'app/layout/root.html',
            controllerAs: 'vm'
        })
        .state('root.home', {
            url: 'home',
            templateUrl: 'app/home/home.html',
            controller: 'HomeController',
            controllerAs: 'vm'
        });

    // default route
    $urlRouterProvider.otherwise('/home');
    
    $locationProvider.html5Mode(true);
}
