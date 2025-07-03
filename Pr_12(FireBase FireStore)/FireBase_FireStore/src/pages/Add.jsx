import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { app } from '../../FirebaseConfig'
function Add() {
    const navigate = useNavigate();
    const[input , setInput] = useState({
        name: "",
    })
    const changeInput = (e) => {
        const{name , value}= e.target;
        setInput({
            ...input,
            [name]: value
        })
    }

    const db = getFirestore(app);
    const handleSubmit = async(e) => {
        e.preventDefault();
        

        try{
            const addrecord = await addDoc(collection(db, 'users' , {
                name: input.name
            }))
            alert(`User Add Successfully....!`)
            navigate('/')
        }catch(err){
            console.log(err);
            return false;
        }

        
    }
  return (
    <div align="center">
      <h2>Add Todo</h2>
        <hr />
        <hr />
        <form onSubmit={handleSubmit}>
            <table border={1}>
                <tr>
                    <td>Add :</td>
                    <td>
                        <input type="text" name='add' onChange={changeInput} placeholder='Add Your Todo...!' />
                    </td>
                    <td>
                        <input type="submit" />
                    </td>
                </tr>
            </table>
        </form>
      <hr />
      <hr />
      <Link to={`/`}>View</Link>
    </div>
  )
}

export default Add
