//jshint esversion:6

const { response } = require( "express" );
const express = require("express");
const app = express();

app.get("/",function(request,response){
response.send("<h1>helllo there</h1>");
});

app.get("/about",function(req,res){
res.send("This site is owned by arya shahi");
});
app.get("/hobbies",function(req,res){
    res.send("This site is owned by arya shahi");
    });

app.listen(3000, function()
{
    console.log("server started at port 3000");
});
