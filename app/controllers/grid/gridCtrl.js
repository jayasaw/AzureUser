(function () {
    'use strict'
    angular.module('app')
        .controller('gridCtrl', function (configService, dataService, $q, azureAD, $rootScope) {
            var vm = this;
            this.cuttext = false;
            this.pastetext = false;
            this.copytext = false;

            var gridConfig = [];
            vm.isError= null;

            var gridColumns = [
                { columnName: 'objectType', displayName: 'User Role' },
                { columnName: 'givenName', displayName: 'First Name', link: true },
                { columnName: 'surname', displayName: 'Last Name' },
                { columnName: 'userPrincipalName', displayName: 'Email' },
                { columnName: 'userType', displayName: 'User Type' }
            ];



            // Get Grid Data
            function fetchUsersData() {
                azureAD.getUsers().then(function (res) {
                    vm.columnData = gridColumns;
                    vm.rowData = res.data.value;
                    vm.isError =  null;
                    console.log(res);
                }).catch(function (res) {
                    console.log(res);
                    vm.isError = res + ' please re login.';
                    sessionStorage.clear();
                    $rootScope.userInfo = null;
                })

            }




            vm.delete = function (id) {
                dataService.deleteData(id);
            }


            function activate() {
                // fetchGridData();
                fetchUsersData();
            }

            // Initializing controller;
            activate();


        });
})();