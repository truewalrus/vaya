'use strict';

angular.module("myApp.controllers").controller('ControllerSetupCtrl', ['$scope', '$http', 'user', '$location', function($scope, $http, user, $location){
	
	var u = user.getUser();
    $scope.controllers = '';
	
	$scope.addController = function(){
		$location.url('/add-start');
	};

    $scope.doneEditing = function(){
        $location.url('/cl');
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

   /* $scope.editCtrl = function(serial){
        $location.url('/addInfoCtrl/' + serial);
    };
*/
}]);