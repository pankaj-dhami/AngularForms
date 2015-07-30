(function () {

    var app = angular.module('AngularForms');

    var addToken = function (currentUser ,$q) {

        var request = function (config) {

            if (currentUser.profile.loggedIn) {

                config.headers.Authorization = "Bearer " + currentUser.profile.token;
            }
            return $q.when(config);

        };

        return {
            request:request
        };
    };


    app.factory('addToken', addToken);
    app.config(function ($httpProvider) {
        $httpProvider.interceptors.push("addToken")
    })


}());