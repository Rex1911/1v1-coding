var mongoose = require("mongoose");

var questionSchema = new mongoose.Schema({
	question: String,
	qnumber : Number,
    testCase : Number,
    pvtCase : Number
});

module.exports = mongoose.model("Question", questionSchema);
