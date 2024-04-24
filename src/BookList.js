import React from "react";
import { Link } from "react-router-dom";
function BookList(){
    return <>
    <h1>here is the booklist page . </h1>
    <h2><Link to="/books/1">Book1</Link></h2>
    <h2><Link to="/books/2">Book2</Link></h2>
    <h2><Link to="/books/new">new book</Link></h2>

    </>
}
export default BookList;