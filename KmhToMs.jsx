import React,{useState} from "react";

export default function KmToM()
{
    const myStyle={
        textAlign:"center",
        fontStyle:'oblique',
        backgroundImage:"url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjU0NmJhdGNoMy1teW50LTM0LWJhZGdld2F0ZXJjb2xvcl8xLmpwZw.jpg')",
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

    const [kilo,setKilo]=useState()
    const [m,setM]=useState()

    const convert=()=>{
        const convertvalue=(kilo*5)/18
        setM(convertvalue.toFixed(2))
    }

    return(
        <>
        <div style={myStyle}>
        
         <div  style={divStyle}>
         <h1 style={{marginBottom:20,marginLeft:"80px",marginTop:"90px"}}>Km/hr To M/s</h1>
        <div>
            <label style={{fontSize:"20px",marginLeft:"50px",fontWeight:"bold"}}>Kilometer</label><br/>
            <input 
            type="number" 
            style={{padding:13,width:180}} 
            value={kilo} 
            onChange={(e)=>setKilo(e.target.value)}/>
        </div>

        <button onClick={convert} style={{marginTop:"30px",padding:10,fontStyle:"oblique",marginLeft:"120px",borderRadius:15,backgroundColor:"#FFDBE9"}}>Convert</button>

        <div>
            <p style={{marginLeft:130,fontWeight:"bold",fontSize:"25px"}}>Value : {m}</p>
        </div>
        </div>
        </div>

        </>
    )
}