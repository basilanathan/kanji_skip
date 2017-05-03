myApp.controller('levelThreeController', ['$scope', 'kanjiFactory', function ($scope, kanjiFactory) {
    //: This is to check if kanji character is rendered on HTML -- it does
    $scope.kanji = {};
    
    kanjiFactory.showRandom(function(data) {
    	$scope.kanji = data;
    });
}]);
