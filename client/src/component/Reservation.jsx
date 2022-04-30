import React,{useState} from 'react';
import "../css/reservation.css";

import { useNavigate} from "react-router-dom";

export default function Reservation({val,date }) {
  

 const navegate=   useNavigate()



    const[user, setUser] = useState({
        fristName:"",
        lastName:"",
        gender:"",
        email1:"",
        mobile:"" 
    
      });
      
      
      let name, value;
      
      
      let handleInput =(e)=>{
          name=e.target.name;
          value=e.target.value
      
          setUser({...user,[name]:value})
      }
      
      
      
      
      let postData = async (e)=>{
          e.preventDefault();
      
          const { fristName,lastName, email1,mobile} = user;
         
          const {companyName10,locationFrom10,locationTo10,flewTime10,landingTime10,price10}= val;

         // fetch('http://localhost/img/fr.json').
          const res = await fetch("/api/reservation",{
            
              method:"POST",
              headers:{"content-type":"application/json"},
              body:JSON.stringify({
                companyName10,locationFrom10,locationTo10,flewTime10,landingTime10,price10,
                fristName,lastName, email1,mobile
              })
          
          })
        
      
          const data =  res.json();
      
            console.log(data)
          if( !data){
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

            <div className='block1'>
                <div className='row'>
                    <div className='col-12'>

                        <div className='container1'>
                            <div className='reserv_tickit'>
                                <div><h5>{date}</h5><i className="fa-solid fa-arrow-right"></i><h5>non stop</h5></div>
                                <div><p>Seat No</p> <p>S-12</p></div>



                                <div><h4>{val.flewTime10} </h4> <p>{val.locationFrom10}</p></div>
                                <div> <h4>{val.landingTime10}</h4> <p>{val.locationTo10}</p></div>
                                <div><h5>baggage</h5>
                                    <p>adult</p>

                                </div>
                                <div><h5>cleck-in</h5>
                                  <p>15kg (one piece only)</p>  </div>

                                <div><h5>cabin</h5>
                                  <p> 7kg (one piece only)</p> </div>
                            </div>




                            <div className='contaner-2'>
                                <form method="POST">
                                <div className='top-heading'><h3>Traveller Details</h3></div>
                                <div className='contact'>
                                    <div>
                                        <label htmlFor="">frist name</label>
                                        <input type="text" name="fristName" id=""
                                        value={user.fristName}
                                        onChange={handleInput} />
                                    </div>
                                    <div>
                                        <label htmlFor="">last Name</label>
                                        <input type="text" name="lastName" id=""
                                        value={user.lastName}
                                        onChange={handleInput}  />
                                    </div>
                                    <div>
                                        <input type="radio" name="gender" id="male"
                                        value={user.gender}
                                        onChange={handleInput} /> <label htmlFor="male" value='male'>male</label>
                                    </div>

                                    <div>
                                        <input type="radio" name="gender" id="female"
                                         value={user.gender}
                                         onChange={handleInput}   /> <label htmlFor="female" value="female">female</label>
                                    </div>


                                </div>

                                <div className='top-heading'><h3>booking detail send to </h3></div>

                                <div className='contact'>
                                    <div>
                                        <label htmlFor="">enter mobile</label>
                                        <input type="number" name="mobile"
                                         value={user.mobile}
                                         onChange={handleInput} />
                                    </div>

                                    <div>
                                        <label htmlFor="">enter email</label>
                                        &nbsp; &nbsp; <input type="email" name="email1"
                                         value={user.email1}
                                         onChange={handleInput} />
                                    </div>

                                    <div className='button10'>
                                        <input type="submit" onClick={postData}/>
                                    </div>
                                </div>
                               </form>
                            </div>


                        </div>


                    </div>
                </div>
            </div>



        </>
    )
}
