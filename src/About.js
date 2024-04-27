import React, { useContext } from "react";
import counterContext from "./store/counter-context";
const About = () => {
  let  cContext=useContext(counterContext)
  return (
     <div>
      <h1>About Page</h1>
      <p>and the value of counter is : {cContext.counterV}</p>
    </div>
  );
};

export default About;
