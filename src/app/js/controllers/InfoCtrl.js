'use strict';

angular.module("myApp.controllers").controller('InfoCtrl', ['$scope', '$http', 'user', '$location', '$routeParams', function($scope, $http, user, $location, $routeParams){

    $scope.program = false;

    var serial = '';
    $scope.controller = '';
    if ($routeParams.serial)
    {
        serial = $routeParams.serial;
        $http.get('/api/controllers/getController/' + serial).
            success(function(data){
                $scope.controller = data[0];
            })
            .error(function(data){
                console.log("failed to find controller");
                console.log(data);
            });

        $http.get('/api/program/getProgram/' + serial).
            success(function(data){
                if(data.length >= 1){
                    console.log(data);
                    $scope.program = data[0].programmed;
                }
            })
            .error(function(data){
                console.log("failed to find controller");
                console.log(data);
            });

    }

    $scope.editController = function(){
        $location.url('/add-info/' + serial);
    };

    $scope.editProgram = function(){
        $location.url('/program/' + serial);
    };

    $scope.back = function(){
        $location.url('/cl');
    };

}]);