myApp.controller('levelFourController', ['$scope', '$route', 'kanjiFactory', function ($scope, $route, kanjiFactory) {
    $scope.kanji = {};
    $scope.kanjis = [];

    kanjiFactory.showRandom(function(data) {
    	$scope.kanji = data;
    });

    $scope.checkKanji = function($index, kanji){
        if(kanji === $scope.kanji.literal){
            alert("Correct kanji selected.");
            $route.reload();
        } else {
            angular.element(`#${$index}`).css('background-color', 'red');
        }
    }

    $scope.checkAnswer = function() {
    	if ($scope.answer1 !== $scope.kanji.p1) {
    		alert("SKIP code 1 incorrect, try again.");
    	} else if ($scope.answer2 !== $scope.kanji.p2) {
    		alert("SKIP code 2 incorrect, try again.");
    	} else if ($scope.answer3 !== $scope.kanji.p3) {
    		alert("SKIP code 3 incorrect, try again.")
    	} else {
    		alert("SKIP code is correct. Good job!");
    		kanjiFactory.showSKIP($scope.kanji.skipcode, function(data) {
                $scope.kanjis = data;
            })
    	}
    };
}]);
