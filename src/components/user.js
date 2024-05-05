
import { useState } from "react";
  function User(){
    let [users,setUsers]=useState([]);
function userHandler(){
fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((data)=>{
    setUsers(data);
})
}
    return (
      <div>
        <button onClick={userHandler}> Fetch Users data</button>
        {users.map((user)=>{
            return <div key={user.id}>{user.name}</div>
        })}
      </div>
    );
  }
  export default User;