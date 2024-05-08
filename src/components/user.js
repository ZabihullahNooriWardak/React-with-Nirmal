
import { useState } from "react";
  function User(){
    let [users,setUsers]=useState([]);
async function userHandler(){
let data=await fetch("https://jsonplaceholder.typicode.com/users");
console.log(data)
let userData=await data.json();
console.log(userData);
setUsers(userData);
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