const runUrl = "https://coding-one-v-one-rex1911.c9users.io/compile";
const roomID = $("#roomID").text();

let compilerLang = "C";
let questionData = {};

$("#gameOverModal").hide();
$("#waitingModal").show();
$("#roomID").hide();

//When we recieve the start event, hide the modal as well as catch the question data.
socket.on("start", (data) => {
    $("#waitingModal").hide();
    questionData = data[0];
    $("#question").text(questionData.question);
});

socket.on("lost", ()=> {
    $("#gameOverContent").text("Loser");
    $("#gameOverModal").show();
});


// Function to change the language of ace editor
function changeAceLang() {
    let langCode = $("#langSelector").val();
    editor.session.setMode("ace/mode/" + langCode);
    compilerLang = $("#langSelector option:selected").text().toUpperCase();
}

$("#run_btn").click(() => {
    $("#run_message").html("");
    let source = editor.getValue();
    
    //Looping through each test case
    for(let i=0;i<questionData.noOfTestCases;i++) {
        $.ajax({
            method: "POST",
            url: runUrl,
            data: {
                async: 0,
                source: source,
                lang: compilerLang,
                input: questionData.testCases[i],
                time_limit: 10
            }
        })
        .done((data) => {
            // The output for python and java is not formatted correctly, this hack fixes it. It removes the space that appends at the end.
            if(compilerLang == "PYTHON" || compilerLang == "JAVA") {
                data.stdout = data.stdout.slice(0, -1);
            }
            
            if(data.stderr != "") {
                $("#run_message").html("");
                $("#run_message").html(`${data.stderr} <br>`);
            } else if(data.stdout == questionData.testCasesAnswer[i]) {
                $("#run_message").append(`Test case ${i+1} passed<br>`);
            } else {
                 $("#run_message").append(`Test case ${i+1} failed<br>`);
            }
            console.log(data);
        });
    }
});

$("#submit_btn").click(() => {
    let noRightAnswers = 0;
    $("#submit_message").html("");
    let source = editor.getValue();
    
    //Looping through each test case
    for(let i=0;i<questionData.noOfPrivateCases;i++) {
        $.ajax({
            method: "POST",
            url: runUrl,
            data: {
                async: 0,
                source: source,
                lang: compilerLang,
                input: questionData.privateCases[i],
                time_limit: 10
            }
        })
        .done((data) => {
            // The output for python and java is not formatted correctly, this hack fixes it. It removes the space that appends at the end.
            if(compilerLang == "PYTHON" || compilerLang == "JAVA") {
                data.stdout = data.stdout.slice(0, -1);
            }
            
            if(data.stderr != "") {
                $("#submit_message").html("");
                $("#submit_message").html(`${data.stderr} <br>`);
            } else if(data.stdout == questionData.privateCasesAnswer[i]) {
                $("#submit_message").append(`Private case ${i+1} passed<br>`);
                noRightAnswers++;
                if(noRightAnswers == questionData.noOfPrivateCases) {
                    console.log("Winner");
                    socket.emit("gameOver",roomID);
                    $("#gameOverContent").text("Winner");
                    $("#gameOverModal").show();
                }
            } else {
                $("#submit_message").append(`Private case ${i+1} failed<br>`);
            }
            console.log(data);
        });
    }
});

