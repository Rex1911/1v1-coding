var express = require('express');
var path = require('path');
var app = express();
var http = require('http').Server(app);
var mongoose = require('mongoose');
var Question = require('./models/questions');
var seedDB = require('./seeds.js')

// database setup
mongoose.connect("mongodb://localhost/1v1coding", { useNewUrlParser: true });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
seedDB();

//======================
//     ROUTES
//======================

app.get("/", (req,res) => {
    res.render("index");
});

app.get("/contest/:id", (req,res) => {
    Question.findOne({'qnumber': req.params.id}, function(err, question){
        if(err){
            console.log("Error in loading question");
        } else {
            res.render("contest", {id:req.params.id, question:question});
        }
    })
});

app.get("/admin", (req,res) => {
    res.render("admin");
});

//=======================
// STARTING THE SERVER
//=======================

// var server = app.listen(process.env.PORT, function(){
var server = app.listen(3000, function(){
  console.log('listening on *:3000');
});

//========================
// SOCKET IO STUFF
//========================

var socket = require("socket.io")
var io = socket().listen(server);

io.on('connection', function(socket){
    socket.on("joinContest", (id) => {
        socket.join(id);
        console.log("Someone joined room" + id);
    });

    socket.on("startContest", (id) => {
        io.to(id).emit("start");
    });
});
