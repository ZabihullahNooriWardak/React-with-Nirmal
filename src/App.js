import React, { useState } from "react"
import About from "./About"
import { Link,NavLink,Route,Routes } from "react-router-dom";
import Home from "./Home";
function App(){
 
 return(<>
  <ul>
    <li><Link to="/home">Home</Link></li>
    <li><Link to="/about">About</Link></li>
  </ul>
 
 <Routes>
  <Route  path="/home" element={<Home/>}/>
  <Route  path="/about" element={<About/>}/>
 </Routes>
 </>

  )
}
export default App;