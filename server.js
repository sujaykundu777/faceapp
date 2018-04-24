var express = require('express');
var app = express();
var db = require('./db');

app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get('/', function(req,res){
      res.send('Backend API is working');
});
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