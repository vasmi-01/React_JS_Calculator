import React, { useState } from "react";

export default function SimpleInterest()
{
    const[principal,setPrincipal]=useState()
    const[rate,setRate]=useState()
    const[time,setTime]=useState()
    const[interest,setInterest]=useState()

    const calculateinterest =()=>{
        const si=(principal*rate*time)/100;
        setInterest(si)
    }

    return(
        <>
        <div>
            <label>Principal</label>
            <input 
            type="number" 
            value={principal} 
            onChange={(e)=>setPrincipal(parseFloat(e.target.value))}/>
        </div>

        <div>
            <label>Rate</label>
            <input 
            type="number" 
            value={rate} 
            onChange={(e)=>setRate(parseFloat(e.target.value))}/>
        </div>

        <div>
            <label>Time</label>
            <input 
            type="number" 
            value={time} 
            onChange={(e)=>setTime(parseFloat(e.target.value))}/>
        </div>

        <button onClick={calculateinterest}>Calculate</button>

        <h1>Simple Interest : Rs {interest.toFixed(2)}</h1>
        </>
    )
}