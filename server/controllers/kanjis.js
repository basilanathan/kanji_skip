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
        var randomNumber = Math.floor(Math.random() * 8131) + 1;
        Kanji.findOne({kanji_id: randomNumber}, function(err, kanji) {
            if (err) {
                res.json(err);
            } else {
                res.json(kanji);
            }
        });
    },
    showRandom2: function(req, res) {
        var randomNumber = Math.floor(Math.random() * 2839) + 8131;
        Kanji.findOne({kanji_id: randomNumber}, function(err, kanji) {
            if (err) {
                res.json(err);
            } else {
                res.json(kanji);
            }
        });
    },
    showRandom3: function(req, res) {
        var randomNumber = Math.floor(Math.random() * 907) + 10971;
        Kanji.findOne({kanji_id: randomNumber}, function(err, kanji) {
            if (err) {
                res.json(err);
            } else {
                res.json(kanji);
            }
        });
    },
    showRandom4: function(req, res) {
        var randomNumber = Math.floor(Math.random() * 279) + 11879;
        Kanji.findOne({kanji_id: randomNumber}, function(err, kanji) {
            if (err) {
                res.json(err);
            } else {
                res.json(kanji);
            }
        });
    },
};
