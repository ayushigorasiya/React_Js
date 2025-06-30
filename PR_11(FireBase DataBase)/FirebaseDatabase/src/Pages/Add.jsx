import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getDatabase, ref, set } from 'firebase/database';
import { app } from '../Firebase';

function Add() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  const db = getDatabase(app);
  const handleSubmit = (e) => {
    e.preventDefault();
    
    set(ref(db , `users/${Math.floor(Math.random()*10000000)}`), {
      name: input.name,
      company: input.company,
      email: input.email,
      phone: input.phone,
      message: input.message
    }).then(() => {
      alert(`Record Successfully Addd....!`);
      navigate('/');
    }).catch((err) => {
      console.log(err);
      return false;
    })
  };

  const changeInput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    });
  };

  return (
    <div align="center">
      <h2>Add User</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <table border={1}>
          <thead align="center">
            <h2>Email Us</h2>
          </thead>
          <tbody>
            <tr>
              <td>Name :</td>
              <td>
                <input type="text" name="name" onChange={changeInput} placeholder="Enter Your Name....!" />
              </td>
            </tr>
            <tr>
              <td>Company :</td>
              <td>
                <input type="text" name="company" onChange={changeInput} placeholder="Enter Your Company.....!" />
              </td>
            </tr>
            <tr>
              <td>Email :</td>
              <td>
                <input type="email" name="email" onChange={changeInput} placeholder="Enter Your Email....!" />
              </td>
            </tr>
            <tr>
              <td>Phone :</td>
              <td>
                <input type="number" name="phone" onChange={changeInput} placeholder="Enter Your Number....!" />
              </td>
            </tr>
            <tr>
              <td>Message :</td>
              <td>
                <textarea name="message" onChange={changeInput}></textarea>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="submit" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <hr />
      <Link to={`/`}>View</Link>
    </div>
  );
}

export default Add;
