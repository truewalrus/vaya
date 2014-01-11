'use strict';

angular.module("myApp.controllers").controller('ControllerListCtrl', ['$scope', '$http', 'user', '$location', function($scope, $http, user, $location){

    var u = user.getUser();

    $scope.editControllers = function(){
        $location.url('/cs');
    };

    $http.get('/api/controllers/getControllers/' + u.id).
        success(function(data){
            console.log("found controllers");
            console.log(data);
            $scope.controllers = data;
        }).
        error(function(data){
            console.log("error");
            console.log(data);
        });

    $scope.editApp = function(){
        $location.url('/app-settings');
    };

}]);