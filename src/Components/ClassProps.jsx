import React, {Component} from 'react';

export default class ClassProps extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.intern.name}</h1>
                <h2>{this.props.intern.title}</h2>
                <p>{JSON.stringify(this.props.intern)}</p>
                <p>Id: {this.props.arrayOfIds[0]}</p>
                <p>Sum: {this.props.addNumbers(500,200)}</p>
            </div>
        )
    }
}