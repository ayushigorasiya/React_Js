import { useState } from "react";
import "./App.css"; 

function App() {
   const [input, setInput] = useState([
    {
      name: "",
      phone: ""
    }
  ])

  const addForm = () => {
    let form = { name: "", phone: "" }
    setInput([...input, form])
  }

  const removeForm = (i) => {
    let remove = input.filter((val , index) => {
      return index != i
    })
    alert("Remove Form Successfully...!")
    setInput(remove);
  }
  return (
    <>
      <div className="app-container">
        <h2 className="title">Dynamic Form</h2>

        {input.map((form, index) => (
          <div className="form-card" key={index}>
           <div className="center-text">Form_No : {index + 1}</div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
            />

            <label>Phone:</label>
            <input
              type="number"
              name="phone"
              placeholder="Enter Phone"
            />

            {index !== 0 && (
              
              <button className="remove-btn" onClick={() => removeForm(index)}>
                Remove
              </button>
            )}
          </div>
        ))}

        <div className="action-buttons">
          <button className="add-btn" onClick={addForm}>Add</button>
          <button className="submit-btn">Submit</button>
        </div>
      </div>

 
    </>
  );
}

export default App;

