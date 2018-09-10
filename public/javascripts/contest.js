socket.on("start", () => {
    $("#waitingModal").hide();
});

var language = "c_cpp";
var compilerLang = "C";
var select = document.querySelector("select");

$("select").change(function(){
    language = select.value;
    editor.session.setMode("ace/mode/" + language);
    compilerLang= $("#langDropDown option:selected").text().toUpperCase();
});

var compilerMessage = document.querySelector("#compilerMessage");
var compileURL = "http://api.hackerearth.com/code/compile/";
var compileBtn = document.querySelector("#compileBtn");
var clientID = "dc91e9b2f98a6d63fea90bac6c3fa2150e5622960183.api.hackerearth.com";
var secretKey = "f00ebd4cdc942aa27b5a5dd8d4fd86bc586b5283";
var code = editor.getValue();
var runBtnTest = document.querySelector("#runBtnTest");
compileBtn.addEventListener("click", function(){
    var text = editor.getValue();
    $.ajax({
        method: "POST",
        url: compileURL,
        data : {
            'client_secret': secretKey,
            'async': 0,
            'source': text,
            'lang': compilerLang,
            'time_limit': 5,
            'memory_limit': 262144,
        }
    }).done(function(result){
        console.log(result);
        compilerMessage.innerHTML = result.compile_status;
        if(result.compile_status == "OK"){
            runBtnTest.classList.remove("disabled");
        }
    });
});

var runURL = "http://api.hackerearth.com/code/run/";
runBtnTest.addEventListener("click", function(){
    var text = editor.getValue();
    $.ajax({
        method: "POST",
        url: runURL,
        data : {
            'client_secret': secretKey,
            'async': 0,
            'source': text,
            'lang': compilerLang,
            'input': 20,
            'time_limit': 5,
            'memory_limit': 262144,
        }
    }).done(function(result){
        runStatus.innerHTML = "Expected Output = 20 <br>Output = ";
        runStatus.innerHTML += result.run_status.output;
        console.log(result.run_status.output);
    });
});
