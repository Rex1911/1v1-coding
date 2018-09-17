const Question = require("./models/questionsModel");

let data = [
    {
        question: "Add the two given numbers",
        noOfTestCases: 2,
        testCases: ["10\n20", "100\n200"],
        testCasesAnswer: ["30", "300"],
        noOfPrivateCases: 15,
        privateCases: ["6\n13","83\n3", "9\n2", "18\n0", "99\n1","1\n1","4\n1","8\n2","100\n8","54\n2","12\n1","9253\n1","23\n1","98\n3","43\n2"],
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