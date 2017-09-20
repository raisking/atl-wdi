const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) =>{
    const greeting = "welcome to pizza express",
    res.render("index",{
        router: greeting
    })
})



module.exports = router;    