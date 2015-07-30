/// <reference path="Views/efTemplate.html" />
(function () {

    var app = angular.module("AngularForms", ["ngRoute", "ui.bootstrap"]);

    app.config(function ($routeProvider, $locationProvider) {
        $routeProvider.when("/home", {
            templateUrl: "/app/Views/Home.html",
            controller: "HomeController"
        }).when("/newEmployeeForm", {
            templateUrl: "/app/Views/efTemplate.html",
            controller: "efController"
        }).when("/updateEmployeeForm/:id", {
            templateUrl: "/app/Views/efTemplate.html",
            controller: "efController"
        })
            .when("/getorders", {
                templateUrl: "/app/Views/orderDetails.html",
                controller: "orderController"
            })

            .otherwise({ redirectTo: "/home" });
        //$locationProvider.html5Mode({
        //    enabled: true,
        //    requireBase: false
        //});
    });

}());