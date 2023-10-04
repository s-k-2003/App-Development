import React, { useState } from "react";
import { FaUser } from 'react-icons/fa';
import { FiEye, FiEyeOff } from "react-icons/fi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from '../Redux/UserSlice';
import axios from "axios";
import '../../Asserts/LoginPage.css';

const Login = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [showNameField, setShowNameField] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const nav = useNavigate();

    const userdata = {
        userId:id,
        name:name,
        password:password
    }

    const credentials={
        userId:id,
        password:password
    }

    const dispatch =  useDispatch();
    const notify = () => {
        toast("Wow so easy!");
        nav('/admin/panel');
    }



    const handleSignInClick = async(event) => {
        if(showNameField){
           setShowNameField(false);
           setId('');
           setPassword('');
       }else{
           if((!id || !password)){
               alert("all feilds are required");
           }else{
            try{
                const res = await axios.post('http://localhost:8080/chefhub/user/auth',credentials);

                if(res.data==="Login Successfull"){
                    alert("Login Successfull");
                    dispatch(login({
                        name:id,
                        loggedIn:true,
                    }));
                    notify();

                   
                   

                }else{
                    alert(res.data);
                    event.preventDefault();
                }
            }catch(error){
                alert(error);
            }
           }
       }
    };

    const handleSignUpClick =()=>{
        if(!showNameField){

            setShowNameField(true)
            
            setName('');
            setId('');
            setPassword('');
        }else{
            if((!name || !password || !id)){
                alert("all feilds are required");
            }else{
                axios.post('http://localhost:8080/chefhub/user',userdata);
                window.location.reload();
            }
        }
    }

    return (
        
        <div className="container">
            
            <div className="form-box">

                <h1 id="title">{showNameField ? "Sign Up" : "Sign In"}</h1>

                <form action="">
                <div className="back-home">Back To Home ? {' '}<span onClick={()=>nav('/home')}>Click here</span></div>
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
                            onChange={(e)=>setId(e.target.value.replace(/\D/g, ""))}
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
                        {!showNameField ? (
                            <div className="forgot-password">Lost Password{' '}<span>Click Here</span></div>
                            ) : (
                                <div className="back-home">Back To Home{' '}<span onClick={()=>nav('/admin')}>Click Here</span></div>
                                )}
                    </div>
                    <div className="btn">
                        <button type="button" id="signupBtn" className={showNameField ? "" : "disable"} onClick={handleSignUpClick} disabled hidden>Sign Up</button>
                        <button type="button" id="signinBtn"className={!showNameField ? "" : "disable"} onClick={handleSignInClick}>Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
                          
