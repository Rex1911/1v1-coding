const mongoose = require('mongoose');

const questionsSchema = mongoose.Schema({
    question: String,
    noOfTestCases: Number,
    testCases: [String],
    testCasesAnswer: [String],
    noOfPrivateCases: Number,
    privateCases: [String],
    privateCasesAnswer: [String]
});

module.exports = mongoose.model("Question", questionsSchema);