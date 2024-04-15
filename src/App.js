import React, { useState } from "react";

function App() {
const [persInfo,setpersInfo]=useState({name:"",lastname:"",mobile:""})
function FirstName(e){
setpersInfo({...persInfo,name:e.target.value})
}
function LastName(e){
  setpersInfo({...persInfo,lastname:e.target.value})
}
function Mobile(e){
  setpersInfo({...persInfo,mobile:e.target.value})
}
  return (
    <React.Fragment>
  <form>
    <input type="text" placeholder="First name" onChange={FirstName}></input>
    <br></br>
    <input type="text" placeholder="last name" onChange={LastName}></input>
    <br></br>
    <input type="text" placeholder="Mobile number" onChange={Mobile}></input>
    <br></br>
    <input type="submit" value="submit"></input>
  </form>
  {JSON.stringify(persInfo)}
    </React.Fragment>
  );
}

export default App;
