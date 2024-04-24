import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
function SharedBookLayout(){
    return <>

     <h2><Link to="/books/1">Book1</Link></h2>
    <h2><Link to="/books/2">Book2</Link></h2>
    <h2><Link to="/books/new">new book</Link></h2>
    <Outlet context={{hello:"world"}}/>

    </>
}
export default SharedBookLayout;