// import { useState } from "react";

// function App() {

//   //normal state input mate
//   const [data, setData] = useState({
//     name: "",
//     age: "",
//     gender: "",
//     address: "",
//     phone: "",
//     email: "",
//     password: ""
//   });

//   // error (validation) state
//   const [error, setError] = useState({
//     name: "",
//     age: "",
//     gender: "",
//     address: "",
//     phone: "",
//     email: "",
//     password: ""
//   })

// //dynamic form part start
//   //dynamic form mate state
//   const [form, setForm] = useState([
//     {
//       name: "",
//       age: "",
//       gender: "",
//       address: "",
//       phone: "",
//       email: "",
//       password: ""
//     }
//   ])

//  const addForm = () => {
//   let newForm = {
//     name: "",
//     age: "",
//     gender: "",
//     address: "",
//     phone: "",
//     email: "",
//     password: ""
//   };
//   setForm([...form, newForm]);
// };

//   const changeFormData = (e, index) => {
//   const { name, value } = e.target;
//   const updatedForm = [...form];
//   updatedForm[index][name] = value;
//   setForm(updatedForm);
// };
// //dynamic form part end
//   const changeData = (e) => {
//     const { name, value } = e.target;
//     setData({
//       ...data,
//       [name]: value
//     });
//   };

//   const validationData = () => {
//     let check = true;
//     let error = {
//       name: "",
//       age: "",
//       gender: "",
//       address: "",
//       phone: "",
//       email: "",
//       password: ""
//     };

//     if (!data.name.trim()) {
//       error.name = "Name Is Required....!"
//       check = false;
//     }
//     if (!data.age.trim()) {
//       error.age = "Age Is Required....!"
//       check = false;
//     }
//     if (!data.gender) {
//       error.gender = "Gender Is Required....!"
//       check = false;
//     }
//     if (!data.address.trim()) {
//       error.address = "Address Is Required....!"
//       check = false;
//     }
//     if (!data.phone.trim()) {
//       error.phone = "Phone Is Required....!"
//       check = false;
//     }
//     if (!data.email.trim()) {
//       error.email = "Email Is Required....!"
//       check = false;
//     }
//     if (!data.password.trim()) {
//       error.password = "Password Is Required....!"
//       check = false;
//     }

//     setError(error);
//     return check;
//   }



//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validationData()) {
//       alert("Form submitted!");
//       console.log(data);
//       setData({
//         name: "",
//         age: "",
//         gender: "",
//         address: "",
//         phone: "",
//         email: "",
//         password: ""
//       })
//     }

//   };

//   return (
//     <div align="center">
//       <h2>Practice Form</h2>

//       <form onSubmit={handleSubmit}>
//         <table border={1}>
//           {
//             form.map((item , index) => {
//               return(
//                 <>
//                   <tbody>
//             <tr>
//               <td>Name :</td>
//               <td>
//                 <input type="text" name="name" value={data.name} onChange={changeData} placeholder="Enter Your Name....!" />
//                 {error.name && <p>{error.name}</p>}
//               </td>
//             </tr>
//             <tr>
//               <td>Email :</td>
//               <td>
//                 <input type="email" name="email" value={data.email} onChange={changeData} placeholder="Enter Your Email....!" />
//                 {error.email && <p>{error.email}</p>}
//               </td>
//             </tr>
//             <tr>
//               <td>Phone :</td>
//               <td>
//                 <input type="number" name="phone" value={data.phone} onChange={changeData} placeholder="Enter Your Contact Number....!" />
//                 {error.phone && <p>{error.phone}</p>}
//               </td>
//             </tr>
//             <tr>
//               <td>Age :</td>
//               <td>
//                 <input type="number" name="age" value={data.age} onChange={changeData} placeholder="Enter Your Age....!" />
//                 {error.age && <p>{error.age}</p>}
//               </td>
//             </tr>
//             <tr>
//               <td>Gender :</td>
//               <td>
//                 <input type="radio" name="gender" value="male" onChange={changeData} checked={data.gender === "male"} /> Male
//                 <input type="radio" name="gender" value="female" onChange={changeData} checked={data.gender === "female"} /> Female
//                 {error.gender && <p>{error.gender}</p>}
//               </td>
//             </tr>
//             <tr>
//               <td>Address :</td>
//               <td>
//                 <textarea name="address" value={data.address} onChange={changeData} placeholder="Enter Your Address....!" />
//                 {error.address && <p>{error.address}</p>}
//               </td>
//             </tr>
//             <tr>
//               <td>Password :</td>
//               <td>
//                 <input type="password" name="password" value={data.password} onChange={changeData} placeholder="Enter Your Password....!" />
//                 {error.password && <p>{error.password}</p>}
//               </td>
//             </tr>
//             <tr>
//               <td></td>
//               <td>
//                 <button type="submit">Remove_form</button>
//               </td>
//             </tr>

//           </tbody>
//                 </>
//               )
//             })
//           }
//           <tr>
//               <td></td>
//               <td><button type="" onClick={()=> addForm()}>Add_Form</button></td>
//             </tr>
//             <tr>

