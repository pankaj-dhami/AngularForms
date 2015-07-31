(function () {

    var app = angular.module('AngularForms');

    var currentUser = function (localStorage) {

        var userkey = 'utoken';

        var initialize = function () {

            var user = {

                userName: "",
                token: "",
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

        return {
            profile: profile,
            setProfile: setProfile
        };
    };


    app.factory('currentUser', currentUser);


}());