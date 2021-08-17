//import exress and other libraries
const express = require('express');
const app = express();
const cors = require('cors');


//config express app server
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:3000"
}))

//configure mongoose to connect
require('./config/mongoose.config')

//add routes to listen
const petRoutes = require('./routes/pet.routes');

petRoutes(app);//run the routes function and pass in our app server

//start the app server listening
app.listen(8000, () => console.log("The server is all fired up on port 8000"));