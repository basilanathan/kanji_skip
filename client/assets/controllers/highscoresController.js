myApp.controller('highscoresController', ['$scope', '$route', 'highscoreFactory', function ($scope, $route, highscoreFactory) {
    $scope.scores = [];
    highscoreFactory.showScores(function(data) {
        $scope.scores = data;
    });
}]);
