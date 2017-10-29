(function () {
    angular.module('app')
        .controller('homeCtrl', function ($rootScope, adalAuthenticationService, azureAD, $state) {


            var vm = this;
            vm.login = function () {
                console.log(adalAuthenticationService.login());
            };

            // $rootScope.$on('adal:loginSuccess', function (data) {
            //     console.log(data);
            // })
            vm.logout = function () {
                adalAuthenticationService.logOut();
            };

            vm.getUser = function () {
                $state.go('home.grid');
                // azureAD.getUsers().then(function (res) {
                //     console.log(res);
                // });
            }

            vm.getToken = function () {
                azureAD.getToken();
            }


            function activate() {
                if (sessionStorage.getItem('adal.idtoken')) {
                    $state.go('azure');
                 }
            }

            activate();
        })
})();