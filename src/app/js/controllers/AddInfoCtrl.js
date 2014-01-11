'use strict';

angular.module("myApp.controllers").controller('AddInfoCtrl', ['$scope', '$http', 'user', '$location', '$routeParams', function($scope, $http, user, $location, $routeParams){
	
	var u = user.getUser();


	$scope.serial = '';
    $scope.editing = false;
	
	$scope.controller = {
		'allowed': '',
		'city': '',
        'street': '',
		'state': '',
		'zip': '',
		'stations': '',
		'country': '',
		'note': '',
		'user': u.id
	};

    var serial = '';
    if ($routeParams.serial)
    {
        serial = $routeParams.serial;
        $http.get('/api/controllers/getController/' + serial).
            success(function(data){
                console.log("found controller");
                console.log(data);
                $scope.controller = data[0];
                delete $scope.controller._id;
                $scope.serial = data[0].serial;
                $scope.editing = true;
            })
            .error(function(data){
                console.log("failed to find controller");
                console.log(data);
            });
    }
		
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