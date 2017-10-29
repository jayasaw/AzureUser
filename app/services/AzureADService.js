(function () {
    'use strict'
    angular.module('app')
        .factory('azureAD', function ($q, $http, adalAuthenticationService) {
            var azureAd = {};
            var tenant = 'iamanupsawgmail.onmicrosoft.com';
            var graphApi = 'https://graph.windows.net/'
            var userGroups = [];
            azureAd.getUsers = getUsers;
            azureAd.getToken = getToken;
            azureAd.getGroups = getGroups;
            azureAd.getUserAssignedGroups = getUserAssignedGroups;
            azureAd.getUserGroups = getUserGroups;
            console.log(adalAuthenticationService);

            function getUsers() {
                return getToken().then(getGraphUsers);
            }

            function getGraphUsers(token) {
                return $http({
                    method: 'GET',
                    url: graphApi + tenant + '/users?api-version=1.6'
                });
            }

            function getGroups() {
                return $http({
                    method: 'GET',
                    url: graphApi + tenant + '/groups?api-version=1.6'
                });
            }

            // function getUserGroups(){
            //     return  $http({
            //         method: 'GET',
            //         url: graphApi + tenant + '/groups?api-version=1.6'
            //     });
            // }

            function getUserAssignedGroups() {
                return getUserGroupsObjectId()
                    .then(getUserGroupsObject)
                    .then(saveUserGroupList)
                    .catch(function (err) {
                        console.log(err)
                    });

                // return $http({
                //     method: 'GET',
                //     url: graphApi + tenant + '/me/$links/memberOf?api-version=1.6'
                // });
            }

            function saveUserGroupList(res) {

                var defer = $q.defer();
                if (res.data.value.length !== 0) {
                    res.data.value.forEach(function (item) {
                        userGroups.push(item.displayName);
                    });
                    console.log(res);
                    console.log(userGroups);
                    defer.resolve(userGroups);
                } else {
                    defer.reject('some issue in fetching the groups. please re login');
                }
                return defer.promise;

            }

            function getUserGroupsObjectId() {
                return $http({
                    method: 'POST',
                    data: { "securityEnabledOnly": false },
                    url: graphApi + tenant + '/me/getMemberGroups?api-version=1.6'
                });
            }

            function getUserGroupsObject(res) {
                return $http({
                    method: 'POST',
                    data: { "objectIds": res.data.value, types: ["group"] },
                    url: graphApi + tenant + '/getObjectsByObjectIds?api-version=1.6'
                });
            }

            // getUserGroups().then(
            //     function (res) {
            //         console.log(res);
            //     },
            //     function (err) {
            //         console.log(err);
            //     }
            // )

            function getToken() {
                return adalAuthenticationService.acquireToken('https://graph.windows.net/');
            }

            function getUserGroups() {

                return userGroups.length !== 0 ? $q.when(userGroups) : getUserAssignedGroups();
            }

            return azureAd;

        });


})();