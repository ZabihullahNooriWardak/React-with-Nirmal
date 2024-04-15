import React from "react";
function CustomComponent(props){
    return <div>
      {/* {JSON.stringify(props)} */}
        <h1>{props.data}</h1>
        <p>{props.children}</p>
    </div>
}
export default CustomComponent;