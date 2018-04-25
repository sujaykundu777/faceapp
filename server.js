var express = require('express');
var app = express();
var db = require('./db');
var bodyParser = require('body-parser');
var cors = require('cors');
var jwt = require('jsonwebtoken');
var path = require("path");
require('dotenv').config();

//Sets the port for express server
app.set("port", process.env.PORT);

//Set cross-origin resource sharing headers for all routes 
app.use(cors());


// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


//Configure body parser to parse incoming requests
//support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
 res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

//API Routes
app.get('/', function(req,res){
  res.send('Backend API is working');
});

app.get('/api/v1/auth/signup', function(req,res){
 res.send('Signup API');
})

app.post('/api/v1/auth/signup', function(req,res,next){

 var name = req.body.name;
 var email = req.body.email;
 var password = req.body.password;

  //debugging output for the terminal
  console.log('you posted: Name: ' + name + ', Email: ' + email + ', Password : ' + password);

});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});



//Start the server
app.listen(app.get("port"), () => {
    console.log(`[1] Server is running at: http://localhost:${app.get("port") }/ `); 
});

// Connect to MySQL on start
db.connect(db.MODE_PRODUCTION, function(err) {
  if (err) {
    console.log('Err: Unable to connect to MySQL.');
    process.exit(1);
  } else {
    app.listen(3002, function() {
      console.log('[2] MySQL Listening on port 3002...');
    });
  }
});