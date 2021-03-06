//======================
// REQUIREMENTS
//======================
// require express, mongoose, body-parser, method-override
var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var methodOverrid// = require("method-override");
var hbs = require("hbs");
var logger = require('morgan');
const methodOverride = require('method-override');

//promise because it is separately operated
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/donut_store');

//db connection
const db = mongoose.connection

db.on('error', function (err) {
    console.log(err);
});
db.once('open', function () {
    console.log("database has been connected!");
});

//======================
// MIDDLEWARE
//======================
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.set("view engine", "hbs");
app.set('views', './views'); 

app.use(express.static(__dirname + 'public'));
app.use( logger('dev'));

//======================
// CONTROLLERS
//======================
//for seed file, seed the database
var seedController = require('./controllers/seeds.js');
app.use('/seed', seedController);

//for root directory, show all donuts
// var donutsController = require('./controllers/donuts.js');
// app.use('/', donutsController);

//======================
// LISTENERS
//======================
//CONNECT MONGOOSE TO "donut_store"

//CREATE THE MONGOOSE CONNECTION and SET APP TO LISTEN to 3000
const PORT = 3000;
app.listen(PORT, () =>{
    console.log(`Express started on ${PORT}`)
})
