//: Kanji factory
myApp.factory('kanjiFactory', ['$http', function($http) {
    var factory = {};

    factory.showRandom = function(callback) {
        $http.get('/kanjis').then(function(jsonRes) {
            callback(jsonRes.data);
        });
    };

    factory.showRandom1 = function(callback) {
    		$http.get('/kanjis/level_one').then(function(jsonRes) {
    				callback(jsonRes.data);
    		});
    };

    factory.showRandom2 = function(callback) {
    		$http.get('/kanjis/level_two').then(function(jsonRes) {
    				callback(jsonRes.data);
    		});
    };

    factory.showRandom3 = function(callback) {
    		$http.get('/kanjis/level_three').then(function(jsonRes) {
    				callback(jsonRes.data);
    		});
    };
    factory.showRandom4 = function(callback) {
            $http.get('/kanjis/level_four').then(function(jsonRes) {
                    callback(jsonRes.data);
            });
    };
<<<<<<< HEAD
=======
    factory.showSKIP = function(skip, callback) {
            $http.get('/kanjis/' + skip).then(function(jsonRes) {
                    callback(jsonRes.data);
            });
    };

>>>>>>> cc64c16ec1924996931daa1bdbcb9a14aa68bed8

    //: Return the object
    return factory;
}]);