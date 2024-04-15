import React, { useState } from "react";

function App() {
  const [paragraph, setParagraph] = useState("");
  
  const txtBox = (additionalParameter) => (e) => {
    // You can access both the event object (e) and the additional parameter here
    console.log("Event:", e);
    console.log("Additional Parameter:", additionalParameter);
    setParagraph(e.target.value);
  }

  return (
    <React.Fragment>
      <p>The TextBox data is here: {paragraph}</p>
      <input onChange={txtBox("additionalParameter")} />
    </React.Fragment>
  );
}

export default App;
