import React from 'react'
import logo from '../images/logo.svg'

const Navbar = () => {
  return (
    <>
    <div>
        <div className="logo">
            <a href="/">
                <img src={logo} height={42} width={174} alt="" />
            </a>
        </div>
    </div>
    </>
  )
}

export default Navbar
