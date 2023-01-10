import React from "react";

// export function CompText(props) {
//     return (
//         <p>{props.text}</p>
//     )
// }

class CompText extends React.Component{
    constructor(props) {
        console.log("Contructor called");
        super(props);
    }

    // shouldComponentUpdate() {
    //     return false;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(prevProps, prevState);
    }

    componentDidUpdate() {
        console.log("Hello");
    }

    render() {
        return (
            <p>{this.props.text}</p>
        )
    }
}

export default function Comp1() {
    // text - state
    // setText - setter for state 
    let [text, setText] = React.useState("Hello from Comp1");

    function handleClick() {
        if(text === "hello world") {
            setText("Hello from comp1");
        }
        else {
            setText("hello world");
        }
    }

    return (
        <>
            <button onClick={handleClick}>Change Text</button>
            <CompText text={text}></CompText>
        </>
    )
}