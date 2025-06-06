import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const View = () => {

  const [theme, setTheme] = useState("light");

  const [allProperties, setAllProperties] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("properties")) || [];
    setAllProperties(data);
  }, [])
  const deleteProperty = (id) => {
    const updated = allProperties.filter((item) => item.id !== id);
    setAllProperties(updated);
    localStorage.setItem("properties", JSON.stringify(updated));
    alert("Property was Deleted!");
  };

  const editProperty = (id) => {
    navigate(`/edit/${id}`);
  };
  return (
    <div>
      <div className={`${theme}-theme`}>
        <div className="theme-container">
          <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            Switch to {theme === "light" ? "Dark" : "Light"} Theme
          </button>
          <button>

            <Link to="/add" >Add Property</Link>
          </button>
          <div className="theme-box">

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
          </div>
        </div>
      </div>
    </div>
  )
}

export default View
