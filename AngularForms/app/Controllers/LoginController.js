(function () {

    var app = angular.module('AngularForms');

    var LoginController = function ($scope, oauthService, currentUser, loginRedirect) {
        var model = this;
        model.userName = "";
        model.password = "";
        model.user = currentUser.profile;
        var onSuccess = function () {

            loginRedirect.redirectPostLogin();
        }
        model.loginSubmit = function (form) {
            if (form.$valid) {
                oauthService.login(model.userName, model.password)
                .then(onSuccess)

               // form.$setUntoched();
            }
        }

        model.isLoggedIn = function () {

            return currentUser.isLoggedIn();
        }
    }

    app.controller("LoginController", LoginController);

}());