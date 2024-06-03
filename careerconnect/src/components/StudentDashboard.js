// Dashboard.js
import React from 'react';
import '../stylesheet/StudentDashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Header />
      <div className="dashboard-content">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
};

const Header = () => (
  <header className="dashboard-header">
    <h1>Dashboard</h1>
  </header>
);

const Sidebar = () => (
  <aside className="dashboard-sidebar">
    <nav>
      <ul>
        <li>Home</li>
        <li>Job Profiles</li>
        <li>My Profile</li>
        <li>Interviews</li>
        <li>Assessments</li>
        <li>Events</li>
        <li>Resume</li>
        <li>Launchpad</li>
        <li>Help</li>
      </ul>
    </nav>
  </aside>
);

const MainContent = () => (
  <main className="dashboard-main">
    <section className="job-posting">
      <h2>Open for applications - Inclusive Growth Chain's Job Profile - Blockchain Developer</h2>
      <p>Applications are now being accepted...</p>
      <ul>
        <li>Resume shortlisting</li>
        <li>Technical interview</li>
        <li>HR interview</li>
      </ul>
      <p>Deadline for applications is May, 12, 10:00 PM.</p>
    </section>
    <section className="comments">
      <p><strong>Sowmiya Baskar:</strong> ssowmi401@gmail.com</p>
    </section>
  </main>
);

const Footer = () => (
  <footer className="dashboard-footer">
    <p>&copy; 2024 Dashboard. All rights reserved.</p>
  </footer>
);

export default Dashboard;