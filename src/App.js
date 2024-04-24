import React from "react"
import { BrowserRouter,Route,Routes,Link,NavLink } from "react-router-dom"
import BookList from "./BookList"
import Home from "./Home"
import Book from "./Book"
import NewBook from "./NewBook"
import NotFound from "./NotFound"
import SharedBookLayout from "./SharedBookLayout"
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
<Route  element={<SharedBookLayout/>}>
  <Route path="/books" element={<BookList />}/>
  <Route path="/books/:id" element={<Book/>} />
  <Route path="/books/new" element={<NewBook/>} />
  </Route>
<Route path="*"  element={<NotFound />} />
</Routes>
  </BrowserRouter>
}
export default App;