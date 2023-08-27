import React from "react"
import './website_footer.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaGooglePlus, FaInstagram, FaMapMarker, FaPhone, FaEnvelope } from 'react-icons/fa';


function Website_footer() {

    return (
        <>

            <footer className="footer">
                <div className="footer-left col-md-4 col-sm-6">
                    <p className="about">
                        <span> About the company</span> Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
                        ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
                    </p>
                    <div className="icons">
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaLinkedin /></a>
                        <a href="#"><FaGooglePlus /></a>
                        <a href="#"><FaInstagram /></a>
                    </div>
                </div>
                <div className="footer-center col-md-4 col-sm-6">
                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span> Street name and number</span> City, Country</p>
                    </div>
                    <div>
                        <i className="fa fa-phone"></i>
                        <p> (+00) 0000 000 000</p>
                    </div>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="#"> info@onlinedarzi.com</a></p>
                    </div>
                </div>
                <div className="footer-right col-md-4 col-sm-6">
                    <div className="user_website_header_logo_div">
                        <div className="user_website_header_logo_inner_div">
                            <i className='bx bx-cut' style={{ color: "white" }}></i>
                            <span style={{ color: "white" }}>Online Darzi</span>
                        </div>
                    </div>
                    {/* <p className="menu">
                        <a href="#"> Home</a> |
                        <a href="#"> About</a> |
                        <a href="#"> Services</a> |
                        <a href="#"> Portfolio</a> |
                        <a href="#"> News</a> |
                        <a href="#"> Contact</a>
                    </p> */}
                </div>
                <div style={{ textAlign: "center" }}>
                    <p className="name"> All &copy; Rights Reserved – ONLINE DARZI | 2023</p>
                </div>
            </footer>

        </>
    );
}

export default Website_footer;