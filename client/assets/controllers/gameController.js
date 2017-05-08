myApp.controller('gameController', ['$scope', '$route', '$location', 'kanjiFactory', 'highscoreFactory', function ($scope, $route, $location, kanjiFactory, highscoreFactory) {
    $scope.kanji = {};
    $scope.kanjis = [];
    $scope.gamestate = false;
    $scope.score = 0;
    $scope.answer1 = "";
    $scope.answer2 = "";
    $scope.answer3 = "";

    $scope.startGame = function(){
        console.log('game started');  //: Checking if button works
        $scope.gamestate = true;
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

    $scope.checkKanji = function($index, kanji){
        if(!$scope.gamestate){
            alert("Game is over")
        } else if(kanji === $scope.kanji.literal){
            console.log("It's a matching kanji.")
            $scope.score += 1;
            $scope.kanjis = [];
            $scope.answer1 = "";
            $scope.answer2 = "";
            $scope.answer3 = "";
            kanjiFactory.showRandom(function(data) {
            	$scope.kanji = data;
            });
        } else {
            angular.element(`#${$index}`).css('background-color', 'red');
        }
    }

    $scope.checkAnswer = function() {
        // console.log($scope.answer1);
        // console.log($scope.answer2);
        // console.log($scope.answer3);
        if(!$scope.gamestate){
            alert("Game is over")
        } else if ($scope.answer1 !== $scope.kanji.p1) {
    		alert("SKIP number 1 incorrect, try again.");
    	} else if ($scope.answer2 !== $scope.kanji.p2) {
    		alert("Skip number 2 incorrect, try again.");
    	} else if ($scope.answer3 !== $scope.kanji.p3) {
    		alert("Skip number 3 incorrect, try again.")
    	} else {
    		// alert("You got it correct, good job!");
    		kanjiFactory.showSKIP($scope.kanji.skipcode, function(data) {
                $scope.kanjis = data;
            })
    	}
    };
}]);
