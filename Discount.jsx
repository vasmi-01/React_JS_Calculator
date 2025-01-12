import React,{useState} from "react";

export default function Discount()
{
    const myStyle={
        textAlign:"center",
        fontStyle:'oblique',
        backgroundImage:"url('https://t4.ftcdn.net/jpg/04/35/21/27/360_F_435212700_7vEpXPO3dDWyKtgssu1IoHYTzUxEilDf.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        color:"black"
    }
    const divStyle={
        width:"330px",
        marginLeft:"410px",
        padding:"20px",
        marginTop:"30px"
    }

    const [originalprice,setOriginalprice]=useState();
    const [discountpercent,setDiscountpercent]=useState();
    const [payamount,setPayamount]=useState();
    const [savingamt,setSavingamt]=useState();

    const calculate=()=>{
        const totalamt=(originalprice*discountpercent)/100
        const yourpay=originalprice - totalamt
        setPayamount(yourpay)
        setSavingamt(totalamt)
    }

    return(
        <>
        <div style={myStyle}>
        <h1 style={{marginTop:"20px"}}>Discount Calculator</h1>
        <div style={divStyle}>
        
        <div style={{fontSize:"larger"}}>
        <label style={{marginLeft:"100px"}}>Original Price</label><br/>
        <input
         type="number" 
         style={{padding:11,width:180}} 
         value={originalprice} 
         placeholder="Rs" 
         onChange={(e)=>setOriginalprice(parseFloat(e.target.value))}/>
        </div>

        <div style={{marginTop:"30px",fontSize:"larger"}}>
        <label style={{marginLeft:"100px"}}>Discount Percent</label><br/>
        <input 
        type="number" 
        style={{padding:11,width:180}} 
        value={discountpercent} 
        placeholder="%" 
        onChange={(e)=>setDiscountpercent(parseFloat(e.target.value))}/>  
        </div>

        <button onClick={calculate} style={{marginTop:30,padding:9,fontStyle:"oblique",marginLeft:"120px",borderRadius:15,backgroundColor:"skyblue",borderColor:"black"}}>Calculate</button>

        <div style={{marginLeft:100,fontWeight:"bold",fontSize:"large"}}>
            <p>You Pay : Rs {payamount}</p>
            <p>You're Saving : Rs {savingamt}</p>
        </div>
        </div>
        </div>
        </>
    )
}