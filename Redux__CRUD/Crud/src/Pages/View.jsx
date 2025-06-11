
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
function View() {
const navigate = useNavigate();
const dispatch = useDispatch();

let users = useSelector(state => state.Crud.users)
console.log(users);

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
