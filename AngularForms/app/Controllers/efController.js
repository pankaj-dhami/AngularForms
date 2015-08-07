(function () {
    var efController = function ($scope, efService, $window, $routeParams) {

        if ($routeParams.id) {
            $scope.employee = efService.getEmp($routeParams.id);
        }
        else {

            $scope.employee = { id: 0 };
        }

        $scope.editableEmployee = angular.copy($scope.employee);

        $scope.departments = [
            "Engineering",
            "Marketing",
            "Finance",
            "Admin"

        ];
        $scope.submitForm = function () {

            $scope.$broadcast('show-errors-event');

            if ($scope.employeeForm.$invalid) {

                return;

            }

            if ($scope.editableEmployee.id == 0) {
                efService.insertEmp($scope.editableEmployee);
            }
            else {
                efService.updateEmp($scope.editableEmployee);
            }

            $scope.employee = angular.copy($scope.editableEmployee);
             $window.history.back();
           // $modalInstance.close();
        };
        $scope.cancelForm = function () {
           // $modalInstance.dismiss('cancel');
           // $window.history.back();
            throw new Error("something gone wrong.");
        };

        $scope.shouldShowFullName = function () {

            return true;
        };

    };
    var app = angular.module("AngularForms");
    app.controller("efController", ['$scope', 'efService', '$window', '$routeParams', efController]);

}());