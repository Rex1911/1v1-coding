const runUrl = "https://api.judge0.com/submissions/?base64_encoded=false&wait=true";
const roomID = $("#roomID").text();

let time = 0;
let timeId; //Variable to hold the value of the id returned by setInterval()
let totalTimeId; //Variable to hold the value of the id returned by setTimeout() 
let timeOn = false;
let compilerLang = 4; 
let questionData = {};
let maxRight = 0; //Tracks the number of correct answers

$("#waitingModal").show();
$("#gameOverModal").hide();
$("#roomID").hide();

//When we recieve the start event, hide the modal as well as catch the question data and start the timer.
socket.on("start", (data) => {
    $("#waitingModal").hide();
    questionData = data.question[0];
    console.log(questionData.privateCases);
    $("#question").html(questionData.question);
    console.log(data.totalTime);
    if(timeOn==false) {
        timeId = setInterval(() => {
            time++;
            let min = Math.floor(time/60);
            let sec = time%60;
            $(".timer").text(`${min}m ${sec}s`);
        },1000);
        timeOn=true;
    }
    totalTimeId = setTimeout(()=>{
        $("#gameOverContent").html("Time's Up<br>Right Answers: " + maxRight);
        $("#gameOverModal").show();
        clearInterval(timeId);
    },data.totalTime*60000);
});

socket.on("lost", ()=> {
    $("#gameOverContent").text("Times up");
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
            let error_string;
            if(data.stderr != null) {
                let error_string_newline = data.stderr.replace(/(\r\n\t|\n|\r\t)/gm,"<br>");                                    
                error_string = error_string_newline.replace(/\s/gm,"&nbsp");
            } else {
                error_string = "Runtime error. Check for errors in code"
            }
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
            let output_string_newline = data.stdout.replace(/(\r\n\t|\n|\r\t)/gm,"<br>");                                    
            let output_string = output_string_newline.replace(/\s/gm,"&nbsp");
            $("#output").html(`${output_string}`);
            //------------------UNCOMMENT THE BELOW LINE AND COMMENT THE ABOVE LINES IN PRODUCTION VERSION----------------------
            //$("#output").append("No output presented for private cases");
            let answers = data.stdout.split("\n");
            for(let i=0;i<questionData.noOfPrivateCases;i++) {
                if(answers[i] == questionData.privateCasesAnswer[i]) {
                    $("#run_message").append(`Private case ${i+1} <span class="green-text">passed</span><br>`);
                    noRightAnswers++;
                    if(noRightAnswers == questionData.noOfPrivateCases) {
                        clearInterval(timeId);
                        clearTimeout(totalTimeId);
                        socket.emit("gameOver",roomID);
                        let min = Math.floor(time/60);
                        let sec = time%60;
                        $("#gameOverContent").html(`All private cases passed<br>Time: ${min}m ${sec}s`);
                        $("#gameOverModal").show();
                    }
                } else {
                    $("#run_message").append(`Private case ${i+1} <span class="red-text">failed</span><br>`);
                }
            }
            // Updates maxRight if the current submissions has more right answers
            if(noRightAnswers>maxRight){
                maxRight = noRightAnswers;
            }
        } else if(data.status.id == 6) {
            $("#run_message").html("");
            let error_string_newline = data.compile_output.replace(/(\r\n\t|\n|\r\t)/gm,"<br>");                                    
            let error_string = error_string_newline.replace(/\s/gm,"&nbsp");
            $("#run_message").html(`${error_string}`);
        } else if (data.status.id >=7 && data.status.id <=12) {
            $("#run_message").html("");
            let error_string;
            if(data.stderr != null) {
                let error_string_newline = data.stderr.replace(/(\r\n\t|\n|\r\t)/gm,"<br>");                                    
                error_string = error_string_newline.replace(/\s/gm,"&nbsp");
            } else {
                error_string = "Runtime error. Check for errors in code"
            }
            $("#run_message").html(`${error_string}`);
        }
        console.log(data);
    });
});
//Code to disable rightclick
$(document).bind("contextmenu",function(e){
   return false;
 });