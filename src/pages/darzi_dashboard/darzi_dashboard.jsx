import React, { useState, useEffect } from "react";
import "boxicons/css/boxicons.min.css"; // Import boxicons CSS
import './darzi_dashboard.css';
import { colors } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Darzi_dashboard() {

    var api_url = 'http://localhost:8077';


    // Error Notification state and Function Start here 

    const [notification_text, setnotification_text] = useState('');
    const [error_notification_text, seterror_notification_text] = useState('');

    const [visible, setVisible] = useState(false);
    const [error_visible, seterror_Visible] = useState(false);


    const handleShowNotification = () => {
        setVisible(true);

        setTimeout(() => {
            setVisible(false);
        }, 3000); // Adjust the timeout value to match the notification duration
    };

    const errorhandleShowNotification = () => {
        seterror_Visible(true);

        setTimeout(() => {
            seterror_Visible(false);
        }, 3000); // Adjust the timeout value to match the notification duration
    };

    // Error Notification state and Function End here 




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



    const create_pending_orders_card = () => { }

    const create_completed_orders_card = () => { }

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
        full_dashboard_insights();
    }, []);

    const full_dashboard_insights = async () => {

        try {
            const total_orders = document.getElementById('total_orders');
            const completed_orders = document.getElementById('completed_orders');
            const pending_orders = document.getElementById('pending_orders');

            const api = api_url + '/tailor/get-dashboard-insights';

            const response = await axios.get(api, { withCredentials: true });

            if (response.data.status === "200") {

                total_orders.innerText = response.data.total_orders;
                completed_orders.innerText = response.data.completed_orders;
                pending_orders.innerText = response.data.pending_orders;

                console.log(response.data.metadata);

            }
        } catch (error) {
            seterror_notification_text(error.message);
            errorhandleShowNotification();
        }

    };




    return (
        <>

            {/* notification popup box Start here */}
            <div className={`modal ${visible ? 'show' : 'hide'}`} id="notification_popup_box">
                <div className="modal-content">

                    <div className="notification_box">
                        <p>
                            {notification_text}
                        </p>
                    </div>

                </div>
            </div>
            {/* notification popup box End here */}

            {/* Error notification popup box Start here */}
            <div className={`modal ${error_visible ? 'show' : 'hide'}`} id="notification_popup_box">
                <div className="modal-content">

                    <div className="notification_box" style={{ backgroundColor: 'red' }}>
                        <p>
                            {error_notification_text}
                        </p>
                    </div>

                </div>
            </div>
            {/* Error notification popup box End here */}


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
                        <span className="text"> Darzi Dashboard </span>
                    </div>
                </div>

                <div className="main_home_section">
                    <div className="inner_home_section" style={{ boxShadow: "0px 0px 0px 0px" }}>

                        <div className="main_over_all_states">
                            <div className="inner_over_all_states">
                                <i style={{ color: "#1997EE" }} className="bx bx-data">  </i>
                                <div className="inner_over_all_states_number" id="total_orders"> 0 </div>
                                <div className="inner_over_all_states_heading"> Total Orders </div>
                            </div>
                            <div className="inner_over_all_states">
                                <i style={{ color: "#60cea6d5" }} className="bx bx-check-double">  </i>
                                <div className="inner_over_all_states_number" id="completed_orders"> 0 </div>
                                <div className="inner_over_all_states_heading"> Completed Orders </div>
                            </div>
                            <div className="inner_over_all_states">
                                <i style={{ color: "#F7CB73" }} className="bx bx-time-five">  </i>
                                <div className="inner_over_all_states_number" id="pending_orders"> 0 </div>
                                <div className="inner_over_all_states_heading"> Pending Orders </div>
                            </div>
                        </div>

                        <div className="main_graph_div">
                            <h1> Graph Div </h1>
                        </div>

                        <div className="main_all_user_div">

                            <div className="show_user_box">
                                <div className="user_box_heading"> Completed Orders </div>
                                <div className="constrain">
                                    <input className="input-grey-rounded" type="search" placeholder="Search" id="searchInput" />
                                </div>
                                <div className="main_user_details_div">
                                    <div className="inner_user_details_div1"> <i className="bx bx-user"></i> </div>
                                    <div className="inner_user_details_div2"> Syed Subhan Uddin </div>
                                    <div className="inner_user_details_div3"> 08:45 PM </div>
                                </div>
                            </div>

                            <div className="show_user_box">
                                <div className="user_box_heading"> Pending Orders </div>
                                <div className="constrain">
                                    <input className="input-grey-rounded" type="search" placeholder="Search" id="searchInput" />
                                </div>
                                <div className="main_user_details_div pending">
                                    <div className="inner_user_details_div1"> <i className="bx bx-user"></i> </div>
                                    <div className="inner_user_details_div2"> Syed Subhan Uddin </div>
                                    <div className="inner_user_details_div3"> 08:45 PM </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </section>

        </>
    );
}

export default Darzi_dashboard;
