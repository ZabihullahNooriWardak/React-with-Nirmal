import React from "react";
 function App() {
  //practicing map function of array in jsx
  let myArr = ["apple","pear","banana","orange"]
  return <div>
    {myArr.map((item)=><li>{item}</li>)}
  </div>;
}
export default App;
