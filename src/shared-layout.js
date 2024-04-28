 import { Outlet } from "react-router-dom";
 function SharedLayout(){
    return <>
    <h1>this is the shared layout that appears every where</h1>
    <Outlet/>
    </>
 }
 export default SharedLayout;