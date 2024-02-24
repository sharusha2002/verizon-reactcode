import React, { useState } from "react";

const FuncCounter = () => {
    const [counter, setCounter] = useState(100);
    let increment=()=>{
        setCounter(counter+1)
        console.log(counter);
    }

    let decrement = () => {
        setCounter(counter-1);
        console.log(counter);
    }
    return (
        <>
            <button type="submit" onClick={increment}>Increment</button>
            <button type="submit" onClick={decrement}>Decrement</button>
            <h1>Counter: {counter}</h1>
        </>
    )
}

export default FuncCounter;