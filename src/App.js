import React from "react"
import { BrowserRouter,Route,Routes,NavLink, useRoutes } from "react-router-dom"
import Home from "./Home"
import BookRoutes from "./BookRoutes"
import NotFound from "./NotFound"
import SharedBookLayout from "./SharedBookLayout"
import './someStyle.css'
function App(){
//    let elements=useRoutes([
// {path:"/",element:<Home/>},
// {path:"*",element:<NotFound/>}
//    ]);
  return <BrowserRouter>
  {/* {elements} */}
  {/* <Routes>
    <Route path="/books" element={<h1>Hello afghanistan</h1>}  />
  </Routes> */}
  <ul>
    <li>
  <NavLink style={({isActive})=>{isActive?{color:"red"}:{}}} to="/">Home</NavLink>
    </li>
    <li>
  <NavLink to="/books">Books</NavLink>

    </li>
  </ul>
<Routes>
<Route path="/" element={<Home />}/>
<Route path="/books/*" element={<BookRoutes/>} />
<Route path="*"  element={<NotFound />} />
</Routes>
  </BrowserRouter>
}
export default App;