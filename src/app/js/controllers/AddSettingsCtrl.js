'use strict';

angular.module("myApp.controllers").controller('AddSettingsCtrl', ['$scope', '$http', 'user', '$location', '$routeParams', function($scope, $http, user, $location, $routeParams){


    var serial = '';
    if ($routeParams.serial)
    {
        serial = $routeParams.serial;
        console.log(serial);
    }
    else{
        $location.url('/cs');
    }

    var u = user.getUser();

    $scope.settings = {
        'systemAlerts': '',
        'pScheduleAlerts': '',
        'statusReports': '',
        'suspendFor': '',
        'vTimeDelay': '',
        'mvpTimeDelay': '',
        'programs': '',
        'reset': ''
    };

    $scope.toggle = ['yes', 'no'];
    $scope.next = function(){
        $http.post('/api/controllers/upsert', {'serial':serial, 'controller': $scope.settings}).
            success(function(data){
                console.log("success");
                console.log(data);
                $location.url('/system');
            }).
            error(function(data){
                console.log("error" +data);
            });
    };

    /*$scope.test = function(){
     $http.get('api/settings/getSettings/' + u.username).
     success(function(data){
     console.log("success");
     console.log(data);
     }).
     error(function(data){
     console.log("error");
     console.log(data);
     });
     };*/

}]);