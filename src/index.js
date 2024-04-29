import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
   import store from './store';
import { Provider } from 'react-redux';
const root =createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
<Provider store={store}>
    <App/>
    </Provider>
    </BrowserRouter>
)
