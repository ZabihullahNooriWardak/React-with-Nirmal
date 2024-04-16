import React, { useState } from "react";
import Product from "./components/products"
function App() {
  let [isAdmin,setIsAdmin]=useState(true);
 function chkBoxHandler(e){
    setIsAdmin(e.target.checked)
  }
  
  return<div>
  <input type="checkbox" onChange={chkBoxHandler}></input><label>is admin?</label>
  <hr></hr>
  <Product isAdmin={isAdmin}/>
  </div>
  
}
export default App;
