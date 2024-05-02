import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createRoot } from 'react-dom/client';
import { combineReducers } from 'redux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import productReducer from './store/productR';
import loginReducer from './store/loginSlice';
const rootReducer=combineReducers({
pr:productReducer,
lr:loginReducer
});
 const store=createStore(rootReducer);

const root =createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)
