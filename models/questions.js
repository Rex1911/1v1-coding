var mongoose = require("mongoose");

var questionSchema = new mongoose.Schema({
	question: String,
	inFormat: String,
	outFormat: String,
	exInput: String,
	exOutput: String,
	qnumber : Number,
    testCase : Array,
	testAns : Array,
    pvtCase : Array,
	pvtAns : Array
});

module.exports = mongoose.model("Question", questionSchema);
