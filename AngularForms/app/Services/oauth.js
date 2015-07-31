(function () {

    var app = angular.module('AngularForms');

    var oauthService = function ($http, formEncode, currentUser) {

        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }

        };

        var login = function (userName, password) {

            var data = "grant_type=password&username=" + userName + "&password=" + password;

            return $http.post("/login", data, config).then(function (response) {

                currentUser.setProfile(userName, response.data.access_token);
                return userName;
            });
        }

        return {
            login: login
        };
    };


    app.factory('oauthService', ['$http', 'formEncode', 'currentUser', oauthService]);


}());