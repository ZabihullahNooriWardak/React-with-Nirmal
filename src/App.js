import React, { useState } from "react";
function App() {
    let sty={width:"300px",height:"300px",backgroundColor:"black"}
    let darkTheme=useState(true)
    return (
    <>
    <br></br>
       <div style={sty}>
       </div>
       <br></br>
       <button>change theme</button>
    </>
    )
}

export default App;
