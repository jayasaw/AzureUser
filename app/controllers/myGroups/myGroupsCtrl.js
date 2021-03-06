(function () {
    'use strict'
    angular.module('app')
        .controller('myGroupsCtrl', function (configService, dataService, $q, azureAD, $rootScope) {
            var vm = this;
            this.cuttext = false;
            this.pastetext = false;
            this.copytext = false;

            var gridConfig = [];
            vm.isError= null;

            var gridColumns = [
                { columnName: 'displayName', displayName: 'Group Name' },
                { columnName: 'description', displayName: 'Group Description', link: true }
            ];



            // Get Grid Data
            function fetchMyGroups() {
                azureAD.getMyGroups().then(function (res) {
                    vm.columnData = gridColumns;
                    vm.rowData = res.data.value;
                    vm.isError =  null;
                    console.log(res);
                }).catch(function (res) {
                    console.log(res);
                    vm.isError = 'You do not have any group assigned.';
                   // sessionStorage.clear();
                  //  $rootScope.userInfo = null;
                })

            }




            vm.delete = function (id) {
                dataService.deleteData(id);
            }


            function activate() {
                // fetchGridData();
                fetchMyGroups();
            }

            // Initializing controller;
            activate();


        });
})();