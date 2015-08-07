(function () {

    var app = angular.module('AngularForms');

    var currentUser = function (localStorage) {

        var userkey = 'utoken';

        var initialize = function () {

            var user = {

                userName: null,
                token: null,
                get loggedIn() {
                    return this.token;
                }
            };
            var localUser = localStorage.get(userkey);
            if (localUser) {
                user.userName = localUser.userName;
                user.token = localUser.token;
            }

            return user;

        }

        var profile = initialize();

        var setProfile = function (userName, token) {
            profile.userName = userName;
            profile.token = token;
            localStorage.add(userkey, profile);
        };

        var isLoggedIn = function () {
            var localUser = localStorage.get(userkey);
            if (localUser) {

                return true;
            }
            return false;

        };

        return {
            profile: profile,
            setProfile: setProfile,
            userkey: userkey,
            isLoggedIn: isLoggedIn
        };
    };


    app.factory('currentUser', currentUser);


}());