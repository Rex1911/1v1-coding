const runUrl = "https://api.judge0.com/submissions/?base64_encoded=false&wait=true";
const roomID = $("#roomID").text();

let compilerLang = 4;
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
    if($("#langSelector option:selected").text() == "C") {
        compilerLang = 4;
    } else if ($("#langSelector option:selected").text() == "CPP") {
        compilerLang = 10;
    } else if ($("#langSelector option:selected").text() == "CSHARP") {
        compilerLang = 16;
    } else if ($("#langSelector option:selected").text() == "Java") {
        compilerLang = 26;
    } else if ($("#langSelector option:selected").text() == "Python") {
        compilerLang = 34;
    }
}

$("#run_btn").click(() => {
    $("#run_message").html("");
    let source = editor.getValue();
    
    //Looping through each test case
    for(let i=0;i<questionData.noOfTestCases;i++) {
        let data = {
            source_code: source,
            language_id: compilerLang,
            stdin: questionData.testCases[i]
        };
        $.ajax({
            type: "POST",
            url: runUrl,
            async: true,
            contentType: "application/json",
            data: JSON.stringify(data)
        })
        .done((data, textStatus, jqXHR) => {
            // The output for python and java is not formatted correctly, this hack fixes it. It removes the space that appends at the end.
            // if(data.status.id == 3) {
            //     if(compilerLang == 34 || compilerLang == 26) {
            //         data.stdout = data.stdout.slice(0, -1);
            //     }
            // }
            
            if(data.status.id != 3) {
                $("#run_message").html("");
                $("#run_message").text(`${data.compile_output}`);
            } else if(data.status.id == 3 && data.stdout.replace(/(\r\n\t|\n|\r\t)/gm,"") == questionData.testCasesAnswer[i]) {
                $("#run_message").append(`Test case ${i+1} passed<br>`);
            } else {
                 $("#run_message").append(`Test case ${i+1} failed<br>`);
            }
            console.log(data.stdout.replace(/(\r\n\t|\n|\r\t)/gm,""));
        });
    }
});

$("#submit_btn").click(() => {
    let noRightAnswers = 0;
    $("#submit_message").html("");
    let source = editor.getValue();
    
    //Looping through each test case
    for(let i=0;i<questionData.noOfPrivateCases;i++) {
        let data = {
            source_code: source,
            language_id: compilerLang,
            stdin: questionData.privateCases[i]
        };
        
        $.ajax({
            type: "POST",
            url: runUrl,
            async: true,
            contentType: "application/json",
            data: JSON.stringify(data)
        })
        .done((data, textStatus, jqXHR) => {
            // The output for python and java is not formatted correctly, this hack fixes it. It removes the space that appends at the end.
            // if(compilerLang == 34 || compilerLang == 26) {
            //     data.stdout = data.stdout.slice(0, -1);
            // }
            
            if(data.status.id != 3) {
                $("#submit_message").html("");
                $("#submit_message").html(`${data.compile_output} <br>`);
            } else if(data.status.id == 3 && data.stdout.replace(/(\r\n\t|\n|\r\t)/gm,"") == questionData.privateCasesAnswer[i]) {
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

