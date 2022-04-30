const dotenv = require("dotenv");
const path =require("path");
const express =require("express");
const bodyParser =require("body-parser");

const app =express();
const cores = require("cors");

const mongoose = require("mongoose");
dotenv.config({path:'./config.env'});

//const UserDetails = require("./model/flightSchima");
  const FlightList = require("./model/flightList")
const res = require("express/lib/response");
const port = process.env.PORT  || 2000;


app.use(require('./router/auth'))
app.use(express.json());
app.use(express.urlencoded());


app.use(cores())





const middleware =(req,res,next)=>{
    console.log(" i am middleware");

    next()

}


app.get("/",(req,res)=>{
    res.send("i am on  home page");
})
app.get("/about",middleware,(req,res)=>{
    res.send("hello i am on about page");
}) 
app.post("/register",()=>{
    console.log(req.body)
})


app.listen(port,()=>{
    console.log(`port working on 2000`);
})