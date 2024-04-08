import React from 'react';
import { useState } from 'react';
import './App.css';

function App(){
    let [counter,setCounter]=useState(0);
function counterFunction(op){
  if(op==='+'){
    setCounter(counter+1)
  }else{
    setCounter(counter-1)
  }
}
  return (<div>
   <p> this is my Counter : {counter}</p>
   <button className="st" onClick={()=>counterFunction('+')}>increment</button>
   <button style={{height:"50px",width:"80px",backgroundColor:"blue"}} onClick={()=>counterFunction('-')}>decrement</button>
  </div>)
}

export default App;





