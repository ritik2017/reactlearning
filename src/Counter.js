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
            <h1>{count}</h1>
            <button onClick={increase}>Increase count</button>
            <button onClick={decrease}>Decrease count</button> 
        </div>
    )
}

export function AutoCounter() {
    let [count, setCount] = React.useState(0);

    // Mounting
    React.useEffect(() => {
        let interval = setInterval(() => {
            setCount((count) => count + 1);
        }, 1000);

        const stopButton = document.querySelector('.stop_button');

        stopButton.addEventListener('click', () => {
            clearInterval(interval);
        })
    }, []);
    
    return (
        <div>
            <p>{count}</p>
            <button className="stop_button">Stop Counter</button>
        </div>
    )
}


export function AutoCounter2() {
    let [count, setCount] = React.useState(0);

    const startCounter = () => {
        let interval = setInterval(() => {
            setCount((count) => count + 1)
        }, 1000);

        const startButton = document.querySelector('.start_button');

        startButton.setAttribute('disabled', true);

        const stopButton = document.querySelector('.stop_button');
        const resetButton = document.querySelector('.reset_button');

        stopButton.addEventListener('click', () => {
            clearInterval(interval);    
            startButton.removeAttribute('disabled');
        })

        resetButton.addEventListener('click', () => {
            clearInterval(interval);
            setCount(0);
            startButton.removeAttribute('disabled');
        })
    }
    
    return (
        <div>
            <p>{count}</p>
            <button className="start_button" onClick={startCounter}>Start Counter</button>
            <button className="stop_button">Stop Counter</button>
            <button className="reset_button">Reset Counter</button>
        </div>
    )
}

// Form using react
// Name, email, password, username 