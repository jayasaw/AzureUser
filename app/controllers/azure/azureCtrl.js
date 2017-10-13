(function () {
    angular.module('app')
        .controller('azureCtrl', function ($rootScope, adalAuthenticationService, azureAD, $state) {


            var vm = this;

            vm.getUser = function () {
                $state.go('azure.users');
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