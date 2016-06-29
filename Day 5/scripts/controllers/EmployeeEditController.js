hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactoryBackup','EmployeeService',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactoryBackup,EmployeeService) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR5

        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */


            EmployeeService.findEmployees()
                .then(function (res) {
                    $scope.managers = res.data;
                }, function (err) {
                    console.log("Error at employees/findOne: " + err);
                });

            EmployeeService.findDepartments()
                .then(function (res) {
                    $scope.departments = res.data;
                }, function (err) {
                    console.log("Error at employees/findOne: " + err);
                });

            EmployeeService.findJobs()
                .then(function (res) {
                    $scope.jobs = res.data;
                }, function (err) {
                    console.log("Error at employees/findOne: " + err);
                });

            EmployeeService.findById($routeParams.employeeId)
                .then(function (res) {
                    $scope.employee = res.data;
                }, function (err) {
                    console.log("Error at employees/findOne: " + err);
                });

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

    }]);