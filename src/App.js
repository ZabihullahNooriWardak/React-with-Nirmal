import React from "react"
import { BrowserRouter,Route,Routes,Link,NavLink } from "react-router-dom"
import Home from "./Home"
import BookRoutes from "./BookRoutes"
import NotFound from "./NotFound"
import SharedBookLayout from "./SharedBookLayout"
function App(){
  return <BrowserRouter>
  <Routes>
    <Route path="/books" element={<h1>Hello afghanistan</h1>}  />
  </Routes>
  <ul>
    <li>
  <Link to="/">Home</Link>
    </li>
    <li>
  <Link to="/books">Books</Link>

    </li>
  </ul>
<Routes>
<Route path="/" element={<Home />}/>
<Route path="/books/*" element={<BookRoutes/>}>
  </Route>
<Route path="*"  element={<NotFound />} />
</Routes>
  </BrowserRouter>
}
export default App;