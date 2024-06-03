import React, { useEffect, useState } from 'react';
import '../stylesheet/StudentGlobal.css';
import './SEducation'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Ssignup() {

  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setemail] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      // Proceed with form submission
      // ...
      const body = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
      }
      axios.post('http://localhost:5000/student', body).then((response) => {
        console.log(response.data);
        navigate(`/SEducation/${response.data}`)
      }).catch(error => {
        console.log(error);
      })
    }
  };

  return (
    <div className="login-container">
      <div className="form-content">
        <h3>Student Sign Up Page</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="inputfirstname" className="form-label">First Name</label>
            <input type="text" className="form-control" id="firstname" aria-describedby="firstnamehelp" onChange={(e) => setfirstName(e.target.value)} />
          </div>

          <div className="mb-3">
            <label htmlFor="inputlastname" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="lastname" aria-describedby="lastnamehelp"
              onChange={(e) => setlastName(e.target.value)}
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="inputemail" className="form-label">Email address</label>
            <input type="email" className="form-control" id="emailaddress" aria-describedby="emailHelp" 
              onChange={(e) => setemail(e.target.value)}
            />
            <div id="emailtc" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          
          <div className="mb-3">
            <label htmlFor="inputphone" className="form-label">Phone No.</label>
            <input type="tel" className="form-control" id="phonenumber" aria-describedby="phonehelp"
              onChange={(e) => setphoneNumber(e.target.value)}
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="inputpassword" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          
          {error && <div className="form-text text-danger">{error}</div>}
          
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="check1" />
            <label className="form-check-label" htmlFor="check1">Click on this box to accept T&C and Privacy Policy</label>
          </div>
          {/* <Link to='/SEducation'> */}
          <button type="submit" className="btn btn-primary">Next</button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
}

export default Ssignup;
