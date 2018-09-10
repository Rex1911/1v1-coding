var socket = io();

for(let i=1;i<=8;i++) {
    $("#" + i).click(() => {
        let questionID = $("#" + i + "_select").val();
        let roomID = i;
        socket.emit("startContest", {questionID:questionID,roomID:roomID});
    });
}

// $("#1").click(() => {
//     let questionID = $("#1_select").val();
//     socket.emit("startContest", 1); 
// });

// $("#2").click(() => {
//     socket.emit("startContest", 2); 
// });

// $("#3").click(() => {
//     socket.emit("startContest", 3); 
// });

// $("#4").click(() => {
//     socket.emit("startContest", 4); 
// });

// $("#5").click(() => {
//     socket.emit("startContest", 5); 
// });

// $("#6").click(() => {
//     socket.emit("startContest", 6); 
// });

// $("#7").click(() => {
//     socket.emit("startContest", 7); 
// });

// $("#8").click(() => {
//     socket.emit("startContest", 8); 
// });