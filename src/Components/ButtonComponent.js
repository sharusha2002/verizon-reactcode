import React from "react";
import AddProduct from "./AddProduct";
import { Link } from "react-router-dom";

const ButtonComponent = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                     
                            <Link type="submit" className="btn btn-info mx-2">Read</Link>
                            <Link type="submit" className="btn btn-success  mx-2">Update</Link>
                            <Link type="submit" className="btn btn-danger mx-2">Delete</Link>
                        
                </div>
            </div>

        </div>
    )
}

export default ButtonComponent;