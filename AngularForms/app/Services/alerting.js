(function () {

    var app = angular.module('AngularForms');

    var alerting = function () {

        var currentAlerts = [];
        var addAlert = function (type,message) {
            currentAlerts.push({ type:type,message:message });
        }

        var addWarning= function (message) {
            addAlert('Warning', message);
        }


        return {

            addAlert: addAlert,
            addWarning: addWarning,
            currentAlerts: currentAlerts
        };

    };

    app.factory('alerting', alerting);

}());