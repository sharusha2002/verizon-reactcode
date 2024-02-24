// import React, { Component } from "react";

// export default class Form extends Component {

//     state = {
//         name: "",
//         password: "",
//         mobile: "",
//         gender: "",
//         languages: [],
//         country: ""
//     }
//     onhandleChange = (event) => {
//         const isCheckBox = event.target.type === "checkbox";
//         this.setState({
//             [event.target.name] : isCheckBox ? event.target.checked : event.target.value
//         });
//     }
//     handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(this.state)
//     }
//     render () {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <table>
//                         <tbody>
//                         <tr>
//                             <td>
//                                 <label htmlFor="name">Name:</label>
//                             </td>
//                             <td>
//                                 <input type="name" name="name" value={this.state.name} id="name" onChange={this.onhandleChange} placeholder="enter your name"/>
//                             </td>
//                         </tr>
//                         <tr>
//                             <td>
//                                 <label htmlFor="password">Password</label>
//                             </td>
//                             <td>
//                                 <input type="password" name="password" value={this.state.password} onChange={this.onhandleChange} placeholder="Enter your password"/>
//                             </td>
//                         </tr>
//                         <tr>
//                             <td>
//                                 <label htmlFor="mobile">Mobile</label>
//                             </td>
//                             <td>
//                                 <input type="text" name="mobile" value={this.state.mobile} onChange={this.onhandleChange} placeholder="Enter your mobile phone number"/>
//                             </td>
//                         </tr>

//                         <tr>
//                             <td>
//                                 <label htmlFor="gender">Gender</label>
//                             </td>
//                             <td>
//                                 <input type="radio" name="gender" value={this.state.gender} onChange={this.onhandleChange}/>Male
//                                 <input type="radio" name="gender" value={this.state.gender} onChange={this.onhandleChange}/>Female
//                             </td>
//                         </tr>
//                         <tr>
//                             <td>
//                                 <label htmlFor="languages">Languages</label>
//                             </td>
//                             <td>
//                                 <input type="checkbox" name="languages" value="tamil" onChange={this.onhandleChange}/>Tamil
//                                 <input type="checkbox" name="languages" value="english" onChange={this.onhandleChange}/>English
//                                 <input type="checkbox" name="languages" value="hindi" onChange={this.onhandleChange}/>Hindi
//                                 <input type="checkbox" name="languages" value="telugu" onChange={this.onhandleChange}/>Telugu
//                                 <input type="checkbox" name="languages" value="kannada" onChange={this.onhandleChange}/>Kannada
//                             </td>
//                         </tr>
//                         <tr>
//                             <td>
//                                 <label htmlFor="country">Country</label>
//                             </td>
//                             <td>
//                                  <select
//                                         name="country"
//                                         id="country"
//                                         onChange={this.onhandleChange}
//                                         value={this.state.country}
//                                     >
//                                         <option value="India">India</option>
//                                         <option value="Srilanka">SriLanka</option>
//                                         <option value="USA">USA</option>
//                                         <option value="UK">UK</option>
//                                         <option value="Canada">Canada</option>
//                                     </select>
//                             </td>
//                         </tr>
//                         <tr>
//                             <td>
//                                 <button>submit</button>
//                             </td>
//                         </tr>
//                         </tbody>
//                     </table>
//                 </form>

//             </div>
//         )
//     }
// }


import React, { Component } from 'react';


const initialState={
    userName: "",
    userPassword: "",
    userEmail:"",
    nameError: "",
    passwordError: "",
    emailError: ""
}


export default class Form extends Component{

    state = initialState;

    validateFormFields = () => {
       let nameError = "";
       let passwordError = "";
       let emailError = "";

       if(!this.state.userName)
         nameError = "Please enter your name"; 
       if(!this.state.userEmail.includes('@'))
         emailError = "Please enter a valid email";
       if(nameError || emailError){
        this.setState({nameError, emailError});
        return false;
       }
       return true;
    }

    handleChange = (event) =>{
    const isCheckBox = event.target.type === "checkbox";
    this.setState({
    [event.target.name] : isCheckBox 
                ? event.target.checked 
                : event.target.value
            });
        }

    handleSubmit = (event) => {
        event.preventDefault();

        const isFormValid = this.validateFormFields();

        // if(isFormValid){
        //     // console.log(this.state);
        //         document.body.innerHTML = this.state;
        //     this.setState(initialState);
        // }

        if (isFormValid) {
            const outputDiv = document.getElementById("output");
            const outputHTML = `
                <p>Name: ${this.state.userName}</p>
                <p>Password: ${this.state.userPassword}</p>
                <p>Email: ${this.state.userEmail}</p>
            `;
            outputDiv.innerHTML = outputHTML;
    
            // Reset the form state
            this.setState(initialState);
        }
    }



    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <input 
                    type="text" 
                    name="userName" 
                    placeholder="Your name"
                    onChange={this.handleChange}
                    value={this.state.userName}
                    />
                    </div>
                    <div style={{color: 'red', fontSize: 12}}>
                        {this.state.nameError}
                    </div>
                   <div>
                     <input 
                    type="password" 
                    name="userPassword" 
                    placeholder="Your password"
                    onChange={this.handleChange}
                    value={this.state.userPassword}
                    /></div>
                    <div>
                     <input 
                    type="email" 
                    name="userEmail" 
                    placeholder="Your email here"
                    onChange={this.handleChange}
                    value={this.state.userEmail}
                    />
                    </div>
                    <div style={{color: 'red', fontSize: 12}}>
                        {this.state.emailError}
                    </div>
                    <div>
                    <input type="submit" value="LOGIN"/>
                    </div>

                </form>
            </div>
        );
    }
}