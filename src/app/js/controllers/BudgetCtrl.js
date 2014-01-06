'use strict';

angular.module("myApp.controllers").controller('BudgetCtrl', ['$scope', '$http', 'user', '$location', '$routeParams', function($scope, $http, user, $location, $routeParams){

    $scope.showBudget = '';
    $scope.operate = [];

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
    $scope.funct = ['operate', 'disable'];

    $scope.getNumber = function(num){
        return new Array(num);
    };

    $scope.next = function(){
        $location.url('/event-calendar');
    };

    $scope.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

}]);
