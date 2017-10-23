(function () {
    'use strict'
    angular.module('app')
        .service('dataService', function ($q, $http) {

            this.getGridData = getGridData;
            this.deleteData = deleteData;
            this.getUserData = getUserData;



            var gridData = [
                { id: 1, name: 'abc', city: 'jamshedpur', email: 'ja@gmail.com' },
                { id: 2, name: 'abce', city: 'Ranchi', email: 'jaya@gmail.com' },
                { id: 3, name: 'abcf', city: 'pune', email: 'jayasaw@gmail.com' },
                { id: 4, name: 'abcg', city: 'kolkata', email: 'jaya24@gmail.com' },
                { id: 5, name: 'abch1', city: 'jsr', email: 'jaya12@gmail.com' },
                { id: 6, name: 'abch3', city: 'jsr', email: 'jaya12@gmail.com' },
                { id: 7, name: 'abch4', city: 'jsr', email: 'jaya12@gmail.com' },
                { id: 8, name: 'abch6', city: 'jsr', email: 'jaya12@gmail.com' },
                { id: 9, name: 'abch8', city: 'jsr', email: 'jaya12@gmail.com' },
                { id: 10, name: 'abch45', city: 'jsr', email: 'jaya12@gmail.com' },
                { id: 11, name: 'abch767', city: 'jsr', email: 'jaya12@gmail.com' },
                { id: 12, name: 'abch4343', city: 'jsr', email: 'jaya12@gmail.com' },
                { id: 13, name: 'abch', city: 'jsr', email: 'jaya12@gmail.com' },
                { id: 14, name: 'abch', city: 'jsr', email: 'jaya12@gmail.com' },
                { id: 15, name: 'abch', city: 'jsr', email: 'jaya12@gmail.com' },
                { id: 16, name: 'abch', city: 'jsr', email: 'jaya12@gmail.com' },

                { id: 17, name: 'abch', city: 'jsr', email: 'jaya12@gmail.com' },

                { id: 18, name: 'abch', city: 'jsr', email: 'jaya12@gmail.com' },

                { id: 19, name: 'abch', city: 'jsr', email: 'jaya12@gmail.com' },
                { id: 10, name: 'abch', city: 'jsr', email: 'jaya12@gmail.com' },




            ];

            function getGridData() {
                return $q.when(gridData)
            }

            function deleteData(id) {
                for (var i = 0; i < gridData.length; i++) {
                    if (gridData[i].id === id) {
                        gridData.splice(i, 1);
                    }
                }
            }

            function getUserData() {
                var deferred = $q.defer();

                $http.get( 'app/mockData/userData.json').then(function (res) {
                    deferred.resolve(res.data);
                }).catch(function (err) {
                    console.log('got  error to fetch the uder data');
                    deferred.reject(err.data);
                })

                return deferred.promise;
            }

        });
})();