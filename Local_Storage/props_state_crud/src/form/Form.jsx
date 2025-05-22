import React, { useState } from "react";

const Form = ({handleSubmitBtn}) => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    courses: [],
    city: "",
  });

  const changeInput = (e) => {
    const { name, value, checked, type } = e.target;

    if (type === "checkbox") {
        if(checked){
            setInput({
                ...input,
                courses: [...input.courses, value],
            })
        }
        else{
            setInput({
                ...input,
                courses: input.courses.filter((course) =>
                    course !== value
                ),
            })
        }
    } 
    else {
      setInput({
        ...input,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    handleSubmitBtn(input)

    setInput({
      name:"",
      email:"",
      password:"",
      gender:"",
      courses: [],
      city: ""
    })
  };

  return (
    <div align="center">
      <h2>Add User Form</h2>

      <form>
        <table border={1}>
          <tr>
            <td>Name :</td>
            <td>
              <input
                type="text"
                onChange={changeInput}
                name="name"
                placeholder="Enter Your Name....!"
                value={input.name}
              />
            </td>
          </tr>
          <tr>
            <td>Email :</td>
            <td>
              <input
                type="text"
                onChange={changeInput}
                name="email"
                placeholder="Enter Your Email....!"
                value={input.email}
              />
            </td>
          </tr>
          <tr>
            <td>Password :</td>
            <td>
              <input
                type="text"
                onChange={changeInput}
                name="password"
                placeholder="Enter Your Password....!"
                value={input.password}
              />
            </td>
          </tr>
          <tr>
            <td>Gender :</td>
            <td>
              <input
                type="radio"
                onChange={changeInput}
                checked={input.gender === "male"}
                name="gender"
                value="male"
              />
              Male
              <input
                type="radio"
                onChange={changeInput}
                checked={input.gender === "female"}
                name="gender"
                value="female"
              />
              Female
            </td>
          </tr>
          <tr>
            <td>Courses :</td>
            <td>
              <input
                type="checkbox"
                onChange={changeInput}
                checked={input.courses.includes("java")}
                name="courses"
                value="java"
              />
              Java
              <input
                type="checkbox"
                onChange={changeInput}
                checked={input.courses.includes("node_js")}
                name="courses"
                value="node_js"
              />
              Node_Js
              <input
                type="checkbox"
                onChange={changeInput}
                checked={input.courses.includes("c")}
                name="courses"
                value="c"
              />
              C
              <input
                type="checkbox"
                onChange={changeInput}
                checked={input.courses.includes("c++")}
                name="courses"
                value="c++"
              />
              C++
              <input
                type="checkbox"
                onChange={changeInput}
                checked={input.courses.includes("react_js")}
                name="courses"
                value="react_js"
              />
              React_Js
            </td>
          </tr>
          <tr>
            <td>City:</td>
            <td>
              <select name="city" value={input.city} onChange={changeInput}>
                <option value="">----Select City----</option>
                <option value="surat">Surat</option>
                <option value="delhi">Delhi</option>
                <option value="mumbai">Mumbai</option>
                <option value="bangluru">Bangluru</option>
                <option value="channai">Channai</option>
                <option value="ahemdabad">Ahemdabad</option>
              </select>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input
                type="button"
                value="submit"
                onClick={() => handleSubmit()}
              />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default Form;
