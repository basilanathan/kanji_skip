//: Require mongoose
var mongoose = require('mongoose');
//: Retrieve schema from models
var Kanji = mongoose.model('Kanji');

module.exports = {
    showRandom: function(req, res) {
        Kanji.find({}, function(err, kanjis) {
            if (err) {
                res.json(err);
            } else {
                var randomNumber = Math.floor(Math.random() * kanjis.length);
                console.log(kanjis.length, "the length of this")
                res.json(kanjis[randomNumber]);
            }
        });
    },
    showRandom1: function(req, res) {
        Kanji.find({p1: "1"}, function(err, kanjis) {
            if (err) {
                res.json(err);
            } else {
                var randomNumber = Math.floor(Math.random() * kanjis.length);
                res.json(kanjis[randomNumber]);
            }
        });
    },
    showRandom2: function(req, res) {
        Kanji.findOne({literal: '塩'}, function(err, kanjis) {
            if (err) {
                res.json(err);
            } else {
                res.json(kanjis);
            }
        });
    },
};