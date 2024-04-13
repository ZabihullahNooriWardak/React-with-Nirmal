import React, { useEffect, useState } from "react";
function currentTime(){
    let [date,setDate]=useState(new Date().toLocaleDateString());
    useEffect(()=>{
        let timer=setTimeout(() => {
            setDate(new Date().toLocaleDateString());
        }, 1000);
        return ()=>{
            console.log("clean up code goes here");
            clearTimeout(timer);
        }
    },[])
    return (
        <h1>{new Date().toLocaleDateString()}</h1>
    )
}