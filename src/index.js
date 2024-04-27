import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import counterContext from './store/counter-context';

let [counterV,setCounterV]=useState(0)
ReactDOM.render(
  
  <BrowserRouter>
        <counterContext.Provider value={{counterV,setCounterV}}>
<App />
</counterContext.Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
