import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Add.css';

function Add() {
  const navigate = useNavigate();
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

  const changeInput = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormInput((prev) => ({
        ...prev,
        courses: checked
          ? [...prev.courses, value]
          : prev.courses.filter((c) => c !== value)
      }));
    } else {
      setFormInput({
        ...forminput,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: Math.floor(Math.random() * 1000),
      ...forminput
    };
    const newRecord = [...allrecord, newUser];
    localStorage.setItem('users', JSON.stringify(newRecord));
    alert("User Added Successfully!");
    navigate('/');
  };

  return (
    <div className="container">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" name="name" onChange={changeInput} placeholder=" " required />
          <label>Name</label>
        </div>

        <div className="form-group">
          <input type="email" name="email" onChange={changeInput} placeholder=" " required />
          <label>Email</label>
        </div>

        <div className="form-group">
          <input type="password" name="password" onChange={changeInput} placeholder=" " required />
          <label>Password</label>
        </div>

        {/* Gender */}
        <div className="section">
          <p>Gender:</p>
          <div className="options">
            <label className="radio-btn">
              <input type="radio" name="gender" value="male" onChange={changeInput} />
              <span>Male</span>
            </label>
            <label className="radio-btn">
              <input type="radio" name="gender" value="female" onChange={changeInput} />
              <span>Female</span>
            </label>
          </div>
        </div>

        {/* Courses */}
        <div className="section">
          <p>Courses:</p>
          <div className="options multi">
            {["designing", "developing", "graphics", "programming", "uiux", "contentwriting"].map(course => (
              <label className="checkbox-btn" key={course}>
                <input
                  type="checkbox"
                  name="courses"
                  value={course}
                  onChange={changeInput}
                />
                <span>{course.charAt(0).toUpperCase() + course.slice(1)}</span>
              </label>
            ))}
          </div>
        </div>

        {/* City */}
        <div className="form-group">
          <select className="city" name="city" onChange={changeInput} required>
            <option value=""></option>
            <option value="surat">Surat</option>
            <option value="mumbai">Mumbai</option>
            <option value="delhi">Delhi</option>
            <option value="ahemdabad">Ahemdabad</option>
            <option value="rajkot">Rajkot</option>
            <option value="banglore">Banglore</option>
          </select>
          <label>City</label>
        </div>

        {/* DOJ */}
        <div className="form-group">
          <input type="date" name="doj" onChange={changeInput} required />
          <label>Date of Joining</label>
        </div>

        <input type="submit" value="Add User" />
      </form>
      <Link to="/">← View Users</Link>
    </div>
  );
}

export default Add;
