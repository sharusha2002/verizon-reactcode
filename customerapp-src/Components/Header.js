import React from "react";
import { Link } from "react-router-dom";
let Header =() => {
    return (<div className="text-center bg-danger text-dark">
        <nav className="nav navbar-expand-lg">
            <Link to="/">Home</Link>
            {/* <Link to="/home">Home</Link> */}
            <Link to="/customer">Add New Customer</Link>
            <Header/>
        </nav>
    </div>)
}


export default Header;