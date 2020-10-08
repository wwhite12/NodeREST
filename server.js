const express = require("express");
const app = express()
const PORT = process.env.port || 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.listen(PORT, function(){
    console.log("NodeREST up and running on port "+PORT)
})