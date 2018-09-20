const runUrl = "https://api.judge0.com/submissions/?base64_encoded=false&wait=true";
const roomID = $("#roomID").text();

let time = 0;
let timeId;
let compilerLang = 4;
let questionData = {};
let resultVisible = true;

$("#gameOverModal").hide();
$("#waitingModal").show();
$("#roomID").hide();
$("#output").hide();

//When we recieve the start event, hide the modal as well as catch the question data and start the timer.
socket.on("start", (data) => {
    $("#waitingModal").hide();
    questionData = data[0];
    $("#question").text(questionData.question);
    timeId = setInterval(() => {
        time++;
        let min = Math.floor(time/60);
        let sec = time%60;
        $(".timer").text(`${min}m ${sec}s`);
    },1000);
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
    let timer = 5;
    $("#run_btn").prop("disabled",true);
    $("#run_btn").text(timer);
    let id = setInterval(()=>{
        if(timer == 1) {
            $("#run_btn").text("Run");
            $("#run_btn").prop("disabled",false);
            clearInterval(id);
        } else {
            timer--;
            $("#run_btn").text(timer);
        }
    },1000);
    
    $("#run_message").html("");
    $("#output").html("");
    let source = editor.getValue();
    
    let data = {
        source_code: source,
        language_id: compilerLang,
        stdin: questionData.testCases[0]
    };
    
    $.ajax({
        type: "POST",
        url: runUrl,
        async: true,
        contentType: "application/json",
        data: JSON.stringify(data)
    })
    .done((data, textStatus, jqXHR) => {
        
        /* ID 3 = Successful Compilation
            ID 6 = Compilation Error
            ID 7-12 = Runtime Error */
        if(data.status.id == 3) {
            let output_string_newline = data.stdout.replace(/(\r\n\t|\n|\r\t)/gm,"<br>");                                    
            let output_string = output_string_newline.replace(/\s/gm,"&nbsp");
            $("#output").html(`${output_string}`);
            let answers = data.stdout.split("\n");
            for(let i=0;i<questionData.noOfTestCases;i++) {
                if(answers[i] == questionData.testCasesAnswer[i]) {
                    $("#run_message").append(`Test case ${i+1} <span class="green-text">passed</span><br>`);
                } else {
                    $("#run_message").append(`Test case ${i+1} <span class="red-text">failed</span><br>`);
                }
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
});

$("#submit_btn").click(() => {
    let timer = 5;
    $("#submit_btn").prop("disabled",true);
    $("#submit_btn").text(timer);
    let id = setInterval(()=>{
        if(timer == 1) {
            $("#submit_btn").text("Submit");
            $("#submit_btn").prop("disabled",false);
            clearInterval(id);
        } else {
            timer--;
            $("#submit_btn").text(timer);
        }
    },1000);
    
    let noRightAnswers = 0;
    $("#run_message").html("");
    $("#output").html("");
    let source = editor.getValue();
    
    let data = {
        source_code: source,
        language_id: compilerLang,
        stdin: questionData.privateCases[0]
    };
    
    $.ajax({
        type: "POST",
        url: runUrl,
        async: true,
        contentType: "application/json",
        data: JSON.stringify(data)
    })
    .done((data, textStatus, jqXHR) => {
        
        /* ID 3 = Successful Compilation
            ID 6 = Compilation Error
            ID 7-12 = Runtime Error */
        if(data.status.id == 3) {
            $("#output").append("No output presented for private cases");
            let answers = data.stdout.split("\n");
            for(let i=0;i<questionData.noOfPrivateCases;i++) {
                if(answers[i] == questionData.privateCasesAnswer[i]) {
                    $("#run_message").append(`Private case ${i+1} <span class="green-text">passed</span><br>`);
                    noRightAnswers++;
                    if(noRightAnswers == questionData.noOfPrivateCases) {
                        console.log("Winner");
                        clearInterval(timeId);
                        socket.emit("gameOver",roomID);
                        let min = Math.floor(time/60);
                        let sec = time%60;
                        $("#gameOverContent").html(`Winner<br>Time: ${min}m ${sec}s`);
                        $("#gameOverModal").show();
                    }
                } else {
                    $("#run_message").append(`Private case ${i+1} <span class="red-text">failed</span><br>`);
                }
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
});

$("#output_button").click(()=> {
    $("#output").toggle();
    $("#run_message").toggle();
    if(resultVisible == true) {
        resultVisible = false;
        $("#output_button").text("View Result");
        $(".result").text("Output");
    } else if(resultVisible == false) {
        resultVisible = true;
        $("#output_button").text("View Output");
        $(".result").text("Result");
    }
});