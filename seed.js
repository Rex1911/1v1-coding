const Question = require("./models/questionsModel");

let data = [
    {
        question: "Add the two given numbers",
        title: "Add",
        noOfTestCases: 2,
        testCases: ["2\n10 20\n100 200"],
        testCasesAnswer: ["30", "300"],
        noOfPrivateCases: 5,
        privateCases: ["5\n1 2\n3 4\n5 5\n100 100\n799 1"],
        privateCasesAnswer: ["3","7","10","200","800"]
    },
    {
        question: "Subtract the two given numbers",
        title: "Subtract",
        noOfTestCases: 2,
        testCases: ["10 20", "200 100"],
        testCasesAnswer: ["-10", "100"],
        noOfPrivateCases: 5,
        privateCases: ["6 13","83 3", "9 2", "18 0", "99 1"],
        privateCasesAnswer: ["-7","80","7","18","98"]
    },
    {
        question: "Multiplay the two given numbers",
        title: "Multiply",
        noOfTestCases: 2,
        testCases: ["10 20", "200 100"],
        testCasesAnswer: ["200", "20000"],
        noOfPrivateCases: 5,
        privateCases: ["6 13","83 3", "9 2", "18 0", "99 1"],
        privateCasesAnswer: ["78","249","18","0","99"]
    },
    {
        question:"<div id=\"DIV_1\">\n\t <span id=\"SPAN_2\">All submissions for this problem are available.<\/span>\n\t<p id=\"P_3\">\n\t\tJohnny needs to make a rectangular box for his physics class project. He has bought P cm of wire and S cm<sup id=\"SUP_4\">2<\/sup> of special paper. He would like to use all the wire (for the 12 edges) and paper (for the 6 sides) to make the box.\n\t<\/p>\n\t<p id=\"P_5\">\n\t\tWhat is the largest volume of the box that Johnny can make?\n\t<\/p>\n\t<h3 id=\"H3_6\">\n\t\tInput\n\t<\/h3>\n\t<p id=\"P_7\">\n\t\tThe first line contains t, the number of test cases (about 10). Then t test cases follow.\n\t<\/p>\n\t<p id=\"P_8\">\n\t\tEach test case contains two integers P and S in a line (1 ≤ P ≤ 40000, 1 ≤ S ≤ 20000). You may assume that there always exists an optimal solution for the given input cases.\n\t<\/p>\n\t<h3 id=\"H3_9\">\n\t\tOutput\n\t<\/h3>\n\t<p id=\"P_10\">\n\t\tFor each test case, print a real number that is the largest volume of the box that Johnny can make, rounded to two decimal places.\n\t<\/p>\n\t<h3 id=\"H3_11\">\n\t\tExample\n\t<\/h3>\n\t<pre id=\"PRE_12\"><b class=\" mathjax-support\" id=\"B_13\">Input:<\/b>\n2\n20 14\n20 16\n\n<b class=\" mathjax-support\" id=\"B_14\">Output:<\/b>\n3.00\n4.15\n\n<b class=\" mathjax-support\" id=\"B_15\">Output details<\/b>\nFirst case: the dimensions of the largest box may be 3, 1 and 1.\nSecond case: the dimensions of the largest box may be 7\/3, 4\/3 and 4\/3.\n\t<\/pre>\n<\/div>",
        title: "The Best Box",
        noOfTestCases: 2,
        testCases: ["2\n20 14\n20 16"],
        testCasesAnswer: ["3.00","4.15"],
        noOfPrivateCases: 7,
        privateCases: ["10\n4034 3521\n3952 19003\n7342 377\n613 44\n192 442\n2844 333\n3745 2356"],
        privateCasesAnswer: ["768.98","22956.16","4.84","0.79","268.13","9.75","370.79"]
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