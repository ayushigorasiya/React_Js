import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getDatabase, ref, update  } from 'firebase/database';
import { app } from '../Firebase';

function Edit() {
    const location = useLocation();
    const navigate = useNavigate();
    const [input, setInput] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
    });

    useEffect(() => {
        setInput({
            name: location?.state?.name,
            company: location?.state?.company,
            email: location?.state?.email,
            phone: location?.state?.phone,
            message: location?.state?.message
        })
    }, [location?.state])
    const changeInput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    });
  };
    
  const handleSubmit = (e) => {
    e.preventDefault();
    const singleRow = ref(db , `users${location?.state?.id}`);
    update(singleRow , {
        name: input.name,
        company: input.company,
        email: input.email,
        phone: input.phone,
        message: input.message
    }).then(() => {
        alert(`data was updated...!`);
        navigate('/');
    }).catch((err) => {
        console.log(err);
        return false;
    })
  };

  

  return (
    <div align="center">
      <h2>Edit User</h2>
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
                <input type="text" name="name" value={input.name} onChange={changeInput} placeholder="Enter Your Name....!" />
              </td>
            </tr>
            <tr>
              <td>Company :</td>
              <td>
                <input type="text" name="company" value={input.company} onChange={changeInput} placeholder="Enter Your Company.....!" />
              </td>
            </tr>
            <tr>
              <td>Email :</td>
              <td>
                <input type="email" name="email" value={input.email} onChange={changeInput} placeholder="Enter Your Email....!" />
              </td>
            </tr>
            <tr>
              <td>Phone :</td>
              <td>
                <input type="number" name="phone" value={input.phone} onChange={changeInput} placeholder="Enter Your Number....!" />
              </td>
            </tr>
            <tr>
              <td>Message :</td>
              <td>
                <textarea name="message" value={input.message} onChange={changeInput}></textarea>
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

export default Edit;
