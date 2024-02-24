import React, {useState} from 'react';
import Header from './Header';
let Customer = () => {
    const [customerForm, setCustomerForm] = useState({customerid: "", customername:"", password: "", mobile: "", email: "", 
    languages: [], gender: "", address: "", state: ""});
    let handleSubmit = (event) => {
        event.preventDefault();
      console.log(customerForm);
    }

    let handleCheckChange = (event) => {
        setCustomerForm({
            ...customerForm,
            [event.target.name]: event.target.value
           })
    }

    let handleCheckBoxChange = (event) => {
        const checked = event.target.checked;
        setCustomerForm((prevLanguages=> ({
            ...prevLanguages,
            languages: checked ? [...customerForm.languages, checked] : false
        })))
    }
    return <div>
          <Header/>
    <h1 className="text-center text-bold">Customer Registration Form</h1>
  
    <form onSubmit={handleSubmit}>
     
        <table>
            <tbody>
            <tr>
                <td>
                    <label htmlFor="customerid">Customer Id:</label>
                </td>
                <td>
                    <input type="text" name="customerid" id="customerid" onChange={handleCheckChange} placeholder="Enter Customer id"/>
                </td>
            </tr>
            <tr>
                <td>
                    <label htmlFor="customername">Customer Name:</label>
                </td>
                <td>
                <input type="text" name="customername" id="customername" onChange={handleCheckChange} placeholder="Enter Customer Name" />
                </td>
            </tr>
            <tr>
                <td>
                    <label htmlFor="password">Password:</label>
                </td>
                <td>
                    <input type="password" name="password" id="password" onChange={handleCheckChange} placeholder="Enter your password" />
                </td>
            </tr>
            <tr>
                <td>
                    <label htmlFor="mobile">Mobile No:</label>
                </td>
                <td>
                    <input type="number" name="mobile" id="mobile" onChange={handleCheckChange}  placeholder="Enter your mobile number" />
                </td>
            </tr>
            <tr>
                <td>
                             <label htmlFor="email">Email:</label>
                </td>
                <td>
                    <input type="email" name="email" id="email" onChange={handleCheckChange} placeholder="Enter your email id" />
                </td>
            </tr>
            <tr>
                <td>
                    <label htmlFor="languages">Languages</label>
                </td>
                <td>
                    <input type="checkbox" name="languages" id="tamil" value="tamil"  onChange={handleCheckBoxChange}/>Tamil
                    <input type="checkbox"  name="languages" id="englsh" value="english" onChange={handleCheckBoxChange}/>English
                    <input type="checkbox" name="languages" id="telugu" value="telugu" onChange={handleCheckBoxChange}/>Telugu
                    <input type="checkbox" name="languages" id="hindi" value="hindi" onChange={handleCheckBoxChange}/>Hindi
                    <input type="checkbox"  name="languages" id="kannada" value="kannada" onChange={handleCheckBoxChange}/>Kannada
                    <input type="checkbox" name="languages" id="malayalam" value="malayalam" onChange={handleCheckBoxChange}/>Malayalam
                    <input type="checkbox" name="languages" id="odissalam" value="odissa" onChange={handleCheckBoxChange}/>Odissa
                </td> 
                </tr>       
                <tr>
                <td>
                    <label htmlFor="gender">Gender</label>
                </td>
                <td>
                    <input type="radio" name="gender" id="male" value="male" onChange={handleCheckChange}/>Male
                    <input type="radio" name="gender" id="female" value="female" onChange={handleCheckChange}/>Female
                </td>
            </tr>
            <tr>
                <td>
                    <label htmlFor='address'>Address:</label>
                </td>
                <td>
                    <textarea name="address" id="address" placeholder="Enter your address" rows="4" cols="40" onChange={handleCheckChange}></textarea>
                </td>
            </tr>
            <tr>
                <td>
                    <label htmlFor="state">State:</label>
                </td>
                <td>
                    <select name="state" id="state" onChange={handleCheckChange}>
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