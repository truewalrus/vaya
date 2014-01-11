'use strict';

angular.module("myApp.controllers").controller('AddSettingsCtrl', ['$scope', '$http', 'user', '$location', '$routeParams', function($scope, $http, user, $location, $routeParams){

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

    var serial = '';
    if ($routeParams.serial)
    {
        serial = $routeParams.serial;
        console.log(serial);

        $http.get('/api/controllers/getController/' + serial).
            success(function(data){
                console.log("add settings");
                $scope.settings = data[0];
                delete $scope.settings._id;
            })
            .error(function(data){
                console.log("failed to find controller");
                console.log(data);
            });
    }



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



}]);