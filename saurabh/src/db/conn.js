

const mongoose = require("mongoose");
const flightSchema =require("../model/flightList")

mongoose.connect("mongodb://localhost:27017/flightUser"
).then(()=>{
    console.log("connection successfull");
}).catch((e)=>{
      console.log(e);
})



const createDocument1 = async ()=>{
    try{

        const result = await Model1.insertMany([{
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

         //return result.save();
        console.log(result)
    }catch(er){
         console.log(er)
    }
}



  //createDocument1();



























const createDocument = async ()=>{
  try{
      console.log("helllskdkd")
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

      // return result.save();
      console.log(result)
  }catch(er){
       console.log(er)
  }
}



//createDocument();


 // mongoose.FlightList   = mongoose.createConnection("mongodb://localhost:27017/flightmode"
//);