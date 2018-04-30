var express = require('express');
var app = express();
var mongoose = require('mongoose');
var database = require('./config/index.js');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var jwt = require('jsonwebtoken');
var path = require("path");
var pretty = require('express-prettify');
var passport = require('passport');
require('dotenv').config();

//Sets the port for express server
app.set("port", process.env.PORT);

//use prettify json
app.use(pretty({ query: 'pretty' }));

//Import models
var User = require('./models/User.js');

//Import routes
var index = require('./routes/index');

//monngoose db configuration ===============================================================
mongoose.connect(database.remoteUrl); // Connect to remote MongoDB instance.

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.set('JWT_SECRET', 'SecretKey');


// Express only serves static assets in production
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

//Configure body parser to parse incoming requests
//support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

//Set cross-origin resource sharing headers for all routes 
app.use(cors());


// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//   next();
// });
//Headers Support
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
 res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});


// Init passport
app.use(passport.initialize());
require('./config/passport')(passport);


 app.get('/', (req,res) => {
  res.send('Welcome to Express Backend API');
 });


//Create the First User (Setup)
app.get('/setup', function(req, res) {

  // create a sample user
  var nick = new User({ 
    email: 'nick123@gmail.com', 
    password: 'pass123',
    admin: true 
  });

  // save the sample user
  nick.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully');
    res.json({ success: true });
  });
});

//Use the routes
app.use('/api',index);


/**
 * Error handlers
 */

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  next(err);
});



//Start the server
app.listen(app.get("port"), () => {
    console.log(`[1] Server is running at: http://localhost:${app.get("port") }/ `); 
});


// expose app
module.exports = app;
