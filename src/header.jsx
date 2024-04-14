import React from "react";
function Header() {
    console.log("Header .....")
    let myHeaderStyle={border:"2px solid grey",color: "grey",width:"50%"}
  return (
    <div>
      <h1 style={myHeaderStyle}>This is the Header of the Application  </h1>
    </div>
  );
}
export default Header;
