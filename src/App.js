import Purchase from "./purchase";
import Login from "./login";
import Cart from "./cart";
import Total from "./total";
import React from "react";
import './App.css';
function App() {
    return (
      <div className="App">
        <Login/>
        <Purchase/>
        <Cart/>
        <Total/>
      </div>
    );
  }
  
  export default App;