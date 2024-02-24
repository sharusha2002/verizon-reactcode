import React, { Component } from 'react';

export default class Slider extends Component{
    constructor(props){
        super(props);
        this.state ={
            images: [
                "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D",
                "https://images.unsplash.com/photo-1460039230329-eb070fc6c77c?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://plus.unsplash.com/premium_photo-1677178628425-84a64dc416b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D",
                "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D"
            ],
            index:0

        };
        
    }
    componentDidMount(){
  
        console.log("Component Mounted");

    }

// componentDidUpdate(){
    nextImg = () => {
        if(this.state.images.length-1 > this.state.index){
        this.setState({
                index: this.state.index + 1
        });
    }else{
        this.setState({
            index: 0
    });
    }
        console.log(this.state.index);
    }

prevImg = () => {
        if(this.state.index>=1){
        this.setState({
            index: this.state.index - 1
        });}
        else{
            this.setState({
                index:0 
            });}
        console.log(this.state.index);
    }
// }

componentWillUnmount() { 
    console.log("Coomponetn finished");
}
    render(){
        return(
            <div>
                    <img src={this.state.images[this.state.index]} style={{width: 500, height: 500}} />
                    <br/>
                    <button onClick={this.prevImg}>Prev</button>
                    <button onClick={this.nextImg}>Next</button>

            </div>
        )
    }
}