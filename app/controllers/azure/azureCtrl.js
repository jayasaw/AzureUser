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

            // vm.openUserGroupPage = function () {
            //     $window.open('http://jayaazureusersgroups.azurewebsites.net');
            // }


            vm.getProfile = function () {
                $state.go('azure.profile');
            }

            vm.getMyGroups = function () {
                $state.go('azure.myGroups');
            }


            function activate() {
                vm.getProfile();
            }

            

            vm.isUserAdmin = function () {
                return userGroups
                    ? userGroups.includes('Admin')
                    : false;
            }

            vm.hasGroupViewAccess = function () {
                return userGroups
                    ? (userGroups.includes('CanViewGroups') || userGroups.includes('Admin')) ? true : false
                    : false;
            }

            vm.hasUserListViewAccess = function () {
                return userGroups
                    ? (userGroups.includes('CanViewUsers') || userGroups.includes('Admin')) ? true : false
                    : false;
            }

            activate();
        })
})();