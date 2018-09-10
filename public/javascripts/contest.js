const compileUrl = "https://api.hackerearth.com/v3/code/compile/";
const runUrl = "https://api.hackerearth.com/v3/code/run/";
const client_secret = "b76e2532fdf6fc07e6fb1cdd6e1331f9774244bb";

let compilerLang = "C";

//When we recieve the start event, we must hide the modal
socket.on("start", (data) => {
    $("#waitingModal").hide();
    $("#question").text(data[0].question);
});


// Function to change the language of ace editor
function changeAceLang() {
    let langCode = $("#langSelector").val();
    editor.session.setMode("ace/mode/" + langCode);
    compilerLang = $("#langSelector option:selected").text().toUpperCase();
}

$("#compile_btn").click(() => {
    let source = editor.getValue();
    
    $("#compiler_message").text("Compiling...");
    
    // Sending the request to the HackerRank API
    $.ajax({
        method: "POST",
        url: compileUrl,
        data: {
            client_secret: client_secret,
            async: 0,
            source: source,
            lang: compilerLang,
            time_limit: 10
        }
    }).done((data) => {
        $("#compiler_message").text(data.compile_status);
    });
});

$("#run_btn").click(() => {
    let source = editor.getValue();
    
    $("#output_compile_status").text("Running...");
    $("#output").html("");
    
    // Sending the request to the HackerRank API
    $.ajax({
        method: "POST",
        url: runUrl,
        data: {
            client_secret: client_secret,
            async: 0,
            source: source,
            lang: compilerLang,
            input: "10 20 30 40",
            time_limit: 10
        }
    }).done((data) => {
        console.log(data);
        $("#output_compile_status").text(data.compile_status);
        $("#output").html(data.run_status.output_html);
    });
});