import React,{useEffect, useState} from 'react';
import "../css/index.css";
import ListFlight from "./ListFlight"
import {NavLink,useNavigate} from "react-router-dom";
import axios from "axios";


export default function Index() {


 // const navegate = useNavigate();
 
  const[User, setUser] = useState({
   
    fristCity:"",
    secondCity:"",
    departure:"",
    returnA:""
  
  });
  
const [Flight , setFlight] = useState([]);

const [List ,setList] = useState([]);

 useEffect(()=>{
   axios.get("/api/flight").then((res)=>{
       const data =  res.data;
       setFlight(data);
       console.log("data has been resived");
   }).catch(()=>{
     console.log("error to reciving the data");
   })
 },[])


  
  let name, value;
  
  
  let handleInput =(e)=>{
      name=e.target.name;
      value=e.target.value
  
      setUser({...User,[name]:value})
  }
  
      // const listOfFlight =()=>{
      //   fetch("/api/flight").then((res)=>{
      //     const data =res.data

      //     setFlight(data);
      //     console.log(Flight);
      //   })

      // }

  let postData = async (e)=>{
      e.preventDefault();








    const {fristCity,secondCity} =User;
    // console.log(fristCity)
    // console.log(secondCity)
    //   console.log(Flight)
     
   for(let i=0; i<=7; i++){
    //  console.log(Flight[i].locationFrom10)
    //  console.log(Flight[i].locationTo10)


    if(Flight[i].locationFrom10 == fristCity &&  Flight[i].locationTo10 == secondCity){
      console.log("data match")
                 let   long =[];

        
               long.push(Flight[i]);
      console.log(long)
     setList(long);
          
   
   
    //              setList(Flight[i]);
    // console.log(Flight[i])
  
   
    
   }else{
     console.log("data dont match")
   }



   }
   
  
  
  
  
  
  
  
  
  
  
  
  
  
      // const { fristCity,secondCity,departure, returnA} = User;
         
     // fetch('http://localhost/img/fr.json').
  //     const res = await fetch("/api/flight",{
        
  //         method:"POST",
  //         headers:{"content-type":"application/json"},
  //         body:JSON.stringify({
  //           fristCity,secondCity,departure, returnA
  //         })
      
  //     })
  //       console.log(res)
  
  //     const data =  res.json();
  
  //       console.log(data)
  //     if(data === 422  || !data){
  //       window.alert("invalid registration")
  //       console.log("invalid registration")
  //     }else{
  //       window.alert(" registration successfull")
  //       console.log()
  //       listOfFlight()
      
  //     }
   }
  
  








   
   
   
   
   




  return (
    <>
    
    
    <div className="container">
      <div className="row">
        <div className="col-md-10">
         
         
         
         
         
        <form action="">
          <div className='head'>
            
            
          

                

            <div>
             
            <input type="text" className='setInput' name="fristCity" placeholder='from'
            value={User.fristCity}
            onChange={handleInput} />
            <input type="text" className='setInput' name="secondCity" placeholder="to"   value={User.secondCity}
            onChange={handleInput} />
            <input type="date" className='settime' name="departure" placeholder='dd/mm/yy'   value={User.departure}
            onChange={handleInput} />
            <input type="date" className='settime' name="returnA" placeholder='dd/mm/yy'  value={User.returnA}
            onChange={handleInput} />
            </div>
            <div>
            <button type='submit' className="button1" onClick={postData}>click</button>
            </div>
           
           
          </div> </form> 


          

  



           {

            List.map((val)=>{
              return <ListFlight key={val._id} val= {val} date={User.departure}/>
            })
           } 




























        </div>
      </div>
    </div>
    
    
    </>
  )
}
