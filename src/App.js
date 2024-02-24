import './App.css';
import Home from './Components/Home';
import {Route, Routes} from 'react-router-dom';
import Product from './Components/Product';
import Header from './Components/Header';
import Search from './Components/Search';
import AddProduct from './Components/AddProduct';
function App() {
  return (
    <div className="App">
      <div className='containe-fluid'>
        <div className='row'>
          <div className='col'>
            <Header/>
          </div>
          
        </div>
       
      </div>
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/product" element={<Product/>} />
            <Route path="/search" element={<Search/>} />
            <Route path="/addproduct" element={<AddProduct/>} />
        </Routes>
    </div>
  );
}

export default App;
