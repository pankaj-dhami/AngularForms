(function () {
    var app = angular.module('AngularForms');

    var efService = function () {

        var getEmp = function (id) {
            return {

                id: 123,
                fullName: "pankaj dhami",
                email: "pankaj.dhami@accenture.com",
                notes: "fsdfasdfasdfasdf",
                department: "Admin",
                dateHired: "July 11 2015",
                breakTime: "July 11 2015 3:00 PM",
                perkCar: true,
                perkStock: false,
                perkSixWeeks: true,
                payrollType: "none"

            };
        };

        var insertEmp = function (newEmployee) {

        };

        var updateEmp = function (updateEmpoyee) {

        };


        return {
            getEmp: getEmp,
            insertEmp: insertEmp,
            updateEmp: updateEmp
        };


    };



    app.factory('efService', efService);


}());