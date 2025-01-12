import React,{useState} from "react";
import './Style.css';

export default function TipsCalc()
{
    const myStyle={
        textAlign:"center",
        fontStyle:'oblique',
        backgroundImage:"url('https://img.freepik.com/free-photo/school-supplies-table-composition_23-2148939176.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        color:"white",
        fontSize:"18px"
    }

    const [totalprice,setTotalprice]=useState();
    const [tip,setTip]=useState();
    const [person,setPerson]=useState(1);
    const [totaltip,setTotaltip]=useState();
    const [totalwithtip,setTotalwithtip]=useState();
    const [tipperson,setTipperson]=useState();
    const [totalperson,setTotalperson]=useState();

    const estimate=()=>{
        const estimatedtip=(totalprice*tip)/100;
        setTotaltip(estimatedtip.toFixed(2))
        const amtincludetip=totalprice+estimatedtip;
        setTotalwithtip(amtincludetip.toFixed(2))
        const eachpersontip=estimatedtip/person;
        setTipperson(eachpersontip.toFixed(2))
        const eachpersontotalamt=amtincludetip/person;
        setTotalperson(eachpersontotalamt.toFixed(2))
    }

    return(
        <>
        <div style={myStyle}>
        <h1>Tips Calculator</h1>
        <div className="demo">
            <label>Total Price</label><br/>
            <input 
            type="number" 
            style={{padding:10}} 
            value={totalprice} 
            onChange={(e)=>setTotalprice(parseFloat(e.target.value))}/>
        </div>

        <div className="demo">
            <label>Tips</label><br/>
            <input 
            type="number" 
            style={{padding:10}} 
            placeholder="%"
            value={tip} 
            onChange={(e)=>setTip(parseFloat(e.target.value))}/>
        </div>

        <div className="demo">
            <label>Total Person</label><br/>
            <input 
            type="number" 
            style={{padding:10}} 
            value={person} 
            onChange={(e)=>setPerson(e.target.value)}/>    
        </div>

        <button onClick={estimate} style={{marginTop:"15px",padding:"12px",fontStyle:"oblique",width:"200px",borderRadius:"20px",backgroundColor:"#FED8B1"}}>Estimate</button>

        <div>
            <h3>Estimated Tip : Rs {totaltip}</h3>
            <p>Total amount including tip : Rs {totalwithtip}</p>
            <p>Tip per person : Rs {tipperson}</p>
            <p>Total amount per person : Rs {totalperson}</p>
        </div>
        </div>
        </>
    )
}