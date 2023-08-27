import React, { useState, useEffect } from "react";
import './completed_orders.css'
import "boxicons/css/boxicons.min.css"; // Import boxicons CSS
import { colors } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Completed_orders() {
    var api_url = 'http://localhost:8077';


    const [sidebarClosed, setSidebarClosed] = useState(true);

    const handleArrowClick = (e) => {
        const arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu");
    };

    const handleSidebarToggle = () => {
        setSidebarClosed(!sidebarClosed);
    };

    useEffect(() => {
        const arrow = document.querySelectorAll(".arrow");
        arrow.forEach((el) => el.addEventListener("click", handleArrowClick));

        return () => {
            arrow.forEach((el) => el.removeEventListener("click", handleArrowClick));
        };
    }, []);

    const navigate = useNavigate();

    useEffect(() => {
        session_check();
    }, []);

    const session_check = async () => {
        let api = api_url + '/auth/session-validator';

        axios.get(api, { withCredentials: true })
            .then((response) => {
                if (response.data.status === "200") {

                }
            }).catch(error => {
                seterror_notification_text(error.response.data.msg);
                errorhandleShowNotification();
                navigate('/Login');
            })

    }


    useEffect(() => {
        ceate_completed_orders_card();
    }, [])



    const ceate_completed_orders_card = () => {


        for (let i = 0; i < 0; i++) {

            const show_all_completed_orders = document.getElementById('show_all_completed_orders')

            const inner_home_section_inner_div1_all_order_show = document.createElement('div')
            inner_home_section_inner_div1_all_order_show.classList.add('inner_home_section_inner_div1_all_order_show')

            const main_details_div = document.createElement('div')
            main_details_div.classList.add('main_details_div')

            const main_user_details_div = document.createElement('div')
            main_user_details_div.classList.add('main_user_details_div')

            const inner_user_details_div1 = document.createElement('div')
            inner_user_details_div1.classList.add('inner_user_details_div1')

            const inner_user_details_div1_i = document.createElement('i')
            inner_user_details_div1_i.classList.add('bx')
            inner_user_details_div1_i.classList.add('bx-user')

            const inner_user_details_div2 = document.createElement('div')
            inner_user_details_div2.classList.add('inner_user_details_div2')
            inner_user_details_div2.innerText = "Syed Subhan Uddin"

            const inner_user_details_div3 = document.createElement('div')
            inner_user_details_div3.classList.add('inner_user_details_div3')
            inner_user_details_div3.innerText = "08:45 PM"

            const main_user_more_details_div = document.createElement('div')
            main_user_more_details_div.classList.add('main_user_more_details_div')
            main_user_more_details_div.innerText = " XS: 38-39 Chest / 29 Length"


            inner_home_section_inner_div1_all_order_show.appendChild(main_details_div)
            main_details_div.appendChild(main_user_details_div)
            main_user_details_div.appendChild(inner_user_details_div1)
            inner_user_details_div1.appendChild(inner_user_details_div1_i)
            main_user_details_div.appendChild(inner_user_details_div2)
            main_user_details_div.appendChild(inner_user_details_div3)

            main_details_div.appendChild(main_user_more_details_div)

            show_all_completed_orders.appendChild(inner_home_section_inner_div1_all_order_show)

        }


    }







    return (
        <>

            <div className={`sidebar ${sidebarClosed ? "" : "close"}`}>
                <div className="logo-details">
                    <i className='bx bx-cut'></i>
                    <span className="logo_name">Online Darzi</span>
                </div>
                <ul className="nav-links">
                    <li>
                        <a href="/Darzi-Dashboard">
                            <i className='bx bx-home'></i>
                            <span className="link_name">Home</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="/Darzi-Dashboard">Home</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/My-Product">
                            <i className='bx bx-compass'></i>
                            <span className="link_name">My Product</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="/My-Product">My Product</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/Completed-Orders">
                            <i className='bx bxs-credit-card' ></i>
                            <span className="link_name">Completed Orders</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="/Completed-Orders">Completed Orders</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="/Pending-Orders">
                            <i className='bx bx-bar-chart'></i>
                            <span className="link_name">Pending Orders</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="/Pending-Orders">Pending Orders</a></li>
                        </ul>
                    </li>
                    {/* <li>
                        <a href="#">
                            <i className='bx bx-cog'></i>
                            <span className="link_name">Setting</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">Setting</a></li>
                        </ul>
                    </li> */}
                    <li>
                        <div className="profile-details">
                            <div className="profile-content">
                                <img src="https://sachinsamal.netlify.app/static/media/sachin-samal.49dcbac0df474f805299.png" alt="profileImg" />
                            </div>
                            <div className="name-job">
                                <div className="profile_name">John Doe</div>
                                <div className="job">Crypto Expert</div>
                            </div>
                            <a href="/">
                                <i className='bx bx-log-out'></i>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>

            <section className="home-section">

                <div className="home-header">
                    <div className="home-header-inner-div">
                        <i className='bx bx-menu' onClick={handleSidebarToggle}></i>
                        <span className="text"> Completed Orders </span>
                    </div>
                </div>

                <div className="main_home_section">
                    <div className="inner_home_section">

                        <div className="inner_home_section_inner_div1" id="show_all_completed_orders">

                            <div className="inner_home_section_inner_div1_search_box">
                                <div className="constrain">
                                    <input className="input-grey-rounded" type="search" placeholder="Search" id="searchInput" />
                                </div>
                            </div>

                            <div className="inner_home_section_inner_div1_all_order_show">
                                <div className="main_details_div">
                                    <div className="main_user_details_div">
                                        <div className="inner_user_details_div1"> <i className="bx bx-user"></i> </div>
                                        <div className="inner_user_details_div2"> Syed Subhan Uddin </div>
                                        <div className="inner_user_details_div3"> 08:45 PM </div>
                                    </div>
                                    <div className="main_user_more_details_div">
                                        XS: 38-39 Chest / 29 Length
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </section>

        </>
    );
}

export default Completed_orders;
