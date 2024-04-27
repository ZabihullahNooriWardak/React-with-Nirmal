import React from "react";
import counterContext from "./store/counter-context";
const About = () => {
  let counterContext= useContext(counterContext);
  return (
    <div>
      <h1>About Page</h1>
      <p>{counterContext}</p>
    </div>
  );
};

export default About;
