import React,{useState} from "react";
import './Style.css';

export default function SalaryCalculator()
{
    const myStyle={
        textAlign:"center",
        fontStyle:'oblique',
        backgroundImage:"url('https://www.shutterstock.com/image-vector/3d-calculator-financial-icon-money-260nw-2425881025.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        color:"black",
        fontSize:"18px"
    }

    const[monthlysalary,setMonthlysalary]=useState();
    const[workingdaysmonth,setWorkingdaysmonth]=useState();
    const[workinghours,setWorkinghours]=useState();
    const[workingweeks,setWorkingweeks]=useState();
    const[daysworkedmonth,setDaysworkedmonth]=useState();
    const[hourly,setHourly]=useState();
    const[daily,setDaily]=useState();
    const[weekly,setWeekly]=useState();
    const[actualsal,setActualsal]=useState();

    const calculate=()=>{
        const hourlysal= monthlysalary/(workingdaysmonth*workinghours)
        setHourly(hourlysal.toFixed(2))
        const dailysal= monthlysalary/workingdaysmonth
        setDaily(dailysal.toFixed(2))
        const weeklysal=dailysal*workingweeks
        setWeekly(weeklysal.toFixed(2))
        const actualamt=dailysal*daysworkedmonth
        setActualsal(actualamt.toFixed(2))
    }
    return(
        <>
        <div style={myStyle}>
            <h1>Salary Calculator</h1>

            <div className="demo">
            <label>Monthly Salary</label>
            <input 
            type="number" 
            style={{padding:10}} 
            value={monthlysalary} 
            onChange={(e)=>setMonthlysalary(e.target.value)}/>
            </div>
  
            <div className="demo">
            <label>Working Days in Month</label>
            <input 
            type="number" 
            style={{padding:10}} 
            value={workingdaysmonth} 
            onChange={(e)=>setWorkingdaysmonth(e.target.value)}/>
            </div>

            <div className="demo">
            <label>Working Hours</label>
            <input 
            type="number" 
            style={{padding:10}} 
            value={workinghours} 
            onChange={(e)=>setWorkinghours(e.target.value)}/>
            </div>

            <div className="demo">
            <label>Working Weeks</label>
            <input 
            type="number" 
            style={{padding:10}} 
            value={workingweeks} 
            onChange={(e)=>setWorkingweeks(e.target.value)}/>
            </div>

            <div className="demo">
            <label>Days Worked in Month</label>
            <input 
            type="number" 
            style={{padding:10}} 
            value={daysworkedmonth} 
            onChange={(e)=>setDaysworkedmonth(e.target.value)}/>
            </div>

            <button onClick={calculate} style={{marginTop:"15px",padding:"12px",fontStyle:"oblique",width:"200px",borderRadius:"20px",backgroundColor:"skyblue"}}>Calculate</button>

            <div>
                <p><strong>Hourly Salary : Rs {hourly}</strong></p>
                <p><strong>Daily Salary : Rs {daily}</strong></p>
                <p><strong>Weekly Salary : Rs {weekly}</strong></p>
                <p><strong>Actual Salary : Rs {actualsal}</strong></p>
            </div>
        </div>

        </>
    )
}