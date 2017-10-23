(function () {
    angular.module('app')
        .filter('pagination', function () {
            return function (input, pageCount) {
                var result = [];

                var pageSize = 5;

                var startFrom = (pageSize * (pageCount - 1));
                var endTill = startFrom + pageSize;
                result = input ? input.slice(startFrom, endTill) : input;
                return result;

            }
        })
})();