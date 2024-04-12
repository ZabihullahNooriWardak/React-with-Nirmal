import React, { useEffect, useState } from 'react';
import "./App.css"
function App(){
     let [date,setDate]=useState(new Date())
useEffect(function(){
    setTimeout(() => {
 setDate(new Date());
    }, 1000);
});
  return (<div>
{date.toLocaleTimeString()}
  </div>)
}
export default App;





