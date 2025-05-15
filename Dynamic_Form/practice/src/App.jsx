// import { useState } from "react";

// function App() {
//   const initialFormItem = {
//     name: "",
//     age: "",
//     gender: "",
//     address: "",
//     phone: "",
//     email: "",
//     password: ""
//   };

//   const [form, setForm] = useState([initialFormItem]);

//   const [error, setError] = useState([]);

//   const addForm = () => {
//     setForm([...form, initialFormItem]);
//     setError([...error, {}]); // Add corresponding error object
//   };

//   const removeForm = () => {
    
//   }

//   const changeFormData = (e, index) => {
//     const { name, value } = e.target;
//     const updatedForm = [...form];
//     updatedForm[index][name] = value;
//     setForm(updatedForm);
//   };

//   const validateForm = () => {
//     let Valid = true;
//     let errors = [];

//     form.forEach((item, idx) => {
//       let err = {};
//       if (!item.name.trim()) {
//         err.name = "Name is required.";
//         Valid = false;
//       }
//       if (!item.age.trim()) {
//         err.age = "Age is required.";
//         Valid = false;
//       }
//       if (!item.gender) {
//         err.gender = "Gender is required.";
//         Valid = false;
//       }
//       if (!item.address.trim()) {
//         err.address = "Address is required.";
//         Valid = false;
//       }
//       if (!item.phone.trim()) {
//         err.phone = "Phone is required.";
//         Valid = false;
//       }
//       if (!item.email.trim()) {
//         err.email = "Email is required.";
//         Valid = false;
//       }
//       if (!item.password.trim()) {
//         err.password = "Password is required.";
//         Valid = false;
//       }

//       errors[idx] = err;
//     });

//     setError(errors);
//     return Valid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       alert("Form submitted successfully!");
//       console.log("Form Data:", form);
//       setForm([initialFormItem]); // Reset form
//       setError([]);
//     }
//   };

//   return (
//     <div align="center">
//       <h2>Dynamic Practice Form</h2>
//       <form onSubmit={handleSubmit}>
//         <table border={1}>
//           {form.map((item, index) => (
//             <tbody key={index}>
//               <tr>
//                 <td>Name:</td>
//                 <td>
//                   <input
//                     type="text"
//                     name="name"
//                     value={item.name}
//                     onChange={(e) => changeFormData(e, index)}
//                     placeholder="Enter your name"
//                   />
//                   {error[index]?.name && <p>{error[index].name}</p>}
//                 </td>
//               </tr>
//               <tr>
//                 <td>Email:</td>
//                 <td>
//                   <input
//                     type="email"
//                     name="email"
//                     value={item.email}
//                     onChange={(e) => changeFormData(e, index)}
//                     placeholder="Enter your email"
//                   />
//                   {error[index]?.email && <p>{error[index].email}</p>}
//                 </td>
//               </tr>
//               <tr>
//                 <td>Phone:</td>
//                 <td>
//                   <input
//                     type="text"
//                     name="phone"
//                     value={item.phone}
//                     onChange={(e) => changeFormData(e, index)}
//                     placeholder="Enter your phone number"
//                   />
//                   {error[index]?.phone && <p>{error[index].phone}</p>}
//                 </td>
//               </tr>
//               <tr>
//                 <td>Age:</td>
//                 <td>
//                   <input
//                     type="number"
//                     name="age"
//                     value={item.age}
//                     onChange={(e) => changeFormData(e, index)}
//                     placeholder="Enter your age"
//                   />
//                   {error[index]?.age && <p>{error[index].age}</p>}
//                 </td>
//               </tr>
//               <tr>
//                 <td>Gender:</td>
//                 <td>
//                   <input
//                     type="radio"
//                     id={`male-${index}`}
//                     name={`gender-${index}`}
//                     value="male"
//                     checked={item.gender === "male"}
//                     onChange={(e) => changeFormData({ target: { name: "gender", value: e.target.value } }, index)}
//                   />
//                   <label htmlFor={`male-${index}`}>Male</label>

//                   <input
//                     type="radio"
//                     id={`female-${index}`}
//                     name={`gender-${index}`}
//                     value="female"
//                     checked={item.gender === "female"}
//                     onChange={(e) => changeFormData({ target: { name: "gender", value: e.target.value } }, index)}
//                   />
//                   <label htmlFor={`female-${index}`}>Female</label>

//                   {error[index]?.gender && <p>{error[index].gender}</p>}
//                 </td>
//               </tr>
//               <tr>
//                 <td>Address:</td>
//                 <td>
//                   <textarea
//                     name="address"
//                     value={item.address}
//                     onChange={(e) => changeFormData(e, index)}
//                     placeholder="Enter your address"
//                   />
//                   {error[index]?.address && <p>{error[index].address}</p>}
//                 </td>
//               </tr>
//               <tr>
//                 <td>Password:</td>
//                 <td>
//                   <input
//                     type="password"
//                     name="password"
//                     value={item.password}
//                     onChange={(e) => changeFormData(e, index)}
//                     placeholder="Enter your password"
//                   />
//                   {error[index]?.password && <p>{error[index].password}</p>}
//                 </td>
//               </tr>
//               <tr>
//               <td colSpan={2}>
//                 <button type="button" onClick={()=> removeForm()}>
//                   Remove Form
//                 </button>
//               </td>
//             </tr>
//             </tbody>
//           ))}

