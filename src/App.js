import React from 'react';
import { useState } from 'react';
import './App.css';

function App(){
    let [counter,setCounter]=useState(0);
  let handler=()=>{
    setCounter(counter+=1)
  }
  return (<div>
   <p> this is my Counter : {counter}</p>
   <button onClick={handler}>click</button>
  </div>)
}

export default App;
