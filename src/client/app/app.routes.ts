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
        })
        .state('root.post', {
            url: 'post/:postId',
            templateUrl: 'posts/post.html',
            controller: 'PostController',
            controllerAs: 'vm',
            resolve: {
                postId: ['$stateParams', function($stateParams: any) {
                    return $stateParams.postId;
                }]
            }
        });

    // default route
    $urlRouterProvider.when('/', '/home');
    $urlRouterProvider.otherwise('/');
    
    $locationProvider.html5Mode({
        enabled: true
    });
}
