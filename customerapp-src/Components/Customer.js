import React, {useState} from 'react';


let Customer =() =>{

const [customerid, setcustomerid] = useState("");
const [customername, setcustomerName] = useState("");
const [password, setpassword] = useState("");
const [customeremail, setcustomeremail] = useState("");
const [mobile, setmobile] = useState("");
const [address, setaddress] = useState("");
const [languages, setlanguages] = useState("");
const [gender, setgender] = useState("");
const [state, setstate] = useState("");

let idChange=(event)=>{
    setcustomerid(event.target.value);
}
let nameChange = (event) => {
    setcustomerName(event.target.value);
}

let passwordChange = (event) => {
    setpassword(event.target.value);
}

let emailChange=(event)=>{
    setcustomeremail(event.target.value);
}

let mobileChange = (event) => {
    setmobile(event.target.value);
}

let addressChange = (event) => {
    setaddress(event.target.value);
}

let checkChange = (event) => {
    const language = event.target.value;
    const checked = event.target.checked;
    setlanguages((prevLanguages) => {
      return checked ? [...prevLanguages, language] : false;
    });
  }

  let genderChange = (event)=>{
    setgender(event.target.value);
  }

  let stateChange = (event)=>{
    setstate(event.target.value);
  }

let handleSubmit = (event) => {
    event.preventDefault();
    console.log("Customer id: " +customerid);
console.log("Customer Name: "+customername);
console.log("Password: "+password);
console.log("Mobile No: "+mobile);
console.log("Customer email: "+customeremail);
console.log("Languages: "+languages);
console.log("Gender: "+gender);
console.log("Address: "+address);
console.log("State: "+state);
}
    return <div>
            <h1 className="text-center text-bold">Customer Registration Form</h1>
            <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
                <table className="text-center border border-5 border-grey mx-5">
                    <tbody>
                    <tr>
                        <td>
                            <label htmlFor="customerid">Customer Id:</label>
                        </td>
                        <td>
                            <input type="text" name="customerid" id="customerid" value={customerid} onChange={idChange} placeholder="Enter Customer id"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="customername">Customer Name:</label>
                        </td>
                        <td>
                        <input type="text" name="customername" id="customername" value={customername} onChange={nameChange} placeholder="Enter Customer Name" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="password">Password:</label>
                        </td>
                        <td>
                            <input type="password" name="password" id="password" value={password} onChange={passwordChange} placeholder="Enter your password" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="mobile">Mobile No:</label>
                        </td>
                        <td>
                            <input type="number" name="mobile" id="mobile" value={mobile} onChange={mobileChange} placeholder="Enter your mobile number" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                                     <label htmlFor="email">Email:</label>
                        </td>
                        <td>
                            <input type="email" name="email" id="email" value={customeremail} onChange={emailChange} placeholder="Enter your email id" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="languages">Languages</label>
                        </td>
                        <td>
                            <input type="checkbox" onChange={checkChange} name="languages" id="tamil" value="tamil"/>Tamil
                            <input type="checkbox"  onChange={checkChange} name="languages" id="englsh" value="english"/>English
                            <input type="checkbox" onChange={checkChange} name="languages" id="telugu" value="telugu"/>Telugu
                            <input type="checkbox" onChange={checkChange} name="languages" id="hindi" value="hindi"/>Hindi
                            <input type="checkbox"  onChange={checkChange} name="languages" id="kannada" value="kannada"/>Kannada
                            <input type="checkbox" onChange={checkChange} name="languages" id="malayalam" value="malayalam"/>Malayalam
                            <input type="checkbox" onChange={checkChange} name="languages" id="odissalam" value="odissa"/>Odissa
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="gender">Gender</label>
                        </td>
                        <td>
                            <input type="radio" onChange={genderChange} name="gender" id="male" value="male"/>Male
                            <input type="radio" onChange={genderChange} name="gender" id="female" value="female"/>Female
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor='address'>Address:</label>
                        </td>
                        <td>
                            <textarea name="address" id="address" value={address} onChange={addressChange} placeholder="Enter your address" rows="4" cols="40"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="state">State:</label>
                        </td>
                        <td>
                            <select name="state" id="state" onChange={stateChange}>
                                <option>Tamil Nadu</option>
                                <option>Kerala</option>
                                <option>Karnataka</option>
                                <option>Odissa</option>
                                <option>Telungana</option>
                                <option>Andhra Prasesh</option>
                                <option>Delhi</option>
                                <option>Maharashtra</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="submit" name="submit" id="submit"  className="btn btn-primary">Submit</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
    </div>
}

export default Customer;
