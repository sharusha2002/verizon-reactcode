import React, {Component} from 'react';
export default class Counter extends Component {

    constructor(props) {
        super(props);
    this.state= {
        counter: this.props.count
    };
}

    incrementValueOnClick=()=>{
        this.setState({
            counter: this.state.counter+1
        });
        console.log(this.state.counter);
    };

    decrementValueOnClick=()=>{
        this.setState({counter: this.state.counter-1});
        console.log(this.state.counter);

    }
    render(){
        return (
    
            <div>
                
                <input type="number" />
                <button onClick={this.incrementValueOnClick}>Increment</button>
                <button onClick={this.decrementValueOnClick}>Decrement</button>
                <div>
                <h1>Counter: {this.state.counter}</h1>
                
            </div>
            </div>
            
        )
    }
}