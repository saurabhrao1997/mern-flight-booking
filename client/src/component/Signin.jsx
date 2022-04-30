import React,{useState} from 'react';
import "../css/signin.css";
import {NavLink,useNavigate} from "react-router-dom"

export default function Signin() {

  const navegate = useNavigate();
 
  const[user, setUser] = useState({
   
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
  
      const {email,password,conformPassword} = user;
         
     // fetch('http://localhost/img/fr.json').
      const res = await fetch("/api/login",{
        
          method:"POST",
          headers:{"content-type":"application/json"},
          body:JSON.stringify({
            email,password,conformPassword
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
  
        navegate("/")
      }
  }
  
  




  return (
  

      
<>



<div className="container">
  <div className="row">
    <div className="col-md-10">



    <div className='registration'>
          <p className='para'>SignIn</p>
          

            <form method="POST">


          
          <div className='div1'>
            <label htmlFor="">email</label>
            <input type="text" className='setInout' name="email" placeholder='email'
                          value={user.email}
                          onChange={handleInput}
                        
            />
          </div>
          <div className='div1'>
            <label htmlFor="">password</label>
            <input type="text" className='setInout' name="password" placeholder='password'
                          value={user.password}
                          onChange={handleInput}
                        
            />
          </div>
         

          <div className='div1'>
             <input type="submit" value="register" className='button2' onClick={postData}/>
             <NavLink to="/signin">register</NavLink>
          </div>

            </form>


        </div>


    </div>
  </div>
</div>


</>



      
      )}
