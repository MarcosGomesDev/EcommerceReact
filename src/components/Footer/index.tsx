import React from 'react'
import { Link } from 'react-router-dom'
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'

import './footer.css'

const Footer:  React.FC = () => {
    return (
        <>
            <footer className='py-5'>
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <div className="footer-top-data d-flex gap-30 align-item-center">
                                <img src="images/newsletter.png" alt="newsletter" />
                                <h2 className='md-0 text-white'>Sign Up for Newsletter</h2>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control py-1"
                                    placeholder="Your Email Address"
                                    aria-label="Your Email Address"
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text p-2" id="basic-addon2">
                                    Subscribe
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='py-4'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-4">
                            <h4 className='text-white mb-4'>Contact Us</h4>
                            <div>
                                <address className='text-white fs-6'>
                                    Hno: Near Vill chopal, <br /> Sonipat, Haryana <br />
                                    PinCode: 131103
                                </address>
                                <a href="tel:+55 11999999999" 
                                    className='mt-3 d-block mb-1 text-white'
                                >
                                    +55 11999999999
                                </a>
                                <a href="mailto:marcosgomesdev@gmail.com" 
                                    className='mt-2 d-block mb-0 text-white'
                                >
                                    marcosgomesdev@gmail.com
                                </a>
                                <div className="social_icons d-flex align-items-center gap-15 mt-4">
                                    <a className='text-white' href="/">
                                        <BsLinkedin className='fs-3'/>
                                    </a>
                                    <a className='text-white' href="/">
                                        <BsInstagram className='fs-3'/>
                                    </a>
                                    <a className='text-white' href="/">
                                        <BsGithub className='fs-3'/>
                                    </a>
                                    <a className='text-white' href="/">
                                        <BsYoutube className='fs-3'/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className='text-white mb-4'>Information</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1' to={''}>Privacy Policy</Link>
                                <Link className='text-white py-2 mb-1' to={''}>Refound Policy</Link>
                                <Link className='text-white py-2 mb-1' to={''}>Shipping Policy</Link>
                                <Link className='text-white py-2 mb-1' to={''}>Terms & Conditions</Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className='text-white mb-4'>Account</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1' to={''}>About Us</Link>
                                <Link className='text-white py-2 mb-1' to={''}>Faq</Link>
                                <Link className='text-white py-2 mb-1' to={''}>Contact</Link>
                            </div>
                        </div>
                        <div className="col-2">
                            <h4 className='text-white mb-4'>Quick Links</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1' to={''}>Laptops</Link>
                                <Link className='text-white py-2 mb-1' to={''}>Headphones</Link>
                                <Link className='text-white py-2 mb-1' to={''}>Tablets</Link>
                                <Link className='text-white py-2 mb-1' to={''}>Watch</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='py-4'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center mb-0 text-white">
                                &copy; {new Date().getFullYear()}; Powered by Dev Tech
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer