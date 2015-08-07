(function () {


    var orderController = function ($scope, $http) {

        var onError = function () {
            $scope.error = 'could not fetch data.';

        };

        var onUserComplete = function (response) {

            $scope.repos = response.data;
        };

        $http.get('/api/Account').then(onUserComplete, onerror);

        window.location.href = "/api/Account/ExportSummary/100";

        //$http.get('/api/Account/ExportSummary/100', {
        //    responseType: 'arraybuffer',
        //    headers: { 'Content-type': 'application/json', 'Accept': 'application/octet-stream' }
        //}).then(function (data) {
            
        //    var blob = new Blob([data], { type: "application/octet-stream" });
        //    //var objectUrl = URL.createObjectURL(blob);
        //    //window.open(objectUrl);
        //    ////trick to download store a file having its URL
        //    var fileURL = URL.createObjectURL(blob);
        //    var a = document.createElement('a');
        //    a.href = fileURL;
        //    a.target = '_blank';
        //    a.download = 'excel.xlsx';
        //    document.body.appendChild(a);
        //    a.click();
        //}, onerror);

        //$http({
        //    url: '/api/Account/ExportSummary/100',
        //    method: 'POST',
        //    responseType: 'arraybuffer',
        //   // data: json, //this is your json data string
        //    headers: {
        //        'Content-type': 'application/json',
        //        'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        //    }
        //}).success(function (data) {
        //    var blob = new Blob([data], {
        //        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        //    });
        //    saveAs(blob, 'File_Name_With_Some_Unique_Id_Time' + '.xlsx');
        //}).error(function () {
        //    //Some error log
        //});

    };
    var app = angular.module('AngularForms')
    app.controller('orderController', ['$scope', '$http', orderController]);


}());