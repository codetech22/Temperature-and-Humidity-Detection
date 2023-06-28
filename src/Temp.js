import React, { useEffect, useState } from 'react'
// import './css/Style.css'
import './Style.css'

const Temp = () => {

const[city,setCity]=useState(null);
const[search,setsearch]=useState("Mumbai");

useEffect(()=>{
const fetchApi=async()=>{
const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=6a25f8968297fcf183a8624c99324c5d`
const response=await fetch(url);
console.log(response);
const resjson=await response.json();
console.log(resjson);
setCity(resjson.main);
}

    fetchApi();
    
},[search]);

  return (

    <div className='main'>
        <div className='cover'>
        <div className='weather'>
       <input type='text' defaultValue=""  onChange={(event)=>{ setsearch(event.target.value)}}  style={{border:"3px solid brown",color:"red",height:"20px"}}/>


{!city ? (
        <p>No Data Found</p>
        ) : (
             <div> 
            <div className='outer'>
            <center><b><h1 style={{fontSize:"20px",color:"red"}}></h1></b></center>{search}
     
            <h1> 
                 temperature: <b>{city.temp}</b><br/>
                    humidity: <b>{city.humidity}</b>
                 </h1>
          <h3>
             Min:<b>5.25cel</b> | max:<b>5.25cel</b>
             </h3>
            </div>
            </div>
        )}  
      </div>
      </div>
</div>
  )
}

export default Temp
