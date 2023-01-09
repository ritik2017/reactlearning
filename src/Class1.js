import React from "react";

export default class Class1 extends React.Component {

    constructor(props) {
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
    
    render() {
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