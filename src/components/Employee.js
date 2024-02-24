import React from "react";
import { Component } from "react";
class Employee extends Component {
   
    render() {
        return (
            <div>
                <h1>Employee Name: {this.props.name}</h1>
                <h2>Employee Profession: {this.props.profession}</h2>
            </div>
        )
    }
}

export default Employee;