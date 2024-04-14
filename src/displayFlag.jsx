import React from "react";
function Flag(props){
    console.log("Flag is called ........");
    return <div>
        <h3>The Flage value is :{props.flagValue} </h3>
    </div>
}
export default React.memo(Flag)