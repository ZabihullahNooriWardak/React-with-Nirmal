import { Link, Outlet } from "react-router-dom";
function Profile(){
    let arr=[1,2,3,4,5,6,7,8,9,10]
    return <>
    {arr.map((item,index)=><Link to={`/profile/${item}`} key={index}>{`profile${item}`}<br></br></Link>)}
    <Outlet/>
    </>
}
export default Profile;