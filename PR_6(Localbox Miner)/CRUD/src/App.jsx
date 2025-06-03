// function App() {


// const handleSubmit = () => {

// }

//   return (
//     <>
//       <div align="center">
//           <h2>Property Listing Dashboard</h2>
//           <hr />
//           <hr />

//           <form onSubmit={handleSubmit}>
//            <table border={1} cellPadding={6} cellSpacing={3}>
//               <tbody>
//                 <tr>
//                   <td>Agent_name</td>
//                   <td>
//                     <input type="text" name="agent" placeholder="Enter Agent Name...!" />
//                   </td>
//                 </tr>
//                  <tr>
//                   <td>Type</td>
//                   <td>
//                     <input type="radio" name="type" value="rent" />Rent
//                     <input type="radio" name="type" value="sale" />
//                     Sale
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Address</td>
//                   <td>
//                      <input type="text" name="address" placeholder="Enter Property Address...!" />
//                   </td>

//                   {/* value , onchange , require aapvanu baki che badha ma */}
//                 </tr>
//                 <tr>
//                   <td>Price</td>
//                   <td>
//                     <input type=" number" name="price" placeholder="Enter Property Price...!" />
//                   </td>
//                 </tr>
               
//                 <tr>
//                   <td>Status</td>
//                   <td>
//                     <select name="status" >
//                       <option value="available">Available</option>
//                       <option value="sold">Sold</option>
//                     </select>
//                   </td>
//                 </tr>
                
//                 <tr>
//                   <td></td>
//                   <td>
//                     <input type="button" value="Submit" onClick={handleSubmit} />
//                   </td>
//                 </tr>
//               </tbody>
//            </table>
//           </form>
//       </div>
//     </>
//   )
// }

// export default App



import React, { useState } from "react";
import "../App.css";

const PropertyForm = () => {
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
    const property = {
      id: Math.floor(Math.random() * 10000),
      ...formData,
    };

    if (editId !== "") {
      const updated = allProperties.map((item) =>
        item.id === editId ? { ...item, ...formData } : item
      );
      setAllProperties(updated);
      localStorage.setItem("properties", JSON.stringify(updated));
      alert("Property Updated!");
      setEditId("");
    } else {
      const newList = [...allProperties, property];
      setAllProperties(newList);
      localStorage.setItem("properties", JSON.stringify(newList));
      alert("Property Added!");
    }

    // Reset Form
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
    <div className={`${theme === "light" ? "light-theme" : "dark-theme"}`} align="center">
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{ marginBottom: "20px", padding: "8px 14px", borderRadius: "6px", cursor: "pointer" }}
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>

      <h2>Property Listing Dashboard</h2>
      <form onSubmit={handleSubmit}>
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
                <input
                  type="radio"
                  name="type"
                  value="Rent"
                  checked={formData.type === "Rent"}
                  onChange={changeInput}
                />
                Rent
                <input
                  type="radio"
                  name="type"
                  value="Sale"
                  checked={formData.type === "Sale"}
                  onChange={changeInput}
                />
                Sale
              </td>
            </tr>
            <tr>
              <td>Status:</td>
              <td>
                <select name="status" value={formData.status} onChange={changeInput}>
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

      <br />
      <hr />
      <br />

      <h3>All Property Listings</h3>
      <table border={1}>
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
          {allProperties.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.address}</td>
              <td>{item.type}</td>
              <td>{item.price}</td>
              <td>{item.status}</td>
              <td>{item.agent}</td>
              <td>
                <button onClick={() => deleteProperty(item.id)}>Delete</button>
                <button onClick={() => editProperty(item.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropertyForm;
