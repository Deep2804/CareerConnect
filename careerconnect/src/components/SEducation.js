// import React, { useState } from 'react';
// import '../stylesheet/StudentGlobal.css';
// import { Link } from 'react-router-dom';

// function Ssignup() {
//   const [educationLevel, setEducationLevel] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleEducationChange = (e) => {
//     setEducationLevel(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//     } else {
//       setError('');
//       // Proceed with form submission
//       // ...
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="form-content">
//         <h3>Student Sign Up Page</h3>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="inputfirstname" className="form-label">First Name</label>
//             <input type="text" className="form-control" id="firstname" aria-describedby="firstnamehelp" />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="inputlastname" className="form-label">Last Name</label>
//             <input type="text" className="form-control" id="lastname" aria-describedby="lastnamehelp" />
//           </div>
          
//           <div className="mb-3">
//             <label htmlFor="inputemail" className="form-label">Email address</label>
//             <input type="email" className="form-control" id="emailaddress" aria-describedby="emailHelp" />
//             <div id="emailtc" className="form-text">We'll never share your email with anyone else.</div>
//           </div>
          
//           <div className="mb-3">
//             <label htmlFor="inputphone" className="form-label">Phone No.</label>
//             <input type="tel" className="form-control" id="phonenumber" aria-describedby="phonehelp" />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="educationLevel" className="form-label">Highest Level of Education</label>
//             <select className="form-control" id="educationLevel" value={educationLevel} onChange={handleEducationChange}>
//               <option value="">Select</option>
//               <option value="10th">10th</option>
//               <option value="12th">12th</option>
//               <option value="Diploma">Diploma</option>
//               <option value="Graduation">Graduation</option>
//               <option value="Post-Graduation">Post-Graduation</option>
//               <option value="PhD">PhD</option>
//             </select>
//           </div>

//           {(educationLevel === 'Graduation' || educationLevel === 'Post-Graduation' || educationLevel === 'PhD') && (
//             <>
//               <h4>Graduation/Post-Graduation/PhD Details</h4>
//               <div className="mb-3">
//                 <label htmlFor="universityName" className="form-label">University Name</label>
//                 <input type="text" className="form-control" id="universityName" />
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="collegeName" className="form-label">College Name</label>
//                 <input type="text" className="form-control" id="collegeName" />
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="course" className="form-label">Graduating Course</label>
//                 <input type="text" className="form-control" id="course" />
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="duration" className="form-label">Duration</label>
//                 <input type="text" className="form-control" id="duration" />
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="startYear" className="form-label">Starting Year</label>
//                 <input type="text" className="form-control" id="startYear" />
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="completionYear" className="form-label">Completion Year</label>
//                 <input type="text" className="form-control" id="completionYear" />
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="totalMarks" className="form-label">Total Marks/Total CGPA</label>
//                 <input type="text" className="form-control" id="totalMarks" />
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="obtainedMarks" className="form-label">Obtained Marks/Obtained CGPA</label>
//                 <input type="text" className="form-control" id="obtainedMarks" />
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="percentage" className="form-label">Percentage/CGPA</label>
//                 <input type="text" className="form-control" id="percentage" />
//               </div>
//             </>
//           )}

//           {educationLevel === '12th' && (
//             <>
//               <h4>Intermediate/12th Details</h4>
//               <div className="mb-3">
//                 <label htmlFor="boardName" className="form-label">Board Name</label>
//                 <input type="text" className="form-control" id="boardName" />
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="schoolName" className="form-label">School Name</label>
//                 <input type="text" className="form-control" id="schoolName" />
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="startYear12" className="form-label">Starting Year</label>
//                 <input type="text" className="form-control" id="startYear12" />
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="completionYear12" className="form-label">Completion Year</label>
//                 <input type="text" className="form-control" id="completionYear12" />
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="totalMarks12" className="form-label">Total Marks/Total CGPA</label>
//                 <input type="text" className="form-control" id="totalMarks12" />
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="obtainedMarks12" className="form-label">Obtained Marks/Obtained CGPA</label>
//                 <input type="text" className="form-control" id="obtainedMarks12" />
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="percentage12" className="form-label">Percentage/CGPA</label>
//                 <input type="text" className="form-control" id="percentage12" />
//               </div>
//             </>
//           )}

//           <div className="mb-3">
//             <label htmlFor="inputpassword" className="form-label">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
//             <input
//               type="password"
//               className="form-control"
//               id="confirmPassword"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//           </div>
          
