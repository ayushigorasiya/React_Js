import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Add = () => {
  const navigate = useNavigate();
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

        <h2>Property Listing Dashboard</h2>

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

export default Add
