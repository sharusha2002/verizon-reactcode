import {React, useState } from "react";
let FuncMessage = () => {
    const [msg, setMsg] = useState("Hello Sharusha");
    let onChangeMsg = ()=>{
        setMsg("Welcome to React Sharusha");
    }
    return <div class="text-center">
        <h1>{msg}</h1>
        <button class="btn btn-primary"  onClick={()=>onChangeMsg()}>Welcome msg</button>
        {/* <button class="btn btn-primary"  onClick={()=> setMsg("Welcome to React Sharusha")}>Welcome msg</button> */}
    </div>
}

export default FuncMessage;