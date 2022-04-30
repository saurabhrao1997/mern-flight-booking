
const jwt =require("jsonwebtoken");

const mongoose = require("mongoose")
const express = require("express");


const app = express()

const cores = require("cors");

require("../db/conn")
const User  =require("../model/flightSchima"); 
//const barti =require("../db/conn")

 app.use(express.json());
 app.use(express.urlencoded());

 const flightSchema =require("../model/flightList")
const {userTikitSchema} =require("../model/userTikit")

  const middleware =(req,res,next)=>{
    console.log(" i am middleware");

    next()

}





app.get("/",(req,res)=>{
    res.send('hello wold dkfkgkgkfkf');

})

app.post("/api/register",cores(),(req,res)=>{

    // console.log(req.body)
    // res.json({status:"ok"})

   const {fname,lname,phone,email,password,conformPassword} = req.body;

    if(!fname || !lname || !phone || !email || !password || !conformPassword){
        return res.status(422).json({error :"plz fild the properly"});
    }

   User.findOne({email : email}).then((userExist)=>{
       if(userExist){
           return res.status(422).json({error:"email already exist"})

       }


       const user = new User({fname,lname,phone,email,password,conformPassword})

       user.save().then(()=>{
           res.status(201).json({message:"user registered successfully"});
       }).catch((err)=>{
           res.status(501).json({error:"user field to regisered"})
       })
   }).catch((err)=>{console.log(err)}); 
})


app.post("/api/login",async (req,res)=>{
   try{
    const  {email,password} = req.body;

    if(!email || !password){
        return res.status(400).json({error :"ples fill the data"})
    }
    const userlogin = await User.findOne(({email:email}))

   
    if(!userlogin){
        res.json({error:"user error"})





    }else{
       

      const token = await userlogin.generateAuthToken();



        res.json({message:"user sign successfully"})
        alert("user sign successfully")
    }
    
   }catch(err){
       console.log(err);
   }

})

let barti = mongoose.createConnection("mongodb://localhost:27017/bharti");
let Model1= barti.model("model1",flightSchema)
mongoose.connection
.once('open',()=>{console.log("connected")})
.on('error',(error)=>{console.log(error)});



app.get("/api/flight",middleware,async (req,res)=>{
     try{
    //  const  { fristCity,secondCity} = req.body;
 
    //  if(!fristCity || !secondCity){
    //      return res.status(400).json({error :"ples fill the data"})
    //  }
   // console.log(Model1.find({locationFrom10:fristCity}))
    
     const AvalableFlight = await Model1.find()
    res.json(AvalableFlight)
    
    //  if(!AvalableFlight){
    //      res.json({message:"no flight available"})
 
 
 
 
 
    //  }else{
        
 
    
 
    //          res.json(AvalableFlight)
    //         console.log(AvalableFlight)
    //     // res.json({message:"flight available"})
    //      //alert("flight available")
    //  }
     
    }catch(err){
        console.log(err);
    }
 
 })
 








 
 let reservation = mongoose.createConnection("mongodb://localhost:27017/reservation");
 const Reservation = reservation.model("userTikit",userTikitSchema)
 mongoose.connection
 .once('open',()=>{console.log("connected")})
 .on('error',(error)=>{console.log(error)});


//  mongoose.connect("mongodb://localhost:27017/reservation"
//  ).then(()=>{
//      console.log("connection successfull");
//  }).catch((err)=>{
//        console.log(err);
//  })
 
//  let Reservation= mongoose.model("saurabh",userTikitSchema)
 
 app.post("/api/reservation",cores(), async(req,res)=>{

        console.log(req.body)
     // res.json({status:"ok"})
    // const {companyName10,locationFrom10,locationTo10,flewTime10,landingTime10,price10,
    //         fristName,lastName, email1,mobile} = req.body;
    //      console.log(companyName10)
        // if(companyName10 && locationFrom10 && locationTo10 && flewTime10 && landingTime10 && price10 &&
        //     fristName && lastName &&  email1 && mobile){
        //     return res.status(422).json({error :"plz fild the properly"});
        // }


    
            const magg = await new Reservation({companyName10:req.body.companyName10,
                locationFrom10:req.body.locationFrom10,
                locationTo10:req.body.locationTo10,
                flewTime10:req.body.flewTime10,
                landingTime10:req.body.landingTime10,
                price10:req.body.price10,
                fristName:req.body.fristName,
                lastName:req.body.lastName, 
                email1:req.body.email1,
                mobile:req.body.mobile})
               
                magg.save()
                .then(()=>{
                   res.status(201).json({message:"user registered successfully"});
                   console.log("data is saved")
               }).catch((err)=>{
                   console.log(err)
                   res.status(501).json({err:"user field to regisered"})
               }) 
    
        
    
    
    
    })

module.exports = app;





