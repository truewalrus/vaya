'use strict';

angular.module("myApp.controllers").controller('ControllerListCtrl', ['$scope', '$http', 'user', '$location', function($scope, $http, user, $location){

    //var u = user.getUser();

    $scope.addController = function(){
        $location.url('/begin-add');
    };

   /* $scope.saveAndContinue = function(){
        $http.post('api/settings/upsert/', {'username':u.username, 'settings':$scope.settings}).
            success(function(data) {
                console.log("success" + data);
                $location.url('/controller-list');
            }).
            error(function(data) {
                console.log("error" + data);
            });

    };*/

}]);