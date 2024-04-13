    import React, { useEffect, useState } from "react";
    function Currenttiming(){
        let [date,setDate]=useState(new Date().toString());
        let [showTimer,setShowTimer]=useState(true);
        useEffect(()=>{
            let timer=setInterval(() => {
                
                setDate(new Date().toString());
            }, 1000);
            return ()=>{
                console.log("clean up code goes here");
                clearInterval(timer);
            }
        },[showTimer])
        return (
            <div>
            <h1>{showTimer ? date: (<p>No Clock and date to display</p>)} </h1>
            <button onClick={()=>setShowTimer(!showTimer)}>Hide or show the Timer</button>
            </div>
        )
    }
    export default Currenttiming;