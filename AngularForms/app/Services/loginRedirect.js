(function () {

    var app = angular.module('AngularForms');

    var loginRedirect = function ($q, $location) {

        var lastPath = "/";

        var responseError = function (response) {

            if (response.status == 401) {
                lastPath = $location.path();
                $location.path('/home');
            }
            return $q.reject(response);

        };

        var redirectPostLogin = function () {

            $location.path(lastPath);
            lastPath = "/";
        }

        return {
            responseError: responseError,
            redirectPostLogin: redirectPostLogin
        };
    };


    app.factory('loginRedirect', loginRedirect);
    app.config(function ($httpProvider) {
        $httpProvider.interceptors.push("loginRedirect")
    })


}());