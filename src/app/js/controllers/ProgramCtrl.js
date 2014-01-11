'use strict';

angular.module("myApp.controllers").controller('ProgramCtrl', ['$scope', '$http', 'user', '$location', '$routeParams', function($scope, $http, user, $location, $routeParams){

    var u = user.getUser();

    $scope.program = {
        'programmed': 0
    };

    var serial = '';
    if ($routeParams.serial)
    {
        serial = $routeParams.serial;

        $http.get('/api/program/getProgram/' + serial).
            success(function(data){
                if(data.length >= 1){
                    $scope.program = data[0];
                    delete $scope.program._id;
                }
            })
            .error(function(data){
                console.log("failed to find controller");
                console.log(data);
            });
    }

    $scope.programController = function(){
        $scope.program.programmed = 1;
        console.log($scope.program.programmed);
    };

    $scope.unprogramController = function(){
        $scope.program.programmed = 0;
    };


    $scope.done = function(){
        $http.post('/api/program/upsert', {'serial':serial, 'program': $scope.program}).
            success(function(data){
                console.log("success");
                console.log(data);
                $location.url('/info/' + serial);
            }).
            error(function(data){
                console.log("error" +data);
            });
    };



}]);