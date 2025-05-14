// import { useState } from "react"

// function App() {

//   const [input, setInput] = useState([
//     {
//       name: "",
//       phone: ""
//     }
//   ])

//   const addForm = () => {
//     let form = { name: "", phone: "" }
//     setInput([...input, form])
//   }

//   const removeForm = (i) => {
//     let remove = input.filter((val , index) => {
//       return index != i
//     })
//     alert("Remove Form Successfully...!")
//     setInput(remove);
//   }

//   return (
//     <>
//       <div align="center">
//         <h2>Dynamic_Form</h2>

//         {
//           input.map((list, index) => {
//             return (
//               <div key={index}>
//                 <table border={1}>
//                   <tr>
//                     <td>Name:</td>
//                     <td><input type="text" /></td>
//                   </tr>
//                   <tr>
//                     <td>Phone:</td>
//                     <td><input type="numer" /></td>
//                   </tr>
//                   <tr>
//                     {
//                       index != 0 &&(
//                         <button type="button" onClick={() => removeForm(index)}>Remove</button>
//                       )
//                     } 
                    
//                   </tr>
//                 </table>
//               </div>
//             )
//           })
//         }
//         <form>

//           <tr>
//             <button type="button" onClick={() => addForm()} >Add</button>
//           </tr>
//           <tr>
//             <button>Submit</button>
//           </tr>

//         </form>
//       </div>
//     </>
//   )
// }

// export default App


import { useState } from "react";
import "./App.css"; // Optional, or use internal <style> below

function App() {
  const [input, setInput] = useState([
    {
      name: "",
      phone: ""
    }
  ]);

  const handleChange = (index, event) => {
    const values = [...input];
    values[index][event.target.name] = event.target.value;
    setInput(values);
  };

  const addForm = () => {
    setInput([...input, { name: "", phone: "" }]);
  };

  const removeForm = (i) => {
    const filtered = input.filter((_, index) => index !== i);
    alert("Removed Form Successfully!");
    setInput(filtered);
  };

  return (
    <>
      <div className="app-container">
        <h2 className="title">Dynamic Form</h2>

        {input.map((form, index) => (
          <div className="form-card" key={index}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={(e) => handleChange(index, e)}
              placeholder="Enter Name"
            />

            <label>Phone:</label>
            <input
              type="number"
              name="phone"
              value={form.phone}
              onChange={(e) => handleChange(index, e)}
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

      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-image: url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1950&q=80');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .app-container {
          background-color: rgba(255, 255, 255, 0.9);
          padding: 30px;
          margin: 50px auto;
          width: 90%;
          max-width: 600px;
          border-radius: 10px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          text-align: center;
        }

        .title {
          margin-bottom: 20px;
          color: #333;
        }

        .form-card {
          background: #f9f9f9;
          padding: 15px;
          margin-bottom: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          text-align: left;
        }

        .form-card label {
          display: block;
          margin-bottom: 5px;
          color: #444;
        }

        .form-card input {
          width: 100%;
          padding: 8px 10px;
          margin-bottom: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .remove-btn {
          background-color: #e74c3c;
          color: white;
          border: none;
          padding: 8px 12px;
          border-radius: 4px;
          cursor: pointer;
        }

        .remove-btn:hover {
          background-color: #c0392b;
        }

        .action-buttons {
          display: flex;
          justify-content: center;
          gap: 15px;
        }

        .add-btn,
        .submit-btn {
          padding: 10px 16px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
        }

        .add-btn {
          background-color: #3498db;
          color: white;
        }

        .add-btn:hover {
          background-color: #2980b9;
        }

        .submit-btn {
          background-color: #2ecc71;
          color: white;
        }

        .submit-btn:hover {
          background-color: #27ae60;
        }
      `}</style>
    </>
  );
}

export default App;

