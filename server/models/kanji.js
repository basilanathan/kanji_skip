//: Require mongoose
var mongoose = require('mongoose');
//: Create Schema
var KanjiSchema = new mongoose.Schema({
    literal : { type: String },
    skipcode : { type: String },
    p1 : { type: String },
    p2 : { type: String },
    p3 : { type: String },
    //: Maybe add fields for radicals / partials and meaning
    created_at : { type: Date, default: Date.now },
    updated_at : { type: Date, default: Date.now }
})
//: Register schema as a model
var Kanji = mongoose.model('Kanji', KanjiSchema);


// var tagSchema = {
// 	characters: [x amount of kanji],
//	definition of characters: String
// 	//what you're actually tagging (title/page/whatnots)
// }