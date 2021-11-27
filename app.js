(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchDishes = '';
        $scope.message = '';
        $scope.checked = false;

        $scope.checkLunchDishes = function() {
            if ($scope.lunchDishes.trim().length === 0) {
                $scope.empty = true;
            } else {
                $scope.checked = true;
                $scope.empty = false;
                var arrayDishes = $scope.lunchDishes.split(',');
                var arrayDishesNotEmpty = arrayDishes.filter(function(v) {
                    return v.trim() !== '';
                });

                if (arrayDishesNotEmpty.length <= 3) {
                    $scope.message = 'Enjoy!';
                } else {
                    $scope.message = 'Too much!';
                }
            }
        };
    }
})();