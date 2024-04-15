import React, { useState } from "react";

function App() {
  let [firstName,setFirstName]=useState("")
  let [lastName,setLastName]=useState("")
  let [mobile,setMobile]=useState("")
  let [allData,setAllData]=useState("No data yet")
function FirstName(e){
  setFirstName(e.target.value)
}
function LastName(e){
  setLastName(e.target.value)
}
function Mobile(e){
  setMobile(e.target.value)
}
function submission(e){
  e.preventDefault();
setAllData(firstName+","+lastName+","+mobile);
}
  return (
    <React.Fragment>
  <form onSubmit={submission}>
    <input type="text" placeholder="First name" onChange={FirstName}></input>
    <br></br>
    <input type="text" placeholder="last name" onChange={LastName}></input>
    <br></br>
    <input type="text" placeholder="Mobile number" onChange={Mobile}></input>
    <br></br>
    <input type="submit" value="submit"></input>
  </form>
  {allData}
    </React.Fragment>
  );
}

export default App;
