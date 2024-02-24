import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    increaseCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    decreaseCounter = () => {
        this.setState({
            counter: this.state.counter - 1
        });
    };

    render() {
        return (
            <div>
                <h1>Counter: {this.state.counter}</h1>
                <button onClick={this.increaseCounter}>Increase</button>
                <button onClick={this.decreaseCounter}>Decrease</button>
            </div>
        );
    }
}

export default Counter;
