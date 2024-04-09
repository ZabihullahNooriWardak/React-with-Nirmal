import React from 'react';
import { useState } from 'react';
import "./App.css"
function App(){
    let [obj,setObj]=useState({counter:0,booleanVale:true});
function counterFunction(op){
  if(op==='+'){
    setObj({...obj,counter:obj.counter+1})
  }else{

setObj({...obj,counter:obj.counter-1})
  }
}
  return (<div>
   <p> this is my Counter : {obj.counter}</p>
   <button className="st" onClick={()=>counterFunction('+')}>increment</button>
   <button style={{height:"50px",width:"80px",backgroundColor:"blue"}} onClick={()=>counterFunction('-')}>decrement</button>
   <h1>{obj.booleanVale.toString()}</h1>
   <button onClick={()=>setObj({...obj,booleanVale:!obj.booleanVale})}>toggle</button>
  </div>)
}

export default App;





