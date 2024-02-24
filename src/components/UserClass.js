import React, { Component } from 'react';

class UserClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            isAuthenticated: false,
        };
    }

    onUserNameChange = (event) => {
        this.setState({
            userName: event.target.value
        });
    }

    onChangePassword = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    formSubmit = (event) => {
        event.preventDefault();

        // Access values directly from the state
        const { userName, password } = this.state;

        if (userName === "admin" && password === "1234") {
            this.setState({
                isAuthenticated: true,
            });
            alert('Welcome ' + this.state.userName);
        } else {
            alert("User not authenticated");
        }
    }

    render() {
        return (
            <div className="text-center px-5 py-5">
                <h1 className='text-bold text-primary'>User Form</h1>
                <form onSubmit={this.formSubmit} className='border border-success border-5 
                px-5 py-5'>
                    UserName: <input type="text" name="userName" value={this.state.userName} 
                    onChange={this.onUserNameChange} />
                    <br></br>
                    <br></br>
                    Password: <input type="password" name="password" value={this.state.password} 
                    onChange={this.onChangePassword} />
                    <br></br>
                    <br></br>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default UserClass;
