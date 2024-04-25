import React from "react";
import { useState } from "react";
function Home(){
    let [counter,setCounter]=useState(0);
    return (
        <>
        <h1>{counter}</h1>
 <button onClick={()=>{setCounter(counter+1)}}>increment</button>
 <button onClick={()=>{setCounter(counter-1)}}>decrement</button>
        </>
    )
}
export default Home;