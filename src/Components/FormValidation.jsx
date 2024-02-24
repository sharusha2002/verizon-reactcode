import React, {Component} from "react";

const initialState = {
    name: "",
    email: ""
}
export default class FormValidation  extends Component{
  
    render(){
        return (
            <div>
                <form>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="name">Name</label>
                                </td>
                                <td>
                                    <input type="name" name="name" placeholder="enter name" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="email">Email</label>
                                </td>
                                <td>
                                    <input type="email" name="email" placeholder="enter email" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button type="submit">Submit</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}