import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();

  return (
    <div style={styles.dashboardContainer}>
      <div style={styles.sidebar}>
        <ul style={styles.navList}>
          <li><Link to="/DHome" style={{ ...styles.navLink, ...(location.pathname === '/DHome' ? styles.navActive : {}) }}>Home</Link></li>
          <li><Link to="/JobProfiles" style={{ ...styles.navLink, ...(location.pathname === '/JobProfiles' ? styles.navActive : {}) }}>Job Profiles</Link></li>
          <li><Link to="/MyProfile" style={{ ...styles.navLink, ...(location.pathname === '/MyProfile' ? styles.navActive : {}) }}>My Profile</Link></li>
          <li><Link to="/Interviews" style={{ ...styles.navLink, ...(location.pathname === '/Interviews' ? styles.navActive : {}) }}>Interviews</Link></li>
          <li><Link to="/Assessment" style={{ ...styles.navLink, ...(location.pathname === '/Assessment' ? styles.navActive : {}) }}>Assessments</Link></li>
          <li><Link to="/Certificates" style={{ ...styles.navLink, ...(location.pathname === '/Certificates' ? styles.navActive : {}) }}>Certificates</Link></li>
          <li><Link to="/Help" style={{ ...styles.navLink, ...(location.pathname === '/Help' ? styles.navActive : {}) }}>Help</Link></li>
        </ul>
      </div>
      <div style={styles.mainContent}>
        <Outlet />
      </div>
    </div>
  );
};

const styles = {
  dashboardContainer: {
    display: 'flex',
    height: '100vh',
    
  },
  sidebar: {
    width: '250px',
    backgroundColor: '#282c34',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'fixed',
  },
  navList: {
    listStyleType: 'none',
    padding: 0,
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.2em',
    margin: '10px 0',
    padding: '10px 20px',
    display: 'block',
    borderRadius: '5px',
  },
  navActive: {
    backgroundColor: '#61dafb',
    color: 'black',
  },
  mainContent: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#f5f5f5',
    overflowY: 'auto',
  },
};

export default Dashboard;
