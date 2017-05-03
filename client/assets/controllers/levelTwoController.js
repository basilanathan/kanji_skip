myApp.controller('levelTwoController', ['$scope', 'kanjiFactory', function ($scope, kanjiFactory) {
    //: This is to check if kanji character is rendered on HTML -- it does
    $scope.kanji = {};
    
    kanjiFactory.showRandom2(function(data) {
    	$scope.kanji = data;
    });
}]);
