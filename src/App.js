import React from "react"
import { BrowserRouter,Route,Routes,Link,NavLink } from "react-router-dom"
import BookList from "./BookList"
import Home from "./Home"
import Book from "./Book"
import NewBook from "./NewBook"
import NotFound from "./NotFound"
function App(){
  return <BrowserRouter>
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
<Route path="/books" >
  <Route index element={<BookList />}/>
  <Route path=":id" element={<Book/>} />
  <Route path="new" element={<NewBook/>} />
  </Route>
<Route path="*"  element={<NotFound />} />
</Routes>
  </BrowserRouter>
}
export default App;