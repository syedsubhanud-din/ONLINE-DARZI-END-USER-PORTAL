import React from "react"
import './website_header.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from "react";


function Website_header() {


    var api_url = 'http://localhost:8077';


    const navigate = useNavigate();


    useEffect(() => {
        session_check();
    }, []);

    const session_check = async () => {
        let api = api_url + '/auth/session-validator';

        axios.get(api, { withCredentials: true })
            .then((response) => {
                if (response.data.status === "200") {
                    const my_orders_button = document.getElementById('my_orders_button').style.display = "block"
                    const signin_signup_button = document.getElementById('signin_signup_button').style.display = "none"
                }
            }).catch(error => {
                const my_orders_button = document.getElementById('my_orders_button').style.display = "none"
            })

    }


    return (
        <>

            <div className="user_website_header_main_div">
                <div className="user_website_header_inner_div">

                    <div className="user_website_header_logo_div">
                        <div className="user_website_header_logo_inner_div">
                            <i className='bx bx-cut'></i>
                            <span>Online Darzi</span>
                        </div>
                    </div>

                    <div className="user_website_header_navbar_div">
                        <div className="user_navbar">
                            <a className="user-nav-link user-nav-link-ltr" href="/"> Home </a>
                            <a className="user-nav-link user-nav-link-ltr" href="/Shop"> Shop </a>
                            <a className="user-nav-link user-nav-link-ltr" href="/My-Orders" id="my_orders_button"> My Orders </a>
                            <a href="/Login" id="signin_signup_button" style={{ display: "block", width: "auto" }}>
                                <button className="login_button">
                                    Signin / Signup
                                </button>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

export default Website_header;