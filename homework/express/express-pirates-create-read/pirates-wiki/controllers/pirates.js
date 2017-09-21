var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');
const bodyparser = require('body-parser');

//all routes for /pirate

/**INDEX****/
router.get('/', (req, res) => {
    res.render('pirates/index',{
        pirates: pirates
    });   
});



/**********NEW**********************/
router.get('/new', (req, res) => {
    res.render('pirates/new')       
});

/**SHOW DATA***/
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pirate = pirates[id];
    res.render('pirates/show',{
        pirates: pirate
    });

});


/*********SHOW DATA**********/
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const delPirates = data.seeded
})

router.post('/', (req, res)=>{
    // console.log(req.body);
    const newPirates = req.body;
    data.push(newPirates);
    res.redirect('/pirates');           
  
  })

//exports
module.exports = router;
