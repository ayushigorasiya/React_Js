import { getDatabase, onValue, ref, remove } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { app } from '../Firebase';


const View = () => {
  const navigate = useNavigate();
  const [allusers, setAllUsers] = useState({});
  const db = getDatabase(app);
  const getUser = () => {
    const allrecord = ref(db, 'users');
    onValue(allrecord, (row) => {
      const data = row.val();
      setAllUsers(data || {});
    });
  };
  useEffect(() => {
    getUser();
  }, []);
  const deleteUser = (id) => {
    const deletedata = ref(db, `users/${id}`);
    remove(deletedata)
      .then(() => {
        alert(`Record Deleted Successfully...!`);
        getUser();
      }).catch((err) => {
        console.log(err);
        return false;
      });
  };
  const editUser = (id, name, age) => {
    let data = { id, name, age };
    navigate(`/edit`, { state: data });
  };
  return (
    <div className="container">
      <h2>View User</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            Object.entries(allusers).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{value.name}</td>
                <td>{value.age}</td>
                <td>
                 <button className="delete" onClick={() => deleteUser(key)}>Delete</button>
<button className="edit" onClick={() => editUser(key, value.name, value.age)}>Edit</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <hr />
      <Link to="/add" className="link">Add</Link>
    </div>
  );
};

export default View;
