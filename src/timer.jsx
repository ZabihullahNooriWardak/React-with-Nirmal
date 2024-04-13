    import React, { useEffect, useState } from "react";
    function Currenttiming(){
        let [date,setDate]=useState(new Date().toString());
      
        useEffect(()=>{
            let timer=setInterval(() => {   
                setDate(new Date().toString());
            }, 1000);
            return ()=>{
                console.log("clean up code goes here");
                clearInterval(timer);
            }
        },[])
        return (
            <div>
            <h1>{date} </h1>
           
            </div>
        )
    }
    export default Currenttiming;