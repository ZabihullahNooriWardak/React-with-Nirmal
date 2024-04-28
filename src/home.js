import { Link } from "react-router-dom";
function Home(){

    return <>
        <nav>
            <ul> 

  <li>
    <Link to="/about">about</Link>
    </li> 
    <li> 

  <Link to="/profile">profile</Link>
    </li>
  </ul>
    </nav>
    </>
}
export default Home;