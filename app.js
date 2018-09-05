var express = require('express');
var path = require('path');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//======================
//     ROUTES
//======================

app.get("/", (req,res) => {
    res.render("index");
});

app.get("/contest/:id", (req,res) => {
    res.render("contest", {id:req.params.id});
});

app.get("/admin", (req,res) => {
    res.render("admin"); 
});

//========================
// SOCKET IO STUFF
//========================

io.on('connection', function(socket){
    socket.on("joinContest", (id) => {
        socket.join(id);
        console.log("Someone joined room" + id);
    });
    
    socket.on("startContest", (id) => {
        io.to(id).emit("start"); 
    });
});

//=======================
// STARTING THE SERVER
//=======================

http.listen(process.env.PORT, function(){
  console.log('listening on *:3000');
});
