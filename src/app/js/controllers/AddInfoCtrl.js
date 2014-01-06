'use strict';

angular.module("myApp.controllers").controller('AddInfoCtrl', ['$scope', '$http', 'user', '$location', function($scope, $http, user, $location){
	
	var u = user.getUser();
	
	$scope.serial = '';
	
	$scope.controller = {
		'allowed': '',
		'city': '',
		'state': '',
		'zip': '',
		'stations': '',
		'country': '',
		'note': '',
		'user': u.id
	};
		
	$scope.next = function(){
		$http.post('/api/controllers/upsert', {'serial':$scope.serial, 'controller': $scope.controller}).
			success(function(data){
				console.log("success");
				console.log(data);
				$location.path('/add-settings/' + $scope.serial);
			}).
			error(function(data){
				console.log("error" +data);
			});
	};
	
	/*$scope.test = function(){
		console.log("TESTING GETTING MULTIPLE CONTROLLERS USING A USERNAME TEST5");
		$http.get('/api/settings/getControllers/' + 'test5').
			success(function(data){
				console.log("success");
				console.log(data);
			}).
			error(function(data){
				console.log("error");
				console.log(data);
			});
	};
	
	$scope.test2 = function(){
		console.log("TESTING GETTING A CONTROLLER USING A SERIAL");
		$http.get('/api/settings/getController/' + 'abc').
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