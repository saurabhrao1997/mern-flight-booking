import React,{useState} from 'react'
import "../css/listItem.css";
import { useNavigate} from "react-router-dom";
import Reservation from './Reservation';



export default function ListFlight({val,date}) {
  console.log(date)
 const [Active , setActive]= useState("close");
 const navegate =  useNavigate();





 








  return (

   <>
    <div className='listItem'>
   
    <div className='logo'>
    <i className="fa-solid fa-plane-departure" id='brand'></i>
     <h4>{val.companyName10}</h4>
    </div>
    <div className='first'>
        <h3>{val.flewTime10}</h3> 
       <p>{val.locationFrom10}</p>
    </div>
    <div className='duration'>
    <p>{date}</p>
    <hr />
    <p>non stop</p>
    
    </div>
    
    
    <div className='second'>
        <h3>{val.landingTime10}</h3> 
         <p>{val.locationTo10}</p>
    </div>
    <div className='price'>
    
     <h3>{val.price10}</h3>
    <button onClick={()=>{setActive("open")}} >book 
    
    </button>
    
    
    </div>
    
    
    </div> 
  

  { Active === "open" && <Reservation  val={val} date ={date}/>}
  
  
    
</>
  )
}
