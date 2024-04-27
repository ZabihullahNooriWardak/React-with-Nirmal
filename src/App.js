import React, { useState } from "react";
import About from "./About";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";

function App() {
    let [counter, setCounter] = useState(0);
   let loc= useLocation()
    let dataTopass = { data: counter };
    return (
        <>
            <ul>
                <li><Link to="/" state="hi">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>

            <Routes>
                <Route path="/" element={<Home  st={loc.state} counter={counter} setCounter={setCounter} />} />
                <Route path="/about"  element={<About counter={counter}/>} />
            </Routes>
        </>
    )
}

export default App;
