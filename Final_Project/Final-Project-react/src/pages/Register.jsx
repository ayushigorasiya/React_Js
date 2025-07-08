import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { REGISTER_USER } from '../redux/Actions/AuthAction'

function Register() {

    const [input, setInput] = useState({
        name: '',
        email: '',
        password: ''
    })

    const dispatch = useDispatch()

    const ChangeInput = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        dispatch(REGISTER_USER(input))
    }
    return (
        <div>
            <form className='container col-md-6 mt-5' onSubmit={handleSubmit}>
                <h2>Register User</h2>
                <br />
                <div className="form-group mt-3">
                    <label htmlFor="exampleInputName1"> Name </label>
                    <input type="text" className='form-control' name='name' value={input.name} onChange={ChangeInput} placeholder='Enter User Name...!' />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="exampleInputEmail1">Email </label>
                    <input type="email" className="form-control" name='email' value={input.email} onChange={ChangeInput} placeholder='Enter User Email...!' />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" name='password' value={input.password} onChange={ChangeInput} placeholder='Enter User Password...!' />
                </div>
                <br />
                <button type="submit" className="btn btn-primary mt-3 mb-2">Submit</button>
                <br />
                <Link to={`/login`}>Login_User</Link>
            </form>
        </div>
    )
}

export default Register
