# FriendFinder

FriendFinder is a compatibility-based application that finds the user a friend. The app contains a full-stack site that provides the user with a survey, and then compiles and compares the user's answers with the answers from other users. The app will then display the name and picture of the user with the least amount of survey differences = the best overall friend match. 

### Getting Started
The app will require the following files:
 * server.js - for setting up/running the server 
 * package-lock.json and package.json - contain the node npm package files 
 * app files - 
    * data file:  friends.js - contains array of friends
    * public files:  home.html - home page
                     survey.html - friend survey
    * routing files: htmlRoutes.js and apiRoutes

### Installing
The server can be started from the command line, calling the server file.  Once the server is active,
the site can be viewed from the browser on port 8080 (localhost:8080).

### Running the App
There are 2 html pages, the home page and the survey. `htmlRoutes.js` uses a GET route to `/survey` to display the survey, and a second  GET route (the default/catchall) to `home.html`.  

Upon submission of the survey, the answers are compiled as an object. An API is used for processing the survey and returning the results of the friend match. `apiRoutes.js` uses a GET route with the url `/api/friends` to display a JSON of all possible friends and a POST routes `/api/friends` to handle incoming survey results. and the compatibility logic.

Results are returned to the survey page and a modal is displayed containing the name of the match along with a photo of that natch.

### Friend Matching Logic
The logic compares the difference between current user's scores against those from other users, question by question, adding up the differences to calculate the total difference.  The user with the least amount of difference will be the closest match.

### Built With
* Express npm package used to set up server
* Body-Parser npm package
* Path npm package 

### Status
The app is currently incomplete.  Debugging is underway of apiRoutes.js.

### Author
Carolyn Vasisko 

 https://boiling-brushlands-95190.herokuapp.com/ deployed to Heroku
 
 
 https://git.heroku.com/boiling-brushlands-95190.git