import React, { useState } from "react";
import Header from "./header";
import {Footer} from "./footer"
import { DisplayCounter } from "./displayCount";
import { Flag } from "./displayFlag";
import MyButtonnn from "./changeState";
export function App() {
  let [counter,setCounter]=useState(0);
  let [flag,setFlag]=useState(true);
  function counterHandler(){
    setCounter(counter+1);
  }
  function flagHandler(){
    setFlag(!flag);
  }
  return <div>
    <Header />
   <DisplayCounter counterValue={counter} />
   <Flag flagValue={flag.toString()}/>
   <MyButtonnn buttonName="CounterButton" clickHandler={counterHandler}/>
   <MyButtonnn buttonName="FlagButton" clickHandler={flagHandler} />
    <Footer />
  </div>;
}
export default App;
