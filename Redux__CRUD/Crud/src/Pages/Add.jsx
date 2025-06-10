import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'

function Add() {
    const dispatch = useDispatch();
    const [forminput , setFormInput] = useState({
        name:'',
        email:'',
        password:''
    })

    const changeInput = (e) => {
        const{name , value} = e.target;
        setFormInput({
            ...forminput,
            [name]:value
        })
    }
    const handleSubmit = (e) => {
        e.prevantDefault();
        let obj ={
            userid : Math.floor(Math.random()*10000),
            ...forminput
        }
        dispatch(ADD_USER(obj));
    }
  return (
    <div align="center">
      <h2>Add Users</h2>

      <div>
            <form onSubmit={handleSubmit}>
                <table border={1}>
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>
                                <input type="text" name='name' placeholder='Enter Your Name....!' value={forminput.name} onChange={changeInput} />
                            </td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>
                                <input type="email" name='email' placeholder='Enter Your Email....!' value={forminput.email} onChange={changeInput} />
                            </td>
                        </tr>
                        <tr>
                            <td>Password:</td>
                            <td>
                                <input type="password" name='password' placeholder='Enter Your Password....!' value={forminput.password} onChange={changeInput} />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <input type="submit"  />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
      </div>
      <Link to="/">View User</Link>
    </div>
  )
}

export default Add
