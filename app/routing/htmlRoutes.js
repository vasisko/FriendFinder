
var path = require("path");

//Use express to direct 
module.exports = function (app) {

    //survey
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "./../public/survey.html"));
    });

    app.get("/logo", function(req, res){
        res.sendFile(path.join(_dirname, "./../public/friends.jpg"));
    })
    //all other requests go to home pg
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname, "./../public/home.html"));
    });

}