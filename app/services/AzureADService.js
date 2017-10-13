(function () {
    'use strict'
    angular.module('app')
        .factory('azureAD', function ($q, $http, adalAuthenticationService) {
            var azureAd = {};
            var graphApi = 'https://graph.windows.net/'
            azureAd.getUsers = getUsers;
            azureAd.getToken = getToken;
            console.log(adalAuthenticationService);

            function getUsers(){
                return getToken().then(getGraphUsers);
            }

            function getGraphUsers(token) {
              return  $http({
                    method: 'GET',
                    url: graphApi + 'jayasawgmail.onmicrosoft.com/users?api-version=1.6'
                });
            }

            function getToken() {
              return  adalAuthenticationService.acquireToken('https://graph.windows.net/');
            }

            return azureAd;

        });


})();