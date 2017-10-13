(function () {
    'use strict'
    angular.module('app')
        .service('configService', function ($q) {

            this.getGridConfig = getGridConfig
            this.getUserGridConfig = getUserGridConfig;

            var gridConfig = [
                { columnName: 'id', displayName: 'Id', link: true, sortable: true },
                { columnName: 'name', displayName: 'Name', link: true },
                { columnName: 'city', displayName: 'City' },
                { columnName: 'email', displayName: 'Email' },
                {
                    columnName: 'button', displayName: 'Action', action: [{ button: 'delete', icon: 'glyphicon-trash' },
                    ]
                }
            ];

            var userGridConfig = [
                { columnName: 'id', displayName: 'Id', link: true, sortable: true, sortOrder: 'asc', size: '100px', editable: true },
                { columnName: 'name', displayName: 'Name', link: true, isFilter: true, sortable: true, size: '200px', editable: true },
                { columnName: 'city', displayName: 'City', isFilter: true, size: '200px', editable: true },
                { columnName: 'phone', displayName: 'Phone', size: '200px', editable: true },
                { columnName: 'email', displayName: 'Email', isFilter: true, size: '200px', editable: true },
                { columnName: 'website', displayName: 'Website', size: '200px', editable: true },
                {
                    columnName: 'button', displayName: 'Action', size: '100px', editable: false, actionButtons: [
                        { action: 'delete', icon: 'glyphicon-trash' },
                        { action: 'edit', icon: 'glyphicon-edit' },
                        { action: 'save', icon: 'glyphicon-save' },
                    ]
                }
            ];

            function getGridConfig() {
                return $q.when(gridConfig);
            }

            function getUserGridConfig() {
                return $q.when(userGridConfig);
            }




        });
})();