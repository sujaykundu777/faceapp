var express = require('express');
var router = express.Router();


//API route
router.get('/', function(req,res,next){
    res.send('Backend API is working');
  });


  module.exports = router;