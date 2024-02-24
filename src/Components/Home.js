import React from "react";
import { useNavigate } from "react-router-dom";

const Home=()=>{
    const navigateToAbout = useNavigate();
    return (<>
    
        <h1>Home Page</h1>
        <button type="submit" onClick={()=>navigateToAbout('/about')}>Click here</button>
        </>)
}

export default Home;