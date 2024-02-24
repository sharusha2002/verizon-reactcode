import React, { useState } from 'react';

const FuncCounter = () => {
  const [count, setCount] = useState(0);
    let increment = () => {
        setCount(prevCount=>prevCount+1);
        console.log(setCount);
    }
    let incby3 = ()=>{
        increment();
        increment();
        increment();
    }

    let decrement = () => {
        setCount(prevCount=>prevCount-1);
        console.log(setCount);
    }
    let decby3 = ()=>{
        decrement();
        decrement();
        decrement();
    }
  return (
    <div className="px-2">
      <h2>Counter: {count}</h2>
      <button className="btn btn-success mx-5" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    <br></br>
     <button className='btn btn-danger mx-5' onClick={()=> setCount(count-1)}>Decrement</button>
       {/* <br></br> */}
     <button className='btn btn-info mx-5' onClick={()=> incby3()}>Increment by 3</button>
    <br></br>
     <button className='btn btn-info' onClick={()=> decby3()}>Decrement by 3</button>
    </div>
  );
};

export default FuncCounter;