//               <td></td>
//               <td>
//                 <input type="submit" />
//               </td>
//             </tr>
//         </table>
//       </form>

//     </div>
//   );
// }

// export default App;
import { useState } from "react";

function App() {
  const initialFormItem = {
    name: "",
    age: "",
    gender: "",
    address: "",
    phone: "",
    email: "",
    password: ""
  };

  const [form, setForm] = useState([initialFormItem]);

  const [error, setError] = useState([]);

  const addForm = () => {
    setForm([...form, initialFormItem]);
    setError([...error, {}]); // Add corresponding error object
  };

  const removeForm = () => {
    
  }

  const changeFormData = (e, index) => {
    const { name, value } = e.target;
    const updatedForm = [...form];
    updatedForm[index][name] = value;
    setForm(updatedForm);
  };

  const validateForm = () => {
    let Valid = true;
    let errors = [];

    form.forEach((item, idx) => {
      let err = {};
      if (!item.name.trim()) {
        err.name = "Name is required.";
        Valid = false;
      }
      if (!item.age.trim()) {
        err.age = "Age is required.";
        Valid = false;
      }
      if (!item.gender) {
        err.gender = "Gender is required.";
        Valid = false;
      }
      if (!item.address.trim()) {
        err.address = "Address is required.";
        Valid = false;
      }
      if (!item.phone.trim()) {
        err.phone = "Phone is required.";
        Valid = false;
      }
      if (!item.email.trim()) {
        err.email = "Email is required.";
        Valid = false;
      }
      if (!item.password.trim()) {
        err.password = "Password is required.";
        Valid = false;
      }

      errors[idx] = err;
    });

    setError(errors);
    return Valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      console.log("Form Data:", form);
      setForm([initialFormItem]); // Reset form
      setError([]);
    }
  };

  return (
    <div align="center">
      <h2>Dynamic Practice Form</h2>
      <form onSubmit={handleSubmit}>
        <table border={1}>
          {form.map((item, index) => (
            <tbody key={index}>
              <tr>
                <td>Name:</td>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={item.name}
                    onChange={(e) => changeFormData(e, index)}
                    placeholder="Enter your name"
                  />
                  {error[index]?.name && <p>{error[index].name}</p>}
                </td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>
                  <input
                    type="email"
                    name="email"
                    value={item.email}
                    onChange={(e) => changeFormData(e, index)}
                    placeholder="Enter your email"
                  />
                  {error[index]?.email && <p>{error[index].email}</p>}
                </td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>
                  <input
                    type="text"
                    name="phone"
                    value={item.phone}
                    onChange={(e) => changeFormData(e, index)}
                    placeholder="Enter your phone number"
                  />
                  {error[index]?.phone && <p>{error[index].phone}</p>}
                </td>
              </tr>
              <tr>
                <td>Age:</td>
                <td>
                  <input
                    type="number"
                    name="age"
                    value={item.age}
                    onChange={(e) => changeFormData(e, index)}
                    placeholder="Enter your age"
                  />
                  {error[index]?.age && <p>{error[index].age}</p>}
                </td>
              </tr>
              <tr>
                <td>Gender:</td>
                <td>
                  <input
                    type="radio"
                    id={`male-${index}`}
                    name={`gender-${index}`}
                    value="male"
                    checked={item.gender === "male"}
                    onChange={(e) => changeFormData({ target: { name: "gender", value: e.target.value } }, index)}
                  />
                  <label htmlFor={`male-${index}`}>Male</label>

                  <input
                    type="radio"
                    id={`female-${index}`}
                    name={`gender-${index}`}
                    value="female"
                    checked={item.gender === "female"}
                    onChange={(e) => changeFormData({ target: { name: "gender", value: e.target.value } }, index)}
                  />
                  <label htmlFor={`female-${index}`}>Female</label>

                  {error[index]?.gender && <p>{error[index].gender}</p>}
                </td>
              </tr>
              <tr>
                <td>Address:</td>
                <td>
                  <textarea
                    name="address"
                    value={item.address}
                    onChange={(e) => changeFormData(e, index)}
                    placeholder="Enter your address"
                  />
                  {error[index]?.address && <p>{error[index].address}</p>}
                </td>
              </tr>
              <tr>
                <td>Password:</td>
                <td>
                  <input
                    type="password"
                    name="password"
                    value={item.password}
                    onChange={(e) => changeFormData(e, index)}
                    placeholder="Enter your password"
                  />
                  {error[index]?.password && <p>{error[index].password}</p>}
                </td>
              </tr>
              <tr>
              <td colSpan={2}>
                <button type="button" onClick={()=> removeForm()}>
                  Remove Form
                </button>
              </td>
            </tr>
            </tbody>
          ))}

          <tbody>
            <tr>
              <td colSpan={2}>
                <button type="button" onClick={() =>addForm()}>
                  Add Form
                </button>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <input type="submit" value="Submit Form" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default App;
