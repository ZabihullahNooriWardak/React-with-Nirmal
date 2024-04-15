import React, { useState } from "react";

function App() {
  let [paragraph, setParagraph] = useState("");

  let txtBox = (e, additionalParam) => {
    setParagraph(e.target.value);
    console.log("Additional parameter:", additionalParam);
  }

  return (
    <React.Fragment>
      <p>The TextBox data is here: {paragraph}</p>
      <input onChange={(e) => txtBox(e, 123)}></input>
    </React.Fragment>
  );
}

export default App;
