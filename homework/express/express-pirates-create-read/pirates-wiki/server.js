/* packages */
var path        = require('path');
var logger      = require('morgan');
//morgan logger middleware function using the given format and options
var express     = require('express');
var hbs         = require('hbs');

const bodyparser = require('body-parser');
// include the method-override package
// var methodOverride = require('method-override');

/* app settings*/
var app         = express();
var port        = process.env.PORT || 3000;
//controllers for `/pirates` resource
var pirateController = require('./controllers/pirates.js');


// app.use(methodOverride('_method'));

//log
app.use(logger('dev'));

// app.use(bodyParser.urlencoded({extended: true}));
/*Views*/
app.set('view engine', 'hbs');

app.use("/pirates", pirateController);

/* HOME */  
app.get('/', function(req,res) {
    res.send('Pirates');
  });


// Start server
app.listen(port, function() {
  console.info('Server Up', port,"//", new Date());
});

  

