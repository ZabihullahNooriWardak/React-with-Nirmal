import React, { useState } from "react";
import About from "./About";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";

function App() {
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about"  element={<About/>} />
            </Routes>
        </>
    )
}

export default App;
