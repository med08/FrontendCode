hrApp.service('EmployeeService', ['$http', 'CommonResourcesFactoryBackup', function ($http, CommonResourcesFactoryBackup) {
        return {
            findById: function (employeeId) {
                return $http.get(CommonResourcesFactoryBackup.findOneEmployeeUrl + employeeId)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return {
                            "id": 100,
                            "firstName": "Steven",
                            "lastName": "King",
                            "email": "SKING",
                            "phoneNumber": "515.123.4567",
                            "hireDate": "1987-06-17",
                            "jobId": 1,
                            "salary": 24000.00,
                            "commissionPct": null,
                            "managerId": null,
                            "departmentId": 90
                        };
                    });
            },
            findEmployees: function () {
                return $http.get(CommonResourcesFactoryBackup.findAllEmployeesUrl)
                    .success(function(data, status, headers, config) {
                        return data;
                    })
                    .error (function(data, status, headers, config){
                        alert("Error: " + status);
                    });
            },
            findDepartments: function () {
                return $http.get(CommonResourcesFactoryBackup.findAllDepartmentsUrl)
                    .success(function(data, status, headers, config) {
                        return data;
                    })
                    .error (function(data, status, headers, config){
                        alert("Error: " + status);
                    });

            },
            findJobs: function () {
                return $http.get(CommonResourcesFactoryBackup.findAllJobsUrl)
                    .success(function(data, status, headers, config) {
                        return data;
                    })
                    .error (function(data, status, headers, config){
                        alert("Error: " + status);
                    });
            }

        }
    }]
);