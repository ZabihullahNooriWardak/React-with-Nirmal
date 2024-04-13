import React,{useState} from 'react';
import Currenttiming from './timer';
import "./App.css"
function App(){
 let [showTimer,setShowTimer]=useState(true);
  return (<div>
    {showTimer?   <Currenttiming />:<h1>No date and clock</h1>}
    <button onClick={()=>setShowTimer(!showTimer)}>Hide or show the Timer</button>
  </div>
  
)
}
export default App;






