import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getFirestore} from 'firebase/firestore';
import { app } from '../../Firebase';
function Add() {

    const [forminput , setFormInput] = useState({
        name:'',
        company:'',
        email:'',
        phone:'',
        message:''
    })

    const db = getFirestore(app)


    const changeInput = (e) => {
       const {name , value} = e.target;
       setFormInput({
        ...forminput ,
        [name] : value
    })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let obj ={
            userid: Math.floor(Math.random()*10000),
            ...forminput
        }
        alert("Form submitted");
        console.log(obj);
        
        set

        
    }


  return (
    <div align="center">
        <h2>Add Users</h2>
        <hr />
        <hr />
        <form onSubmit={handleSubmit}>
            <table border={1}>
                <tr>
                    <td>Name:</td>
                    <td><input type="text" name='name' onChange={changeInput} placeholder='Enter Your Name...!' /></td>
                </tr>
                <tr>
                    <td>Company:</td>
                    <td>
                        <input type="text" name='company'  onChange={changeInput} placeholder='Enter Your Company...!' />
                    </td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>
                        <input type="text" name='email'  onChange={changeInput} placeholder='Enter Your Email...!' />
                    </td>
                </tr>
                <tr>
                    <td>Phone:</td>
                    <td>
                        <input type="text" name='phone'  onChange={changeInput} placeholder='Enter Your Contact_Number...!' />
                    </td>
                </tr>
                <tr>
                    <td>Message:</td>
                    <td>
                        <textarea name="message"  onChange={changeInput} id=""></textarea>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type="submit" />
                    </td>
                </tr>
            </table>
        </form>
        <hr />
        <hr />
        <Link to={`/`}>View_User</Link>
    </div>
  )
}

export default Add
