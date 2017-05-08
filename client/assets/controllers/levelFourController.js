myApp.controller('levelFourController', ['$scope', '$route', 'kanjiFactory', function ($scope, $route, kanjiFactory) {
    $scope.kanji = {};
    $scope.kanjis = [];

    kanjiFactory.showRandom(function(data) {
    	$scope.kanji = data;
    });
    $scope.checkKanji = function(kanji){
        if(kanji === $scope.kanji.literal){
            console.log("It's a matching kanji.")
            $route.reload();
        }
    }

    $scope.checkAnswer = function() {
    	if ($scope.answer1 !== $scope.kanji.p1) {
    		alert("Skip code 1 incorrect, try again.");
    	} else if ($scope.answer2 !== $scope.kanji.p2) {
    		alert("Skip code 2 incorrect, try again.");
    	} else if ($scope.answer3 !== $scope.kanji.p3) {
    		alert("Skip code 3 incorrect, try again.")
    	} else {
    		alert("You got it correct, good job!");
    		kanjiFactory.showSKIP($scope.kanji.skipcode, function(data) {
                $scope.kanjis = data;
            })
    	}
    };
}]);
