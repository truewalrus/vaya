'use strict';

angular.module("myApp.controllers").controller('EventCalendarCtrl', ['$scope', '$http', 'user', '$location', '$routeParams', function($scope, $http, user, $location, $routeParams){


    $scope.toggle = ['yes', 'no'];

    $scope.next = function(){
        $location.url('/sensors');
    };

    $scope.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

}]);
