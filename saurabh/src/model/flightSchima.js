
const jwt = require("jsonwebtoken");
const mongoose =require("mongoose");


const SECRET_KEY = "MYNAMEISSAURABHSHRIKKANTWARHADEIHAVECOMPLATEDMYGRADUATION";

const tickitSchima = new mongoose.Schema({
 fname:{
     type:String,
     required:true,
 },
 lname:{
    type:String,
    required:true,
},
phone:{
    type:Number,
    required:true,
},
email:{
    type:String,
    required:true,
},
password: {
    type: String,
     required:true},
     
     
conformPassword: {
        type: String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]



})


tickitSchima.methods.generateAuthToken = async function (){
    try{
       const token = jwt.sign({_id:this._id},SECRET_KEY)
       this.tokens =this.tokens.concat({token:token});
       this.save();
       return token;

    }catch(err){
        console.log(err)
    }
}


const UserDetails = mongoose.model("userDetail",tickitSchima)

module.exports = UserDetails;