var express = require('express');
var router = express.Router();
let passport = require('passport');
let jwt = require('jsonwebtoken');
var User = require('../models/User');
let config = require('../config');
//File Upload
var multer  = require('multer');
var uuidv4 = require('uuid/v4');
var path = require('path');

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
     /*
          Files will be saved in the 'uploads' directory. Make
          sure this directory already exists!
        */
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
     /*
          uuidv4() will generate a random ID that we'll use for the
          new filename. We use path.extname() to get
          the extension from the original file name and add that to the new
          generated ID. These combined will create the file name used
          to save the file on the server and will be available as
          req.file.pathname in the router handler.
        */
    const newFilename = `${uuidv4()}${path.extname(file.originalname)}`;
    callback(null, newFilename);
  }
});

var upload = multer({ storage: storage });


//API routes

  router.get('/', function(req,res,next){
    res.send('Backend API is working');
  });

  router.get('/users', function(req, res) {
    User.find({}, function(err, users) {
      res.json(users);
    });
  });
  
  router.get('/signup', (req,res) => {
    res.send('Signup - Authentication API');
  });

// Register new users

  router.post('/signup', function(req, res) {
  if (!req.body.email || !req.body.password) {
    res.json({
      success: false,
      message: 'Please enter email and password.'
    });
  } else {
    let newUser = new User({
      email: req.body.email,
      password: req.body.password
    });

    // Attempt to save the user
    newUser.save(function(err) {
      if (err) {
        return res.json({
          success: false,
          message: 'That email address already exists.'
        });
      }
      res.json({
        success: true,
        message: 'Successfully created new user.'
      });
    });
  }
  });

  router.get('/signin', (req,res) => {
    res.send('Sign in - Authentication API');
  });


// Authenticate the user and get a JSON Web Token to include in the header of future requests.
  router.post('/signin', (req, res) => {
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.send({
        success: false,
        message: 'Authentication failed. User not found.'
      });
    } else {
      
      // Check if password matches
      user.comparePassword(req.body.password, function(err, isMatch) {
        if (isMatch && !err) {
        // if user is found and password is right
        // create a token with only our given payload
        // we don't want to pass in the entire user since that has the password
        const payload = {
          admin: user.admin 
          };
          var JWTtoken = jwt.sign(payload, config.auth.secret, {
            expiresIn: "2 days"
          });
          res.json({
            success: true,
            message: 'Authentication successful',
            token: JWTtoken
          });
        } else {
          res.send({
            success: false,
            message: 'Authentication failed. Passwords did not match.'
          });
        }
      });
    }
  });
  });

  //Middleware for Authenticating Routes 
  //To check whether the user have access to the route (logged in or not)

  function isAuthenticated(req, res, next){

    //check header for token
    var JWTtoken = req.body.token || req.query.token || req.headers['x-access-token'];

    //decode token
    if(JWTtoken){
        jwt.verify(JWTtoken, config.auth.secret, function(err, decoded){
            if(err){
              return res.json({
                success: false,
                message: 'Failed to authenticate token !' 
              });
            }    
            else{
              // if everything is good, save request for use in other routes
              req.decoded = decoded;
              next();
              } 
        });
      }
    else{
      //if there is no token 
      //return an error 
      return res.status(403).send({
          success: false,
          message: 'No token Provided'
      });
    }
  };

  //Authentication for 
  router.get('/profile', isAuthenticated, (req,res) => {
  res.send('Welcome User');
  });

   //Upload Image
  router.post("/upload", upload.single('selectedFile'),function(req, res, next) {
      
             /*
        We now have a new req.file object here. At this point the file has been saved
        and the req.file.filename value will be the name returned by the
        filename() function defined in the diskStorage configuration. Other form fields
        are available here in req.body.
      */
      upload(req,res,function(err){
         if(err){
           return res.send("Error Uploading File !");
         }
         //save it to uploads folder
         res.send('Image Upload Successful');
       });    
  
  });

  // Logout 
  router.get('/logout', (req,res) => {
  res.status(200).send({
    success: false,
    token: null
  })
  });

  module.exports = router;