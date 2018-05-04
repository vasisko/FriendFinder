
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

        // change survey answers to numbers
        var user = req.body;
        for(var i=0; i<10; i++){
            user.score[i]=parseInt(user.score[i]);
        }
        //add user data to friend data
        friendData.push(user);
        console.log(friendData);

        //Find differences between friends'
        //Outer for-loop for each Friend
        //Inner for-loop for each survey question
        var bffrating=[];
        for(var j=0; j< friendData.length-1; j++){

            // user data was appended to end of array so newest is that last element---this is the data to compare to existing friends
            var newest=friendData.length-1;
            console.log("Newest: " + newest);
            
            var totalDiff=0;
            var friendarray=friendData[j];
            
            //loop through 10 survey questions and calculate the difference 
            for(var i=0; i<10; i++){
              
                 var questionDiff = Math.abs(friendData[newest].score[i] - friendarray.score[i] ); 
                 console.log("Qdiff = " + questionDiff);
                 totalDiff = totalDiff + questionDiff;
                 console.log(totalDiff);
             }
             bffrating[j] = totalDiff;
             console.log(bffrating[j]);
            
        }     
        
        //Compare differences to find least value=bff
        var indexSmDiff = bffrating.indexOf(Math.min.apply(Math, bffrating));
       
        var match = {name: friendData[indexSmDiff].name, photo: friendData[indexSmDiff].photo};

        res.json(match);
    });
}  
   