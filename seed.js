const Question = require("./models/questionsModel");

let data = [
    {
        question: "Add the two given numbers",
        noOfTestCases: 2,
        testCases: ["2\n10 20\n100 200"],
        testCasesAnswer: ["30", "300"],
        noOfPrivateCases: 5,
        privateCases: ["5\n1 2\n3 4\n5 5\n100 100\n799 1"],
        privateCasesAnswer: ["3","7","10","200","800"]
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
    },
    {
        question:"CodeChef",
        noOfTestCases: 2,
        testCases: ["3\n1 2 3","3\n1 2 1"],
        testCasesAnswer: ["4","3"],
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