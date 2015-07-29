/// <reference path="../Views/efTemplate.html" />
(function () {

    var app = angular.module("AngularForms");

    var employeeForm = function () {

        return {

            restrict: "E",//restrict the directive as an element
            templateUrl: "app/Views/efTemplate.html"
        };
    };
    app.directive("employeeForm", employeeForm);

}());