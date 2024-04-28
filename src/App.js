import React, { createContext, useContext, useState } from "react";
let themeContext=createContext(true)
function App() {
    let themecontext= useContext(themeContext)
    let mmm=useContext(themeContext)
    console.log(mmm)
    let [darkTheme,setDarkTheme]=useState(true)
    let sty={width:"300px",height:"300px",backgroundColor:darkTheme?"black":"yellow"}
    function darkThemeChange(){
        setDarkTheme(!darkTheme)
    }
    return (
    <>
    <themeContext.Provider value={darkTheme}>
    <br></br>
       <div style={sty}>
       </div>
       <br></br>
       {mmm.toString()}<br></br>
       <button onClick={darkThemeChange}>change theme</button>
        </themeContext.Provider>
    </>
    )
}

export default App;
