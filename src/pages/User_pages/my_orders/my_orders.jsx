import React, { useState, useEffect } from "react";
import "boxicons/css/boxicons.min.css"; // Import boxicons CSS
import { colors } from "@mui/material";
import './my_orders.css'
import Website_header from "../website_header/website_header";
import Website_footer from "../website_footer/website_footer";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function My_orders() {

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

                }
            }).catch(error => {
                seterror_notification_text(error.response.data.msg);
                errorhandleShowNotification();
                navigate('/Login');
            })

    }


    useEffect(() => {
        ceate_user_my_order_cards();
    }, [])

    const ceate_user_my_order_cards = () => {


        for (let i = 0; i < 0; i++) {

            const show_all_user_my_order = document.getElementById('show_all_user_my_order')

            const outerDiv = document.createElement("div");
            outerDiv.className = "inner_home_section_inner_div1_all_order_show";

            const mainDetailsDiv = document.createElement("div");
            mainDetailsDiv.className = "main_details_div";

            const userDetailsDiv = document.createElement("div");
            userDetailsDiv.className = "main_user_details_div new";

            const innerUserDetailsDiv1 = document.createElement("div");
            innerUserDetailsDiv1.className = "inner_user_details_div1";

            const userIcon = document.createElement("i");
            userIcon.className = "bx bx-user";
            innerUserDetailsDiv1.appendChild(userIcon);

            const innerUserDetailsDiv2 = document.createElement("div");
            innerUserDetailsDiv2.className = "inner_user_details_div2";
            innerUserDetailsDiv2.textContent = "Syed Subhan Uddin";

            const innerUserDetailsDiv3 = document.createElement("div");
            innerUserDetailsDiv3.className = "inner_user_details_div3";
            innerUserDetailsDiv3.textContent = "08:45 PM";

            userDetailsDiv.appendChild(innerUserDetailsDiv1);
            userDetailsDiv.appendChild(innerUserDetailsDiv2);
            userDetailsDiv.appendChild(innerUserDetailsDiv3);

            const moreDetailsDiv = document.createElement("div");
            moreDetailsDiv.className = "my_order_main_user_more_details_div";

            const innerDetails1 = document.createElement("div");
            innerDetails1.className = "my_order_main_user_more_details_div_inner_1";
            innerDetails1.innerHTML = `
    <span class="name"> Darzi Name : <span class="user_name"> Syed Subhan Ud-din </span></span>
    <span class="name"> Address : <span class="user_name"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. </span></span>
`;

            const innerDetails2 = document.createElement("div");
            innerDetails2.className = "my_order_main_user_more_details_div_inner_2";
            innerDetails2.innerHTML = `
    <div class="name">
        <span class="span"> Product : </span> 
        Shalwar kameez
    </div>
    <div> 
        <span class="name"> Price : </span>
        20$
    </div>
`;

            const innerDetails3 = document.createElement("div");
            innerDetails3.className = "my_order_main_user_more_details_div_inner_3";
            innerDetails3.innerHTML = `
    <div class="name"> Size : </div>
    <div>
        XS: 38-39 Chest / 29 Length
    </div>
`;

            moreDetailsDiv.appendChild(innerDetails1);
            moreDetailsDiv.appendChild(innerDetails2);
            moreDetailsDiv.appendChild(innerDetails3);

            mainDetailsDiv.appendChild(userDetailsDiv);
            mainDetailsDiv.appendChild(moreDetailsDiv);

            outerDiv.appendChild(mainDetailsDiv);


            show_all_user_my_order.appendChild(outerDiv);

        }



    }



    return (
        <>

            <div className="user_main_website_body">
                <Website_header />
                <div className="user_main_website_body_inner_div">

                    <div className="main_home_section">
                        <div className="inner_home_section">

                            <div className="inner_home_section_inner_div1" id="show_all_user_my_order">

                                <div className="inner_home_section_inner_div1_search_box">
                                    <div className="constrain">
                                        <input className="input-grey-rounded" type="search" placeholder="Search" id="searchInput" />
                                    </div>
                                </div>

                                <div className="inner_home_section_inner_div1_all_order_show">
                                    <div className="main_details_div">
                                        <div className="main_user_details_div new">
                                            <div className="inner_user_details_div1"> <i className="bx bx-user"></i> </div>
                                            <div className="inner_user_details_div2"> Syed Subhan Uddin </div>
                                            <div className="inner_user_details_div3"> 08:45 PM </div>
                                        </div>
                                        <div className="my_order_main_user_more_details_div">
                                            <div className="my_order_main_user_more_details_div_inner_1">
                                                <span className="name"> Darzi Name : <span className="user_name"> Syed Subhan Ud-din </span></span>
                                                <span className="name"> Address : <span className="user_name"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. </span></span>
                                            </div>
                                            <div className="my_order_main_user_more_details_div_inner_2">
                                                <div className="name"> <span className="span"> Product : </span> Shalwar kameez </div>
                                                <div> <span className="name"> Price : </span> 20$ </div>
                                            </div>
                                            <div className="my_order_main_user_more_details_div_inner_3">
                                                <div className="name"> Size : </div>
                                                <div>
                                                    XS: 38-39 Chest / 29 Length
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
                <Website_footer />
            </div>
        </>
    );
}

export default My_orders;