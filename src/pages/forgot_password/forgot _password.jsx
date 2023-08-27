import React, { useState, useEffect, useRef } from 'react';
import './forgot_password.css';
import { useNavigate } from 'react-router-dom';


function Forgot_password() {

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
    };

    return (
        <div id="container" ref={containerRef} className={`container ${toggleClass}`}>
            <div className="row">

                {/* Sign Up start here */}
                <div className="col align-items-center flex-col sign-up">
                    <div className="form-wrapper align-items-center">
                        <div className="form sign-up">
                            <div className="input-group">
                                <i className='bx bxs-user'></i>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="input-group">
                                <i className='bx bx-mail-send'></i>
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="input-group">
                                <i className='bx bxs-lock-alt'></i>
                                <input type="password" placeholder="Password" />
                            </div>
                            <div className="input-group">
                                <i className='bx bxs-lock-alt'></i>
                                <input type="text" placeholder="Address" />
                            </div>
                            <div className="input-group">
                                <i className='bx bxs-lock-alt'></i>
                                <input type="text" placeholder="NIC Number" />
                            </div>
                            <div className="input-group">
                                <i className='bx bxs-lock-alt'></i>
                                <label htmlFor="nicpic">Upload NIC Image :</label>
                                <input type="file" id="nicpic" accept=".jpeg, .jpg, .png" />
                            </div>
                            <button >
                                Sign up
                            </button>
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
                                <input type="text" placeholder="Username Or Email" />
                            </div>
                            <button >
                                Forgot Password
                            </button>
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
                            Forgot Password
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
        </div>
    );
}

export default Forgot_password;