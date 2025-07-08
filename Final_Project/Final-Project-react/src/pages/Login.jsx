import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div>
            <form className='container col-md-6 mt-5'>
                <h2>Login User</h2>
                <br />
                <div className="form-group mt-3">
                    <label htmlFor="exampleInputEmail1">Email </label>
                    <input type="email" className="form-control" />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" />
                </div>

                <button type="submit" className="btn btn-primary mt-3 mb-2">Submit</button>
                <br />
                <Link to={`/`}>Register_User</Link>
            </form>
        </div>
    )
}

export default Login
