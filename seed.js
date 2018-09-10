const Question = require("./models/questionsModel");

let data = [
    {
        question: "Add the two given numbers",
        noOfTestCases: 2,
        testCases: ["10 20", "100 200"],
        testCasesAnswer: ["30", "300"],
        noOfPrivateCases: 5,
        privateCases: ["6 13","83 3", "9 2", "18 0", "99 1"],
        privateCasesAnswer: ["19","86","11","18","100"]
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