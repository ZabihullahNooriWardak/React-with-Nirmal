import React, { useState } from "react";

function App() {
const [persInfo,setpersInfo]=useState({name:"",lastname:"",mobile:""})
function onchangeMethod(e){
  setpersInfo((pState)=>({...pState,[e.target.name]:e.target.value}))
}
function myFunc(e){
  e.preventDefault();
}
  return (
    <React.Fragment>
  <form onSubmit={myFunc}>
    <input type="text" placeholder="First name" name="name" onChange={onchangeMethod}></input>
    <br></br>
    <input type="text" placeholder="last name" name="lastname" onChange={onchangeMethod}></input>
    <br></br>
    <input type="text" name="mobile" placeholder="Mobile number" onChange={onchangeMethod}></input>
    <br></br>
    <input type="submit" value="submit"></input>
  </form>
  {JSON.stringify(persInfo)}
    </React.Fragment>
  );
}

export default App;
