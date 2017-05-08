//: highscore factory
myApp.factory('highscoreFactory', ['$http', function($http) {
    var factory = {};

    factory.showScores = function(callback) {
        $http.get('/scores').then(function(jsonRes) {
            callback(jsonRes.data);
        });
    };
    factory.newScore = function(newScore, callback) {
        $http.post('/newscore', newScore).then(function(jsonRes) {
            callback();
        });
    };

    //: Return the object
    return factory;
}]);
