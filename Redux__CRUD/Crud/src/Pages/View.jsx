import React from 'react'
  import { useDispatch, useSelector } from 'react-redux';
  import { Link, useNavigate } from 'react-router-dom'
import { DELETE_USER } from '../Redux/Action/CrudAction';
  function View() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users)

  const editUser = (id) => {
    navigate(`/edit/${id}`);
  }

  
    return (
      <div>
          <h2>View User</h2>
          <Link to="/add"> Add_User</Link>
          <table border={1}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((val) => {
                  const{userid , name , email , password} = val;
                  return(
                    <tr>
                      <td>{userid}</td>
                      <td>{name}</td>
                      <td>{email}</td>
                      <td>{password}</td>
                      <td>
                        <button onClick={() => dispatch(DELETE_USER(userid))}>Delete</button>
                        <button onClick={() => editUser(userid)}>Edit</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
      </div>
    )
  }

  export default View
