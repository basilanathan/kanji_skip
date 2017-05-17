var kanjis = require('../controllers/kanjis.js');
var scores = require('../controllers/scores.js');

module.exports = function(app){
    app.get('/kanjis', function(req, res) {
        kanjis.showRandom(req, res);
    });
    app.get('/kanjis/all', function(req, res) {
        kanjis.getAllKanjis(req, res);
    });
    app.get('/kanjis/level_one', function(req, res) {
        kanjis.showRandom1(req, res);
    });
    app.get('/kanjis/level_two', function(req, res) {
        kanjis.showRandom2(req, res);
    });
    app.get('/kanjis/level_three', function(req, res) {
        kanjis.showRandom3(req, res);
    });
    app.get('/kanjis/level_four', function(req, res) {
        kanjis.showRandom4(req, res);
    });
    app.get('/scores', function(req, res) {
        scores.showScores(req, res);
    });
    app.post('/newscore', function(req, res) {
        scores.newScore(req, res);
    });
    app.get('/kanjis/:skip', function(req, res) {
        kanjis.showSKIP(req, res);
    })
};
