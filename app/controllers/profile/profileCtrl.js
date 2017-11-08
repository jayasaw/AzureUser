(function () {
    angular.module('app')
        .controller('profileCtrl', function ($rootScope, azureAD, profileData) {


            var vm = this;
            vm.user = $rootScope.userInfo.profile
            vm.rowData = [];

            vm.myProfile = profileData;


            var gridColumns = [
                { columnName: 'objectType', displayName: 'User Role', },
                { columnName: 'givenName', displayName: 'First Name' },
                { columnName: 'surname', displayName: 'Last Name' },
                { columnName: 'userPrincipalName', displayName: 'Email' },
                { columnName: 'userType', displayName: 'User Type' },
              

            ];


            // getManager details

            function getManager() {
                azureAD.getUserManager()
                    .then(
                    function (res) {
                        vm.columnData = gridColumns;
                        vm.rowData = res.data.value;
                        vm.isError = null;
                        console.log(res);
                    })
                    .catch(
                    function (res) {
                        console.log(res);
                        vm.isError = res + ' please re login.';
                        sessionStorage.clear();
                        $rootScope.userInfo = null;
                    })


            }

            vm.getMyDirectReprtee = function () {
                azureAD.getDirectReportee(vm.user.oid)
                    .then(
                    function (res) {
                        vm.columnData = gridColumns;
                        vm.rowData = res.data.value;
                        vm.isError = null;
                        console.log(res);
                    })
                    .catch(
                    function (res) {
                        console.log(res);
                        vm.isError = res + ' please re login.';
                        sessionStorage.clear();
                        $rootScope.userInfo = null;
                    })

            }


            function getUserGroups() {
                azureAD.getUserAssignedGroups().then(function (res) {
                    // vm.columnData = gridColumns;
                    // vm.rowData = res.data.value;
                    // vm.isError =  null;
                    console.log(res);
                }).catch(function (res) {
                    console.log(res);
                    vm.isError = res + ' please re login.';
                    sessionStorage.clear();
                    // $rootScope.userInfo = null;
                })
            }

            // // Get Grid Data
            vm.getUserProfile = function () {
                azureAD
                    .getUserProfile()
                    .then(function (res) {
                        vm.myProfile = res.data;
                        // vm.columnData = gridColumns;
                        // vm.rowData = res.data.value;
                        // vm.isError =  null;
                        console.log(res);
                    })
                    .catch(function (res) {
                        console.log(res);
                        vm.isError = res + ' please re login.';
                        sessionStorage.clear();
                        // $rootScope.userInfo = null;
                    })


            }




            vm.delete = function (id) {
                dataService.deleteData(id);
            }


            function activate() {
                // fetchGridData();
                //getUserProfile();
                // getManager();

               // vm.getUserProfile();
            }

            // Initializing controller;
            activate();


        })
})();