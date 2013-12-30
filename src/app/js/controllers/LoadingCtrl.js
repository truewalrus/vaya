'use strict';

angular.module("myApp.controllers").controller('LoadingCtrl', ['$scope', '$location', '$timeout', function($scope, $location, $timeout){

	var routeToLogin = function(){
		$location.url('/sign-in');
	};

	$timeout(routeToLogin, 1000);


}]);