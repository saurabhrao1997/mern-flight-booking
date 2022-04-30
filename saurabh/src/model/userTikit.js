const express = require("express");
const mongoose = require("mongoose");




const userTikitSchema =new mongoose.Schema({
    companyName10:{
        type:String,
        required:true
    },

    locationFrom10:{
        type:String,
     required:true

    },
    locationTo10:{
        type:String,
         required:true

    },
    flewTime10:{
        type:String,
        
         required:true
    },
    landingTime10:{
        type:String,
        required:true
    },
     
    price10:{
        type:String,
         required:true 
    },
    fristName :{
        type:String,
    required:true
        

    },lastName:{
        type:String,
         required:true
    },
    email1:{
        type:String,
         required:true
        
    },
    mobile:{
        type:Number,
         required:true 
    }

   
})
module.exports = {userTikitSchema};