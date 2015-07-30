(function () {

    var app = angular.module('AngularForms');

    var LoginController = function ($scope, oauthService) {

        $scope.user = {
            userName: "pankaj",
            password: "pankaj"
        };
        $scope.loginSubmit = function (form) {
            if (form.$valid) {
                oauthService.login($scope.user.userName, $scope.user.password);
                form.$setUntoched();
            }
        }
    }

    app.controller("LoginController", LoginController);

}());