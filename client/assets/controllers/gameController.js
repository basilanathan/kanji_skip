myApp.controller('gameController', ['$scope', '$route', '$location', 'kanjiFactory', 'highscoreFactory', function ($scope, $route, $location, kanjiFactory, highscoreFactory) {
    console.log("gameController")
    $scope.kanji = {};
    $scope.kanjis = [];
    $scope.gamestate = true;
    $scope.score = 0;
    $scope.startGame = function(){
        setTimeout(function(){
            $scope.gamestate = false;
            var name = prompt("Please enter your name", "Anonymous");
            var newScore = {name: name, score: $scope.score};
            highscoreFactory.newScore(newScore, function() { $location.url('/scores') })
        }, 60000);
        kanjiFactory.showRandom(function(data) {
        	$scope.kanji = data;
        });
    }

    $scope.checkKanji = function(kanji){
        if(!$scope.gamestate){
            alert("Game is over")
        } else if(kanji === $scope.kanji.literal){
            console.log("It's a matching kanji.")
            $scope.score += 1;
            $scope.kanjis = [];
            kanjiFactory.showRandom(function(data) {
            	$scope.kanji = data;
            });
        }
    }

    $scope.checkAnswer = function() {
        if(!$scope.gamestate){
            alert("Game is over")
        } else if ($scope.answer1 !== $scope.kanji.p1) {
    		alert("Skip code 1 incorrect, try again.");
    	} else if ($scope.answer2 !== $scope.kanji.p2) {
    		alert("Skip code 2 incorrect, try again.");
    	} else if ($scope.answer3 !== $scope.kanji.p3) {
    		alert("Skip code 3 incorrect, try again.")
    	} else {
    		// alert("You got it correct, good job!");
    		kanjiFactory.showSKIP($scope.kanji.skipcode, function(data) {
                $scope.kanjis = data;
            })
    	}
    };
}]);
