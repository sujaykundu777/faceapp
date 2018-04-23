var express = require('express');
var app = express();

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
