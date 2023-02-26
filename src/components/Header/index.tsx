import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'

import './header.css'

const Header: React.FC = () => {
    return (
        <>
            <header className="header-top-strip py-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <p className='text-white mb-0'>
                                Free Shipping Over $100 & Free Returns
                            </p>
                        </div>
                        <div className="col-6">
                            <p className='text-end text-white mb-0'>
                                Hotline:
                                <a className='text-white' href="tel:+55 11999999999">
                                    +55 11999999999
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-upper py-2">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <h2 className='mb-1'>
                                <Link to={''} className='text-white'>Dev Tech.</Link>
                            </h2>
                        </div>
                        <div className="col-5">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control py-1"
                                placeholder="Search Product Here..."
                                aria-label="Search Product Here..."
                                aria-describedby="basic-addon2"
                            />
                            <span className="input-group-text p-2" id="basic-addon2">
                                <BsSearch className='fs-5' />
                            </span>
                        </div>
                        </div>
                        <div className="col-5">
                            <div className="header-upper-links d-flex align-items-center justify-content-between">
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white' to={''}>
                                        <img src="/images/compare.svg" alt="compare" />
                                        <p className='mb-0'>
                                            Compare <br/> Products
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white' to={''}>
                                        <img src="/images/wishlist.svg" alt="wishlist" />
                                        <p className='mb-0'>
                                            Favorite <br/> Wishlist
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white' to={''}>
                                        <img src="/images/user.svg" alt="user" />
                                        <p className='mb-0'>
                                            Log In <br/> My Account
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white' to={''}>
                                        <img src="/images/cart.svg" alt="" />
                                        <div className='d-flex flex-column gap-10 align-items-center'>
                                            <span className="badge bg-white text-dark">0</span>
                                            <p className='mb-0 mt-0'>$ 500</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-bottom py-2">
                <div className="container-xxl">
                    <div className="col-12">
                        <div className="menu-bottom d-flex align-items-center gap-30">
                            <div>
                                <div className="dropdown">
                                <button
                                    className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <img src="images/menu.svg" alt="menu" />
                                    <span className='me-5 d-inline-block'>
                                        Shop Categories
                                    </span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item text-white" to={''}>
                                            Action
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item text-white" to={''}>
                                            Another action
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item text-white" to={''}>
                                            Something else here
                                        </Link>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            <div className="menu-links">
                                <div className='d-flex align-items-center gap-15'>
                                    <NavLink to="/">Home</NavLink>
                                    <NavLink to="/">Our Store</NavLink>
                                    <NavLink to="/">Blogs</NavLink>
                                    <NavLink to="/contact">Contact</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header