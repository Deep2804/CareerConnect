import React from 'react';
import './JobProfiles.css';

const JobProfiles = () => {
  return (
    <div className="container">
      <div className="jobListContainer">
        <ul className="jobList">
          {jobData.map((job, index) => (
            <li key={index} className="jobItem">
              <div className="jobLogo">
                <img src={job.logo} alt="Company Logo" className="logoImage" />
              </div>
              <div className="jobDetails">
                <div className="jobTitle">{job.title}</div>
                <div className="jobCompany">{job.company} | {job.location}</div>
                <div className="jobDate">{job.date}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="jobDescriptionContainer">
        <div className="jobDescriptionHeader">
          <div>
            <h2>Graphic Designer - Remote Job Role</h2></div>
          <div className="eligibilityCriteria">You are not eligible for this job opening</div>
        </div>
        <div className="jobDescription">
          <h2>Opening Overview</h2>
          <p>Category: Not Specified</p>
          <p>Job Functions: Not Specified</p>
          <p>Job Profile CTC: Not Specified</p>
          <p>Other Info: Not Specified</p>
        </div>
        <div className="jobDescription">
          <h2>Required Skills</h2>
          <p>Not Specified</p>
        </div>
        <div className="jobDescription">
          <h2>Additional Information</h2>
          <p>Not Specified</p>
        </div>
      </div>
    </div>
  );
};

const jobData = [
  {
    title: 'Graphic Designer - Remote Job Role',
    company: 'Cimpress',
    location: 'Remote',
    date: '2 months ago',
    logo: 'https://via.placeholder.com/50', // Replace with actual logo URL
  },
  {
    title: 'Graphic Designer - Remote Job Role',
    company: 'Cimpress',
    location: 'Remote',
    date: '5 months ago',
    logo: 'https://via.placeholder.com/50', // Replace with actual logo URL
  },
  {
    title: 'Business Development Associate-Program Advisor (H)',
    company: 'Skill-Lync',
    location: 'Bangalore',
    date: 'a year ago',
    logo: 'https://via.placeholder.com/50', // Replace with actual logo URL
  },
  {
    title: 'Inside Sales Internship - 2',
    company: 'Skill-Lync',
    location: 'Chennai',
    date: 'a year ago',
    logo: 'https://via.placeholder.com/50', // Replace with actual logo URL
  },
];

export default JobProfiles;
