import React, {  useContext, useState } from "react";
import counterContext from "./store/counter-context";
function Home() {
  let defaultV=useContext(counterContext)
    return (
        <>
           <h1>{defaultV.counterV}</h1>
            <button onClick={() => {  defaultV.setCounterV(defaultV.counterV+1) }}>increment</button>
            <button onClick={() => { defaultV.setCounterV(defaultV.counterV+1) }}>decrement</button>
       
        </>
    )
}

export default Home;
