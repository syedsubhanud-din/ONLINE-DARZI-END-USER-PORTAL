import React, { useState, useEffect } from "react";
import "boxicons/css/boxicons.min.css"; // Import boxicons CSS
import { colors } from "@mui/material";
import './shop.css'
import Website_header from "../website_header/website_header";
import Website_footer from "../website_footer/website_footer";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Shop() {

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
        create_product_cards();
    }, [])



    const create_product_cards = async () => {

        try {

            let api = `${api_url}/user/get-products`;

            const response = await axios.get(api, { withCredentials: true });

            if (response.data.status === "200") {

                for (let i = 0; i < response.data.msg.length; i++) {

                    const show_all_product_cards = document.getElementById('show_all_product_cards')

                    const shop_wrapper = document.createElement('div')
                    shop_wrapper.classList.add('shop_wrapper')

                    const product_img = document.createElement('div')
                    product_img.classList.add('product-img')

                    const product_img_tag = document.createElement('img')

                    var product_image = response.data.msg[i].product_images
                    product_image = JSON.parse(product_image)

                    product_img_tag.src = product_image[0].img
                    product_img_tag.height = "320"
                    product_img_tag.width = "227"

                    const product_info = document.createElement('div')
                    product_info.classList.add('product-info')

                    const product_text = document.createElement('div')
                    product_text.classList.add('product-text')

                    const product_text_h1 = document.createElement('h1')
                    product_text_h1.innerText = response.data.msg[i].product_name

                    const product_text_h2 = document.createElement('h2')
                    product_text_h2.innerText = response.data.msg[i].product_sold_by

                    const product_text_p = document.createElement('p')
                    product_text_p.innerHTML = `
                    <span class="highlight">Product Description -</span>&nbsp; ${response.data.msg[i].product_description}<br/>
                    <span class="highlight">Country of Origin -</span>&nbsp; ${response.data.msg[i].product_coo}<br/>
                    <span class="highlight">Manufactured By -</span>&nbsp;${response.data.msg[i].product_manufactured_by}<br/>
                    <span class="highlight">Packed By -</span>&nbsp; ${response.data.msg[i].product_packed_by}<br/>
                    <span style="color: rgb(99, 99, 99); font-size: 15px; font-weight: bolder;">Total Orders :</span> ${response.data.msg[i].product_quantity} 
                    `

                    const product_price_btn = document.createElement('div')
                    product_price_btn.classList.add('product-price-btn')

                    const product_price_btn_p = document.createElement('p')
                    product_price_btn_p.innerText = "$"

                    const product_price_btn_p_span = document.createElement('span')
                    product_price_btn_p_span.classList.add('span')
                    product_price_btn_p_span.innerText = response.data.msg[i].product_price

                    const product_price_btn_button = document.createElement('button')
                    product_price_btn_button.innerText = "buy now"



                    shop_wrapper.appendChild(product_img)
                    product_img.appendChild(product_img_tag)

                    shop_wrapper.appendChild(product_info)
                    product_info.appendChild(product_text)
                    product_text.appendChild(product_text_h1)
                    product_text.appendChild(product_text_h2)
                    product_text.appendChild(product_text_p)

                    product_info.appendChild(product_price_btn)
                    product_price_btn.appendChild(product_price_btn_p)
                    product_price_btn_p.appendChild(product_price_btn_p_span)
                    product_price_btn.appendChild(product_price_btn_button)

                    show_all_product_cards.appendChild(shop_wrapper)

                }

            }

        } catch (error) {

        }

    }





    return (
        <>

            <div className="user_main_website_body">
                <Website_header />
                <div className="user_main_website_body_inner_div">

                    <div className="main_home_section">
                        <div className="shop_inner_home_section" id="show_all_product_cards">

                        </div>
                    </div>

                </div>
                <Website_footer />
            </div>

        </>
    );
}
export default Shop;