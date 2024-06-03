import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/home";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import About from "./components/About"
import Resource from "./components/Resource";
import Slogin from "./components/Slogin";
import Comlogin from "./components/Comlogin";
import Collogin from "./components/Collogin";
import Ssignup from './components/Ssignup';
import Comsignup from './components/Comsignup';
import Colsignup from './components/Colsignup';
import SEducation from './components/SEducation';
import SSkills from './components/SSkills';
import SCertifications from './components/SCertifications';
import SCodingProfile from './components/SCodingProfile';
import SWorkExp from './components/SWorkExp';
import StudentDashboard from './components/StudentDashboard'
import Dashboard from "./components/Dashboard/Dashboard";
import DHome from "./components/Dashboard/DHome";
import JobProfiles from "./components/Dashboard/JobProfiles";
import MyProfile from "./components/Dashboard/MyProfile";
import Layout from "./Layout";
// import { useLocation } from "react-router-dom";

// function App() {
//   let location = useLocation();

//   // Define an array of paths where the Header should not be shown
//   const noHeaderPaths = ['/DHome'];

//   // Determine if the current path is in the noHeaderPaths array
//   const showHeader = !noHeaderPaths.includes(location.pathname);
//   return (
//     <>
//       {showHeader && <Header />}
//       <Router>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/Stats" element={<Stats />} />
//           <Route path="/Resource" element={<Resource />} />
//           <Route path="/Slogin" element={<Slogin />} />
//           <Route path="/Comlogin" element={<Comlogin />} />
//           <Route path="/Collogin" element={<Collogin />} />
//           <Route path="/Ssignup" element={<Ssignup />} />
//           <Route path="/Comsignup" element={<Comsignup />} />
//           <Route path="/Colsignup" element={<Colsignup />} />
//           <Route path="SEducation" element={<SEducation />} />
//           <Route path="/SSkills" element={<SSkills />} />
//           <Route path="/SCertifications" element={<SCertifications />} />
//           <Route path="/SCodingProfile" element={<SCodingProfile />} />
//           <Route path="/SWorkExp" element={<SWorkExp />} />
//           <Route path="/StudentDashboard" element={<StudentDashboard />} />
//           <Route path="/Dashboard" element={<Dashboard />} />
//           <Route path="/DHome" element={<DHome />} />
//           <Route path="/JobProfiles" element={<JobProfiles />} />
//         </Routes>
//         <Footer />
//       </Router>
//     </>
//   );
// }

// export default App;



function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="Stats" element={<Stats />} />
          <Route path="Resource" element={<Resource />} />
          <Route path="Slogin" element={<Slogin />} />
          <Route path="Comlogin" element={<Comlogin />} />
          <Route path="Collogin" element={<Collogin />} />
          <Route path="Ssignup" element={<Ssignup />} />
          <Route path="Comsignup" element={<Comsignup />} />
          <Route path="Colsignup" element={<Colsignup />} />
          <Route path="SEducation" element={<SEducation />} />
          <Route path="SSkills" element={<SSkills />} />
          <Route path="SCertifications" element={<SCertifications />} />
          <Route path="SCodingProfile" element={<SCodingProfile />} />
          <Route path="SWorkExp" element={<SWorkExp />} />
          <Route path="StudentDashboard" element={<StudentDashboard />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="JobProfiles" element={<JobProfiles />} />
        </Route>
        <Route path="DHome" element={<DHome />} />
        <Route path="MyProfile" element={<MyProfile />} />

        {/* <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/Stats' element={<Stats/>}/>
        <Route path="/Resource" element={<Resource/>}/>
        <Route path='/Slogin' element={<Slogin/>}/>
        <Route path='/Comlogin' element={<Comlogin/>}/>
        <Route path='/Collogin' element={<Collogin/>}/>
        <Route path="/Ssignup" element={<Ssignup/>}/>
        <Route path='/Comsignup' element={<Comsignup/>}/>
        <Route path='/Colsignup' element={<Colsignup/>}/>
        <Route path='SEducation/:studentId' element={<SEducation/>}/>
        <Route path="/SSkills/:studentId" element={<SSkills/>}/>
        <Route path="/SCertifications/:studentId" element={<SCertifications/>}/>
        <Route path="/SCodingProfile/:studentId" element={<SCodingProfile/>}/>
        <Route path="/SWorkExp/:studentId" element={<SWorkExp/>}/>
        <Route path="/StudentDashboard" element={<StudentDashboard/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/DHome" element={<DHome/>}/>
        <Route path="/JobProfiles" element={<JobProfiles/>}/>
  */}
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;