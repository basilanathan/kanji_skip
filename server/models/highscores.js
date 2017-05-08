//: Require mongoose
var mongoose = require('mongoose');
//: Create Schema
var HighscoreSchema = new mongoose.Schema({
    name : { type: String },
    score : { type: Number },
    created_at : { type: Date, default: Date.now },
    updated_at : { type: Date, default: Date.now }
})
//: Register schema as a model
var Highscore = mongoose.model('Highscore', HighscoreSchema);
