(function () {
    angular.module('app')
        .controller('profileCtrl', function ($rootScope) {


            var vm = this;
            vm.user = $rootScope.userInfo.profile


        })
})();