myApp.controller('levelTwoController', ['$scope', '$route', 'kanjiFactory', function ($scope, $route, kanjiFactory) {
    //: This is to check if kanji character is rendered on HTML -- it does
    $scope.kanji = {};
    
    kanjiFactory.showRandom(function(data) {
    	$scope.kanji = data;
    });

    $scope.checkAnswer = function() {
    	if ($scope.answer1 !== $scope.kanji.p1) {
    		alert("Skip code 1 incorrect, try again.");
    	} else if ($scope.answer2 !== $scope.kanji.p2) {
    		alert("Skip code 2 incorrect, try again."); 
    	} else if ($scope.answer3 !== $scope.kanji.p3) {
    		alert("Skip code 3 incorrect, try again.")
    	} else {
    		alert("You got it correct, good job!");
    		$route.reload();
    	}
    };
}]);
