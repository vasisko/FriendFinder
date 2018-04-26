
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
        console.log("made it to api/friends");
        friendData.push(req.body);
        console.log(friendData);
        console.log("here");
        for(var j=0; j<friendData.length-1; j++){
            var newest= friendData.length;
            var potential = friendData[j];
            var totalDiff;
            var bff;

            for(var i=0; i<10; j++){
                
                var newPerson=friendData[newest].scores.question[i];
                var friendPers = potential.scores.question[i];
                var diff = Math.abs(newPerson -friendPers ); 
                totalDiff = totalDiff + diff;
            }
            var bffrating[j] = totalDiff;
            if bffrating[j+1] < bffrating[j]{
                bff= friendData[j+1].name;
            }
            else {bff = friendData[j].name;}
            }
            console.log(bff);
            
        }

        
        //Compatibility Logic

    });
}