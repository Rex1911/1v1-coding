var socket = io();

$("#1").click(() => {
    socket.emit("startContest", 1); 
});

$("#2").click(() => {
    socket.emit("startContest", 2); 
});

$("#3").click(() => {
    socket.emit("startContest", 3); 
});

$("#4").click(() => {
    socket.emit("startContest", 4); 
});

$("#5").click(() => {
    socket.emit("startContest", 5); 
});

$("#6").click(() => {
    socket.emit("startContest", 6); 
});

$("#7").click(() => {
    socket.emit("startContest", 7); 
});

$("#8").click(() => {
    socket.emit("startContest", 8); 
});