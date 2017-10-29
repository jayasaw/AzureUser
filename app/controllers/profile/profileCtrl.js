(function () {
    angular.module('app')
        .controller('profileCtrl', function ($rootScope, azureAD) {


            var vm = this;
            vm.user = $rootScope.userInfo.profile


            var gridColumns = [
                { columnName: 'displayName', displayName: 'Group Name' },
                { columnName: 'description', displayName: 'Group Description', link: true }
            ];



            // // Get Grid Data
            // function getUserProfile() {
            //     azureAD.getUserAssignedGroups().then(function (res) {
            //         // vm.columnData = gridColumns;
            //         // vm.rowData = res.data.value;
            //         // vm.isError =  null;
            //         console.log(res);
            //     }).catch(function (res) {
            //         console.log(res);
            //         vm.isError = res + ' please re login.';
            //         sessionStorage.clear();
            //        // $rootScope.userInfo = null;
            //     })

            // }




            vm.delete = function (id) {
                dataService.deleteData(id);
            }


            function activate() {
                // fetchGridData();
               // getUserProfile();
            }

            // Initializing controller;
            activate();


        })
})();