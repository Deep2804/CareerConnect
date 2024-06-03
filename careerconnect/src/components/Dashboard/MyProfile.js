import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';

const MyProfile = () => {
  const location = useLocation();

  return (
    <div style={styles.profileContainer}>
      <div style={styles.sidebar}>
        <div style={styles.profileHeader}>
          <img src="path/to/profile-image.jpg" alt="Profile" style={styles.profileImage} />
          <div>
            <h2>Pradeep Kumar</h2>
            <p>Superset ID: 5011093</p>
          </div>
        </div>
        <ul style={styles.profileNavList}>
          <li style={styles.profileNavItem}>
            <Link to="/MyProfile/BasicDetails" style={styles.navLink}>Basic Details</Link>
          </li>
          <li style={styles.profileNavItem}>
            <Link to="/MyProfile/EducationDetails" style={styles.navLink}>Education Details</Link>
          </li>
          <li style={styles.profileNavItem}>
            <Link to="/MyProfile/InternshipWorkEx" style={styles.navLink}>Internship & Work Ex</Link>
          </li>
          <li style={styles.profileNavItem}>
            <Link to="/MyProfile/SkillsSubjectsLanguages" style={styles.navLink}>Skills, Subjects & Languages</Link>
          </li>
          <li style={styles.profileNavItem}>
            <Link to="/MyProfile/PositionResponsibilities" style={styles.navLink}>Position of Responsibilities</Link>
          </li>
          <li style={styles.profileNavItem}>
            <Link to="/MyProfile/Projects" style={styles.navLink}>Projects</Link>
          </li>
          <li style={styles.profileNavItem}>
            <Link to="/MyProfile/Accomplishments" style={styles.navLink}>Accomplishments</Link>
          </li>
          <li style={styles.profileNavItem}>
            <Link to="/MyProfile/Volunteering" style={styles.navLink}>Volunteering</Link>
          </li>
          <li style={styles.profileNavItem}>
            <Link to="/MyProfile/ExtraCurricular" style={styles.navLink}>Extra-curricular Activities</Link>
          </li>
        </ul>
      </div>
      <div style={styles.profileDetails}>
        <Routes>
          <Route path="BasicDetails" element={<BasicDetails />} />
          <Route path="EducationDetails" element={<EducationDetails />} />
          <Route path="InternshipWorkEx" element={<InternshipWorkEx />} />
          <Route path="SkillsSubjectsLanguages" element={<SkillsSubjectsLanguages />} />
          <Route path="PositionResponsibilities" element={<PositionResponsibilities />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Accomplishments" element={<Accomplishments />} />
          <Route path="Volunteering" element={<Volunteering />} />
          <Route path="ExtraCurricular" element={<ExtraCurricular />} />
        </Routes>
      </div>
    </div>
  );
};

const styles = {
  profileContainer: {
    display: 'flex',
    height: '100vh',
  },
  sidebar: {
    width: '250px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRight: '1px solid #ddd',
  },
  profileHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  profileImage: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  profileNavList: {
    listStyleType: 'none',
    padding: 0,
  },
  profileNavItem: {
    marginBottom: '10px',
    cursor: 'pointer',
  },
  navLink: {
    textDecoration: 'none',
    color: 'black',
  },
  profileDetails: {
    flex: 1,
    padding: '20px',
  },
  sectionContainer: {
    marginBottom: '20px',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionButtons: {
    display: 'flex',
    gap: '10px',
  },
  updateButton: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  cancelButton: {
    padding: '10px 20px',
    backgroundColor: '#ccc',
    color: '#000',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

// Individual Section Components
const BasicDetails = () => (
  <div style={styles.sectionContainer}>
    <h2>Basic Details</h2>
    <p><strong>Full Name: </strong>Pradeep Kumar</p>
    <p><strong>Date of Birth: </strong>21 February, 2002</p>
    <p><strong>Gender: </strong>Male</p>
    <p><strong>Current/Latest College: </strong>Mangalmay Institute of Management and Technology, Greater Noida</p>
    <p><strong>Current Course: </strong>Communication & Computer Science at Mangalmay Institute of Management and Technology, Greater Noida</p>
    <p><strong>Batch: </strong>2024 Passout Batch</p>
    <p><strong>Roll No.: </strong>2007861520004</p>
    <div style={styles.sectionButtons}>
      <button style={styles.updateButton}>Update</button>
      <button style={styles.cancelButton}>Cancel</button>
    </div>
  </div>
);

const EducationDetails = () => (
  <div style={styles.sectionContainer}>
    <h2>Education Details</h2>
    {/* Add your education details content here */}
    <div style={styles.sectionButtons}>
      <button style={styles.updateButton}>Update</button>
      <button style={styles.cancelButton}>Cancel</button>
    </div>
  </div>
);

// Repeat similar structure for the other sections
const InternshipWorkEx = () => (
  <div style={styles.sectionContainer}>
    <h2>Internship & Work Ex</h2>
    {/* Add your internship & work experience content here */}
    <div style={styles.sectionButtons}>
      <button style={styles.updateButton}>Update</button>
      <button style={styles.cancelButton}>Cancel</button>
    </div>
  </div>
);

const SkillsSubjectsLanguages = () => (
  <div style={styles.sectionContainer}>
    <h2>Skills, Subjects & Languages</h2>
    {/* Add your skills, subjects & languages content here */}
    <div style={styles.sectionButtons}>
      <button style={styles.updateButton}>Update</button>
      <button style={styles.cancelButton}>Cancel</button>
    </div>
  </div>
);

const PositionResponsibilities = () => (
  <div style={styles.sectionContainer}>
    <h2>Position of Responsibilities</h2>
    {/* Add your position of responsibilities content here */}
    <div style={styles.sectionButtons}>
      <button style={styles.updateButton}>Update</button>
      <button style={styles.cancelButton}>Cancel</button>
    </div>
  </div>
);

const Projects = () => (
  <div style={styles.sectionContainer}>
    <h2>Projects</h2>
    {/* Add your projects content here */}
    <div style={styles.sectionButtons}>
      <button style={styles.updateButton}>Update</button>
      <button style={styles.cancelButton}>Cancel</button>
    </div>
  </div>
);

const Accomplishments = () => (
  <div style={styles.sectionContainer}>
    <h2>Accomplishments</h2>
    {/* Add your accomplishments content here */}
    <div style={styles.sectionButtons}>
      <button style={styles.updateButton}>Update</button>
      <button style={styles.cancelButton}>Cancel</button>
    </div>
  </div>
);

const Volunteering = () => (
  <div style={styles.sectionContainer}>
    <h2>Volunteering</h2>
    {/* Add your volunteering content here */}
    <div style={styles.sectionButtons}>
      <button style={styles.updateButton}>Update</button>
      <button style={styles.cancelButton}>Cancel</button>
    </div>
  </div>
);

const ExtraCurricular = () => (
  <div style={styles.sectionContainer}>
    <h2>Extra-curricular Activities</h2>
    {/* Add your extra-curricular activities content here */}
    <div style={styles.sectionButtons}>
      <button style={styles.updateButton}>Update</button>
      <button style={styles.cancelButton}>Cancel</button>
    </div>
  </div>
);

export default MyProfile;
