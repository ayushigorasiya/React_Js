import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Edit.css';

function Edit() {
    const navigate = useNavigate();
    const { editid } = useParams();
    const [allrecord, setAllrecord] = useState(JSON.parse(localStorage.getItem('users')) || []);

    const [forminput, setFormInput] = useState({
        name: '',
        email: '',
        password: '',
        gender: '',
        courses: [],
        city: '',
        doj: ''
    });

    const [showExtraFields, setShowExtraFields] = useState(false);

    useEffect(() => {
        const single = allrecord.find(val => val.id == editid);
        if (single) setFormInput(single);
    }, [editid, allrecord]);

    const changeInput = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox' && name === 'courses') {
            if (checked) {
                setFormInput(prev => ({
                    ...prev,
                    courses: [...prev.courses, value]
                }));
            } else {
                setFormInput(prev => ({
                    ...prev,
                    courses: prev.courses.filter(c => c !== value)
                }));
            }
        } else if (type === 'checkbox' && name === 'toggleExtra') {
            setShowExtraFields(checked);
        } else {
            setFormInput(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedRecords = allrecord.map(val => (val.id == editid ? forminput : val));
        localStorage.setItem('users', JSON.stringify(updatedRecords));
        setAllrecord(updatedRecords);
        alert("User Updated Successfully!");
        navigate('/');
    };

    return (
        <div align="center" className="edit-container">
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit} className="form">

                <div className="input-group">
                    <input
                        type="text"
                        name="name"
                        value={forminput.name}
                        onChange={changeInput}
                        required
                        placeholder="Name"
                    />
                </div>

                <div className="input-group">
                    <input
                        type="email"
                        name="email"
                        value={forminput.email}
                        onChange={changeInput}
                        required
                        placeholder="Email"
                    />
                </div>

                <div className="input-group">
                    <input
                        type="password"
                        name="password"
                        value={forminput.password}
                        onChange={changeInput}
                        required
                        placeholder="Password"
                    />
                </div>

                <div className="input-group toggle-group">
                    <label>
                        <input
                            type="checkbox"
                            name="toggleExtra"
                            checked={showExtraFields}
                            onChange={changeInput}
                        />{' '}
                        Edit Gender & Courses
                    </label>
                </div>

                {showExtraFields && (
                    <>
                        <fieldset className="input-group radio-group">
                            <legend>Gender</legend>
                            <label className="radio-label">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={forminput.gender === "male"}
                                    onChange={changeInput}
                                    required
                                /> Male
                            </label>
                            <label className="radio-label">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={forminput.gender === "female"}
                                    onChange={changeInput}
                                    required
                                /> Female
                            </label>
                        </fieldset>

                        <fieldset className="input-group checkbox-group">
                            <legend>Courses</legend>
                            {['designing', 'developing', 'graphics', 'programming', 'uiux', 'contentwriting'].map(course => (
                                <label key={course} className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        name="courses"
                                        value={course}
                                        checked={forminput.courses.includes(course)}
                                        onChange={changeInput}
                                    />{' '}
                                    {course.charAt(0).toUpperCase() + course.slice(1)}
                                </label>
                            ))}
                        </fieldset>
                    </>
                )}

                <div className="input-group">
                    <select
                        name="city"
                        value={forminput.city}
                        onChange={changeInput}
                        required
                    >
                        <option value="">Select City</option>
                        <option value="surat">Surat</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="delhi">Delhi</option>
                        <option value="ahemdabad">Ahemdabad</option>
                        <option value="rajkot">Rajkot</option>
                        <option value="banglore">Banglore</option>
                    </select>
                </div>

                <div className="input-group">
                    <input
                        type="date"
                        name="doj"
                        value={forminput.doj}
                        onChange={changeInput}
                        required
                    />
                </div>

                <button type="submit" className="btn-submit">Update</button>
            </form>
        </div>
    );
}

export default Edit;
