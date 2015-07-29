(function () {
    var HomeController = function ($scope, $modal, $location) {

        $scope.addNewEmployee = function () {
            $location.path("/newEmployeeForm");
            //var modalInstance = $modal.open({
            //    templateUrl: "/app/Views/efTemplate.html",
            //    controller: "efController"

            //});
        };
        $scope.updateEmployee = function () {
            //$location.path("/newEmployeeForm");
            //var modalInstance = $modal.open({
            //    templateUrl: "/app/Views/efTemplate.html",
            //    controller: "efController"

            //});
            $location.path("/updateEmployeeForm/123");
        };
        
    }

    var app = angular.module("AngularForms");
    app.controller("HomeController", ['$scope', '$modal', '$location', HomeController]);
}());