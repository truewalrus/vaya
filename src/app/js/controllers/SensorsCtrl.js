'use strict';

angular.module("myApp.controllers").controller('SensorsCtrl', ['$scope', '$http', 'user', '$location', '$routeParams', function($scope, $http, user, $location, $routeParams){


    $scope.toggle = ['yes', 'no'];

    $scope.complete = function(){
        $location.path('/cs');
    };


}]);
