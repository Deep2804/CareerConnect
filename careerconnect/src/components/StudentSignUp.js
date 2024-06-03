import React, { useState } from "react";
import "../stylesheet/StudentGlobal.css";
import { Link } from "react-router-dom";

function StudentSignUp() {
    const [studentDetail, setStudentDetail] = useState({
        firstname: '',
        lastname: '',
        emailaddress: '',
        phonenumber: '',
        password: '',
        confirmPassword: ''
    });

    const OnChange = (e) => {
        setStudentDetail({ ...studentDetail, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (studentDetail.password !== studentDetail.confirmPassword) {
            alert("Passwords do not match");
            console.log("Password doesn't match");
            setStudentDetail({ ...studentDetail, confirmPassword: "" });
        }
    };

    function nextBtn() {
        const { firstname, lastname, emailaddress, phonenumber, password, confirmPassword } = studentDetail;
        return !firstname || !lastname || !emailaddress || !phonenumber || !password || !confirmPassword;
     }

    return (
        <div className="login-container">
            <div className="form-content">
                <h3>Student Sign Up Page</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="firstname" className="form-label">
                            First Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstname"
                            aria-describedby="firstnamehelp"
                            value={studentDetail.firstname}
                            name="firstname"
                            onChange={OnChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="lastname" className="form-label">
                            Last Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastname"
                            aria-describedby="lastnamehelp"
                            name="lastname"
                            value={studentDetail.lastname}
                            onChange={OnChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="emailaddress" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="emailaddress"
                            aria-describedby="emailHelp"
                            value={studentDetail.emailaddress}
                            onChange={OnChange}
                            name="emailaddress"
                        />
                        <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="phonenumber" className="form-label">
                            Phone No.
                        </label>
                        <input
                            type="tel"
                            className="form-control"
                            id="phonenumber"
                            aria-describedby="phonehelp"
                            name="phonenumber"
                            value={studentDetail.phonenumber}
                            onChange={OnChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={studentDetail.password}
                            onChange={OnChange}
                            name="password"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            value={studentDetail.confirmPassword}
                            onChange={OnChange}
                            name="confirmPassword"
                        />
                    </div>
{/* 
                    {error && <div className="form-text text-danger">{error}</div>} */}

                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="check1" />
                        <label className="form-check-label" htmlFor="check1">
                            Click on this box to accept T&C and Privacy Policy
                        </label>
                    </div>
                    <Link to="/SEducation">
                        <button
                            type="submit"
                            disabled={nextBtn()}
                            className="btn btn-primary"
                        >
                            Next
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default StudentSignUp;
