const express = require("express");
const lol =express();
const mongoose = require("mongoose");

//const conn = require("../db/conn");
//const app = require("../router/auth");
lol.use(express.json())
lol.use(express.urlencoded());


const flightSchema =new mongoose.Schema({

    flightNo10 :{
        type:Number,
        required:true,
        

    },
    locationFrom10:{
        type:String,
        required:true,

    },
    locationTo10:{
        type:String,
        required:true,

    },
    flewTime10:{
        type:String,
        required:true,

    },
    landingTime10:{
        type:String,
        required:true,
    },
    companyName10:{
        type:String,
        requirted:true,
    },
    planeCategary10:{
        type:String,
        required:true,
    },
    price10:{
        type:String,
         required:true,
    }

    

})

// flightSchema.pre("save" ,async function(next){
//      console.log(`input tag data : ${this.locationFrom1}`)
//      console.log(`input tag data : ${this.locationTo1}`)
//      console.log(`input tag data : ${this.departureCalender}`)
//      console.log(`input tag data : ${this.returnCalender}`)
//      next();
// })






const createDocument = async ()=>{
    try{

        const result = await FlightList.insertMany([{
            flightNo10:"01",
            locationFrom10:"pune",
            locationTo10:"bangloru",
            flewTime10:"10:00 AM",
            landingTime10:"11:35 AM",
            companyName10:"indiGO",
            planeCategary10:"passenger",
            price10:"4500 Rs"
        },
        {
            flightNo10:"02",
            locationFrom10:"pune",
            locationTo10:"bangloru",
            flewTime10:"10:00 AM",
            landingTime10:"11:35 AM",
            companyName10:"go First",
            planeCategary10:"passenger",
            price10:"4300 Rs"
        },
        {
            flightNo10:"03",
            locationFrom10:"pune",
            locationTo10:"bangloru",
            flewTime10:"10:00 AM",
            landingTime10:"11:35 AM",
            companyName10:"Air Asia",
            planeCategary10:"passenger",
            price10:"5500 Rs"
        },
        {
            flightNo10:"04",
            locationFrom10:"pune",
            locationTo10:"bangloru",
            flewTime10:"10:00 AM",
            landingTime10:"11:35 AM",
            companyName10:"spice jet",
            planeCategary10:"passenger",
            price10:"5300 Rs"
        }])

         return result.save();
        console.log(result)
    }catch(er){
         console.log(er)
    }
}



// createDocument();

const getDocument =async function(){
const result = await FlightData.find();
 console.log(result)




}
//getDocument()

module.exports = flightSchema;