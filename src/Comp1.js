import React from "react";


// class CompText extends React.Component{
    //     constructor(props) {
        //         console.log("Contructor called");
        //         super(props);
        //     }

        //     // shouldComponentUpdate() {
//     //     return false;
//     // }

//     getSnapshotBeforeUpdate(prevProps, prevState) {
//         console.log(prevProps, prevState);
//     }

//     componentDidUpdate() {
//         console.log("Hello");
//     }

//     render() {
    //         return (
        //             <p>{this.props.text}</p>
        //         )
        //     }
        // }

export function CompText(props) {

    console.log("child render");
    props.fun();

    return (
        <p>{props.text}</p>
    )
}

export default function Comp1() {
    // text - state
    // setText - setter for state 
    let [text, setText] = React.useState("Hello from Comp1");

    console.log("Parent Render");

    function handleClick() {
        if(text === "hello world") {
            setText("Hello from comp1");
        }
        else {
            setText("hello world");
        }
    }

    const fun = React.useCallback(() => {
        console.log("Hello from fun");
    }, []);

    return (
        <>
            <button onClick={handleClick}>Change Text</button>
            <CompText text={"Hello form CompText"} fun={fun}></CompText>
        </>
    )
}