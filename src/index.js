import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import counterContext from './store/counter-context';

const Index = () => {
    const [counterV, setCounterV] = React.useState(0);

    return (
        <BrowserRouter>
            <counterContext.Provider value={{ counterV, setCounterV }}>
                <App />
            </counterContext.Provider>
        </BrowserRouter>
    );
};

ReactDOM.render(<Index />, document.getElementById('root'));
