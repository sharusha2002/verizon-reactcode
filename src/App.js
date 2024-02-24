import './App.css';
import { Component } from 'react';
import New from './Components/New';
function App() {
  return (
    <div className="App">
      hello world
      <New/>
      <MainBody/>
    </div>
  );
}

class MainBody extends Component{
  render(){
    return(
      <div>
        Welcome to react folder
      </div>
    )
  }
}
// function New(){
//   return (
//     <div>
//       Coming from another component
//     </div>
//   )
// }
export default App;
