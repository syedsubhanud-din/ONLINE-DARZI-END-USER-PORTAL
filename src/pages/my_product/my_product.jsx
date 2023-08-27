import React, { useState, useEffect } from "react";
import "boxicons/css/boxicons.min.css"; // Import boxicons CSS
import './my_product.css'
import { colors } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function My_product() {

    var api_url = 'http://localhost:8077';

    const [Tailor_Email, setTailor_Email] = useState('');


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



    const navigate = useNavigate();

    const [Product_Name, setProduct_Name] = useState('');
    const [Country_of_Origin, setCountry_of_Origin] = useState('');
    const [Manufactured_By, setManufactured_By] = useState('');
    const [Commodity, setCommodity] = useState('');
    const [product_price, setproduct_price] = useState('');
    const [product_quantity, setproduct_quantity] = useState('');
    const [Product_Image, setProduct_Image] = useState('');
    const [PRODUCT_DESCRIPTION, setPRODUCT_DESCRIPTION] = useState('');


    const handle_nic_back_images_File_Change = (event) => {
        const file = event.target.files[0];
        setProduct_Image(file);
    };





    useEffect(() => {
        session_check();
    }, []);

    const session_check = async () => {
        let api = api_url + '/auth/session-validator';

        axios.get(api, { withCredentials: true })
            .then((response) => {
                if (response.data.status === "200") {
                    setTailor_Email(response.data.id);
                }
            }).catch(error => {
                seterror_notification_text(error.response.data.msg);
                errorhandleShowNotification();
                navigate('/Login');
            })

    }



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



    const add_product_popup_box_close = () => {
        const main_add_product_div = document.getElementById('main_add_product_div')
        main_add_product_div.style.display = "none"
    }

    const add_product_popup_box_open = () => {
        const main_add_product_div = document.getElementById('main_add_product_div')
        main_add_product_div.style.display = "block"
    }



    useEffect(() => {
        create_my_product_card();
    }, [])


    const create_my_product_card = async () => {
        try {

            let api = `${api_url}/user/get-products?filter_product_by=${Tailor_Email}`;

            const response = await axios.get(api, { withCredentials: true });


            if (response.data.status === "200") {

                for (let i = 0; i < response.data.msg.length; i++) {

                    const show_all_my_product = document.getElementById('show_all_my_product');

                    const parentContainer = document.createElement('div');
                    parentContainer.className = 'content';

                    const leftDiv = document.createElement('div');
                    leftDiv.className = 'left';

                    const productImg = document.createElement('div');
                    productImg.className = 'product_img';

                    var product_img = response.data.msg[i].product_images
                    product_img = JSON.parse(product_img)

                    productImg.style.backgroundImage = `url(${product_img[0].img})`;

                    const productDetails = document.createElement('div');
                    productDetails.className = 'product_details';

                    const title = document.createElement('h4');
                    title.className = 'title';
                    title.textContent = response.data.msg[i].product_name;

                    const price = document.createElement('p');
                    price.className = 'price';
                    price.innerHTML = response.data.msg[i].product_price;

                    const other = document.createElement('p');
                    other.className = 'other';
                    other.innerHTML = `<span style="color: rgb(99, 99, 99); font-size: 15px; font-weight: bolder;">Total Orders :</span> ${response.data.msg[i].product_quantity}`;

                    const rightDiv = document.createElement('div');
                    rightDiv.className = 'right';

                    const productDescription = document.createElement('div');
                    productDescription.className = 'product_description';

                    const productDescriptionTitle = document.createElement('h4');
                    productDescriptionTitle.textContent = 'PRODUCT DESCRIPTION';

                    const productDescriptionContent = document.createElement('p');
                    productDescriptionContent.textContent = response.data.msg[i].product_description;

                    const countryOfOrigin = document.createElement('p');
                    countryOfOrigin.innerHTML = `<span class="highlight">Country of Origin -</span>&nbsp; ${response.data.msg[i].product_coo}`;

                    const manufacturedBy = document.createElement('p');
                    manufacturedBy.innerHTML = `<span class="highlight">Manufactured By -</span>&nbsp;${response.data.msg[i].product_manufactured_by}`;

                    const packedBy = document.createElement('p');
                    packedBy.innerHTML = `<span class="highlight">Packed By -</span>&nbsp; ${response.data.msg[i].product_packed_by}`;

                    const commodity = document.createElement('p');
                    commodity.innerHTML = `<span class="highlight">Commodity -</span>${response.data.msg[i].product_commodity}`;

                    const soldBy = document.createElement('p');
                    soldBy.innerHTML = "";



                    productDetails.appendChild(title);
                    productDetails.appendChild(price);
                    productDetails.appendChild(other);
                    leftDiv.appendChild(productImg);
                    leftDiv.appendChild(productDetails);
                    productDescription.appendChild(productDescriptionTitle);
                    productDescription.appendChild(productDescriptionContent);
                    productDescription.appendChild(countryOfOrigin);
                    productDescription.appendChild(manufacturedBy);
                    productDescription.appendChild(packedBy);
                    productDescription.appendChild(commodity);
                    productDescription.appendChild(soldBy);
                    rightDiv.appendChild(productDescription);
                    parentContainer.appendChild(leftDiv);
                    parentContainer.appendChild(rightDiv);
                    show_all_my_product.appendChild(parentContainer);
                }

            }
        } catch (error) {
            seterror_notification_text(error.message);
            errorhandleShowNotification();
        }
    };



    const add_product_button_function = async () => {
        if (
            Product_Name === '' ||
            Country_of_Origin === '' ||
            Manufactured_By === '' ||
            Commodity === '' ||
            product_quantity === '' ||
            product_price === '' ||
            Product_Image === '' ||
            PRODUCT_DESCRIPTION === ''
        ) {
            seterror_notification_text("Please fill in all fields");
            errorhandleShowNotification();
            return;
        }

        try {

            const formData = new FormData();
            formData.append('files', Product_Image);

            const image_api_response = await axios.post(
                api_url + '/upload-image',
                formData, { withCredentials: true },
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            const nic_imageURLs = image_api_response.data.imageUrls;

            if (image_api_response.data.status === "200") {

                const api = `${api_url}/tailor/add-product`;

                const data = {
                    product_name: Product_Name,
                    product_description: PRODUCT_DESCRIPTION,
                    product_coo: Country_of_Origin,
                    product_manufactured_by: Manufactured_By,
                    product_packed_by: "tailor",
                    product_commodity: Commodity,
                    product_price: product_price,
                    product_quantity: product_quantity,
                    banner_image: [{
                        img: nic_imageURLs
                    }],
                    product_images: [{
                        img: nic_imageURLs
                    }],
                };

                const response = await axios.post(api, data, { withCredentials: true });

                if (response.data.status === "200") {
                    console.log(response);
                    notification_text();
                    handleShowNotification();
                }
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
                        <span className="text"> My Product </span>
                    </div>
                </div>

                <div className="main_home_section">
                    <div className="inner_home_section" style={{ boxShadow: "0px 0px 0px 0px" }}>

                        <div className="main_product_div">


                            <div className="main_add_product_div" id="main_add_product_div">
                                <div className="inner_add_product_div">

                                    <div className="main_popup_box_add_product_div">

                                        <div className="main_popup_box_add_product_header_div">
                                            <div className="heading"> Add Product </div>
                                            <div onClick={add_product_popup_box_close}><i className="bx bx-cut"></i></div>
                                        </div>

                                        <div className="main_popup_box_add_product_body_div">

                                            <div className="main_popup_box_add_product_body_inner_div1">
                                                <div className="input_field_div">
                                                    <label htmlFor=""> Product Name: </label>
                                                    <input type="text"
                                                        placeholder="Product Name"
                                                        value={Product_Name}
                                                        onChange={(e) => setProduct_Name(e.target.value)}
                                                    />
                                                </div>
                                                <div className="input_field_div">
                                                    <label htmlFor="">Country of Origin:</label>
                                                    <input type="text"
                                                        placeholder="Country of Origin "
                                                        value={Country_of_Origin}
                                                        onChange={(e) => setCountry_of_Origin(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="main_popup_box_add_product_body_inner_div1">
                                                <div className="input_field_div">
                                                    <label htmlFor=""> Manufactured By: </label>
                                                    <input type="text"
                                                        placeholder="Manufactured By"
                                                        value={Manufactured_By}
                                                        onChange={(e) => setManufactured_By(e.target.value)}
                                                    />
                                                </div>
                                                <div className="input_field_div">
                                                    <label htmlFor="">Commodity:</label>
                                                    <input type="text"
                                                        placeholder="Commodity "
                                                        value={Commodity}
                                                        onChange={(e) => setCommodity(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="main_popup_box_add_product_body_inner_div1">
                                                <div className="input_field_div">
                                                    <label htmlFor=""> Price: </label>
                                                    <input type="text"
                                                        placeholder="Price"
                                                        value={product_price}
                                                        onChange={(e) => setproduct_price(e.target.value)}
                                                    />
                                                </div>
                                                <div className="input_field_div">
                                                    <label htmlFor="">Product Quantity:</label>
                                                    <input type="text"
                                                        placeholder="product_quantity "
                                                        value={product_quantity}
                                                        onChange={(e) => setproduct_quantity(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="main_popup_box_add_product_body_inner_div1">
                                                <div className="input_field_div" style={{ width: "100%" }}>
                                                    <label htmlFor=""> Product Image: </label>
                                                    <input type="file" id="nicpic" accept=".jpeg, .jpg, .png" onChange={handle_nic_back_images_File_Change} />
                                                </div>
                                            </div>
                                            <div className="main_popup_box_add_product_body_inner_div1">
                                                <div className="input_field_div" style={{ width: "100%" }}>
                                                    <label htmlFor=""> PRODUCT DESCRIPTION: </label>
                                                    <textarea placeholder="PRODUCT DESCRIPTION"
                                                        value={PRODUCT_DESCRIPTION}
                                                        onChange={(e) => setPRODUCT_DESCRIPTION(e.target.value)}
                                                    ></textarea>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="add_product_button">
                                            <button onClick={add_product_button_function}>Add Product</button>
                                        </div>

                                    </div>

                                </div>
                            </div>


                            <div className="inner_product_div" id="show_all_my_product">

                                <div className="add_product_button_div">
                                    <button onClick={add_product_popup_box_open}> Add Product <i className="bx bx-plus-medical"></i>  </button>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </section>

        </>
    );
}

export default My_product;
