(function () {

    'use strict';
    angular.module('app', ['ui.router', 'ngDraggable', 'AdalAngular'])
        .config(function ($httpProvider, adalAuthenticationServiceProvider, $stateProvider, $urlRouterProvider, $locationProvider) {



            $stateProvider
                .state('home', {
                    url: '/home',
                    controller: 'homeCtrl',
                    controllerAs: 'home',
                    templateUrl: './app/controllers/home/home.html',
                    requireADLogin: false,
                })
                .state('azure.users', {
                    url: '/users',
                    controller: 'gridCtrl',
                    controllerAs: 'grid',
                    templateUrl: './app/controllers/grid/grid.html'
                })
                .state('azure.profile', {
                    url: '/profile',
                    controller: 'profileCtrl',
                    controllerAs: 'profile',
                    templateUrl: './app/controllers/profile/profile.html'
                })
                .state('azure', {
                    url: '/azure',
                    controller: 'azureCtrl',
                    controllerAs: 'azure',
                    templateUrl: './app/controllers/azure/azure.html'
                })
                // extraQueryParameter: 'nux=1?grant_type=client_credentials&client_secret=Vv7u0UGgWIwWTFIqX7M1wABt%2FuqWc7eo%2FLp3Bh9pfhE%3D',

            $urlRouterProvider.otherwise("/home");
            $locationProvider.html5Mode(true);
            adalAuthenticationServiceProvider.init(
                {
                    instance: 'https://login.microsoftonline.com/',
                    tenant: 'jayasawgmail.onmicrosoft.com',
                    clientId: 'b6b6a528-9fa2-49ae-bd7c-72ec88b8c6d1',
                    endpoints: { 'https://graph.windows.net/': 'https://graph.windows.net/' },
                    //loginResource: 'https://graph.windows.net/',
                    extraQueryParameter: 'nux=1?',
                    popUp: true,
                    requireADLogin: true,
                    //cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
                },
                $httpProvider
            );
        })
        .controller('mainCtrl', function () {
            var vm = this;
        })


    angular.element(document).ready(function () {
        angular.bootstrap(document, ['app']);
    });
})();