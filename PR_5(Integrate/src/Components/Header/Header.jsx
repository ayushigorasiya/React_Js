import React from 'react'
import "./Header.css"
import { FaSearch } from "react-icons/fa";//search:-----
import { MdOutlineSupervisorAccount } from "react-icons/md";//account:-----
import { PiHeartBold } from "react-icons/pi";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenuBoxed } from "react-icons/cg"; //toggle:-----------

const Header = () => {
  return (
    <>
      <div>
        <header>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 align-center justify-center">
                <div className="top-header">
                  <a href="#" className="cr-logo m-2 ms-0 me-5">
                    <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/logo/logo.png" alt="logo" />
                  </a><div className="div ms-3"></div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <form className="cr-search ms=5">
                    <div className="form-floating">
                      <input className="search-input" type="text" placeholder="Search For items..." />
                      <select className="form-select" id="floatingSelect"
                        aria-label="Floating label select example">
                        <option value="" disabled>All categories</option>
                        <option value="1">All Categories</option>
                        <option value="2">Mens</option>
                        <option value="3">Women</option>
                        <option value="4">Electronics</option>
                      </select>

                    </div>
                    <a href='#' className="search-btn">
                      <span className='fs-6 text-white '>
                        <FaSearch />
                      </span>
                    </a>


                  </form>
                  <div className="cr-right-bar ms-5 ">
                    <ul className="navbar-nav">
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle cr-right-bar-item" href='#'>
                          <span className='fs-4 me-2'>
                            <MdOutlineSupervisorAccount />
                          </span>
                          <span className='fs-6'>Account</span>
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item">Register</a>
                          </li>
                          <li>
                            <a className="dropdown-item">Checkout</a>
                          </li>
                          <li>
                            <a className="dropdown-item">Login</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <a className="cr-right-bar-item">
                      <span className='fs-4 me-2'>
                        <PiHeartBold />
                      </span>
                      <span className='fs-6'>Wishlist</span>
                    </a>
                    <a href='#' className="cr-right-bar-item Shopping-toggle">

                      <span data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight">
                        <span className='fs-4 me-2'>
                          <FiShoppingCart />
                        </span>
                        <span className='fs-6'>Cart </span></span>



                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>




          <div className="cr-fix" id="cr-main-menu-desk">
            <div className="container">
              <div className="cr-menu-list">
                <div className="cr-category-icon-block">

                  {/* Toggle:---------------------- */}






                  <a className="menu-toggle" data-bs-toggle="offcanvas d-none d-md-block d-lg-none"
                    role="button" aria-controls="offcanvasExample">
                    <div className="cr-category-menu">

                      <div className="cr-category-toggle">
                        <span className='fs-3 text-dark'>
                          <CgMenuBoxed />
                        </span>
                      </div>
                    </div>
                  </a>


                </div>
                <nav className="navbar navbar-expand-lg">
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a className="nav-link" >
                          Home
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href='#'>

                          Category

                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" >Shop Left
                              sidebar</a>
                          </li>
                          <li>
                            <a className="dropdown-item" >Shop
                              Right
                              sidebar</a>
                          </li>
                          <li>
                            <a className="dropdown-item">Full
                              Width</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href='#'>
                          Products
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" >product
                              Left
                              sidebar </a>
                          </li>
                          <li>
                            <a className="dropdown-item" >product
                              Right
                              sidebar </a>
                          </li>
                          <li>
                            <a className="dropdown-item">Product
                              Full
                              Width
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle">
                          Pages
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" >About Us</a>
                          </li>
                          <li>
                            <a className="dropdown-item">Contact Us</a>
                          </li>
                          <li>
                            <a className="dropdown-item">Cart</a>
                          </li>
                          <li>
                            <a className="dropdown-item">Checkout</a>
                          </li>
                          <li>
                            <a className="dropdown-item">Track Order</a>
                          </li>
                          <li>
                            <a className="dropdown-item" >Wishlist</a>
                          </li>
                          <li>
                            <a className="dropdown-item">Faq</a>
                          </li>
                          <li>
                            <a className="dropdown-item">Login</a>
                          </li>
                          <li>
                            <a className="dropdown-item">Register</a>
                          </li>
                          <li>
                            <a className="dropdown-item">Policy</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle">
                          Blog
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item">Left
                              Sidebar</a>
                          </li>
                          <li>
                            <a className="dropdown-item" >Right
                              Sidebar</a>
                          </li>
                          <li>
                            <a className="dropdown-item">Full
                              Width</a>
                          </li>
                          <li>
                            <a className="dropdown-item" >Detail
                              Left
                              Sidebar</a>
                          </li>
                          <li>
                            <a className="dropdown-item" >Detail
                              Right
                              Sidebar</a>
                          </li>
                          <li>
                            <a className="dropdown-item" >Detail
                              Full
                              Width</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle">
                          Elements
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item">Products</a>
                          </li>
                          <li>
                            <a className="dropdown-item">Typography</a>
                          </li>
                          <li>
                            <a className="dropdown-item">Buttons</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </nav>
                <div className="cr-calling">
                  <i className="ri-phone-line"></i>
                  <a href='#'>+123 ( 456 ) ( 7890 )</a>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}

export default Header
