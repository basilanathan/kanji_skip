var myApp = angular.module('myApp', ['ngRoute']);

//  use the config method to set up routing:
myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'homeController'
    })
    .otherwise({
      redirectTo: '/'
    });
});
