import React, { useState } from 'react';
import '../stylesheet/StudentGlobal.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './SWorkExp';
import axios from 'axios';

function CodingProfileForm() {
    const [includeCodingProfiles, setIncludeCodingProfiles] = useState(false);
    const [leetcodeProfile, setLeetcodeProfile] = useState('');
    const [hackerRankProfile, setHackerRankProfile] = useState('');
    const [codeStudioProfile, setCodeStudioProfile] = useState('');
    const [geeksforgeeksProfile, setGeeksforgeeksProfile] = useState('');
    const [hackerearthProfile, setHackerearthProfile] = useState('');
    const [codeforcesProfile, setCodeforcesProfile] = useState('');
    const [codechefProfile, setCodechefProfile] = useState('');
    const { studentId } = useParams();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here

        const body = {
           codingProfiles: {
                leetcodeProfile,
                hackerRankProfile,
                codeStudioProfile,
                geeksforgeeksProfile,
                hackerearthProfile,
                codeforcesProfile,
                codechefProfile
           }
        }
        axios.post(`http://localhost:5000/student/${studentId}/field/add`, body).then(() => {
            navigate(`/SWorkExp/${studentId}`)
        }).catch((err) => {
            console.log(err)
        })
    };

    return (
        <div className="login-container">
            <div className="form-content">
                <h3>Coding Profile</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="includeCodingProfiles"
                            checked={includeCodingProfiles}
                            onChange={(e) => setIncludeCodingProfiles(e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor="includeCodingProfiles">
                            Include Coding Profiles
                        </label>
                    </div>

                    {includeCodingProfiles && (
                        <>
                            <div className="mb-3">
                                <label htmlFor="leetcodeProfile" className="form-label">LeetCode Profile</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="leetcodeProfile"
                                    value={leetcodeProfile}
                                    onChange={(e) => setLeetcodeProfile(e.target.value)}
                                />
                            </div>
                            
                            <div className="mb-3">
                                <label htmlFor="hackerRankProfile" className="form-label">HackerRank Profile</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="hackerRankProfile"
                                    value={hackerRankProfile}
                                    onChange={(e) => setHackerRankProfile(e.target.value)}
                                />
                            </div>
                            
                            <div className="mb-3">
                                <label htmlFor="codeStudioProfile" className="form-label">Code Studio Profile (Naukri)</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="codeStudioProfile"
                                    value={codeStudioProfile}
                                    onChange={(e) => setCodeStudioProfile(e.target.value)}
                                />
                            </div>
                            
                            <div className="mb-3">
                                <label htmlFor="geeksforgeeksProfile" className="form-label">GeeksforGeeks Profile</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="geeksforgeeksProfile"
                                    value={geeksforgeeksProfile}
                                    onChange={(e) => setGeeksforgeeksProfile(e.target.value)}
                                />
                            </div>
                            
                            <div className="mb-3">
                                <label htmlFor="hackerearthProfile" className="form-label">HackerEarth Profile</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="hackerearthProfile"
                                    value={hackerearthProfile}
                                    onChange={(e) => setHackerearthProfile(e.target.value)}
                                />
                            </div>
                            
                            <div className="mb-3">
                                <label htmlFor="codeforcesProfile" className="form-label">Codeforces Profile</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="codeforcesProfile"
                                    value={codeforcesProfile}
                                    onChange={(e) => setCodeforcesProfile(e.target.value)}
                                />
                            </div>
                            
                            <div className="mb-3">
                                <label htmlFor="codechefProfile" className="form-label">Codechef Profile</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="codechefProfile"
                                    value={codechefProfile}
                                    onChange={(e) => setCodechefProfile(e.target.value)}
                                />
                            </div>
                        </>
                    )}
                    {/* <Link to='/SWorkExp'> */}
                    <button type="submit" className="btn btn-primary">Next</button>
                    {/* </Link> */}
                </form>
            </div>
        </div>
    );
}

export default CodingProfileForm;
