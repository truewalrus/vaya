'use strict';

angular.module("myApp.controllers").controller('AppSettingsCtrl', ['$scope', '$http', 'user', '$location', function($scope, $http, user, $location){

    var u = user.getUser();
    $scope.settings = {
        'timeFormat': '',
        'unitFormat': '',
        'language': '',
        'softUpdate': '',
        'notifications': '',
        'social': ''
    };
    $http.get('api/settings/getSettings/' + u.username).
        success(function(data){
            if(data.length > 0){
                console.log(data[0]);
                $scope.settings = data[0];
                delete $scope.settings._id;
            }
        }).
        error(function(data){
            console.log("am in error");
            console.log(data);
        });



    $scope.tf = ['12', '24'];

    $scope.uf = ['metric', 'imperial'];

    $scope.lang = ['English', 'German', 'French', 'Spanish', 'Italian', 'Portuguese', 'Japanese', 'Chinese', 'Arabic'];

    $scope.toggle = ['yes', 'no'];

    $scope.saveAndContinue = function(){
        $http.post('/api/settings/upsert', {'username':u.username, 'settings':$scope.settings}).
            success(function(data) {
                console.log("success" + data);
                $location.url('/cl');
            }).
            error(function(data) {
                console.log("error" + data);
            });

    };


}]);