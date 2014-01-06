'use strict';

angular.module("myApp.controllers").controller('SystemCtrl', ['$scope', '$http', 'user', '$location', '$routeParams', function($scope, $http, user, $location, $routeParams){


    var serial = '';
    if ($routeParams.serial)
    {
        serial = $routeParams.serial;
        console.log(serial);
    }
    else{
        //$location.url('/cs');
    }

    var u = user.getUser();
    $scope.toggle = ['yes', 'no'];
    $scope.circuits = ['open', 'short', 'open and short'];

    $scope.getNumber = function(num){
        return new Array(num);
    };

    $scope.next = function(){
        $location.url('/budget');
    };

}]);
