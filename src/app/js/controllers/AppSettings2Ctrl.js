'use strict';

angular.module("myApp.controllers").controller('AppSettings2Ctrl', ['$scope', '$http', 'user', '$location', function($scope, $http, user, $location){
	
	var u = user.getUser();
	
	$scope.settings = {
		'softUpdate': '',
		'notifications': '',
		'social': ''
	};

	$scope.toggle = ['yes', 'no'];
	
	$scope.saveAndContinue = function(){
		$http.post('api/settings/upsert/', {'username':u.username, 'settings':$scope.settings}).
                success(function(data) {
                    console.log("success" + data);
                }).
                error(function(data) {
                    console.log("error" + data);
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