//           {error && <div className="form-text text-danger">{error}</div>}
          
//           <div className="mb-3 form-check">
//             <input type="checkbox" className="form-check-input" id="check1" />
//             <label className="form-check-label" htmlFor="check1">Click on this box to accept T&C and Privacy Policy</label>
//           </div>
//           <Link to='/SEducation'>
//             <button type="submit" className="btn btn-primary">Submit</button>
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Ssignup;

import React, { useState } from 'react';
import '../stylesheet/StudentGlobal.css';
import './SSkills'
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EducationForm() {
    const [educationLevel, setEducationLevel] = useState('');
    const [universityName, setUniversityName] = useState('');
    const [collegeName, setCollegeName] = useState('');
    const [graduatingCourse, setGraduatingCourse] = useState('');
    const [duration, setDuration] = useState('');
    const [startYear, setStartYear] = useState('');
    const [completionYear, setCompletionYear] = useState('');
    const [totalMarksCGPA, setTotalMarksCGPA] = useState('');
    const [obtainedMarksCGPA, setObtainedMarksCGPA] = useState('');
    const [percentageCGPA, setPercentageCGPA] = useState('');
    const { studentId } = useParams();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        const body = {
            education: {
                educationLevel: educationLevel,
                universityName: universityName,
                collegeName: collegeName,
                graduatingCourse: graduatingCourse,
                duration: duration,
                startYear: startYear,
                completionYear: completionYear,
                totalMarksCGPA: totalMarksCGPA,
                obtainedMarksCGPA: obtainedMarksCGPA,
                percentageCGPA: percentageCGPA
            }
        }
        axios.post(`http://localhost:5000/student/${studentId}/field/add`, body).then(() => {
            navigate(`/SSkills/${studentId}`)
        }).catch((err) => {
            console.log(err)
        })
    };

    return (
        <div className="login-container">
            <div className="form-content">
                <h3>Education Details</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="educationLevel" className="form-label">Highest Level of Education</label>
                        <select
                            className="form-control"
                            id="educationLevel"
                            value={educationLevel}
                            onChange={(e) => setEducationLevel(e.target.value)}
                        >
                            <option value="">Select</option>
                            <option value="10th">10th</option>
                            <option value="12th">12th</option>
                            <option value="Diploma">Diploma</option>
                            <option value="Graduation">Graduation</option>
                            <option value="Post-graduation">Post-graduation</option>
                            <option value="PhD">PhD</option>
                        </select>
                    </div>

                    {(educationLevel === 'Graduation' || educationLevel === 'Post-graduation' || educationLevel === 'PhD') && (
                        <>
                            <div className="mb-3">
                                <label htmlFor="universityName" className="form-label">University Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="universityName"
                                    value={universityName}
                                    onChange={(e) => setUniversityName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="collegeName" className="form-label">College Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="collegeName"
                                    value={collegeName}
                                    onChange={(e) => setCollegeName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="graduatingCourse" className="form-label">Graduating Course</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="graduatingCourse"
                                    value={graduatingCourse}
                                    onChange={(e) => setGraduatingCourse(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="duration" className="form-label">Duration</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="duration"
                                    value={duration}
                                    onChange={(e) => setDuration(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="startYear" className="form-label">Starting Year</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="startYear"
                                    value={startYear}
                                    onChange={(e) => setStartYear(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="completionYear" className="form-label">Completion Year</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="completionYear"
                                    value={completionYear}
                                    onChange={(e) => setCompletionYear(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="totalMarksCGPA" className="form-label">Total Marks/CGPA</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="totalMarksCGPA"
                                    value={totalMarksCGPA}
                                    onChange={(e) => setTotalMarksCGPA(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="obtainedMarksCGPA" className="form-label">Obtained Marks/CGPA</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="obtainedMarksCGPA"
                                    value={obtainedMarksCGPA}
                                    onChange={(e) => setObtainedMarksCGPA(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="percentageCGPA" className="form-label">Percentage/CGPA</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="percentageCGPA"
                                    value={percentageCGPA}
                                    onChange={(e) => setPercentageCGPA(e.target.value)}
                                />
                            </div>
                        </>
                    )}
                    {/* <Link to='/SSkills'> */}
                    <button type="submit" className="btn btn-primary">Next</button>
                    {/* </Link> */}
                </form>
            </div>
        </div>
    );
}

export default EducationForm;