//           <tbody>
//             <tr>
//               <td colSpan={2}>
//                 <button type="button" onClick={() =>addForm()}>
//                   Add Form
//                 </button>
//               </td>
//             </tr>
//             <tr>
//               <td colSpan={2}>
//                 <input type="submit" value="Submit Form" />
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </form>
//     </div>
//   );
// }

// export default App;
import { useState } from "react";

function App() {
  const FormItem = {
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    address: "",
    password: "",
  };

  const [form, setForm] = useState([{ ...FormItem }]);
  const [error, setError] = useState([{ ...FormItem }]);

  const addForm = () => {
    setForm([...form, { ...FormItem }]);
    setError([...error, { ...FormItem }]);
  };

  const removeForm = (index) => {
    const updatedForm = [...form];
    updatedForm.splice(index, 1);
    setForm(updatedForm);

    const updatedError = [...error];
    updatedError.splice(index, 1);
    setError(updatedError);
  };

  const changeData = (e, index) => {
    const { name, value } = e.target;
    const updatedForm = [...form];
    updatedForm[index][name] = value;
    setForm(updatedForm);
  };

  const validationData = () => {
    let check = true;
    let errorCopy = form.map(() => ({ ...FormItem }));

    form.forEach((data, index) => {
      if (!data.name.trim()) {
        errorCopy[index].name = "Name is required!";
        check = false;
      }
      if (!data.age.trim()) {
        errorCopy[index].age = "Age is required!";
        check = false;
      }
      if (!data.gender) {
        errorCopy[index].gender = "Gender is required!";
        check = false;
      }
      if (!data.address.trim()) {
        errorCopy[index].address = "Address is required!";
        check = false;
      }
      if (!data.phone.trim()) {
        errorCopy[index].phone = "Phone is required!";
        check = false;
      }
      if (!data.email.trim()) {
        errorCopy[index].email = "Email is required!";
        check = false;
      }
      if (!data.password.trim()) {
        errorCopy[index].password = "Password is required!";
        check = false;
      }
    });

    setError(errorCopy);
    return check;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validationData()) {
      alert("Form submitted!");
      console.log("Submitted Data:", form);
      setForm([{ ...FormItem }]);
      setError([{ ...FormItem }]);
    }
  };

  return (
    <div align="center">
      <h2>Practice Form</h2>
      <form onSubmit={handleSubmit}>
        <table border={1}>
          {form.map((data, index) => (
            <tbody key={index}>
              <tr>
                <td>Name :</td>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={(e) => changeData(e, index)}
                    placeholder="Enter Your Name....!"
                  />
                  {error[index]?.name && <p>{error[index].name}</p>}
                </td>
              </tr>
              <tr>
                <td>Email :</td>
                <td>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={(e) => changeData(e, index)}
                    placeholder="Enter Your Email....!"
                  />
                  {error[index]?.email && <p>{error[index].email}</p>}
                </td>
              </tr>
              <tr>
                <td>Phone :</td>
                <td>
                  <input
                    type="number"
                    name="phone"
                    value={data.phone}
                    onChange={(e) => changeData(e, index)}
                    placeholder="Enter Your Contact Number....!"
                  />
                  {error[index]?.phone && <p>{error[index].phone}</p>}
                </td>
              </tr>
              <tr>
                <td>Age :</td>
                <td>
                  <input
                    type="number"
                    name="age"
                    value={data.age}
                    onChange={(e) => changeData(e, index)}
                    placeholder="Enter Your Age....!"
                  />
                  {error[index]?.age && <p>{error[index].age}</p>}
                </td>
              </tr>
              <tr>
                <td>Gender :</td>
                <td>
                  <label>
                    <input
                      type="radio"
                      name={`gender-${index}`} // Unique group name
                      value="male"
                      checked={data.gender === "male"}
                      onChange={(e) =>
                        changeData(
                          { target: { name: "gender", value: e.target.value } },
                          index
                        )
                      }
                    />
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      name={`gender-${index}`}
                      value="female"
                      checked={data.gender === "female"}
                      onChange={(e) =>
                        changeData(
                          { target: { name: "gender", value: e.target.value } },
                          index
                        )
                      }
                    />
                    Female
                  </label>
                  {error[index]?.gender && <p>{error[index].gender}</p>}
                </td>
              </tr>
              <tr>
                <td>Address :</td>
                <td>
                  <textarea
                    name="address"
                    value={data.address}
                    onChange={(e) => changeData(e, index)}
                    placeholder="Enter Your Address....!"
                  />
                  {error[index]?.address && <p>{error[index].address}</p>}
                </td>
              </tr>
              <tr>
                <td>Password :</td>
                <td>
                  <input
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={(e) => changeData(e, index)}
                    placeholder="Enter Your Password....!"
                  />
                  {error[index]?.password && <p>{error[index].password}</p>}
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  {form.length > 1 && (
                    <button type="button" onClick={() => removeForm(index)}>
                      Remove Form
                    </button>
                  )}
                </td>
              </tr>
            </tbody>
          ))}
          <tfoot>
            <tr>
              <td></td>
              <td>
                <button type="button" onClick={addForm}>
                  Add Form
                </button>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="submit" value="Submit All" />
              </td>
            </tr>
          </tfoot>
        </table>
      </form>
    </div>
  );
}

export default App;
