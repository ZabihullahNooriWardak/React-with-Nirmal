import React from "react";
 function App() {
  //practicing map function of array in jsx
  
  let myArr = ["apple","pear","banana","orange","tangenraen"]
  let myFunc = (<div>
    {myArr.map((item,index)=><li key={index.toString()}>{item}</li>)}
  </div>);
  return myFunc;
}
export default App;



