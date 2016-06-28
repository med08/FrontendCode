myApp.controller('FormsController', ['$scope',
    function ($scope) {
        $scope.validForm = function(){
            if ($scope.myForm.$valid)
                alert("Ok")
            else
                alert("Not valid")
        }
    }]);