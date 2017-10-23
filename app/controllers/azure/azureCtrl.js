(function () {
    angular.module('app')
        .controller('azureCtrl', function ($rootScope, adalAuthenticationService, azureAD, $state, $window) {


            var vm = this;

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

            activate();
        })
})();