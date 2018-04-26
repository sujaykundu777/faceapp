var express = require('express');
var router = express.Router();
let passport = require('passport');
let jwt = require('jsonwebtoken');
var User = require('../models/User');
let config = require('../config');


router.get('/', function(req, res) {
  User.find({}, function(err, users) {
    res.json(users);
  });
});

module.exports = router;