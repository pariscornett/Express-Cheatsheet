# This is a cheat sheet for getting an Express server up and running with Node.

### To use this code, copy and paste, but also follow a few other steps like...

* Remember to run `npm init` to initialize a package.json and `npm i` all necessary packages

* Obviously add any packages necessary to the dependencies section at the top of server.js (Don't forget nodemon and how much easier life is with it)

* If running Express/Node with React, remember to `npm i concurrently` and add the following line of code to the client-side package.json: 
... + `"proxy": "http://localhost:5000/"` || whatever PORT your server is set to in server.js