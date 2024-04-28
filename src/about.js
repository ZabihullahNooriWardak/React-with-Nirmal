import React from "react";
function About({children}) {
  return <div>
    <h1>About</h1>
    <p>React is a JavaScript library for building user interfaces.</p>
    <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
 {children}
  </div>;
}
export default About;