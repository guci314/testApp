var example = angular.module('starter', ['ionic'])
    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Stuff in here
        });
    })
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('list', {
                url: '/list',
                templateUrl: 'views/route/list.html'
            })
            .state('detail', {
                url: "/detail",
                templateUrl: "views/route/detail.html"
            });
        $urlRouterProvider.otherwise('/list');
    });