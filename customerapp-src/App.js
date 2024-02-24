import './App.css';
import {Routes, Route} from 'react-router-dom'
import Customer from './Components/Customerfn'
import Home from './Components/Home';
import Header from './Components/Header';
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/header" element={<Header/>}/>
          <Route path="/customer" element={<Customer/>}/>
        </Routes>
    </div>
  );
}

export default App;
