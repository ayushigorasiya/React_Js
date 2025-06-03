import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [editId, setEditId] = useState("");
  const [theme, setTheme] = useState("light");

  const [allProperties, setAllProperties] = useState(
    localStorage.getItem("properties")
      ? JSON.parse(localStorage.getItem("properties"))
      : []
  );

  const [formData, setFormData] = useState({
    address: "",
    type: "Rent",
    price: "",
    status: "Available",
    agent: "",
  });

  const changeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const object = {
      id: Math.floor(Math.random() * 10000),
      ...formData,
    };

    if (editId !== "") {
      const updated = allProperties.map((val) =>
        val.id === editId ? { ...val, ...formData } : val
      );
      setAllProperties(updated);
      localStorage.setItem("properties", JSON.stringify(updated));
      alert("Property Updated!");
      setEditId("");
    } else {
      const newList = [...allProperties, object];
      setAllProperties(newList);
      localStorage.setItem("properties", JSON.stringify(newList));
      alert("Property Successfully Added!");
    }

    setFormData({
      address: "",
      type: "Rent",
      price: "",
      status: "Available",
      agent: "",
    });
  };

  const deleteProperty = (id) => {
    const updated = allProperties.filter((item) => item.id !== id);
    setAllProperties(updated);
    localStorage.setItem("properties", JSON.stringify(updated));
    alert("Property Deleted!");
  };

  const editProperty = (id) => {
    const selected = allProperties.find((item) => item.id === id);
    setFormData(selected);
    setEditId(id);
  };

  return (
    <div className={`${theme}-theme`}>
      <div className="theme-container">
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Switch to {theme === "light" ? "Dark" : "Light"} Theme
        </button>

        <h2>Property Listing Dashboard</h2>

        <form onSubmit={handleSubmit} className="theme-box">
          <table>
            <tbody>
              <tr>
                <td>Agent:</td>
                <td>
                  <input
                    type="text"
                    name="agent"
                    value={formData.agent}
                    onChange={changeInput}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>Address:</td>
                <td>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={changeInput}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>Type:</td>
                <td>
                  <label>
                    <input
                      type="radio"
                      name="type"
                      value="Rent"
                      checked={formData.type === "Rent"}
                      onChange={changeInput}
                    />
                    Rent
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="type"
                      value="Sale"
                      checked={formData.type === "Sale"}
                      onChange={changeInput}
                    />
                    Sale
                  </label>
                </td>
              </tr>
              <tr>
                <td>Status:</td>
                <td>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={changeInput}
                  >
                    <option value="Available">Available</option>
                    <option value="Sold">Sold</option>
                    <option value="Rented">Rented</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Price:</td>
                <td>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={changeInput}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <button type="submit">
                    {editId !== "" ? "Update" : "Add"} Property
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>

        <div className="theme-box">
          <h3>All Property Listings</h3>
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
  );
};

export default App;
