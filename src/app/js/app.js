'use strict';


// Declare app level module which depends on filters, and services

var app = angular.module('myApp', ['myApp.filters', 'myApp.directives', 'myApp.services', 'myApp.controllers', 'ngCookies']);
 app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    // angular front end routes
    $routeProvider.when('/home', {templateUrl: '/partials/home.html'});
	$routeProvider.when('/loading', {templateUrl: '/partials/loading.html'});
    $routeProvider.when('/sign-in', {templateUrl: '/partials/sign-in.html'});
	//$routeProvider.when('/as1', {templateUrl: '/partials/app-settings1.html'});
	//$routeProvider.when('/as2', {templateUrl: '/partials/app-settings2.html'});
	//$routeProvider.when('/add-start', {templateUrl: '/partials/add-start.html'});
	//$routeProvider.when('/add-info', {templateUrl: '/partials/add-info.html'});
    //$routeProvider.when('/add-settings', {templateUrl: '/partials/add-settings.html'});
     $routeProvider.when('/system', {templateUrl: '/partials/system.html'});
     $routeProvider.when('/budget', {templateUrl: '/partials/budget.html'});
     $routeProvider.when('/event-calendar', {templateUrl: '/partials/event-calendar.html'});
     $routeProvider.when('/sensors', {templateUrl: '/partials/sensors.html'});
	
	//Locked out pages
    $routeProvider.when('/as1', {templateUrl: '/partials/app-settings1.html',
        resolve: {
            auth: function(user, $location){
                user.checkSession(
                    function(data) {
                    },
                    function(data) {
                        $location.path('/loading');
                    }
                );
            }
        }
    });
	$routeProvider.when('/as2', {templateUrl: '/partials/app-settings2.html',
        resolve: {
            auth: function(user, $location){
                user.checkSession(
                    function(data) {
                    },
                    function(data) {
                        $location.path('/loading');
                    }
                );
            }
        }
    });
	$routeProvider.when('/cs', {templateUrl: '/partials/controller-setup.html',
        resolve: {
            auth: function(user, $location){
                user.checkSession(
                    function(data) {
                    },
                    function(data) {
                        $location.path('/loading');
                    }
                );
            }
        }
    });
	$routeProvider.when('/add-start', {templateUrl: '/partials/add-start.html',
        resolve: {
            auth: function(user, $location){
                user.checkSession(
                    function(data) {
                    },
                    function(data) {
                        $location.path('/loading');
                    }
                );
            }
        }
    });
     $routeProvider.when('/add-info/', {templateUrl: '/partials/add-info.html',
         resolve: {
             auth: function(user, $location){
                 user.checkSession(
                     function(data) {
                     },
                     function(data) {
                         $location.path('/loading');
                     }
                 );
             }
         }
     });
	$routeProvider.when('/add-info/:serial', {templateUrl: '/partials/add-info.html',
        resolve: {
            auth: function(user, $location){
                user.checkSession(
                    function(data) {
                    },
                    function(data) {
                        $location.path('/loading');
                    }
                );
            }
        }
    });
    $routeProvider.when('/add-settings/:serial', {templateUrl: '/partials/add-settings.html',
        resolve: {
            auth: function(user, $location){
                user.checkSession(
                    function(data) {
                        console.log(data);
                        console.log('/add-settings');
                    },
                    function(data) {
                        $location.path('/loading');
                    }
                );
            }
        }
    });
    $routeProvider.when('/cl', {templateUrl: '/partials/controller-list.html',
         resolve: {
             auth: function(user, $location){
                 user.checkSession(
                     function(data) {
                     },
                     function(data) {
                         $location.path('/loading');
                     }
                 );
             }
         }
     });
     $routeProvider.when('/info/:serial', {templateUrl: '/partials/info.html',
         resolve: {
             auth: function(user, $location){
                 user.checkSession(
                     function(data) {
                     },
                     function(data) {
                         $location.path('/loading');
                     }
                 );
             }
         }
     });
     $routeProvider.when('/app-settings', {templateUrl: '/partials/app-settings.html',
         resolve: {
             auth: function(user, $location){
                 user.checkSession(
                     function(data) {
                     },
                     function(data) {
                         $location.path('/loading');
                     }
                 );
             }
         }
     });
     $routeProvider.when('/program/:serial', {templateUrl: '/partials/program.html',
         resolve: {
             auth: function(user, $location){
                 user.checkSession(
                     function(data) {
                     },
                     function(data) {
                         $location.path('/loading');
                     }
                 );
             }
         }
     });
	
    $routeProvider.otherwise({redirectTo: '/loading'});

	// fix to remove '#' from url strings in browser
	/*
		IE 10 is oldest IE that html5mode will work on
	*/
	$locationProvider.html5Mode(true);
  }]);

app.run(['$rootScope', '$location', 'user', function($rootScope, $location, user) {

}]);

//These need to be defined here in order for the module names to be succesfully reused
//All non-3rd party modules should be defined as angular.module('myApp.[type]').[type]
angular.module('myApp.services', []);
angular.module('myApp.filters', []);
angular.module('myApp.directives',[]);
angular.module('myApp.controllers', []);
