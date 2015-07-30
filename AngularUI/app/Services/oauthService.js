(function () {

    var app = angular.module('AngularForms');

    var oauthService = function ($http, formEncode) {

        var config = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }

        };

        var login = function (userName, password) {

            var data ="username=Pankaj1&password=pankaj&grant_type=password"

            return $http.post("http://localhost:44592/login", data, config);
        }

        return {
            login: login
        };
    };


    app.factory('oauthService', ['$http', 'formEncode', oauthService]);


}());