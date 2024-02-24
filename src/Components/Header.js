import React from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
const Header = () => {
    return (
        // const navigateToSearch = useNavigate()
                <div className="text-center">
            <div className="main-head py-3">

             <Link to="/" className="navlinks">Home</Link>
               <Link to="/product" className="navlinks">Product</Link>
               <Link to="/search" className="navlinks">
                       
                        <input type="search" placeholder="enter your product name"/>
                        <button type="submit" className="mx-3">Search</button>                                          

               </Link>
               </div>
        </div>
    )
}

export default Header;