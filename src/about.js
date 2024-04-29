import React from "react";
import { useDispatch, useSelector } from "react-redux";
function About({children}) {
  const count = useSelector((state) => state);
    let disp=useDispatch()
  return <div>
    <h1>About</h1>
    <p>Count: {count}</p>
    <button onClick={()=>{disp({type:"INCREMENT"})}}>INCREMENT</button>
   <button onClick={()=>{disp({type:"DECREMENT"})}}>DECREMENT</button>
    <p>React is a JavaScript library for building user interfaces.</p>
    <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
 {children}
  </div>;
}
export default About;