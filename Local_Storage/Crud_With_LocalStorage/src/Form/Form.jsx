// import React, { useState } from "react";
// import "../App.css"
// const Form = () => {
//   const [editid, setEditId] = useState("");
//   const [allrecord, setAllRecord] = useState(
//     localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : []
//   );
//   const [userForm, setUserForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     gender: "",
//     courses: [],
//     city: "",
//   });

//   const changeInput = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === "checkbox") {
//       if (checked) {
//         setUserForm({
//           ...userForm,
//           courses: [...userForm.courses, value],
//         });
//       } else {
//         setUserForm({
//           ...userForm,
//           courses: [...userForm.courses].filter((val) => val != value),
//         });
//       }
//     } else {
//       setUserForm({
//         ...userForm,
//         [name]: value,
//       });
//     }
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let object = {
//       userid: Math.floor(Math.random() * 10000),
//       ...userForm,
//     };

//     if (editid != "") {
//       let update = allrecord.map((val, i) => {
//         if (val.userid == editid) {
//           val.name = userForm.name;
//           val.email = userForm.email;
//           val.password = userForm.password;
//           val.gender = userForm.gender;
//           val.courses = userForm.courses;
//           val.city = userForm.city;
//         }
//         return val;
//       });
//       localStorage.setItem("user", JSON.stringify(update));
//       alert("Record Was Updated.....!");
//       setEditId("");
//     } else {
//       let oldrecord = [...allrecord, object];
//       setAllRecord(oldrecord);
//       localStorage.setItem("user", JSON.stringify(oldrecord));
//       alert(`Record Successfully Added.....!`);
//     }
//     setUserForm({
//       name: "",
//       email: "",
//       password: "",
//       gender: "",
//       courses: [],
//       city: "",
//     });
//   };
//   // delete section start
//   const deleteUser = (id) => {
//     let deleterecord = allrecord.filter((val, i) => {
//       return val.userid != id;
//     });
//     setAllRecord(deleterecord);
//     localStorage.setItem("user", JSON.stringify(deleterecord));
//     alert("user successfully delete");
//     console.log(deleterecord);
//   };
//   // delete section end
// //Edit section start

//   const editUser = (id) => {
//     setEditId(id)
//     let singlerow = allrecord.find(val => val.userid == id);
//     setUserForm(singlerow);
//     console.log(singlerow);
    
//   }
// //Edit section end
//   return (
//     <div align="center">
//       <h2>My Registration Form</h2>
//       <form onSubmit={handleSubmit}>
//         <table border={1}>
//           <tr>
//             <td>Name :-</td>
//             <td>
//               <input
//                 type="text"
//                 name="name"
//                 onChange={changeInput}
//                 value={userForm.name}
//                 placeholder="Enter The Name....!"
//                 required
//               />
//             </td>
//           </tr>
//           <tr>
//             <td>Email :-</td>
//             <td>
//               <input
//                 type="text"
//                 placeholder="Enter Your Email...!"
//                 onChange={changeInput}
//                 name="email"
//                 value={userForm.email}
//                 required
//               />
//             </td>
//           </tr>
//           <tr>
//             <td>Password :-</td>
//             <td>
//               <input
//                 type="text"
//                 placeholder="Enter Your Password.....!"
//                 onChange={changeInput}
//                 name="password"
//                 value={userForm.password}
//                 required
//               />
//             </td>
//           </tr>
//           <tr>
//             <td>Gender :-</td>
//             <td>
//               <input
//                 type="radio"
//                 name="gender"
//                 onChange={changeInput}
//                 value="male"
//                 checked={userForm.gender === "male"}
            
//               />
//               Male
//               <input
//                 type="radio"
//                 name="gender"
//                 onChange={changeInput}
//                 value="female"
//                 checked={userForm.gender === "female"}

//               />
//               Female
//             </td>
//           </tr>
//           <tr>
//             <td>Courses :-</td>
//             <td>
//               <input
//                 type="checkbox"
//                 name="courses"
//                 checked={userForm.courses.includes("Web Designing")}
//                 onChange={changeInput}
//                 value="Web Designing"
//               />
//               Web Designing
//               <input
//                 type="checkbox"
//                 name="courses"
//                 checked={userForm.courses.includes("Web Developing")}
//                 onChange={changeInput}
//                 value="Web Developing"
//               />
//               Web Developing
//               <input
//                 type="checkbox"
//                 name="courses"
//                 checked={userForm.courses.includes("ui / ux designer")}
//                 onChange={changeInput}
//                 value="ui / ux designer"
//               />
//               UI / UX Designer
//               <input
//                 type="checkbox"
//                 name="courses"
//                 checked={userForm.courses.includes("graphics design")}
//                 onChange={changeInput}
//                 value="graphics design"
//               />
//               Graphics design
//             </td>
//           </tr>
//           <tr>
//             <td>City :-</td>
//             <td>
//               <select name="city" onChange={changeInput} value={userForm.city} required>
//                 <option value=""> ----Select City---- </option>
//                 <option value="mumbai">Mumbai</option>
//                 <option value="delhi">Delhi</option>
//                 <option value="bengaluru">Bengaluru</option>
//                 <option value="kolkata">Kolkata</option>
//                 <option value="chennai">Chennai</option>
//                 <option value="hyderabad">Hyderabad</option>
//                 <option value="ahmedabad">Ahmedabad</option>
//               </select>
//             </td>
//           </tr>
//           {/* button start  */}
//           <tr>
//             <td></td>
//             <td>
//               <button type="submit">Submit</button>
//             </td>
//           </tr>
//           {/* button end */}
//         </table>
//       </form>
//       <br />
//       <br />
//       <hr />
//       <br />
//       <br />
//       <table border={1}>
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Password</th>
//             <th>Gender</th>
//             <th>Courses</th>
//             <th>City</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {allrecord.map((item, idx) => {
//             const { userid, name, email, password, gender, courses, city } =
//               item;
//             return (
//               <tr key={idx}>
//                 <td>{userid}</td>
//                 <td>{name}</td>
//                 <td>{email}</td>
//                 <td>{password}</td>
//                 <td>{gender}</td>
//                 <td>{courses.join(" || ")}</td>
//                 <td>{city}</td>
//                 <td>
//                   <button onClick={() => deleteUser(userid)}>Delete</button>
//                   <button onClick={() => editUser(userid)}>Edit</button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Form;



import React, { useState } from "react";
import "../App.css";

const Form = () => {
  const [editid, setEditId] = useState("");
  const [theme, setTheme] = useState("light");

  const [allrecord, setAllRecord] = useState(
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : []
  );
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    courses: [],
    city: "",
  });

  const changeInput = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (checked) {
        setUserForm({
          ...userForm,
          courses: [...userForm.courses, value],
        });
      } else {
        setUserForm({
          ...userForm,
          courses: userForm.courses.filter((val) => val !== value),
        });
      }
    } else {
      setUserForm({
        ...userForm,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let object = {
      userid: Math.floor(Math.random() * 10000),
      ...userForm,
    };

    if (editid !== "") {
      let update = allrecord.map((val) => {
        if (val.userid === editid) {
          return { ...val, ...userForm };
        }
        return val;
      });
      localStorage.setItem("user", JSON.stringify(update));
      setAllRecord(update);
      alert("Record Was Updated!");
      setEditId("");
    } else {
      let oldrecord = [...allrecord, object];
      setAllRecord(oldrecord);
      localStorage.setItem("user", JSON.stringify(oldrecord));
      alert("Record Successfully Added!");
    }

    setUserForm({
      name: "",
      email: "",
      password: "",
      gender: "",
      courses: [],
      city: "",
    });
  };

  const deleteUser = (id) => {
    let deleterecord = allrecord.filter((val) => val.userid !== id);
    setAllRecord(deleterecord);
    localStorage.setItem("user", JSON.stringify(deleterecord));
    alert("User successfully deleted");
  };

  const editUser = (id) => {
    setEditId(id);
    let singlerow = allrecord.find((val) => val.userid === id);
    setUserForm(singlerow);
  };

  return (
    <div className={`${theme === "light" ? "light-theme" : "dark-theme"}`} align="center">
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{ marginBottom: "20px", padding: "8px 14px", borderRadius: "6px", cursor: "pointer" }}
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
      <h2>My Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Name :-</td>
              <td>
                <input
                  type="text"
                  name="name"
                  onChange={changeInput}
                  value={userForm.name}
                  placeholder="Enter The Name....!"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Email :-</td>
              <td>
                <input
                  type="text"
                  placeholder="Enter Your Email...!"
                  onChange={changeInput}
                  name="email"
                  value={userForm.email}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Password :-</td>
              <td>
                <input
                  type="text"
                  placeholder="Enter Your Password.....!"
                  onChange={changeInput}
                  name="password"
                  value={userForm.password}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Gender :-</td>
              <td>
                <input
                  type="radio"
                  name="gender"
                  onChange={changeInput}
                  value="male"
                  checked={userForm.gender === "male"}
                />{" "}
                Male
                <input
                  type="radio"
                  name="gender"
                  onChange={changeInput}
                  value="female"
                  checked={userForm.gender === "female"}
                />{" "}
                Female
              </td>
            </tr>
            <tr>
              <td>Courses :-</td>
              <td>
                <input
                  type="checkbox"
                  name="courses"
                  checked={userForm.courses.includes("Web Designing")}
                  onChange={changeInput}
                  value="Web Designing"
                />
                Web Designing
                <input
                  type="checkbox"
                  name="courses"
                  checked={userForm.courses.includes("Web Developing")}
                  onChange={changeInput}
                  value="Web Developing"
                />
                Web Developing
                <input
                  type="checkbox"
                  name="courses"
                  checked={userForm.courses.includes("ui / ux designer")}
                  onChange={changeInput}
                  value="ui / ux designer"
                />
                UI / UX Designer
                <input
                  type="checkbox"
                  name="courses"
                  checked={userForm.courses.includes("graphics design")}
                  onChange={changeInput}
                  value="graphics design"
                />
                Graphics design
              </td>
            </tr>
            <tr>
              
              <td>City :-</td>
              <td>
                <select name="city" onChange={changeInput} value={userForm.city} required>
                  <option value=""> ----Select City---- </option>
                  <option value="mumbai">Mumbai</option>
                  <option value="delhi">Delhi</option>
                  <option value="bengaluru">Bengaluru</option>
                  <option value="kolkata">Kolkata</option>
                  <option value="chennai">Chennai</option>
                  <option value="hyderabad">Hyderabad</option>
                  <option value="ahmedabad">Ahmedabad</option>
                </select>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button type="submit">Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      <br />
      <hr />
      <br />

      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Gender</th>
            <th>Courses</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allrecord.map((item, idx) => {
            const { userid, name, email, password, gender, courses, city } = item;
            return (
              <tr key={idx}>
                <td>{userid}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{password}</td>
                <td>{gender}</td>
                <td>{courses.join(" || ")}</td>
                <td>{city}</td>
                <td>
                  <button onClick={() => deleteUser(userid)}>Delete</button>
                  <button onClick={() => editUser(userid)}>Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Form;
