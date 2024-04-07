import React from 'react';
import { useState } from 'react';
import './App.css';

function App(){
    let [counter,setCounter]=useState(0);
  
  return (<div>
   <p> this is my Counter : {counter}</p>
   <button onClick={setCounter(counter+=1)}>click</button>
  </div>)
}

export default App;
