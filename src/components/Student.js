import React from "react";
// import ReactDOM from "react-dom";
import { Component } from "react";

class Student extends Component{
    render(){
        return (
            <div>
                <h1>Student Name: {this.props.name}</h1>
                <h2>Student Register Number: {this.props.regno}</h2>
                <h3>Student Department: {this.props.dept}</h3>
            </div>
        )
    }
}


export default Student;