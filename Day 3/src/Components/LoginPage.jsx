import React, { useState } from "react";
import { FaUser } from 'react-icons/fa';
import { FiEye, FiEyeOff } from "react-icons/fi";
import '../Asserts/LoginPage.css';

const Login = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [showNameField, setShowNameField] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSignInClick = () => {
        setName('');
        setId('');
        setPassword('');
        setShowNameField(false);
    };

    const handleSignUpClick =()=>{
        setName('');
        setId('');
        setPassword('');
        setShowNameField(true)
    }

    return (
        <div className="container">
            <div className="form-box">

                <h1 id="title">{showNameField ? "Sign Up" : "Sign In"}</h1>

                <form action="">
                    <div className="input-group">
                        {showNameField && (
                            <div className="input-field">
                                <input type="text" 
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                                placeholder="Name" 
                                id="namefield" />
                                <FaUser className="icon" />
                            </div>
                        )}
                        <div className="input-field">
                            <input type="text" 
                            value={id}
                            onChange={(e)=>setId(e.target.value)}
                            placeholder="Id"/>
                            <FaUser className="icon" />
                        </div>

                        <div className="input-field">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password" />
                            {passwordVisible ? (
                                <FiEyeOff onClick={togglePasswordVisibility} className="icon" />
                            ) : (
                                <FiEye onClick={togglePasswordVisibility} className="icon" />
                            )}
                        </div>
                        {/* {!showNameField && (
                               <div className="check">
                                <label>
                                    <input type="checkbox" />
                                    Remember Me
                                </label>
                                </div>
                        )} */}
                        <div className="forgot-password">Lost Password{' '}<span>Click Here</span></div>
                    </div>
                    <div className="btn">
                        <button type="button" id="signupBtn" className={showNameField ? "" : "disable"} onClick={handleSignUpClick}>Sign Up</button>
                        <button type="button" id="signinBtn"className={!showNameField ? "" : "disable"} onClick={handleSignInClick}>Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
