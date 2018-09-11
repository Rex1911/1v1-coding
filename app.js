var express = require('express');
var path = require('path');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Question = require("./models/questionsModel");
var seedDB = require("./seed");
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var {c, cpp, python, java} = require('compile-run');

//========================
// MongoDB setup
//========================
mongoose.connect("mongodb://localhost/questionsDB");
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

app.get("/admin", (req,res) => {
    Question.find({}, (err,questionsList) => {
        if(err) {
            console.log(err);
        } else {
            //Basically sends all the questions in the DB to front end to populate the dropdown
            res.render("admin", {questions:questionsList});
        }
    });
});

app.post("/compile", (req,res) => {
    if(req.body.lang == "C") {
        const sourcecode = req.body.source;
        let resultPromise = c.runSource(sourcecode, {stdin: req.body.input});
        resultPromise.then(result => {
            res.send(result);
        }).catch(err => {
            console.log(err);
        });
    } else if (req.body.lang == "PYTHON"){
        // Python handles custom inputs differently. Each input must be a individual, not a entire string. Below code seperates the inputs into individual tokens.
        const sourcecode = req.body.source;
        let customIp = req.body.input.split(" ");
        let string = "";
        customIp.forEach(input => {
            string += input + "\n"; 
        });
        let resultPromise = python.runSource(sourcecode, {stdin: string});
        resultPromise.then(result => {
            res.send(result);
        }).catch(err => {
            console.log(err);
        });
    } else if (req.body.lang == "CPP") {
        const sourcecode = req.body.source;
        let resultPromise = cpp.runSource(sourcecode, {stdin: req.body.input});
        resultPromise.then(result => {
            res.send(result);
        }).catch(err => {
            console.log(err);
        });
    }
});
//========================
// SOCKET IO STUFF
//========================

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
                io.to(data.roomID).emit("start", question);
            }
        });
    });
    
    socket.on("gameOver", (roomID) => {
        socket.broadcast.to(roomID).emit("lost");
    });
});

//=======================
// STARTING THE SERVER
//=======================

http.listen(process.env.PORT, function(){
  console.log('listening on *:3000');
});