import React, { useState } from 'react';
import "../css/register.css";
import {NavLink, useNavigate} from "react-router-dom";
//import axios from 'axios';

export default function Register() {

 const navegate = useNavigate();
 
const[user, setUser] = useState({
  fname:"",
  lname:"",
  phone:"",
  email:"",
  password:"",
  conformPassword:""
});


let name, value;


let handleInput =(e)=>{
    name=e.target.name;
    value=e.target.value

    setUser({...user,[name]:value})
}




let postData = async (e)=>{
    e.preventDefault();

    const {fname,lname,phone,email,password,conformPassword} = user;
       
   // fetch('http://localhost/img/fr.json').
    const res = await fetch("/api/register",{
      
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({
          fname,lname,phone,email,password,conformPassword
        })
    
    })
      console.log(res)

    const data =  res.json();

      console.log(data)
    if(data === 422  || !data){
      window.alert("invalid registration")
      console.log("invalid registration")
    }else{
      window.alert(" registration successfull")
      console.log(" registration successfull")

      navegate("/signin")
    }
}




  return (
   <>
   
   <div className='container'>
     <div className='row'>
       <div className='col-md-10 col-12 my-5'>

       <div className='registration'>
          <p className='para'>registration</p>
          

            <form method="POST">


            <div className='div1'>
            <label htmlFor="">fname</label>
            <input type="text" className='setInout' name="fname" placeholder='fname'
              value={user.fname}
              onChange={handleInput}
            
            />
          </div>
          <div className='div1'>
            <label htmlFor="">lname</label>
            <input type="text" className='setInout' name='lname'placeholder='lname'
             value={user.lname}
             onChange={handleInput}/>
          </div>
          <div className='div1'>
            <label htmlFor="">phone</label>
            <input type="text" className='setInout' name="phone" placeholder='phone'
             value={user.phone}
             onChange={handleInput}/>
          </div>
          <div className='div1'>
            <label htmlFor="">email</label>
            <input type="text" className='setInout' name="email" placeholder='email'
             value={user.email}
             onChange={handleInput}/>
          </div>
          <div className='div1'>
            <label htmlFor="">password</label>
            <input type="text" className='setInout' name="password" placeholder='password'
             value={user.password}
             onChange={handleInput}/>
          </div>
          <div className='div1'>
            <label htmlFor="">conformPassword</label>
            <input type="text" className='setInout' name="conformPassword" placeholder='conformPassword'
             value={user.conformPassword}
             onChange={handleInput}/>
          </div>

          <div className='div1'>
          
            <input type="submit" value="register" className='button2' onClick={postData}/>
            <NavLink to="/signin">already register</NavLink>
          </div>

            </form>


        </div>






       </div>
     </div>
   </div>
   
   
   </>
  )
}
