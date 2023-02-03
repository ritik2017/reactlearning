import React from 'react';

function ChildComp(props) {

    function handleToggle() {
        props.paraRef.current.innerText = "Wow";
    }

    return <>
            <button onClick={handleToggle}>Toggle</button>
        </>
}

function RefComp() {
    const [count, setCount] = React.useState(100);
    const renderCount = React.useRef(0);
    const paraRef = React.useRef();

    console.log("Rendering Component");

    React.useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });

    function handleClick() {
        setCount((count) => count + 1);
        // const elem = document.getElementById('hello');
        // elem.innerText = "Wow";
        // console.log(paraRef.current);
    }

    return (
        <>
            <p ref={paraRef}>Hello {count}</p>
            <p>{renderCount.current}</p>
            <button onClick={handleClick}>Increase Count</button>
            <ChildComp paraRef={paraRef}/>
        </> 
    )
}

export default RefComp;