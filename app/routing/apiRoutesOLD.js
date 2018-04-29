
var friendData = require("./../data/friends");

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
        console.log("friendData: " +friendData);
        for(var i=0; i<10; i++){
            req.body.score[i]=parseInt(req.body.score[i]);
        }
        console.log(req.body);
        
        
        console.log("friendData  "+ friendData);
       
        // Create array of survey differences between newest friend and potential friends that exist in friendData 
        var bffrating=[];

        for(var j=0; j< friendData.length-1; j++){
            var newest=friendData.length-1;
            console.log("Newest: " + newest);
            var potential = friendData[j];

            var totalDiff;
            var bff;
            console.log(friendData[1].score[1] - friendData[2].score[1]);
            for(var i=0; i<10; i++){
                
               var newPerson=friendData[newest].score[i];
                console.log(newPerson);
                var friendPerson = potential.score[i];
                var diff = Math.abs(newPerson -friendPerson ); 
                totalDiff = totalDiff + diff;
                console.log(totalDiff);
            }
            bffrating[j] = totalDiff;//diff for all array elements except new Person  
        }
        console.log(bffrating);
        var match;
        var smdiff=bffrating[0];
        //Compare differences --- the smallest difference is the best match
       
        for(var i=1; i<friendData.length-1; i++){
            
            if (bffrating[i] < smdiff){
                smdiff=bffrating[i];
            }
            
        }
        console.log("bff = " + smdiff);
       
        match = {name: "bill", photo: "http://www.blah.com/a.jpg" };

        res.send(match);
    });
}