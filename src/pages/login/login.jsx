import React, { useState, useEffect, useRef } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {

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








    const containerRef = useRef(null);
    const [toggleClass, setToggleClass] = useState('');


    const navigate = useNavigate();


    useEffect(() => {
        setTimeout(() => {
            setToggleClass('sign-in');
        }, 200);
    }, []);

    const toggle = () => {
        containerRef.current.classList.toggle('sign-in');
        containerRef.current.classList.toggle('sign-up');
    };

    // Sign In State start here
    const [loginRole, setloginRole] = useState('')
    const [Login_Email, setLogin_Email] = useState('')
    const [Login_password, setLogin_password] = useState('')
    // Sign In State End here

    // Sign Up State And Function Start here
    const [Username, setUsername] = useState('')
    const [Email, setEmail] = useState('')
    const [signupRole, setsignupRole] = useState('');
    const [Password, setPassword] = useState('')
    const [Address, setAddress] = useState('')
    const [Nic_number, setNic_number] = useState('')
    const [Nic_Front_images, setNic_Front_images] = useState('');
    const [Nic_Back_images, setNic_Back_images] = useState('');

    const handle_nic_front_images_File_Change = (event) => {
        const file = event.target.files[0];
        setNic_Front_images(file);
    };

    const handle_nic_back_images_File_Change = (event) => {
        const file = event.target.files[0];
        setNic_Back_images(file);
    };

    // Sign Up State And Function End here



    const sign_up_button = async () => {
        if (Username === '') {
            seterror_notification_text("Please enter a Username")
            errorhandleShowNotification();
        } else if (Email === '') {
            seterror_notification_text("Please enter a Email")
            errorhandleShowNotification();
        } else if (signupRole === '') {
            seterror_notification_text("Please Select a Role")
            errorhandleShowNotification();
        } else if (Password === '') {
            seterror_notification_text("Please enter a Password")
            errorhandleShowNotification();
        } else if (Address === '') {
            seterror_notification_text("Please enter a Address")
            errorhandleShowNotification();
        } else if (Nic_number === '') {
            seterror_notification_text("Please enter a NIC Number")
            errorhandleShowNotification();
        } else if (Nic_Front_images === '') {
            seterror_notification_text("Please Select a Nic Front Image")
            errorhandleShowNotification();
        } else if (Nic_Back_images === '') {
            seterror_notification_text("Please Select a Nic Back Image")
            errorhandleShowNotification();
        } else {

            try {
                const formData = new FormData();
                formData.append('files', Nic_Front_images);
                formData.append('files', Nic_Back_images);

                const image_api_response = await axios.post(
                    api_url + '/upload-image',
                    formData, { withCredentials: true },
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    }
                );

                if (image_api_response.data.status === "200") {

                    var nic_imageURLs = image_api_response.data.imageUrls;


                    let api = api_url + '/auth/register';

                    let data = {
                        username: Username,
                        id: Email,
                        role: signupRole,
                        password: Password,
                        address: Address,
                        nic_number: Nic_number,
                        nic_front_img: nic_imageURLs[0],
                        nic_back_img: nic_imageURLs[1],
                    };

                    await axios.post(api, data, { withCredentials: true })
                        .then((response) => {
                            if (response.data.status === "200") {
                                // navigate('/');
                                window.location.reload();
                                // alert("here")
                            }
                        }).catch(error => {
                            seterror_notification_text(error.message);
                            errorhandleShowNotification();
                        })
                }

            } catch (error) {
                seterror_notification_text(error.message)
                errorhandleShowNotification();
            }

        }

    }

    const sign_in_button = async () => {

        if (loginRole === '') {
            errorhandleShowNotification();
            seterror_notification_text("Please Select Role");
        } else if (Login_Email === '') {
            seterror_notification_text("Please enter a username Or Email ")
            errorhandleShowNotification();
        } else if (Login_password === '') {
            seterror_notification_text("Please enter a Password ")
            errorhandleShowNotification();
        } else {

            let api = api_url + '/auth/login';

            let data = {
                role: loginRole,
                id: Login_Email,
                password: Login_password
            };

            axios.post(api, data, { withCredentials: true })
                .then((response) => {
                    if (response.data.status === "200") {
                        if (loginRole === "Tailor") {
                            navigate('/Darzi-Dashboard');
                        } else {
                            navigate('/');
                        }
                    }
                }).catch(error => {
                    seterror_notification_text(error.response.data.msg);
                    errorhandleShowNotification();
                })
        }
    }





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

            <div ref={containerRef} className={`container ${toggleClass}`}>
                <div className="row">

                    {/* Sign Up start here */}
                    <div className="col align-items-center flex-col sign-up">
                        <div className="form-wrapper align-items-center">
                            <div className="form sign-up">
                                <div className="input-group">
                                    <i className='bx bxs-user'></i>
                                    <input type="text" placeholder="Username"
                                        value={Username}
                                        onChange={(e) => setUsername(e.target.value)} />
                                </div>
                                <div className="input-group">
                                    <i className='bx bx-mail-send'></i>
                                    <input type="email" placeholder="Email"
                                        value={Email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="input-group">
                                    <i className='bx bxs-user'></i>
                                    <select
                                        name="signuprole"
                                        id="signuprole"
                                        value={signupRole}
                                        onChange={(e) => setsignupRole(e.target.value)}
                                    >
                                        <option value="" disabled hidden>Select Role</option>
                                        <option value="Tailor">Tailor</option>
                                        <option value="Customer">Customer</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <i className='bx bxs-lock-alt'></i>
                                    <input type="password" placeholder="Password"
                                        value={Password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="input-group">
                                    <i className='bx bx-home-alt-2'></i>
                                    <input type="text" placeholder="Address"
                                        value={Address}
                                        onChange={(e) => setAddress(e.target.value)} />
                                </div>
                                <div className="input-group">
                                    <i className='bx bx-phone-call'></i>
                                    <input type="text" placeholder="NIC Number"
                                        value={Nic_number}
                                        onChange={(e) => setNic_number(e.target.value)} />
                                </div>
                                <div className="input-group">
                                    <i className='bx bx-image' style={{ top: "65%" }}></i>
                                    <label htmlFor="nicpic">Upload NIC Front Image :</label>
                                    <input type="file" id="nicpic" accept=".jpeg, .jpg, .png" onChange={handle_nic_front_images_File_Change} />
                                </div>
                                <div className="input-group">
                                    <i className='bx bx-image' style={{ top: "65%" }}></i>
                                    <label htmlFor="nicpic">Upload NIC Back Image :</label>
                                    <input type="file" id="nicpic" accept=".jpeg, .jpg, .png" onChange={handle_nic_back_images_File_Change} />
                                </div>
                                <button onClick={sign_up_button}>
                                    Sign up
                                </button>
                                <p>
                                    <span>
                                        Already have an account?
                                    </span>
                                    <b onClick={toggle} className="pointer"> {/* Removed () from toggle */}
                                        Sign in here
                                    </b>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Sign Up End here */}

                    {/* Sign In start here */}
                    <div className="col align-items-center flex-col sign-in">
                        <div className="form-wrapper align-items-center">
                            <div className="form sign-in">
                                <div className="input-group">
                                    <i className='bx bxs-user'></i>
                                    <select
                                        name="loginrole"
                                        id="loginrole"
                                        value={loginRole}
                                        onChange={(e) => setloginRole(e.target.value)}
                                    >
                                        <option value="" disabled hidden>Select Role</option>
                                        <option value="Tailor">Tailor</option>
                                        <option value="Customer">Customer</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <i className='bx bxs-user'></i>
                                    <input type="text" placeholder="Username Or Email"
                                        value={Login_Email}
                                        onChange={(e) => setLogin_Email(e.target.value)} />
                                </div>
                                <div className="input-group">
                                    <i className='bx bxs-lock-alt'></i>
                                    <input type="password" placeholder="Password"
                                        value={Login_password}
                                        onChange={(e) => setLogin_password(e.target.value)} />
                                </div>
                                <button onClick={sign_in_button}>
                                    Sign in
                                </button>
                                <p>
                                    <span>
                                        Don`t have an account?
                                    </span>
                                    <b onClick={toggle} className="pointer"> {/* Removed () from toggle */}
                                        Sign up here
                                    </b>
                                </p>
                                <p>
                                    <b>
                                        <a href="/Forgot-Password" style={{ textDecoration: "none", color: "black" }}>
                                            Forgot Password
                                        </a>
                                    </b>
                                </p>
                            </div>
                        </div>
                        <div className="form-wrapper">
                        </div>
                    </div>
                    {/* Sign In start here */}

                </div>
                <div className="row content-row">
                    <div className="col align-items-center flex-col">
                        <div className="text sign-in">
                            <h2>
                                Sign In
                            </h2>
                        </div>
                        <div className="img sign-in">
                        </div>
                    </div>
                    <div className="col align-items-center flex-col">
                        <div className="img sign-up">
                        </div>
                        <div className="text sign-up">
                            <h2>
                                Sign Up
                            </h2>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Login;
