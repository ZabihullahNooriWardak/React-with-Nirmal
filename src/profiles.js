import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
function Profile(){
    let arr=[1,2,3,4,5,6,7,8,9,10]
   let counterValue= useSelector(state=>state)
    return <>
    {arr.map((item,index)=><Link to={`/profile/${item}`} key={index}>{`profile${item}`}<br></br></Link>)}
    <Outlet/>
    <h1>{counterValue}</h1>
    </>
}
export default Profile;