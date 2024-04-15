import React, { useState } from "react";
 function App() {
  let [paragraph,setParagraph]=useState("");
  let txtBox=(e)=>{
    setParagraph(e.target.value);
  }
  return <React.Fragment>
    <p>the TextBox data is here : {paragraph}</p>
     <input onChange={txtBox}></input>
  </React.Fragment>
}
export default App;



