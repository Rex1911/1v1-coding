var mongoose = require("mongoose");
var Question = require("./models/questions");

var Data = [
    {
        question : 'Addition of 4 given numbers',
        inFormat : '4 integers will be provided',
        outFormat : 'An integer',
        exInput: '1 2 3 4, 5 6 7 8',
        exOutput: '10, 26',
        qnumber : 1,
        testCase : ['1 2 3 4', '5 6 7 8'],
        testAns : ['10', '26'],
        pvtCase : ['20 30 40 50', '1 3 5 7'],
        pvtAns : ['140', '16']
    },
    {
        question : 'Addition of 3 given numbers',
        inFormat : '3 integers will be provided',
        outFormat : 'An integer',
        exInput: '1 2 3, 5 6 7',
        exOutput: '6, 18',
        qnumber : 2,
        testCase : ['1 2 3', '5 6 7'],
        testAns : ['6', '18'],
        pvtCase : ['20 30 40', '1 3 5'],
        pvtAns : ['90', '9']
    }
]

function seedDB(){
    Question.deleteMany({}, function(err){
        if(err){
            console.log("error");
        }
        for(let i=0; i<Data.length; i++){
            Question.create(Data[i], function(err, newQuestion){
                if(err){
					console.log("Error 2");
				}
            })
        }
    })
}

module.exports = seedDB;
