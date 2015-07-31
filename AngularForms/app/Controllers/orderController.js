(function () {


    var orderController = function ($scope, $http) {

        var onError = function () {
            $scope.error = 'could not fetch data.';

        };

        var onUserComplete = function (response) {

            $scope.repos = response.data;
        };

        $http.get('/api/Account').then(onUserComplete, onerror);

    };
    var app = angular.module('AngularForms')
    app.controller('orderController', ['$scope', '$http', orderController]);


}());