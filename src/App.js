import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import User from './Components/User';
import Header from './Components/Header';
import About from './Components/About';
function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/user' element={<User/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
        
    </div>
  );
}

export default App;
