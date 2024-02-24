import logo from './logo.svg';
import './App.css';
import { Input } from './Input';
import {Forms} from './Forms';
import {Routes, Route, BrowserRouter as Router, Link} from 'react-router-dom';
function App() {
  return (
    <Router>    <div className="App">
      <Routes>
        {/* <Route path='/input' element={<Input/>}></Route> */}
        <Route exact path='/input/:id' element={<Input/>}></Route>
        <Route path='/form' element={<Forms/>}></Route>
      </Routes>
        <Link to='/input/:id'>Input</Link>
        <Link to='/form'>Form</Link>
          </div>
          </Router>

  );
}

export default App;
