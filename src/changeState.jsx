import React from "react";
function MyButton(props){
    console.log("myButton is called ........");
return (
    <div>
        <button onClick={props.clickHandler}>{props.buttonName}</button>
    </div>
)
}
export default React.memo(MyButton);