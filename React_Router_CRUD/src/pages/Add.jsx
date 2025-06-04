import { useState } from "react";



function Add() {

  const [forminput, setFormInput] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    courses: [],
    city: '',
    doj: ''
  })

  const changeInput = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      if (checked) {
        setFormInput({
          ...forminput,
          courses: [...forminput.courses, value]
        })
      }
      else {
        setFormInput({
          ...forminput,
          courses: [...forminput.courses].filter(val => val !== value)
        })
      }
    }
    else {
      setFormInput({
        ...forminput,
        [name]: value
      })
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(forminput);
  }
  return (
    <div align="center">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <table border={1}>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>
                <input type="text" onChange={changeInput} name='name' placeholder='Enter User Name....!' />
              </td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>
                <input type="email" onChange={changeInput} name='email' placeholder='Enter User Password...!' />
              </td>
            </tr>
            <tr>
              <td>Password:</td>
              <td>
                <input type="password" onChange={changeInput} name='password' placeholder='Enter Your Password...!' />
              </td>
            </tr>
            <tr>
              <td>Gender:</td>
              <td>
                <input type="radio" onChange={changeInput} name='gender' value="male" />Male
                <input type="radio" onChange={changeInput} name='gender' value="female" />Female
              </td>
            </tr>
            <tr>
              <td>Courses:</td>
              <td>
                <input name='courses' onChange={changeInput} type="checkbox" value="designing" />Designing <br />
                <input name='courses' onChange={changeInput} type="checkbox" value="developing" />Developing <br />
                <input name='courses' onChange={changeInput} type="checkbox" value="graphics" />Graphics <br />
                <input name='courses' onChange={changeInput} type="checkbox" value="programming" />Programming <br />
                <input name='courses' onChange={changeInput} type="checkbox" value="uiux" />UI/UX <br />
                <input name='courses' onChange={changeInput} type="checkbox" value="contentwriting" />Content Writing
              </td>
            </tr>
            <tr>
              <td>City:</td>
              <td>
                <select onChange={changeInput} name="city">
                  <option value="">- - - Select City - - - </option>
                  <option value="surat">Surat</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="delhi">Delhi</option>
                  <option value="ahemdabad">Ahemdabad</option>
                  <option value="rajkot">Rajkot</option>
                  <option value="banglore">Banglore</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>DOJ</td>
              <td>
                <input onChange={changeInput} name='doj' type="date" />
              </td>
            </tr>
          </tbody>


        </table>

        <br />
        <input type="submit" value="Add User" />
      </form>
    </div>
  )
}

export default Add
