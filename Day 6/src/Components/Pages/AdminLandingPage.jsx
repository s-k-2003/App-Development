import React from "react";
import 'boxicons/css/boxicons.min.css';
import '../../Asserts/AdminLandingPage.css';
import video from '../../Asserts/Images/landingvideo.mp4';
import Footer from "./Footer";

const AdminPage=()=>{
    return(
        <>
            <div className="hero">
                <video  autoPlay loop muted playsInline className="back-video" >
                    <source src={video} type="video/mp4"/>
                </video>
                <nav>
                <div className="adminlogo">
                    <i className="bx bxs-bowl-hot"></i>
                    <span>Chef </span>Hub
                </div>
                    <ul>
                        <li><a href="/admin" className="active">Home</a></li>
                        <li><a href="/admin/panel">DashBoard</a></li>
                        <li><a href="menu">Menu</a></li>
                        <li><a href="login">Login</a></li>
                    </ul>
                </nav>
                <div className="landing-content">
                    <a href="menu">Explore</a>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default AdminPage;