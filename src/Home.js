import React from "react";

function Home(props) {
    return (
        <>
            <h1>{props.counter}</h1>
            <button onClick={() => { props.setCounter(props.counter + 1) }}>increment</button>
            <button onClick={() => { props.setCounter(props.counter - 1) }}>decrement</button>
            <br></br>
            {props.st}
        </>
    )
}

export default Home;
