import React from "react";
function MyButton(props){
return (
    <div>
        <button onClick={props.clickHandler}>{props.buttonName}</button>
    </div>
)
}
export default MyButton;