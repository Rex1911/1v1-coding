const Question = require("./models/questionsModel");

let data = [
    {
        question: "Add the two given numbers",
        noOfTestCases: 2,
        testCases: ["10 20", "100 200"],
        testCasesAnswer: ["30", "300"],
        noOfPrivateCases: 15,
        privateCases: ["6 13","83 3", "9 2", "18 0", "99 1","1 1","4 1","8 2","100 8","54 2","12 1","9253 1","23 1","98 3","43 2"],
        privateCasesAnswer: ["19","86","11","18","100","2","5","10","108","56","13","9254","24","101","45"]
    },
    {
        question: "Subtract the two given numbers",
        noOfTestCases: 2,
        testCases: ["10 20", "200 100"],
        testCasesAnswer: ["-10", "100"],
        noOfPrivateCases: 5,
        privateCases: ["6 13","83 3", "9 2", "18 0", "99 1"],
        privateCasesAnswer: ["-7","80","7","18","98"]
    },
    {
        question: "Multiplay the two given numbers",
        noOfTestCases: 2,
        testCases: ["10 20", "200 100"],
        testCasesAnswer: ["200", "20000"],
        noOfPrivateCases: 5,
        privateCases: ["6 13","83 3", "9 2", "18 0", "99 1"],
        privateCasesAnswer: ["78","249","18","0","99"]
    }
];

function seedDB() {
    Question.remove({}, (err) => {
        if(err) {
            console.log(err);
        } else {
            console.log("Cleared the DB");
        }
    });
    
    data.forEach((seed) => {
        Question.create(seed, (err,question) => {
            if(err) {
                console.log(err);
            } else {
                console.log("Question added");
            }
        }); 
    });
}

module.exports = seedDB;