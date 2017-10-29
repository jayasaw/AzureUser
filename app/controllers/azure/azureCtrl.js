(function () {
    angular.module('app')
        .controller('azureCtrl', function ($rootScope, adalAuthenticationService, azureAD, userGroups, $state, $window) {


            var vm = this;
            //  var userGroups = azureAD.getUserGroups();

            vm.getUser = function () {
                $state.go('azure.users');
            }

            vm.getGroups = function () {
                $state.go('azure.groups');
            }

            vm.openUserGroupPage = function () {
                $window.open('http://jayaazureusersgroups.azurewebsites.net');
            }


            vm.getProfile = function () {
                $state.go('azure.profile');
            }


            function activate() {
                vm.getProfile();
            }

            vm.isUserAdmin = function () {
                return userGroups.includes('Admin');
            }

            activate();
        })
})();