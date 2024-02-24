// // import React, { Component } from 'react';

// // export default class Forms extends Component {

// //     state = {
// //         username: "uh",
// //         languages: true,
// //         gender: "",

// //     }
// //     handleText = (event) => {
// //         console.log(event.target.value);
// //         this.setState({username: event.target.value});
// //     }

// //     handleCheck = (event) => {
// //         this.setState({languages: event.target.checked});
// //         console.log(event.target.value);
// //     }

// //     handleRadio = (event) => {
// //         this.setState({gender: event.target.value});
// //         console.log(event.target.value);
// //     }
// //     render(){
// //         return(
// //             <div>
// //                 <input type="text" value={this.state.username} name="username" placeholder='enter your name' onChange={this.handleText}/>
// //                 <br/>
// //                 <input type="checkbox" checked={this.state.languages} value={this.state.languages} name='languages' id="tamil" onChange={this.handleCheck}/>Tamil
// //                 <br />
// //                 <input type='radio' value="female" name='gender' id="female" onChange={this.handleRadio}/> female
// //             </div>
// //         )
// //     }
// // }


// import React, { Component } from 'react';

// export default class Forms extends Component {

//     state = {
//         username: "",
//         languages: "",
//         gender: "",
//     }

//     // handleText = (event) => {
//     //     console.log(event.target.value);
//     //     this.setState({ username: event.target.value });
//     // }

//     // handleCheck = (event) => {
//     //     this.setState({ languages: event.target.checked });
//     //     console.log(event.target.checked); // Use checked instead of value for checkbox
//     // }

//     // handleRadio = (event) => {
//     //     this.setState({ gender: event.target.value });
//     //     console.log(event.target.value);
//     // }

//     render() {
//         return (
//             <div>
//                 <input type="text" value={this.state.username} name="username" placeholder='enter your name' onChange={this.handleText} />
//                 <br />
//                 <input type="checkbox" checked={this.state.languages} name='languages' id="tamil" onChange={this.handleCheck} />Tamil
//                 <br />
//                 <input type='radio' value="female" name='gender' id="female" onChange={this.handleRadio} /> female
//             </div>
//         )
//     }
// }

import React, { Component } from 'react';

export default class Forms extends Component{

    state ={
        name: 'Your name here',
        rememberMe: true,
        country: 'UAE'
    }

    // handleChange = (event) => {
    //     console.log(event.target.value);
    //     this.setState({name: event.target.value});
    // }

    // handleSelect = (event) => {
    //     this.setState({country: event.target.value});
    // }

//     handleAll = (event, inputName, isChecked) =>{
// this.setState({
// [inputName] : isChecked 
//             ? event.target.checked 
//             : event.target.value
//         });
//     }

handleAll = (event) =>{
    const isCheckBox = event.target.type === "checkbox";
    this.setState({
    [event.target.name] : isCheckBox 
                ? event.target.checked 
                : event.target.value
            });
        }

    handleSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state);
        document.body.innerHTML = <h1>{this.state}</h1>
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} action="#">
               <input 
               name="name"
               value={this.state.name}
               type="text" 
               onChange={this.handleAll}/>

               Eligible:  <input 
               name="rememberMe"
               type="checkbox" 
               checked={this.state.rememberMe} 
               value={this.state.rememberMe} 
               onChange={this.handleAll}
               />

               <select 
               name="country"
               value={this.state.country} 
               onChange={this.handleAll}
            >
                <option>Select your country</option>
                <option>Sri Lanka</option>
                <option>UAE</option>
                <option>Russia</option>
               </select><br />
               <input type='submit' value="REGISTER"/>
               </form>
            </div>
        );
    }
}