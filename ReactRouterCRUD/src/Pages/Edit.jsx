import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const navigate = useNavigate();
    const { editid } = useParams();
    const [theme, setTheme] = useState("light");

    const [allProperties, setAllProperties] = useState(
        JSON.parse(localStorage.getItem("properties"))
        || []);

    const [formData, setFormData] = useState({
        address: "",
        type: "",
        price: "",
        status: "",
        agent: "",
    });

    const changeInput = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const object = {
            id: Math.floor(Math.random() * 10000),
            ...formData,
        };
        const newList = [...allProperties, object];
        localStorage.setItem("properties", JSON.stringify(newList));
        alert("Property Successfully Added!");
        navigate("/");
    };
    return (
        <div className={`${theme}-theme`}>
            <div className="theme-container">
                <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                    Switch to {theme === "light" ? "Dark" : "Light"} Theme
                </button>

                <h2>My React_Router_CRUD</h2>

                <h2>Edit Property</h2>

                <form onSubmit={handleSubmit} className="theme-box modern-form">
                    <div className="form-group">
                        <label>Agent Name</label>
                        <input
                            type="text"
                            name="agent"
                            placeholder="Enter Agent Name...!"
                            onChange={changeInput}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Property Address</label>
                        <input
                            type="text"
                            name="address"
                            placeholder="Enter Property Adress....!"
                            onChange={changeInput}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Property Type</label>
                        <div className="radio-group">
                            <label>
                                <input
                                    type="radio"
                                    name="type"
                                    value="Rent"
                                    onChange={changeInput}
                                />
                                Rent
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="type"
                                    value="Sale"
                                    onChange={changeInput}
                                />
                                Sale
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Status</label>
                        <select name="status" onChange={changeInput}>
                            <option value="" >- - - Select Status - - -</option>
                            <option value="Available">Available</option>
                            <option value="Sold">Sold</option>
                            <option value="Rented">Rented</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Price ($)</label>
                        <input
                            type="number"
                            name="price"
                            placeholder="Enter Property Price...!"
                            onChange={changeInput}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <button className="submitbtn" type="submit">Add Property</button>


                    </div>
                </form>
                <Link to="/">View Property</Link>
                {/* <div className="theme-box">
          <h2>All Property Listings</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Address</th>
                <th>Type</th>
                <th>Price</th>
                <th>Status</th>
                <th>Agent</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {allProperties.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.address}</td>
                  <td>{item.type}</td>
                  <td>{item.price}</td>
                  <td>{item.status}</td>
                  <td>{item.agent}</td>
                  <td>
                    <button onClick={() => editProperty(item.id)}>Edit</button>
                    <button onClick={() => deleteProperty(item.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
            </div>
        </div>
    );
}

// export default Edit
// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import './Edit.css';

// function Edit() {
//     const navigate = useNavigate();
//     const { editid } = useParams();
//     const [allrecord, setAllrecord] = useState(JSON.parse(localStorage.getItem('users')) || []);

//     const [forminput, setFormInput] = useState({
//         name: '',
//         email: '',
//         password: '',
//         gender: '',
//         courses: [],
//         city: '',
//         doj: ''
//     });

//     const [showExtraFields, setShowExtraFields] = useState(false);

//     useEffect(() => {
//         const single = allrecord.find(val => val.id == editid);
//         if (single) setFormInput(single);
//     }, [editid, allrecord]);

//     const changeInput = (e) => {
//         const { name, value, type, checked } = e.target;

//         if (type === 'checkbox' && name === 'courses') {
//             if (checked) {
//                 setFormInput(prev => ({
//                     ...prev,
//                     courses: [...prev.courses, value]
//                 }));
//             } else {
//                 setFormInput(prev => ({
//                     ...prev,
//                     courses: prev.courses.filter(c => c !== value)
//                 }));
//             }
//         } else if (type === 'checkbox' && name === 'toggleExtra') {
//             setShowExtraFields(checked);
//         } else {
//             setFormInput(prev => ({
//                 ...prev,
//                 [name]: value
//             }));
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const updatedRecords = allrecord.map(val => (val.id == editid ? forminput : val));
//         localStorage.setItem('users', JSON.stringify(updatedRecords));
//         setAllrecord(updatedRecords);
//         alert("User Updated Successfully!");
//         navigate('/');
//     };

//     return (
//         <div align="center" className="edit-container">
//             <h2>Edit User</h2>
//             <form onSubmit={handleSubmit} className="form">

//                 <div className="input-group">
//                     <input
//                         type="text"
//                         name="name"
//                         value={forminput.name}
//                         onChange={changeInput}
//                         required
//                         placeholder="Name"
//                     />
//                 </div>

//                 <div className="input-group">
//                     <input
//                         type="email"
//                         name="email"
//                         value={forminput.email}
//                         onChange={changeInput}
//                         required
//                         placeholder="Email"
//                     />
//                 </div>

//                 <div className="input-group">
//                     <input
//                         type="password"
//                         name="password"
//                         value={forminput.password}
//                         onChange={changeInput}
//                         required
//                         placeholder="Password"
//                     />
//                 </div>

//                 <div className="input-group toggle-group">
//                     <label>
//                         <input
//                             type="checkbox"
//                             name="toggleExtra"
//                             checked={showExtraFields}
//                             onChange={changeInput}
//                         />{' '}
//                         Edit Gender & Courses
//                     </label>
//                 </div>

//                 {showExtraFields && (
//                     <>
//                         <fieldset className="input-group radio-group">
//                             <legend>Gender</legend>
//                             <label className="radio-label">
//                                 <input
//                                     type="radio"
//                                     name="gender"
//                                     value="male"
//                                     checked={forminput.gender === "male"}
//                                     onChange={changeInput}
//                                     required
//                                 /> Male
//                             </label>
//                             <label className="radio-label">
//                                 <input
//                                     type="radio"
//                                     name="gender"
//                                     value="female"
//                                     checked={forminput.gender === "female"}
//                                     onChange={changeInput}
//                                     required
//                                 /> Female
//                             </label>
//                         </fieldset>

//                         <fieldset className="input-group checkbox-group">
//                             <legend>Courses</legend>
//                             {['designing', 'developing', 'graphics', 'programming', 'uiux', 'contentwriting'].map(course => (
//                                 <label key={course} className="checkbox-label">
//                                     <input
//                                         type="checkbox"
//                                         name="courses"
//                                         value={course}
//                                         checked={forminput.courses.includes(course)}
//                                         onChange={changeInput}
//                                     />{' '}
//                                     {course.charAt(0).toUpperCase() + course.slice(1)}
//                                 </label>
//                             ))}
//                         </fieldset>
//                     </>
//                 )}

//                 <div className="input-group">
//                     <select
//                         name="city"
//                         value={forminput.city}
//                         onChange={changeInput}
//                         required
//                     >
//                         <option value="">Select City</option>
//                         <option value="surat">Surat</option>
//                         <option value="mumbai">Mumbai</option>
//                         <option value="delhi">Delhi</option>
//                         <option value="ahemdabad">Ahemdabad</option>
//                         <option value="rajkot">Rajkot</option>
//                         <option value="banglore">Banglore</option>
//                     </select>
//                 </div>

//                 <div className="input-group">
//                     <input
//                         type="date"
//                         name="doj"
//                         value={forminput.doj}
//                         onChange={changeInput}
//                         required
//                     />
//                 </div>

//                 <button type="submit" className="btn-submit">Update</button>
//             </form>
//         </div>
//     );
// }

// export default Edit;
