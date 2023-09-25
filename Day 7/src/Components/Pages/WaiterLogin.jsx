import React, { useState } from "react";
import { FaUser } from 'react-icons/fa';
import { FiEye, FiEyeOff } from "react-icons/fi";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { login } from '../Redux/UserSlice';
import axios from "axios";
import '../../Asserts/LoginPage.css';

const WaiterLogin = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const nav = useNavigate();

    const credentials={
        userId: id,
        password: password
    }

    // const dispatch =  useDispatch();
    // const notify = () => {
    //     toast("Wow so easy!");
        
    // }

    const handleWaiterSignInClick = async(event) => {
        if(!id || !password){
            alert("all fields are required");
        } else {
            try{
                const res = await axios.post('http://localhost:8080/chefhub/user/auth',credentials);

                if(res.data === "Login Successful"){
                    nav('/waiter');
                    // alert("Login Successful");
                } else {
                    alert(res.data);
                    event.preventDefault();
                }
            } catch(error){
                alert(error);
            }
        }
    };

    const handleLogin=()=>{
        if(!id || !password){
            alert("All Fields are Required");
        }else{
            alert("Login Successfull");
            nav('/waiter');
        }
    }

    return (
        <div className="container">
            <div className="form-box">
                <h1 id="title">Sign In</h1>
                <form action="">
                    <div className="back-home">Back To Home ? {' '}<span onClick={()=>nav('/home')}>Click here</span></div>
                    <div className="input-group">
                        <div className="input-field">
                            <input
                                type="text"
                                value={id}
                                onChange={(e) => setId(e.target.value.replace(/\D/g, ""))}
                                placeholder="Id"
                            />
                            <FaUser className="icon" />
                        </div>

                        <div className="input-field">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                            {passwordVisible ? (
                                <FiEyeOff onClick={togglePasswordVisibility} className="icon" />
                                ) : (
                                    <FiEye onClick={togglePasswordVisibility} className="icon" />
                                    )}
                        </div>
                        
                        <div className="forgot-password">
                            Lost Password{' '}<span>Click Here</span>
                        </div>
                    </div>
                    <div className="btn">
                        <button
                            type="button"
                            id=""
                            className="waiter-btn"
                            onClick={handleLogin}
                            // onClick={handleWaiterSignInClick}
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default WaiterLogin;
