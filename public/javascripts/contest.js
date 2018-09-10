const compileUrl = "https://api.hackerearth.com/v3/code/compile/";
const runUrl = "https://coding-one-v-one-rex1911.c9users.io/compile";
const client_secret = "b76e2532fdf6fc07e6fb1cdd6e1331f9774244bb";
const roomID = $("#roomID").text();

let compilerLang = "C";
let questionData = {};

//When we recieve the start event, hide the modal as well as catch the question data.
socket.on("start", (data) => {
    $("#waitingModal").hide();
    questionData = data[0];
    $("#question").text(questionData.question);
});

socket.on("lost", ()=> {
    console.log("You lost!"); 
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
                client_secret: client_secret,
                async: 0,
                source: source,
                lang: compilerLang,
                input: questionData.testCases[i],
                time_limit: 10
            }
        })
        .done((data) => {
            if(data.stderr != "") {
                $("#submit_message").html("");
                $("#run_message").html(`${data.stderr} <br>`);
            } else if(data.stdout == questionData.testCasesAnswer[i]) {
                $("#run_message").append(`Test case ${i+1} passed<br>`);
            } else {
                 $("#run_message").append(`Private case ${i+1} failed<br>`);
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
                client_secret: client_secret,
                async: 0,
                source: source,
                lang: compilerLang,
                input: questionData.privateCases[i],
                time_limit: 10
            }
        })
        .done((data) => {
            if(data.stderr != "") {
                $("#submit_message").html("");
                $("#submit_message").html(`${data.stderr} <br>`);
            } else if(data.stdout == questionData.privateCasesAnswer[i]) {
                $("#submit_message").append(`Private case ${i+1} passed<br>`);
                noRightAnswers++;
                if(noRightAnswers == questionData.noOfPrivateCases) {
                    console.log("Winner");
                    socket.emit("gameOver",roomID);
                }
            } else {
                $("#submit_message").append(`Private case ${i+1} failed<br>`);
            }
            console.log(data);
        });
    }
});

