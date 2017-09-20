//your code below
//requirements
var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');
const bodyparser = require('body-parser');

//all routes for /pirate

        
router.get('/', (req, res) => {
    res.render('pirates/index',{
        pirates: pirates
    });   
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.render('pirates/show',{
        pirates: pirates
    });

});
router.get('/new', (req, res) => {
    res.render('pirates/new',{
    });
        
});

router.post('/', (req, res)=>{
    console.log(req.body);
    const newPirates = req.body;
    data.seededTodos.push(newPirates);
    res.redirect('/pirates');
  
  })

//exports
module.exports = router;
