(function (module) {
    var exceptionHandler = function ($provide) {

        $provide.decorator("$exceptionHandler", function ($delegate,$injector) {

            return function (exception,cause) {
                $delegate(exception, cause);

            }
        })

    };

    module.config(exceptionHandler);

}(angular.module('AngularForms')));