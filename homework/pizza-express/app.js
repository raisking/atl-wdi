// app.js
//require express package
var express = require('express');
//save an express module as 'app'
var app = express();



app.get('/', (req, res) => {
    console.log(req);  
    res.send("Welcome to the Pizza Express!");
  })
  
  app.get('/topping/:type', (req, res) => {
        console.log(req.params);
        res.send(`${req.params.type} pizza! Good choice.`);
    });
/*Make a GET route for /order that has 2 variable destinations 
(# of pizza, pizza size). When a user visits this route on 
localhost:3000/order/10/medium, they will see "Your order for 
10 medium pizzas will be ready in 1 minute!" The syntax for the 
route will look like this:
*/
  
app.get('/order/:amount/:size', (req, res) => {
        console.log(req.params);
         res.send(`Your order for ${req.params.amount}, ${req.params.size} pizzas will be ready in 1 minute!` );
     });

// assigning 3000 as our port
var port = 3000;
            
// tells the server to listen for requests on port 3000
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});