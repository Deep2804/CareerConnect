import React from 'react';
import '../stylesheet/Resource.css';
import { Link } from 'react-router-dom';

function Resource() {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-4">Resources</h1>
        <p className="lead">You can find valuable resources here on this website.</p>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h2 className="mb-4">Interview Questions</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <Link to="https://www.geeksforgeeks.org/python-interview-questions/" className="text-decoration-none">Python</Link>
            </li>
            <li className="list-group-item">
              <Link to="https://www.geeksforgeeks.org/java-interview-questions/" className="text-decoration-none">Java</Link>
            </li>
            <li className="list-group-item">
              <Link to="https://www.geeksforgeeks.org/javascript-interview-questions-and-answers/" className="text-decoration-none">JavaScript</Link>
            </li>
            <li className="list-group-item">
              <Link to="https://www.fullstack.cafe/blog/kotlin-interview-questions" className="text-decoration-none">Kotlin</Link>
            </li>
            <li className="list-group-item">
              <Link to="https://www.geeksforgeeks.org/c-sharp-interview-questions/" className="text-decoration-none">C#</Link>
            </li>
            <li className="list-group-item">
              <Link to="https://www.javatpoint.com/artificial-intelligence-interview-questions" className="text-decoration-none">Artificial Intelligence</Link>
            </li>
            <li className="list-group-item">
              <Link to="https://www.geeksforgeeks.org/machine-learning-interview-questions/" className="text-decoration-none">Machine Learning</Link>
            </li>
            <li className="list-group-item">
              <Link to="https://www.geeksforgeeks.org/top-50-android-interview-questions-answers-sde-i-to-sde-iii/" className="text-decoration-none">Android</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resource;
