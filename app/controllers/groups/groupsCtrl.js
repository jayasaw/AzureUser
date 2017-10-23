(function () {
    'use strict'
    angular.module('app')
        .controller('groupsCtrl', function (configService, dataService, $q, azureAD, $rootScope) {
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
            function fetchGroupssData() {
                azureAD.getGroups().then(function (res) {
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
                fetchGroupssData();
            }

            // Initializing controller;
            activate();


        });
})();