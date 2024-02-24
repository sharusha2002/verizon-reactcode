import axios from 'axios';
import React, { useState } from 'react';
import { FaCity, FaEnvelope, FaKey, FaLock, FaPhone, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignupComponent = () => {
  const [formData, setFormData] = useState({
    userName: '',
    userMail: '',
    password: '',
    confirmPassword: '',
    mobileNo: '',
    state:'',
    city: '',
    security: '',
  });

  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate password and confirm password
    if (name === 'password' || name === 'confirmPassword') {
      if (formData.password !== formData.confirmPassword) {
        setPasswordError('Passwords do not match');
      } else {
        setPasswordError('');
      }
    }

    // Validate email
    if (name === 'userMail') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailError(emailRegex.test(value) ? '' : 'Invalid email address');
    }

    // Validate phone number
    if (name === 'mobileNo') {
      const phoneRegex = /^[0-9]{10}$/;
      setPhoneError(phoneRegex.test(value) ? '' : 'Invalid phone number');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if there are any validation errors
    if (emailError || phoneError) {
      setSubmitError('Please fix the errors in the form.');
      return;
    }

    try {
      // Make a POST request to the backend
      await axios.post('http://localhost:8089/api/v1/user/signup', formData);
      
      // Clear any previous errors and reset form data
      setSubmitError('');
      setFormData({
        userName: '',
        userMail: '',
        password: '',
        confirmPassword: '',
        mobileNo: '',
        state: '',
        city: '',
        security: '',
      });

      // Provide feedback to the user
      alert('Signup successful! Please login.');
    } catch (error) {
      // Handle error responses from the server
      if (error.response) {
        setSubmitError(error.response.data.message || 'An error occurred');
      } else if (error.request) {
        // The request was made but no response was received
        setSubmitError('No response received from the server');
      } else {
        // Something else happened while setting up the request
        setSubmitError('Error setting up the request');
      }
    }
  };

  return (
    <div style={{ height: '240px', marginLeft: '100px' }}>
      <div className='container' style={{ backgroundColor: 'lightblue', marginTop: '20px' }}>
        <h2 className="mb-4" style={{ marginLeft: '150px',paddingTop:'30px' }}>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginTop: '10px' }} className="mb-3">
            <label htmlFor="userName" className="form-label">
              <FaUser /> User Name
            </label>
            <input
              type="text"
              className="form-control"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="userMail" className="form-label">
              <FaEnvelope /> Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="userMail"
              name="userMail"
              value={formData.userMail}
              onChange={handleChange}
              required
            />
            {emailError && <div className="text-danger">{emailError}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              <FaLock /> Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {/* {passwordError && <div className="text-danger">{passwordError}</div>} */}
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              <FaLock /> Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mobileNo" className="form-label">
              <FaPhone /> Mobile No
            </label>
            <input
              type="number"
              className="form-control"
              id="mobileNo"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              required
            />
            {phoneError && <div className="text-danger">{phoneError}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="state" className="form-label">
              <FaCity /> State
            </label>
            <input
              type="text"
              className="form-control"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="city" className="form-label">
              <FaCity /> City
            </label>
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="security" className="form-label">
              <FaKey /> Security Question: What is your first school name?
            </label>
            <input
              type="text"
              className="form-control"
              id="security"
              name="security"
              value={formData.security}
              onChange={handleChange}
              required
            />
          </div>

          <button style={{ marginLeft: '130px' }} type="submit" className="btn btn-primary">
            Sign Up
          </button>
          {submitError && <div className="text-danger">{submitError}</div>}
          <p className="mt-3">
            Already have an account? <Link to="/Login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupComponent;
