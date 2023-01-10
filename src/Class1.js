import React from "react";

export default class Class1 extends React.Component {

    // Pass props to parent 
    // create state
    // Any logic that you want to run in just mounting
    constructor(props) {
        console.log("Hello contructor");
        super(props); // Why we pass it??
        this.state = {
            value: 100,
            count: 0
        }
    }

    updateCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    // When you are creating a state based on props value
    static getDerivedStateFromProps(props, state) {
        console.log("From derived state");
        console.log("Text", props.text);
        if(props.s1 > 10) {
            return {
                s1: 1
            }
        }
        else {
            return {
                s1: 2
            }
        }
    }

    // Any operation you want do after component is loaded into the real DOM 
    componentDidMount() {
        console.log("Hello from did mount");
    }
    
    render() {
        console.log("Hello render");
        console.log(this.state);
        return (
            <div>
                <p>{this.props.text}</p>
                <h1>{this.state.value}</h1>
                <h1>{this.state.count}</h1>
                <button onClick={this.updateCount}>Update</button>
            </div>
        )
    }
}

// 1. Initial Value 
// 2. Later we want to update this value and trigger re-render / We want to create state based on these props value

// class abc {
//     constructor() {
//         this.x = 10;
//         this.y = 20;
//     }

//     a() {

//     }

//     b() {

//     }

//     static pqr() {

//     }
// }

// let a1 = new abc();
// let a2 = new abc();

// a1.pqr();
// a2.pqr();

// abc.pqr();