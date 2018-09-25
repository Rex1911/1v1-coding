var express = require('express');
var path = require('path');
var app = express();
var http = require('http').Server(app);
var Question = require("./models/questionsModel");
var seedDB = require("./seed");
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var {c, cpp, python, java} = require('compile-run');

//========================
// MongoDB setup
//========================
mongoose.connect("mongodb://localhost/questionsDB", { useNewUrlParser: true });
seedDB();

//=======================
// View engine setup
//=======================
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }))

//======================
//     ROUTES
//======================

app.get("/", (req,res) => {
    res.render("index");
});

app.get("/contest/:id", (req,res) => {
    res.render("contest", {id:req.params.id});
});

app.get("/admin",(req,res) =>{
    res.send("<p><a href=\"\/admin\/1\">Day 1<\/a><\/p>\n<p><a href=\"\/admin\/2\">Day 2<\/a><\/p>\n<p><a href=\"\/admin\/3\">Day 3<\/a><\/p>") 
});

app.get("/admin/:day", (req,res) => {
    Question.find({day: req.params.day}, (err,questionsList) => {
        if(err) {
            console.log(err);
        } else {
            //Basically sends all the questions in the DB to front end to populate the dropdown
            res.render("admin", {questions:questionsList});
        }
    });
});

//=======================
// STARTING THE SERVER
//=======================

var server = app.listen(process.env.PORT, function(){
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
    });

    socket.on("startContest", (data) => {
        //Search the DB for the question using the _id provided by the frontend
        Question.find({_id:data.questionID}, (err,question)=> {
            if(err) {
                console.log(err);
            } else {
                io.to(data.roomID).emit("start", {question:question,totalTime:data.totalTime});
            }
        });
    });

    socket.on("gameOver", (roomID) => {
        socket.broadcast.to(roomID).emit("lost");
    });

    socket.on('error', function(e){
    	console.log(e);
    });
});
