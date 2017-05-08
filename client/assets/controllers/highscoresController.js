myApp.controller('highscoresController', ['$scope', '$route', 'highscoreFactory', function ($scope, $route, highscoreFactory) {
    //: This is to check if kanji character is rendered on HTML -- it does

    $scope.scores = [];
    highscoreFactory.showScores(function(data) {
        $scope.scores = data;
    });

}]);
