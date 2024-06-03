import React from 'react'
import '../stylesheet/Comlogin.css'

function Comlogin() {
  return (
    <div className="login-container">
      <div className="form-content">
        <h3>Company Login Page</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="inputemail" className="form-label">Email address</label>
            <input type="email" className="form-control" id="emailaddress" aria-describedby="emailHelp" />
            <div id="emailtc" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="inputpassword" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="check1" />
            <label className="form-check-label" htmlFor="check1tc">Click on this box to accept T&C and Privacy Policy</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Comlogin
