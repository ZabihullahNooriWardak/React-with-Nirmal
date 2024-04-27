import React, { useContext } from "react";
import counterContext from "./store/counter-context";
import counterContext from "./store/counter-context";
import About from "./About";
function Home() {
    let [counter, setCounter] = useState(0);
    return (
        <>
            <h1>{counterContext}</h1>
            <button onClick={() => { setCounter(counter+1) }}>increment</button>
            <button onClick={() => { setCounter(counter-1) }}>decrement</button>
            <counterContext.provider value={counter} >
            <Home/>
            <About/>
            </counterContext.provider>
        </>
    )
}

export default Home;
