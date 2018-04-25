
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Use app to refer to express
var app = express();

// Set port
var PORT = process.env.PORT || 8080;


//Body-Parser API code
//=====================
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
 
// parse application/json
app.use(bodyParser.json());
//=====================


//Require routing files
//Include apiRoutes
require('./app/routing/apiRoutes.js')(app);
//Include htmlRoutes
require("./app/routing/htmlRoutes")(app);


//Listen to port
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });