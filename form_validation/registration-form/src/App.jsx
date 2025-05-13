import { useState } from "react";
import "./App.css"; // Make sure to import the CSS

function App() {
  const [input, setInput] = useState({
    username: "",
    useremail: "",
    userpassword: "",
    usergender: "",
    usercourses: [],
    usercity: ""
  });

  const [error, setError] = useState({
    username: "",
    useremail: "",
    userpassword: "",
    usergender: "",
    usercourses: "",
    usercity: ""
  });

  const changeInput = (e) => {
    const { name, value, checked, type } = e.target;
    if (type === "checkbox") {
      if (checked) {
        setInput({
          ...input,
          usercourses: [...input.usercourses, value]
        });
      } else {
        setInput({
          ...input,
          usercourses: input.usercourses.filter(val => val !== value)
        });
      }
    } else {
      setInput({
        ...input,
        [name]: value
      });
    }
  };

  const formValidation = () => {
    let check = true;
    let error = {
      username: "",
      useremail: "",
      userpassword: "",
      usergender: "",
      usercourses: "",
      usercity: ""
    };

    if (!input.username.trim()) {
      error.username = "Name is required.";
      check = false;
    }

    if (!input.useremail.trim()) {
      error.useremail = "Email is required.";
      check = false;
    }

    if (!input.userpassword.trim()) {
      error.userpassword = "Password is required.";
      check = false;
    }

    if (!input.usergender) {
      error.usergender = "Gender is required.";
      check = false;
    }

    if (input.usercourses.length === 0) {
      error.usercourses = "At least one course must be selected.";
      check = false;
    }

    if (!input.usercity) {
      error.usercity = "City is required.";
      check = false;
    }

    setError(error);
    return check;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValidation()) {
      alert("Form submitted!");
      console.log(input);
      setInput({
        username: "",
        useremail: "",
        userpassword: "",
        usergender: "",
        usercourses: [],
        usercity: ""
      });
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-box">
        <h2>Registration Form</h2>

        <label>Name</label>
        <input type="text" name="username" value={input.username} onChange={changeInput} placeholder="Enter your name" />
        {error.username && <span className="error">{error.username}</span>}

        <label>Email</label>
        <input type="email" name="useremail" value={input.useremail} onChange={changeInput} placeholder="Enter your email" />
        {error.useremail && <span className="error">{error.useremail}</span>}

        <label>Password</label>
        <input type="password" name="userpassword" value={input.userpassword} onChange={changeInput} placeholder="Enter your password" />
        {error.userpassword && <span className="error">{error.userpassword}</span>}

        <label>Gender</label>
        <div className="gender-options">
          <label><input type="radio" name="usergender" value="male" onChange={changeInput} checked={input.usergender === "male"} /> Male</label>
          <label><input type="radio" name="usergender" value="female" onChange={changeInput} checked={input.usergender === "female"} /> Female</label>
        </div>
        {error.usergender && <span className="error">{error.usergender}</span>}

        <label>Courses</label>
        <div className="checkbox-group">
          {["Web Development", "Mobile App Development", "Data Analysis", "Graphic Design", "Animation"].map(course => (
            <label key={course}>
              <input
                type="checkbox"
                name="usercourses"
                value={course}
                checked={input.usercourses.includes(course)}
                onChange={changeInput}
              /> {course}
            </label>
          ))}
        </div>
        {error.usercourses && <span className="error">{error.usercourses}</span>}

        <label>City</label>
        <select name="usercity" onChange={changeInput} value={input.usercity}>
          <option value="">-- Select City --</option>
          <option value="surat">Surat</option>
          <option value="ahemdabad">Ahemdabad</option>
          <option value="vadodara">Vadodara</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        {error.usercity && <span className="error">{error.usercity}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
