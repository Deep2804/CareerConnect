import React from 'react';
import side1 from './side 1.png'
import side2 from './side 2.png'

const DHome = () => {
  return (
    <div style={styles.container}>
      <div style={styles.leftPanel}>
        <div style={styles.post}>
          <div style={styles.postHeader}>
            <div style={styles.profileImage}>AJ</div>
            <div>
              <h3 style={styles.postTitle}>Open for applications - Inclusive Growth Chain's Job Profile - Blockchain Developer</h3>
              <p style={styles.postAuthor}>Aradhana Jain ・ 2 months ago</p>
            </div>
          </div>
          <div style={styles.postContent}>
            <p>Applications are now being accepted for Inclusive Growth Chain's Job Profile: <strong>Blockchain Developer</strong>.</p>
            <p>Eligible students will be able to find this job profile under <strong>JOB PROFILES</strong> options, and apply.</p>
            <p><strong>Applicable Courses:</strong> None</p>
            <p><strong>Eligibility</strong></p>
            <p><strong>Hiring Process - Stages</strong></p>
            <ol>
              <li>Resume shortlisting</li>
              <li>Technical interview</li>
              <li>HR interview</li>
            </ol>
            <p>Deadline for applications is <strong>May, 12, 10:00 PM</strong>.</p>
          </div>
          <div style={styles.commentsSection}>
            <div style={styles.comment}>
              <p style={styles.commentAuthor}>Sowmiya Baskar</p>
              <p style={styles.commentText}>ssowmi401@gmail.com</p>
            </div>
            <p style={styles.commentCount}>155 Comments</p>
          </div>
        </div>
      </div>
      <div style={styles.rightPanel}>
        <div style={styles.ad}>
          <img src={side1} alt="Ad" style={styles.adImage} />
        </div>
        <div style={styles.ad}>
          <img src={side2} alt="Ad" style={styles.adImage} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    height: '100vh',
  },
  leftPanel: {
    width: '70%',
    paddingRight: '20px',
  },
  rightPanel: {
    width: '28%',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  post: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  postHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  profileImage: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#ddd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    marginRight: '15px',
  },
  postTitle: {
    margin: '0 0 5px',
  },
  postAuthor: {
    margin: 0,
    color: '#888',
  },
  postContent: {
    lineHeight: '1.6',
  },
  commentsSection: {
    marginTop: '20px',
  },
  comment: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  commentAuthor: {
    fontWeight: 'bold',
  },
  commentText: {
    color: '#555',
  },
  commentCount: {
    color: '#888',
    marginTop: '10px',
  },
  ad: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    overflow: 'hidden',
  },
  adImage: {
    width: '100%',
    height: 'auto',
  },
};

export default DHome;
