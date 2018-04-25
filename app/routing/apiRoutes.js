
var path = require("path");
var friendData = require("./../data/friends.js")

//Use express to direct 
module.exports = function (app) {

    //GET friend data  ==================
    //assemble JSON of all friends
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    //POST friend data from form ==========
    app.post("/api/friends", function(req, res) {
        //Compatibility Logic
    });
}