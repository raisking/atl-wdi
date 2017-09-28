//======================
// REQUIREMENTS
//======================
const express = require('express');
const router = express.Router();
var mongoose = require("mongoose");
// const Schema = require("../db/schema.js");
// require express, router, mongoose, Donut schema


//======================
// INDEX
//======================
// Create a GET index route "/" that sends all donuts to index.hbs

router.get('/', (request, response) =>{
    DonutModel.find({})
        .then((donut_store) =>{
            response.render('donuts/index',{
                donut_store: donut_store
            } )
        })
        .catch((error) =>{
            console.log(error)
        })
})

//======================
// NEW
//======================
// Create a GET new route "/new" that renders the new.hbs form
router.get('/new', (request, response) =>{
    response.render('donuts/new')
})


//======================
// SHOW
//======================
// Create a GET show route "/:id" that renders the donut's show page
router.get('/:id', (request, response) =>{

})


//======================
// CREATE
//======================
// Create a POST index route "/" that creates a new donut
// and upon success redirects back to the index page "/"



//======================
// EDIT
//======================
// Create a GET edit route "/:id/edit" that renders the edit.hbs page and
// sends that donut's data to it



//======================
// UPDATE
//======================
// Create a PUT update route "/:id" that updates the donut and
// redirects back to the SHOW PAGE (not index)
router.put('/:id', (request, response) =>{
    const donutIdToUpdate = request.params.donutIdToUpdate
    const updatedDonut = request.body
    DonutModel.findByIdAndUpdate(donutIdToUpdate, updatedDonut, { new: true})
        .then(() =>{
            response.redirect(`donuts/${donutIdToUpdate}`)
        })
        .catch((error) =>{
            console.log(error)
        })
})


//======================
// DELETE
//======================
// Create a DELETE delete route "/:id" that deletes the donut and
// redirects back to index page "/"



//======================
// EXPORTS
//======================
// export router with module.exports
module.exports = router;
