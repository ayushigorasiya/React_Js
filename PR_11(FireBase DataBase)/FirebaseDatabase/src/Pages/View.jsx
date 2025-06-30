import { getDatabase, onValue, ref, remove } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { app } from '../Firebase';

function View() {
  const navigate = useNavigate();
  const [users , setUsers] = useState({});
  const db = getDatabase(app);
  const getUser = () => {
    const alldata = ref(db , 'users');
    onValue(alldata , (row) => {
      const data = row.val();
      setUsers(data || {})
    })
  }
  useEffect(() => {
    getUser();
  }, [])
  const deleteUser = (id) => {
    const deletedata = ref(db , `users/${id}`);
    remove(deletedata)
    .then(() => {
      alert(`Record Deleted Succefully...!`);
      getUser();
    }).catch((err) => {
      console.log(err);
      return false;
    })
  }
  const editUser = (id , name, company , email , phone , message) => {
    let ddata = {id , name , company , email , phone , message};
    navigate(`/edit`, {state: ddata});
  }
  return (
    <div align="center">
        <h2>View User</h2>
        <hr />
          <div>
            <table border={1}>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Company</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Message</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  Object.entries(users).map(([key , value]) => (
                    <tr key={key}>
                      <td>{key}</td>
                      <td>{value.name}</td>
                      <td>{value.company}</td>
                      <td>{value.email}</td>
                      <td>{value.phone}</td>
                      <td>{value.message}</td>
                      <td>
                        <button onClick={() => deleteUser(key)}>Delete</button>
                        <button onClick={() => editUser(key , value.name , value.company , value.email , value.phone , value.message)}>Edit</button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        <hr />
        <Link to={`/add`}>Add</Link>
    </div>
  )
}

export default View
