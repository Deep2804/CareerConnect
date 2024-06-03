import React, { useState } from 'react';
import '../stylesheet/StudentGlobal.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './SCodingProfile';
import axios from 'axios';

function Certifications() {
    const [hasCertifications, setHasCertifications] = useState('');
    const [certificates, setCertificates] = useState([{ name: '', file: null }]);
    const { studentId } = useParams();
    const navigate = useNavigate();

    const handleCertificationChange = (e) => {
        setHasCertifications(e.target.value);
        if (e.target.value === 'No') {
            setCertificates([{ name: '', file: null }]);
        }
    };

    const handleCertificateNameChange = (index, value) => {
        const newCertificates = [...certificates];
        newCertificates[index].name = value;
        setCertificates(newCertificates);
    };

    const handleCertificateFileChange = (index, file) => {
        const newCertificates = [...certificates];
        newCertificates[index].file = file;
        setCertificates(newCertificates);
    };

    const addCertificate = () => {
        setCertificates([...certificates, { name: '', file: null }]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        const body = {
            certificates: certificates
        }
        axios.post(`http://localhost:5000/student/${studentId}/field/add`, body).then(() => {
            navigate(`/SCodingProfile/${studentId}`)
        }).catch((err) => {
            console.log(err)
        })
    };


    return (
        <div className="login-container">
            <div className="form-content">
                <h3>Certifications</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="hasCertifications" className="form-label">Have you done any certifications?</label>
                        <select
                            className="form-control"
                            id="hasCertifications"
                            value={hasCertifications}
                            onChange={handleCertificationChange}
                        >
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>

                    {hasCertifications === 'Yes' && certificates.map((certificate, index) => (
                        <div key={index} className="certificate-section">
                            <div className="mb-3">
                                <label htmlFor={`certificateName-${index}`} className="form-label">Certificate Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id={`certificateName-${index}`}
                                    value={certificate.name}
                                    onChange={(e) => handleCertificateNameChange(index, e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor={`certificateFile-${index}`} className="form-label">Upload Certificate PDF</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id={`certificateFile-${index}`}
                                    accept="application/pdf"
                                    onChange={(e) => handleCertificateFileChange(index, e.target.files[0])}
                                />
                            </div>
                        </div>
                    ))}

                    {hasCertifications === 'Yes' && (
                        <button type="button" className="btn btn-secondary" onClick={addCertificate}>
                            Add Another Certificate
                        </button>
                    )}
                    {/* <Link to='/SCodingProfile'> */}
                    <button type="submit" className="btn btn-primary">Next</button>
                    {/* </Link> */}
                </form>
            </div>
        </div>
    );
}

export default Certifications;
