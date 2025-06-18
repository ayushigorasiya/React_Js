import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'

function Edit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const single = useSelector(state => state.users.single)

    const [forminput, setFormInput] = useState({
        name: '',
        email: '',
        password: ''
    })

    useEffect(() => {
        if (single) {
            setFormInput({
                name: single.name,
                email: single.email,
                password: single.password
            })
        }
    }, [single])
    const changeInput = (e) => {
        const { name, value } = e.target;
        setFormInput({
            ...forminput,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const up = {
            id: single.id,
            ...forminput
        }

        dispatch(Updateuser(up));
        navigate(`/view`);
    }



    return (
        <div align="center">
            <h2>Edit Users</h2>

            <div>
                <form onSubmit={handleSubmit}>
                    <table border={1}>
                        <tbody>
                            <tr>
                                <td>Name:</td>
                                <td>
                                    <input type="text" name='name' placeholder='Enter Your Name....!' value={forminput.name} onChange={changeInput} />
                                </td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>
                                    <input type="email" name='email' placeholder='Enter Your Email....!' value={forminput.email} onChange={changeInput} />
                                </td>
                            </tr>
                            <tr>
                                <td>Password:</td>
                                <td>
                                    <input type="password" name='password' placeholder='Enter Your Password....!' value={forminput.password} onChange={changeInput} />
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="submit" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
            <Link to="/">View User</Link>
        </div>
    )
}

export default Edit
