import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
function Contact() {
    const location = useLocation();
    
    
    const [alluser, setAllUser] = useState([]);

    useEffect(() => {

        if (location.state !== null) {
            setAllUser(location.state.users)
        } else {
            setAllUser([])
        }
    }, [location.state])

    return (
        <>
        <div align="center">
            <h2>Contact_Page</h2>
            <p>
                <Link to="/">Home</Link>
            </p>
            <p>
                <Link to="/about" >About</Link>
            </p>
            <p>
                <Link to="/con">Contact</Link>
            </p>
        </div>
        <div align="center">
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alluser.map((users, index) =>{
                       
                            
                            return(
                                <tr key={index}>
                                    <td>{users.id}</td>
                                    <td>{users.name}</td>
                                    <td>{users.phone}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        </>

    )
}

export default Contact
