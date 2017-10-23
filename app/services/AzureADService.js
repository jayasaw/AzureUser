(function () {
    'use strict'
    angular.module('app')
        .factory('azureAD', function ($q, $http, adalAuthenticationService) {
            var azureAd = {};
            var tenant = 'vilasnikoseharbingergroup.onmicrosoft.com';
            var graphApi = 'https://graph.windows.net/'
            azureAd.getUsers = getUsers;
            azureAd.getToken = getToken;
            azureAd.getGroups = getGroups;
            console.log(adalAuthenticationService);

            function getUsers(){
                return getToken().then(getGraphUsers);
            }

            function getGraphUsers(token) {
              return  $http({
                    method: 'GET',
                    url: graphApi + tenant + '/users?api-version=1.6'
                });
            }

            function getGroups(){
                return  $http({
                    method: 'GET',
                    url: graphApi + tenant + '/groups?api-version=1.6'
                });
            }

            function getToken() {
              return  adalAuthenticationService.acquireToken('https://graph.windows.net/');
            }

            return azureAd;

        });


})();