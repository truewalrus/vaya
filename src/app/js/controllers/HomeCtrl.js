'use strict';

angular.module("myApp.controllers").controller('HomeCtrl', ['$scope', '$location', function($scope, $location){
	$scope.openApp = function(){
		$location.url('/loading');
	};

}]);