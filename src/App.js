import React, { useState } from "react";

function App() {
const [persInfo,setpersInfo]=useState({name:"",lastname:"",mobile:""})
function onchangeMethod(e){
setpersInfo({...persInfo,[e.target.name]:e.target.value})
}

  return (
    <React.Fragment>
  <form>
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
