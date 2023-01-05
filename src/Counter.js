import React from "react";

export default function Counter() {
    let [count, setCount] = React.useState(0);

    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        setCount(count - 1);
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={increase}>Increase count</button>
            <button onClick={decrease}>Decrease count</button> 
        </div>
    )
}