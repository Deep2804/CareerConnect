import React, { useState } from 'react';
import '../stylesheet/StudentGlobal.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ExperienceForm() {
    const [includeExperience, setIncludeExperience] = useState(false);
    const [experiences, setExperiences] = useState([
        { companyName: '', designation: '', startYear: '', endYear: '', currentlyWorking: false, currentCTC: '', description: '' }
    ]);
    const { studentId } = useParams();
    const navigate = useNavigate();

    const handleAddExperience = () => {
        setExperiences([...experiences, { companyName: '', designation: '', startYear: '', endYear: '', currentlyWorking: false, currentCTC: '', description: '' }]);
    };

    const handleExperienceChange = (index, field, value) => {
        const newExperiences = [...experiences];
        newExperiences[index][field] = value;
        setExperiences(newExperiences);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here

        const body = {
            workExperiences: experiences
         }
         axios.post(`http://localhost:5000/student/${studentId}/field/add`, body).then(() => {
             navigate(`/Slogin/`)
         }).catch((err) => {
             console.log(err)
         })
    };

    return (
        <div className="login-container">
            <div className="form-content">
                <h3>Experience</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="includeExperience"
                            checked={includeExperience}
                            onChange={(e) => setIncludeExperience(e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor="includeExperience">
                            Include Experience
                        </label>
                    </div>

                    {includeExperience && (
                        experiences.map((experience, index) => (
                            <div key={index}>
                                <div className="mb-3">
                                    <label htmlFor={`companyName${index}`} className="form-label">Company Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id={`companyName${index}`}
                                        value={experience.companyName}
                                        onChange={(e) => handleExperienceChange(index, 'companyName', e.target.value)}
                                    />
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor={`designation${index}`} className="form-label">Designation</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id={`designation${index}`}
                                        value={experience.designation}
                                        onChange={(e) => handleExperienceChange(index, 'designation', e.target.value)}
                                    />
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor={`startYear${index}`} className="form-label">Start Year</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id={`startYear${index}`}
                                        value={experience.startYear}
                                        onChange={(e) => handleExperienceChange(index, 'startYear', e.target.value)}
                                    />
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor={`endYear${index}`} className="form-label">End Year</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id={`endYear${index}`}
                                        value={experience.endYear}
                                        onChange={(e) => handleExperienceChange(index, 'endYear', e.target.value)}
                                    />
                                </div>

                                <div className="mb-3 form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id={`currentlyWorking${index}`}
                                        checked={experience.currentlyWorking}
                                        onChange={(e) => handleExperienceChange(index, 'currentlyWorking', e.target.checked)}
                                    />
                                    <label className="form-check-label" htmlFor={`currentlyWorking${index}`}>
                                        Currently Working
                                    </label>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor={`currentCTC${index}`} className="form-label">Current CTC (Optional)</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id={`currentCTC${index}`}
                                        value={experience.currentCTC}
                                        onChange={(e) => handleExperienceChange(index, 'currentCTC', e.target.value)}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor={`description${index}`} className="form-label">Description</label>
                                    <textarea
                                        className="form-control"
                                        id={`description${index}`}
                                        value={experience.description}
                                        onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                                    />
                                </div>
                            </div>
                        ))
                    )}

                    <button type="button" className="btn btn-primary" onClick={handleAddExperience}>Add Experience</button>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ExperienceForm;
