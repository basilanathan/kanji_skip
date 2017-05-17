var myApp = angular.module('myApp', ['ngRoute']);

//  use the config method to set up routing:
myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
        templateUrl: 'partials/home.html',
    })
    .when('/dictionary', {
        templateUrl: 'partials/dictionary.html',
        controller: 'dictionaryController'
    })
    .when('/lvl_1', {
    	templateUrl: 'partials/level_one.html',
    	controller: 'levelOneController'
    })
    .when('/lvl_2', {
    	templateUrl: 'partials/level_two.html',
    	controller: 'levelTwoController'
    })
    .when('/lvl_3', {
    	templateUrl: 'partials/level_three.html',
    	controller: 'levelThreeController'
    })
    .when('/lvl_4', {
    	templateUrl: 'partials/level_four.html',
    	controller: 'levelFourController'
    })
    .when('/game', {
    	templateUrl: 'partials/game.html',
    	controller: 'gameController'
    })
    .when('/scores', {
    	templateUrl: 'partials/scores.html',
    	controller: 'highscoresController'
    })
    .when('/feedback', {
        templateUrl: 'partials/feedback.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
