//: Require mongoose
var mongoose = require('mongoose');
//: Retrieve schema from models
var Kanji = mongoose.model('Kanji');

module.exports = {
    showRandom: function(req, res) {
        var randomNumber = Math.floor(Math.random() * 12158) + 1;
        Kanji.findOne({kanji_id: randomNumber}, function(err, kanji) {
            if (err) {
                res.json(err);
            } else {
                res.json(kanji);
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
    showSKIP: function(req, res) {
        var skip = req.params.skip;
        Kanji.find({skipcode: skip}, function(err, kanjis) {
            if (err) {
                res.json(err);
            } else {
                res.json(kanjis);
            }
        });
    },

};
