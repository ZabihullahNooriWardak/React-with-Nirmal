import React from "react";
 function DisplayCounter(props){
    console.log("DisplayCounter is called ........");
    return <div>
        <h3>The counter Value is : {props.counterValue}</h3>
    </div>
}
export default React.memo(DisplayCounter)