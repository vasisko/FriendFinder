
var friendData = require("./../data/friends.js");

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
        //console.log(friendData);
       
        // Create array of survey differences between newest friend and potential friends that exist in friendData 
        var bffrating=[];

        for(var j=0; j<friendData.length-1; j++){
            var newest= friendData.length;
            console.log("Newest: " + newest);
            var potential = friendData[j];

            var totalDiff;
            var bff;

            for(var i=0; i<10; i++){
                
                var newPerson=friendData[newest].scores[i];
                console.log(newPerson);
                var friendPerson = potential.scores[i];
                var diff = Math.abs(newPerson -friendPerson ); 
                totalDiff = totalDiff + diff;
            }
            bffrating[j] = totalDiff;
        }
        
        //Compare differences --- the smallest difference is the best match
        for(var i=0; i<friendData.length; i++){
            if (bffrating[i+1] < bffrating[i]){
                bff= friendData[i+1].name;
            }
            else {
                bff = friendData[i].name;
            }
            console.log(bff);
        }

    });
}