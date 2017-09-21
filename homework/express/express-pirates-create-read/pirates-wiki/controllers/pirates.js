var express = require("express");
var router = express.Router();
var pirates = require('../pirates.js');
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
    const runpirate = pirates[id];
    console.log(runpirate);
    if(!runpirate){
        res.render('pirates/show',{
            error: "Not found"
        })
    } else {
        res.render('pirates/show', {runpirate})
    }
  
});
/*********UPDATE*************/
router.get('/:id/edit', (req, res) =>{
    res.render('pirates/edit', {
        runpirate: {
            id: req.params.id,
            name: pirates[req.params.id].name,
            birthplace: pirates[req.params.id].birthplace,
            death_year: pirates[req.params.id].death_year,
            base: pirates[req.params.id].base,
            nickname: pirates[req.params.id].nickname,

        }
    })
})

/*******UPDATE EDIT DATA*********/
router.put('/:id', function(req, res){
    var editPirateInfo = pirates[req.params.id];

    editPirateInfo.name = req.body.name;
    editPirateInfo.birthplace = req.body.birthplace;
    editPirateInfo.death_year = req.body.death_year;
    editPirateInfo.base = req.body.base;
    editPirateInfo.nickname = req.body.nickname;
    res.redirect('/pirates');
})

/*******DELETE***********/
router.delete('/:id', function(req, res){
    pirates.splice(parseInt(req.params.id),1);
    //removes item from array
    res.redirect('/pirates')
    
})

/******POST*********/
router.post('/', (req, res)=>{
    console.log(req.body);
    const newPirates = req.body;
    pirates.push(newPirates);
    res.redirect('/pirates');           
  
  })

//exports
module.exports = router;
