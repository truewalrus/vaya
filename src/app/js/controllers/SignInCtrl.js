'use strict';

angular.module("myApp.controllers").controller('SignInCtrl', ['$scope', 'user', '$location', function($scope, user, $location){
	
	$scope.email = '';
	$scope.password = '';
	$scope.confirm = '';
	$scope.signup = true;
	
	$scope.createUser = function(){
		if ($scope.password === $scope.confirm){
			user.signUp($scope.email, $scope.password, function(data){
				console.log("user created");
			},
			function(data){
				console.log('failed to add user');
				console.log(data);
			});
		
		}
		else{
			$scope.message = "Passwords don't match...";
		}
	
	};
	
	$scope.login = function() {
		console.log('%cSigning In', "color: red;font-weight:bold;");
		console.log('- Username: ' + $scope.email);
		console.log('- Password: ' + $scope.password);
		
		user.login($scope.email, $scope.password, function(data) {
			$location.url('/as1');
			console.log('logged in!');
	
		},
		function(data) {
			console.log('login failed!');
			$scope.message = "Incorrect username or password";
		});
	};
	
	var checkSession = function(){
		user.checkSession(function(data){
		},
		function(data){
			console.log("not logged in");
		});
	};
	checkSession();
	
}]);