// import React, {Component} from 'react';

// class Counterby3 extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             count:0
//         }
//     }

//     increment = () => {
//         this.setState(prevState=>({
//             count: prevState.count+1
//         }))
//     }

//     decrement = ()=>{
//         this.setState(prevState=>({
//             count: prevState.count-1
//         }))
//     }

//     incby3(){
//         this.increment();
//         this.increment();
//         this.increment();
//     }

//     decby3(){
//         this.decrement();
//         this.decrement();
//         this.decrement();
//             }

//     render(){
//         return(
//             <div>
//                 <h2>Counter: {this.state.count}</h2>
//                 <button onClick={()=>this.incby3()}>Increment</button>
//                 <button onClick={()=>this.decby3()}>Decrement</button>
//             </div>
//         )
//     }
// }


// export default Counterby3;


import React, {Component} from 'react';

class Counterby3 extends Component{
    constructor(props){
        super(props);
        this.state={
            count: 0
        }
    }
    increment =() => {

        this.setState(prevState=>({
            count:prevState.count+1
        }))
        // this.setState(prevState=>({
        //     count: prevState.count+1
        // }))
    }

    incby3(){
        this.increment();
        this.increment();
        this.increment();
    }

    decrement = () =>{
        this.setState(prevState=>({
            count: prevState.count-1
        }))
    }

    decby3(){
        this.decrement()
        this.decrement()
        this.decrement()
    }
    render(){
        return (
            <div>
                <h2>Counter: {this.state.count}</h2>
                <button class="btn btn-success" onClick={()=>this.increment()}>Increment</button>
                <button class="btn btn-danger" onClick={()=>this.incby3()}>Increment by 3</button>
                <button class="btn btn-primary" onClick = {()=> this.decby3()}>Decrement</button>
            </div>
        )
    }
}

export default Counterby3;