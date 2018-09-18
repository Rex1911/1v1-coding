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
            
            
            /* ID 3 = Successful Compilation
               ID 6 = Compilation Error
               ID 7-12 = Runtime Error */
            if(data.status.id == 3) {
                if(data.stdout.replace(/(\r\n\t|\n|\r\t)/gm,"") == questionData.testCasesAnswer[i]) {
                   $("#run_message").append(`Test case ${i+1} <span class="green-text">passed</span><br>`); 
                } else {
                    $("#run_message").append(`Test case ${i+1} <span class="red-text">failed</span><br>`);
                }
            } else if(data.status.id == 6) {
                $("#run_message").html("");
                let error_string_newline = data.compile_output.replace(/(\r\n\t|\n|\r\t)/gm,"<br>");                                    
                let error_string = error_string_newline.replace(/\s/gm,"&nbsp");
                $("#run_message").html(`${error_string}`);
            } else if (data.status.id >=7 && data.status.id <=12) {
                $("#run_message").html("");
                let error_string_newline = data.stderr.replace(/(\r\n\t|\n|\r\t)/gm,"<br>");                                    
                let error_string = error_string_newline.replace(/\s/gm,"&nbsp");
                $("#run_message").html(`${error_string}`);
            }
            console.log(data);
        });
    }
});

$("#submit_btn").click(() => {
    let noRightAnswers = 0;
    $("#run_message").html("");
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
            
            
            
            /* ID 3 = Successful Compilation
               ID 6 = Compilation Error
               ID 7-12 = Runtime Error */
            if(data.status.id == 3) {
                if(data.stdout.replace(/(\r\n\t|\n|\r\t)/gm,"") == questionData.privateCasesAnswer[i]) {
                    $("#run_message").append(`Private case ${i+1} <span class="green-text">passed</span><br>`);
                    noRightAnswers++;
                    if(noRightAnswers == questionData.noOfPrivateCases) {
                        console.log("Winner");
                        socket.emit("gameOver",roomID);
                        $("#gameOverContent").text("Winner");
                        $("#gameOverModal").show();
                    }
                } else {
                    $("#run_message").append(`Private case ${i+1} <span class="green-text">failed</span><br>`);
                }
            } else if(data.status.id == 6) {
                $("#run_message").html("");
                let error_string_newline = data.compile_output.replace(/(\r\n\t|\n|\r\t)/gm,"<br>");                                    
                let error_string = error_string_newline.replace(/\s/gm,"&nbsp");
                $("#run_message").html(`${error_string}`);
            } else if (data.status.id >=7 && data.status.id <=12) {
                $("#run_message").html("");
                let error_string_newline = data.stderr.replace(/(\r\n\t|\n|\r\t)/gm,"<br>");                                    
                let error_string = error_string_newline.replace(/\s/gm,"&nbsp");
                $("#run_message").html(`${error_string}`);
            }
            console.log(data);
        });
    }
});

