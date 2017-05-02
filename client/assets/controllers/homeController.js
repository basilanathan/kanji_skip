//: Controller for Home page
myApp.controller('homeController', ['$scope', 'kanjiFactory', function ($scope, kanjiFactory) {
    //: This is to check if kanji character is rendered on HTML -- it does
    $scope.kanji = {
        'literal' : "\u4e9c",
        'skipcode' : "P4-7-1",
        'p1' : "4",
        'p2' : "7",
        'p3' : "1"
    };


}]);
