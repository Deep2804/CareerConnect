// import React from 'react';
// import '../stylesheet/Header.css';
// import { Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
// import logo from '../images/favicon.jpg';
// import Slogin from './Slogin';
// import Comlogin from './Comlogin';
// import Collogin from './Collogin';
// import Ssignup from './Ssignup';
// import Comsignup from './Comsignup';
// import Colsingup from './Colsignup';


// function Header() {
//   return (
//     <header className="header">
//       <nav className="navbar">
//         <div className="logo"><img src={logo}></img><Link to='/'>CareerConnect</Link></div>
//         <ul className="nav-links">
//           <li><Link to='/'>Home</Link></li>
//           <li><HashLink to="/#features">Features</HashLink></li>
//           <li><Link to='/about'>About Us</Link></li>
//           <li><Link to='/Resource'>Resources</Link></li>
//         </ul>

//         <div class="dropdown">
//         <button className="btn btn-secondary dropdown-toggle loginbutton" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//         Sign Up
//       </button>
//       <ul className="dropdown-menu">
//         <li><Link to='/Ssignup' className="dropdown-item">Student</Link></li>
//         <li><Link to='/Comsignup' className="dropdown-item">Company</Link></li>
//         <li><Link to='/Colsignup' className="dropdown-item">College</Link></li>
//       </ul>
// </div>

//         <div class="dropdown">
//         <button className="btn btn-secondary dropdown-toggle loginbutton" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//         Login
//       </button>
//       <ul className="dropdown-menu">
//         <li><Link to='/Slogin' className="dropdown-item">Student</Link></li>
//         <li><Link to='/Comlogin' className="dropdown-item">Company</Link></li>
//         <li><Link to='/Collogin' className="dropdown-item">College</Link></li>
//       </ul>
// </div>


//       </nav>
//     </header>
//   );
// }

// export default Header;

// import React from 'react';
// import '../stylesheet/Header.css';
// import { Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
// import logo from '../images/favicon.jpg';

// function Header() {
//   return (
//     <header className="header">
//       <nav className="navbar">
//         <div className="logo"><img src={logo} alt="CareerConnect Logo" /><Link to='/'>CareerConnect</Link></div>
//         <ul className="nav-links">
//           <li><Link to='/'>Home</Link></li>
//           <li><HashLink to="/#features">Features</HashLink></li>
//           <li><Link to='/about'>About Us</Link></li>
//           <li><Link to='/Resource'>Resources</Link></li>
//         </ul>

//         <div className="dropdown">
//           <button className="btn btn-secondary dropdown-toggle loginbutton" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Sign Up
//           </button>
//           <ul className="dropdown-menu">
//             <li><Link to='/Ssignup' className="dropdown-item">Student</Link></li>
//             <li><Link to='/Comsignup' className="dropdown-item">Company</Link></li>
//             <li><Link to='/Colsignup' className="dropdown-item">College</Link></li>
//           </ul>
//         </div>

//         <div className="dropdown">
//           <button className="btn btn-secondary dropdown-toggle loginbutton" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Login
//           </button>
//           <ul className="dropdown-menu">
//             <li><Link to='/Slogin' className="dropdown-item">Student</Link></li>
//             <li><Link to='/Comlogin' className="dropdown-item">Company</Link></li>
//             <li><Link to='/Collogin' className="dropdown-item">College</Link></li>
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Header;

import React from 'react';
import '../stylesheet/Header.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../images/favicon.jpg';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo"><img src={logo} alt="CareerConnect Logo" /><Link to='/'>CareerConnect</Link></div>
        <ul className="nav-links mb-0">
          <li><Link to='/'>Home</Link></li>
          <li><HashLink to="/#features">Features</HashLink></li>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/Resource'>Resources</Link></li>
        </ul>

        <div className="dropdown mb-0">
          <button className="btn btn-secondary dropdown-toggle loginbutton" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sign Up
          </button>
          <ul className="dropdown-menu">
            <li><Link to='/Ssignup' className="dropdown-item">Student</Link></li>
            <li><Link to='/Comsignup' className="dropdown-item">Company</Link></li>
            <li><Link to='/Colsignup' className="dropdown-item">College</Link></li>
          </ul>
        </div>

        <div className="dropdown mb-0">
          <button className="btn btn-secondary dropdown-toggle loginbutton" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login
          </button>
          <ul className="dropdown-menu">
            <li><Link to='/Slogin' className="dropdown-item">Student</Link></li>
            <li><Link to='/Comlogin' className="dropdown-item">Company</Link></li>
            <li><Link to='/Collogin' className="dropdown-item">College</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
