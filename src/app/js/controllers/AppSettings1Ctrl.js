'use strict';

angular.module("myApp.controllers").controller('AppSettings1Ctrl', ['$scope', '$http', 'user', '$location', function($scope, $http, user, $location){
	
	var u = user.getUser();
	$http.get('api/settings/getSettings/' + u.username).
		success(function(data){
			if(data.length > 0){
				$location.url('/cs');
			}
			console.log("am in success.");
			console.log(data);
		}).
		error(function(data){
			console.log("am in error");
			console.log(data);
		});
	
	$scope.settings = {
		'timeFormat': '',
		'unitFormat': '',
		'language': ''
	};

	$scope.tf = ['12', '24'];
	
	$scope.uf = ['metric', 'imperial'];
	
	$scope.lang = ['English', 'German', 'French', 'Spanish', 'Italian', 'Portuguese', 'Japanese', 'Chinese', 'Arabic'];
	
	$scope.saveAndContinue = function(){
		$http.post('api/settings/upsert', {'username':u.username, 'settings':$scope.settings}).
                success(function(data) {
                    console.log("success" + data);
					$location.url('/as2');
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