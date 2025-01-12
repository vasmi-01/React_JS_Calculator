import React,{useState} from "react";

export default function CalculateGST()
{
    const myStyle={
        textAlign:"center",
        fontStyle:'oblique',
        backgroundImage:"url('https://img.freepik.com/premium-photo/accounting-documents-calculator-pen-beige-background_999671-83506.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        color:"black",  
    }
    const divStyle={
        width:"300px",
        marginLeft:"480px",
        padding:"20px",
        marginTop:"100px"
    }

    const [amount,setAmount]=useState();
    const [gst,setGst]=useState();
    const [gstvalue,setGstvalue]=useState();
    const [totalamt,setTotalamt]=useState();

    const clickgst=()=>{
        const gstoutput=(amount*gst)/100;
        setGstvalue(gstoutput.toFixed(2))
        const includegst=amount+gstoutput;
        setTotalamt(includegst)
    }

    return(
        <>
        <div style={myStyle}>
        <div style={divStyle}>
        <h1 style={{marginLeft:"75px",marginTop:"60px"}}>GST Calculator</h1>

        <div style={{fontSize:"20px"}}>
            <label>Amount</label><br/>
            <input 
            type="number" 
            placeholder="Rs"
            style={{padding:11,width:180}} 
            value={amount} 
            onChange={(e)=>setAmount(parseFloat(e.target.value))}/>
        </div>

        <div style={{marginTop:"30px",fontSize:"20px"}}>
            <label>GST Rate</label><br/>
            <input 
            type="number" 
            style={{padding:11,width:180}} 
            placeholder="%"
            value={gst} 
            onChange={(e)=>setGst(parseFloat(e.target.value))}/>
        </div>
      
        <button onClick={clickgst} style={{marginTop:30,padding:9,fontStyle:"oblique",marginLeft:"100px",width:"180px",borderRadius:"20px",backgroundColor:"#D7B38C",borderColor:"black"}}>Calculate GST</button>

        <div style={{marginLeft:"70px",marginTop:"30px",fontSize:"large",fontWeight:"bolder",color:"black"}}>
            <p>GST Amount - Rs {gstvalue}</p>
            <p>Total Amount - Rs {totalamt}</p>
        </div>
        </div>
        </div>

        </>
    )
    
}