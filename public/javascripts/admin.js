var socket = io();

for(let i=1;i<=8;i++) {
    $("#" + i).click(() => {
        let questionID = $("#" + i + "_select").val();
        let totalTime = $("#" + i + "_time").val();
        let roomID = i;
        socket.emit("startContest", {questionID:questionID,totalTime:totalTime,roomID:roomID});
    });
}

$("#formSubmit").click(function(){
    let password = $("#formpassword").val();
    let username = $("#formusername").val();
    $.ajax({
      method: "POST",
      url: "http://localhost:3000/check",
      data: { username: username, password: password }
    })
    .done(function(data){
        if(data == "verified"){
            $("#verifyModal").hide();
        } else if(data == "fail"){
            $("#warning").text("Username/Password incorrect!!");
        } else {
            console.log("Error");
        }
    })
})
