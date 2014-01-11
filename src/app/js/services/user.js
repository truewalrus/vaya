//Service for user login
'use strict';
angular.module("myApp.services")
    .service('user', ['$rootScope', '$http', '$location', function($rootScope, $http, $location){


        var user = false;
        var loggedIn = false;

        this.getUser = function() { return user; };
       // this.isLoggedIn = function() { return loggedIn; };

        //signup
        this.signUp = function(username, password, success, error){
            $http.post('/api/user/create', {'username': username, 'password': password}).
                success(function(data) {
                    success(data);
                }).
                error(function(data) {
                    error(data);
                });
        };

        //login -- email/display name, password,
        this.login = function(username, password, success, error){
            $http.post('/api/user/login', {'username': username, 'password': password}).
                success(function(data) {
                    user = data;
                    loggedIn = true;
                    $rootScope.$broadcast('userLoggedIn');
					success(data);
                }).
                error(function(data) {
                    error(data);
                });

        };

        this.checkSession = function(success, error){
            $http.get('/api/user/checkSession').
                success(function(data) {
                    loggedIn = true;
					user = data;
                    success(data);
                }).
                error(function(data) {
                    error(data);
                });

        };

		this.logout = function(success, error) {
			$http.get('/api/user/logout').
				success(function(data) {
                    user = false;
                    loggedIn = false;
					success(data);
				}).
				error(function(data) {
					error(data);
				});
		};


		this.deleteLoggedIn = function(success, error) {
			$http.get('/api/user/delete').
				success(function(data) {
					success(data);
				}).
				error(function(data) {
					error(data);
				});
		};

}]);
