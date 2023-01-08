import React from "react";

export default function Effect() {
    let [value, setValue] = React.useState(0);
    let [count, setCount] = React.useState(0); 

    console.log("Hello from Effect");

    function updateValue() {
        setValue(value + 100);
    }

    function updateCount() {
        setCount(count + 1);
    }

    // Mounting
    React.useEffect(() => {
        console.log("Hello from use effect");
    }, []);

    // Updation of value state
    React.useEffect(() => {
        console.log("The value state has changed");
    }, [value]);

    return (
        <div>
            <p>Value: {value}</p>
            <p>Count: {count}</p>
            <button onClick={updateValue}>Update Value</button>
            <button onClick={updateCount}>Update Count</button>
        </div>
    )
}