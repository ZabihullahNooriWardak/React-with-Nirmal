import React from "react";
import { useParams } from "react-router-dom";
function Book(){
    let myParams=useParams()
    let style={border:"0.7px solid grey"}
    return <h1 style={style}>Book page. and the book number is : {myParams.id}</h1>
}
export default Book;