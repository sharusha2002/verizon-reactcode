import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs';
import ButtonComponent from './Components/ButtonComponent';
import Chatbot from './Components/Chatbot';
import FAQ from './Components/FAQ';
import Footer from './Components/Footer';
import ForgotPassword from './Components/ForgotPassword';
import Home from './Components/Home';
import ImageComponent from './Components/ImageComponent';
import LoginComponent from './Components/LoginComponent';
import Navbar from './Components/Navbar';
import RaiseAticket from './Components/RaiseAticket';
import ServiceRequest from './Components/ServiceRequest';
import SignupComponent from './Components/SignUpComponent';
function App() {
  return (
    <div className="App" style={{backgroundColor:'black'}}>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <ImageComponent />
          </div>
          <div className="col-md-6">
            <Routes>
              {/* <Route path='' element={<Home/>}/> */}
              <Route path="/" element={<ButtonComponent />} />
              <Route path="/Signup" element={<SignupComponent />} />
              <Route exact path="/Login" element={<LoginComponent />} />
              <Route path="/Chatbot" element={<Chatbot />} />
              <Route path="/ForgotPassword" element={<ForgotPassword />} />
              <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/raiseaticket" element={<RaiseAticket />} />
        <Route path="/servicerequest" element={<ServiceRequest />} />
        <Route path="/faq" element={<FAQ />} />
      
            </Routes>
          </div>
        </div>
        
      </div>
      {/* <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/raiseaticket" element={<RaiseAticket />} />
        <Route path="/servicerequest" element={<ServiceRequest />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      
      </div> */}
   
      <Footer />
    </div>
   
  );
}

export default App;
