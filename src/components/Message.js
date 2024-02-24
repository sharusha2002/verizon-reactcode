import React from "react";
import { Component } from "react";

class Message extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: "Thank you sharusha"
        }
          }
          onMessageChange=() => {
            this.setState({
                message: "Thank you sharu"
            })
        }

    render(){
        return <div>
        <h1>{this.state.message}</h1>
            <button onClick={()=>this.onMessageChange()}>Thank you</button>
        </div>
    }
}

export default Message;