'use strict';

angular.module("myApp.controllers").controller('ControllerSetupCtrl', ['$scope', '$http', 'user', '$location', function($scope, $http, user, $location){
	
	var u = user.getUser();
	
	$scope.addController = function(){
		$location.url('/add-start');
	};

}]);