import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getDatabase, ref, update } from 'firebase/database';
import { app } from '../Firebase';



function Edit() {
  const location = useLocation();
  const navigate = useNavigate();

  const [forminput, setFormInput] = useState({
    name: '',
    age: ''
  });

  useEffect(() => {
    setFormInput({
      name: location?.state?.name || '',
      age: location?.state?.age || ''
    });
  }, [location?.state]);

  const changeInput = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...forminput,
      [name]: value
    });
  };

  const db = getDatabase(app);

  const handleSubmit = (e) => {
    e.preventDefault();
    const singleRow = ref(db, `users/${location?.state?.id}`);
    update(singleRow, {
      name: forminput.name,
      age: forminput.age
    }).then(() => {
      alert('Data Updated');
      navigate('/');
    }).catch((err) => {
      console.log(err);
      return false;
    });
  };

  return (
    <div className="container">
      <h2>Edit User</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>
                <input type="text" name="name" value={forminput.name} onChange={changeInput} />
              </td>
            </tr>
            <tr>
              <td>Age:</td>
              <td>
                <input type="text" name="age" value={forminput.age} onChange={changeInput} />
              </td>
            </tr>
            <tr>
              <td></td>
              <td><input type="submit" value="Submit" /> 
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <hr /><Link to="/" className="link">View</Link>
    </div>
  );
}

export default Edit;
