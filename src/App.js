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
   <button onClick={()=>counterFunction('+')}>increment</button>
   <button onClick={()=>counterFunction('-')}>decrement</button>
  </div>)
}

export default App;





