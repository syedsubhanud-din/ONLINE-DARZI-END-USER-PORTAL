import React, { useState, useEffect } from "react";
import './user_dashboard.css'
import "boxicons/css/boxicons.min.css"; // Import boxicons CSS
import Website_header from "../website_header/website_header";
import Website_footer from "../website_footer/website_footer";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function User_dashboard() {



    return (
        <>
            <div className="user_main_website_body">
                <Website_header />

                <div className="user_main_website_body_inner_div" style={{ width: "100%" }}>

                    <div className="main_home_banner_div">
                        <div className="inner_home_banner_div">
                            <div className="inner_home_banner_left_div">
                                <h1>Lorem ipsum dolor sit amet consectetur</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, facere! Minima, ullam incidunt at voluptatum sunt ad, quod cum repudiandae quo, natus error fugiat accusantium nemo consequuntur molestiae eius ut?</p>
                            </div>
                            <div className="inner_home_banner_right_div"></div>
                        </div>
                    </div>

                    <div className="user_main_website_body_inner_div">
                        <div className="main_darzi_images_div">
                            <div className="inner_darzi_images_div">
                                <div className="darzi_image_holder"></div>
                                <div className="inner_darzi_contant_holder">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti corrupti, laboriosam, illum asperiores mollitia voluptatem architecto soluta quia natus ut sed similique! Consequuntur recusandae blanditiis quas dolorem quam fuga temporibus?</p>
                                    <button> More </button>
                                </div>
                            </div>
                            <div className="inner_darzi_images_div">
                                <div className="darzi_image_holder"></div>
                                <div className="inner_darzi_contant_holder">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti corrupti, laboriosam, illum asperiores mollitia voluptatem architecto soluta quia natus ut sed similique! Consequuntur recusandae blanditiis quas dolorem quam fuga temporibus?</p>
                                    <button> More </button>
                                </div>
                            </div>
                            <div className="inner_darzi_images_div">
                                <div className="darzi_image_holder"></div>
                                <div className="inner_darzi_contant_holder">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti corrupti, laboriosam, illum asperiores mollitia voluptatem architecto soluta quia natus ut sed similique! Consequuntur recusandae blanditiis quas dolorem quam fuga temporibus?</p>
                                    <button> More </button>
                                </div>
                            </div>
                            <div className="inner_darzi_images_div">
                                <div className="darzi_image_holder"></div>
                                <div className="inner_darzi_contant_holder">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti corrupti, laboriosam, illum asperiores mollitia voluptatem architecto soluta quia natus ut sed similique! Consequuntur recusandae blanditiis quas dolorem quam fuga temporibus?</p>
                                    <button> More </button>
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

export default User_dashboard;