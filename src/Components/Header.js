import React from "react";
import { NavLink} from "react-router-dom";

const applyStyle=({isActive})=>{
  return{
    fontWeight: isActive? "bold": "italic",
    color: isActive? "green":"blue"
  }
}
let Header = () => {
  
  return (
   
    <>
    <div >      <nav className="nav navbar-expand-lg bg-info">
        <NavLink to="/" className="linkstyle" style={applyStyle}>Home Page</NavLink>
        <br/>
        <NavLink to="/user" className="linkstyle">User</NavLink>
      </nav>
      </div>

    </>
  );
};

export default Header;
