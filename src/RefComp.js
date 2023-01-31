import React from 'react';

function RefComp() {
    const [count, setCount] = React.useState(100);
    const renderCount = React.useRef(0);

    console.log("Rendering Component");

    React.useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });

    function handleClick() {
        setCount((count) => count + 1);
    }
    return (
        <>
            <p>Hello {count}</p>
            <p>{renderCount.current}</p>
            <button onClick={handleClick}>Increase Count</button>
        </> 
    )
}

export default RefComp;