import React, { useState } from 'react';
import "./App.css"
function App(){
     let [date,setDate]=useState(new Date())
let myFunction=()=>{
  setTimeout(() => {
    setDate(new Date());
       }, 1000)
}
myFunction();
  return (<div>
{date.toLocaleTimeString()}
  </div>)
}
export default App;





