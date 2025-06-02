import React from 'react'
import { Link, useLocation } from 'react-router-dom'
function About() {

    const location = useLocation();
    console.log(location.state);

    return (
        <div align="center">
            <h2>About_Page</h2>
            <p>
                A={location.state}
            </p>
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
    )
}

export default About
