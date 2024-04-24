import { Route, Routes } from "react-router-dom";
import Book from "./Book"
import NewBook from "./NewBook"
import BookList from "./BookList"
import SharedBookLayout from "./SharedBookLayout";
function BookRoutes(){
    return <>
 
  <Routes>
    <Route element={  <SharedBookLayout />}>
  <Route index element={<BookList />}/>
  <Route path=":id" element={<Book/>} />
  <Route path="new" element={<NewBook/>} />
    </Route>
  </Routes>
    </>
}
export default BookRoutes;