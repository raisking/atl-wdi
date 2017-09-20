
var express = require('express');
var app = express();
var hbs = require('hbs');
const todosController = require('./controllers/index.js');
const usersController = require('./controllers/toppings.js');

app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'));

app.use('/index', indexController);
app.use('/toppings', toppingsController);

app.get('/', (req, res) => {
    console.log(req);  
    res.send("Welcome to the Pizza Express!");
  })
  
app.get('/topping/:type', (req, res) => {
        console.log(req.params);
        res.send(`${req.params.type} pizza! Good choice.`);
    });
  
app.get('/order/:amount/:size', (req, res) => {
        console.log(req.params);
         res.send(`Your order for ${req.params.amount}, ${req.params.size} pizzas will be ready in 1 minute!` );
     });

app.get(":amount/:size", (req, res) =>{ 
        const amount = parseInt(req.params.amount);
        const size = (req.params.amount);
    res.render("/order", { 
        amount: amount, 
        size: size
    });
});

// assigning 3000 as our port
var port = 3000;          
// tells the server to listen for requests on port 3000
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});



