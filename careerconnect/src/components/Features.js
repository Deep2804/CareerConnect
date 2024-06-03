import React from 'react';
import '../stylesheet/Features.css';

const Features = () => {
  return (
    <section id="features" className="features">
  <h2>Everything at One Place</h2>
  <p>Streamline Your Campus Hiring. Save Time. Save Resources. Hire the Best Talent Faster.</p>
  <div className="feature-items">
    <div className="feature-item">
      <h3>JOB POSTINGS</h3>
      <p>Post jobs easily and efficiently. Reach out to multiple campuses at once.</p>
    </div>
    <div className="feature-item">
      <h3>CANDIDATE MONITORING</h3>
      <p>Track and evaluate the performance and progress of each candidate.</p>
    </div>
    <div className="feature-item">
      <h3>RECRUITMENT AID</h3>
      <p>Get insights on candidate activity, manage interviews, and streamline your hiring process.</p>
    </div>
  </div>
  {/* <img src={`${process.env.PUBLIC_URL}/images/dashboard.png`} alt="Dashboard" className="dashboard-img" /> */}
</section>

    
  );
};

export default Features;
