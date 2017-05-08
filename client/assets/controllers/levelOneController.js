myApp.controller('levelOneController', ['$scope', '$route', 'kanjiFactory', function ($scope, $route, kanjiFactory) {
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
