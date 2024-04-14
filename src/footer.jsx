import React from "react";
function Footer(){
    console.log("Footer is called ........");
    let footerStyle={width:"50%",border:"2px solid red",color:"red"}
    return <div>
        <h1 style={footerStyle}>This is the Footer of the Application</h1>
    </div>
}
// export {Footer};
export default React.memo(Footer)