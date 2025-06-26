import { getDatabase, onValue, ref, remove } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { app } from '../Firebase'

const View = () => {

    const[allusers , setAllUsers] = useState("");

    const db = getDatabase(app)
    const getUser = () => {
        const allrecord = ref(db , 'users');
        onValue(allrecord , (row) => {
            const data = row.val();
            setAllUsers(data);
        })
    }

    useEffect(()=> {
        getUser();
    }, [])


    const deleteUser = (id) => {
        const deletedata = ref(db, `users/${id}`)
        remove(deletedata)
        .then((res) => {
            alert(`Record Deleted Successfully...!`)
            getUser();
        }).catch((err) => {
            console.log(err);
            return false
        })
    }
  return (
    <div align="center">
        <h2>View User</h2>
            <table border={1}>
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        Object.entries(allusers).map(([key, value]) => {
                            return(
                                <tr>
                                    <td>{key}</td>
                                    <td>{value.name}</td>
                                    <td>{value.age}</td>
                                    <td>
                                        <button onClick={() => deleteUser(key)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        <hr />
        <Link to={`/add`}> Add</Link>
    </div>
  )
}

export default View
