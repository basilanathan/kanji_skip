myApp.controller('levelOneController', ['$scope', '$route', 'kanjiFactory', function ($scope, $route, kanjiFactory) {
    //: This is to check if kanji character is rendered on HTML -- it does
    $scope.kanji = {};
    
    kanjiFactory.showRandom(function(data) {
    	$scope.kanji = data;
    });

    $scope.checkAnswer = function() {
    	if ($scope.answer === $scope.kanji.p1) {
    		alert("Great Job!");
    		$route.reload()
    	} else {
    		alert("Try again.");
    	}
    };
}]);
