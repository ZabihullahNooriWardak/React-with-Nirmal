import React from "react";
import { Link, Routes,Route } from "react-router-dom";
import About from "./about";
import Profile from "./profiles";
import ProfileDetail from "./profileDetail";
import Home from "./home";
import SharedLayout from "./shared-layout";
function App() {
    return (
    <>
    <nav>
        <ul>
            <li>
                <Link style={{marginRight:"5px"}} to="/">Home</Link>
                <Link style={{marginRight:"5px"}} to="/about">About</Link>
                <Link style={{marginRight:"5px"}} to="/profile">Profile</Link>
            </li>
        </ul>
    </nav>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route element={<SharedLayout/>}>
    <Route path="/about" element={<About/>}/>
    <Route path="/profile" element={<Profile/>}>
     <Route path=":id" element={<ProfileDetail/>}/>
     </Route>
    </Route>

</Routes>
    </>
    )
}

export default App;
