//dependencies to require and npm install
const express = require("express"); 
const app = express();
const PORT = process.env.PORT || 5000; //remember the "process.env.PORT" is for Heroku
//don't forget to require your routes folder. it would look something like this:
//const routes = require("./routes");


//next, define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//this is where you would call upon your routes folder
//app.use(routes)

//start the API server
app.listen(PORT, function() {
    console.log(`🌎 ==> API Server now listening on PORT ${PORT}!`);
});