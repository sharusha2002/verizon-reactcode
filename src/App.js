import { useState } from 'react';
import './App.css';
import FuncSlider from './Components/FunctionComponents/FuncSlider';
// import Hello from './Components/Hello';
// import ClassProps from './Components/ClassProps';
// import FuncProps from './Components/FunctionComponents/FuncProps';
// import Counter from './Components/Counter';
// import FuncCounter from './Components/FunctionComponents/FuncCounter';
import ImageSlider from './Components/FunctionComponents/ImageSlider';
import Slider from './Components/Slider';
function App() {
  const [visible, setVisible] = useState(true);
  const buttonText = visible ? "HIDE" : "SHOW";

  // let flag=true;
  return (
    <div className="App">
      {/* <Hello/>
      <ClassProps intern={{
        name: 'Sharusha',
        title: 'Software Engineer',
      }} 
      arrayOfIds= {[56,19,20]}
       addNumbers = {(firstNum, secondNum) => {
       let result=firstNum+secondNum;
       return result;
      }}/>
      {/* <FuncProps name="shalini"/> */}
      {/* {flag? <FuncProps name="Shalini" /> : <ClassProps />} } */}
      {/* <Counter count={5}/> */}
      {/* <FuncCounter /> */}
      {/* <ImageSlider/> */}
      {/* <Slider /> */}
      {/* {flag? <ImageSlider /> : false};  */}
      {/* <FuncSlider /> */}
{
  visible ? <Slider /> : "Not visible"
}

{/* <button onClick={() => {
  setVisible(true);
}}>Display</button>

<button onClick={() => {
  setVisible(false);
}}>Hide</button> */}

<button 
      onClick={() => {setVisible(!visible)}}>{buttonText}</button>

    </div>
   
  );
  
}

export default App;
