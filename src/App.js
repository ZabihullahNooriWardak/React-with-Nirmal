import React, { useState } from "react";

function App() {
  const[allDate,setData]=useState({name:"",gender:"",status:"",mobile:"",showingStatus:false});
   
  function formHandler(e){
     e.preventDefault();
     setData((prevState)=>({...prevState,showingStatus:true}))
  }
 
  function chkBoxHandler(e){
    if(e.target.checked){
    setData((prevState=>({...prevState,status:"married"})))
    }else{
      setData((prevState=>({...prevState,status:"single"})))
    }
  }
  function genderHandler(e){
    setData((prevState=>({...prevState,[e.target.name]:e.target.value})))
  }
  return (
    <React.Fragment> 
  <form onSubmit={formHandler}>
  <span>Employee Name</span>  <input name="name" onChange={genderHandler} type="text" ></input>
    <br></br>
 <span>Gender</span> <input name="gender" type="radio"  onChange={genderHandler} value="male" ></input>Male
 <input onChange={genderHandler} type="radio" name="gender" value="female"></input>female
    <br></br>
   <span>Married</span> <input onChange={chkBoxHandler} type="checkbox"  ></input>
    <br></br> 
    Mobile : <input name="mobile" onChange={genderHandler} type="text"></input>
    <br></br>
    <input type="submit" value="submit"></input>
  </form>
  {allDate.showingStatus?<div>{(JSON.stringify(allDate))}</div>:false}
    </React.Fragment>
  );
}

export default App;
