//your code here
/* packages */
var path        = require('path');
// var logger      = require('morgan');
var express     = require('express');
var hbs         = require('hbs');  //view engine to hbs
// const bodyparser = require('body-parser');

/* app settings*/
var app         = express();
var port        = process.env.PORT || 3000;
//controllers for `/pirates` resource
var pirateController = require('./controllers/pirates.js');

// app.use(bodyParser.urlencoded({ 
//     extended: false 
// }));

// app.use(bodyParser.json());

/*Views*/
app.set('view engine', 'hbs');

app.use("/pirates", pirateController);

/* HOME */  
app.get('/', function(req,res) {
    res.send('Pirates');
  });
// Start server
app.listen(port, function() {
    console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date());
  });
  


