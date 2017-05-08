//: Require mongoose
var mongoose = require('mongoose');
//: Retrieve schema from models
var Highscore = mongoose.model('Highscore');

module.exports = {
    showScores: function(req, res) {
        Highscore.find({}, function(err, scores) {
            if (err) {
                res.json(err);
            } else {
                res.json(scores);
            }
        });
    },
    newScore: function(req, res) {
        newScore = new Highscore();
        newScore.name = req.body.name;
        newScore.score = req.body.score;
        newScore.save(function(err, score){
            if(!err){
                res.json(score);
            } else {
                res.json(err);
            }
        })
    }

};
