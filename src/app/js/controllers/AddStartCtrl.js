'use strict';

angular.module("myApp.controllers").controller('AddStartCtrl', ['$scope', '$http', 'user', '$location', function($scope, $http, user, $location){
	
	var u = user.getUser();
		
	$scope.steps = ['Install the air conditioning near the power source', 'Take apart the controller and put it back together again',
	'Press the controller into the wall until it works again', 'Type in serial #'];
	
	$scope.next = function(){
		$location.url('/add-info');
	};

}]);