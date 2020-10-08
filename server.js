const express = require("express");
const app = express()
const PORT = process.env.port || 8080;
const mongoose = require("mongoose");
Task = require('./api/models/listModel')
//bodyParser = require('body-parser')

//mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/TodoDB');

app.use(express.urlencoded({extended:true}));
app.use(express.json())

var routes = require('./api/routes/listRoutes')//import route
routes(app)//register route

app.listen(PORT, function(){
    console.log("NodeREST up and running on port "+PORT)
})