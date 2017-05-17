myApp.controller('dictionaryController', ['$scope', 'kanjiFactory', function ($scope, kanjiFactory) {
    var all_kanji = [];
    $scope.kanji = {};
    $scope.searchTerms = "";
    $scope.foundKanjis = [];

    kanjiFactory.getAllKanjis(function(data) {
        //: Convert frequency from JSON to Float for ordering
        angular.forEach(data, function(value, key) {
            if (value.frequency === "unranked") {
                value.frequency = 99999;
            }
            value.frequency = parseFloat(value.frequency);
        });
        all_kanji = data;
    });

    $scope.search = function() {
        var skipFilter = $scope.searchTerms.split('-');
        // console.log(skipFilter);
        if (skipFilter.length === 1) {
            var foundArr = [];
            for (var i = 0; i < all_kanji.length; i++) {
                if (all_kanji[i].p1 === skipFilter[0]) {
                    foundArr.push(all_kanji[i]);
                }
            }
            $scope.foundKanjis = foundArr;
        } else if (skipFilter.length === 2) {
            if (skipFilter[1] !== "") {
                var foundArr = [];
                for (var i = 0; i < all_kanji.length; i++) {
                    if (all_kanji[i].p1 === skipFilter[0] && all_kanji[i].p2 === skipFilter[1]) {
                        foundArr.push(all_kanji[i]);
                    }
                }
                $scope.foundKanjis = foundArr;
            }
        } else if (skipFilter.length === 3) {
            if (skipFilter[2] !== "") {
                var foundArr = [];
                for (var i = 0; i < all_kanji.length; i++) {
                    if (all_kanji[i].p1 === skipFilter[0] && all_kanji[i].p2 === skipFilter[1] && all_kanji[i].p3 === skipFilter[2]) {
                        foundArr.push(all_kanji[i]);
                    }
                }
                $scope.foundKanjis = foundArr;
            }
        } else {
            $scope.foundKanjis = [];
        }
    }
}]);
