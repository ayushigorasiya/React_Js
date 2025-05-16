import { useState } from "react";
import "./App.css"
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

    form.map((data, index) => {
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
      <h1 className="gf">Google Form</h1>
      <div>
        <img width={772} height={195}  src="https://lh7-us.googleusercontent.com/zoalxzUzmfCNATBqUBhkzsKJ5OMxAXFHt1pyI7-7X0O23dR4uEUdP_4uNWfvdvvt5f8BPWB1AEBUI8vwH-7a5X3vMiRQMBHpALlz3Nj_je0iKO9Mw0LTygMGUbVPMAl76TLsJjimHuaIyGXlRx464tVlgbQCGilMW3pXBkyvd83GfPa7x1g72EsG9Zsw0FiMX46Tb2Lm?key=nFZJFxO_dgflUJ0SgXg_mQ" alt="" />
      </div>
    
      <form onSubmit={handleSubmit}>
        <div className="form-container">
  {form.map((data, index) => (
    <div className="form-block" key={index}>

      <div className="input-group">
      
        <h2>Contact Information </h2>

        <label>Name</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={(e) => changeData(e, index)}
          placeholder="Enter your name"
        />
        {error[index]?.name && <p className="error">{error[index].name}</p>}
      </div>

      <div className="input-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={(e) => changeData(e, index)}
          placeholder="Enter your email"
        />
        {error[index]?.email && <p className="error">{error[index].email}</p>}
      </div>

      <div className="input-group">
        <label>Phone</label>
        <input
          type="number"
          name="phone"
          value={data.phone}
          onChange={(e) => changeData(e, index)}
          placeholder="Enter your phone number"
        />
        {error[index]?.phone && <p className="error">{error[index].phone}</p>}
      </div>

      <div className="input-group">
        <label>Age</label>
        <input
          type="number"
          name="age"
          value={data.age}
          onChange={(e) => changeData(e, index)}
          placeholder="Enter your age"
        />
        {error[index]?.age && <p className="error">{error[index].age}</p>}
      </div>

      <div className="input-group">
        <label>Gender</label>
        <div className="gender-options">
          <label>
            <input
              type="radio"
              name={`gender-${index}`}
              value="male"
              checked={data.gender === "male"}
              onChange={(e) =>
                changeData({ target: { name: "gender", value: e.target.value } }, index)
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
                changeData({ target: { name: "gender", value: e.target.value } }, index)
              }
            />
            Female
          </label>
        </div>
        {error[index]?.gender && <p className="error">{error[index].gender}</p>}
      </div>

      <div className="input-group">
        <label>Address</label>
        <textarea
          name="address"
          value={data.address}
          onChange={(e) => changeData(e, index)}
          placeholder="Enter your address"
        />
        {error[index]?.address && <p className="error">{error[index].address}</p>}
      </div>

      <div className="input-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={(e) => changeData(e, index)}
          placeholder="Enter your password"
        />
        {error[index]?.password && <p className="error">{error[index].password}</p>}
        {index !== 0 && (
        <button type="button" className="remove-btn" onClick={() => removeForm(index)}>
          Remove This Form
        </button>
      )}  
      </div>

      
    </div>
  ))}

  <div className="form-footer">
    <button type="button" onClick={addForm}>Add New Form</button>
    <input type="submit" value="Submit All" />
  </div>
</div>

      </form>
    </div>
  );
}

export default App;
