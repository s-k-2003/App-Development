import React from "react";
import '../../Asserts/ProfileCard.css';
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WaiterLogin from "./WaiterLogin";

const Profile=()=>{
    const nav = useNavigate();
    return(
        <>
        <Navbar/>
        <div className="profile-body">
            <div className="page">
                <section className="page-header">
                    <h1 className="page-title">Profiles</h1>
                    <p className="intro-text">Choose Your profile</p>
                </section>
                <section className="pricing-table">
                    {/* Waiter */}
                    <div className="pricing-item">
                        <h4 className="pricing-title">Waiter</h4>
                        <p className="pricing-text"></p>
                        <div className="pricing-price">
                            <span className="currency"></span><span>Server</span><span className="duration"></span>
                        </div>
                        <ul className="pricing-features not-active">
                            <li className="feature-item">Order Entry</li>
                            <li className="feature-item">Order Modification</li>
                            <li className="feature-item">Order Status Updates</li>
                            <li className="feature-item">Closing Orders</li>
                        </ul>
                        <button className="pricing-action" onClick={()=>nav('/login/waiter')}>Select</button>
                    </div>
                    {/* User */}
                    <div className="pricing-item is-centered">
                        <h4 className="pricing-title">Customer</h4>
                        <p className="pricing-text"></p>
                        <div className="pricing-price">
                            <span className="currency"></span><span>Dinner</span><span className="duration"></span>
                        </div>
                        <ul className="pricing-features not-active">
                            <li className="feature-item">Selects Food</li>
                            <li className="feature-item">Pays for Food</li>
                            <li className="feature-item">Collects Token</li>
                            <li className="feature-item">Receives Food</li>
                        </ul>
                        <button className="pricing-action" onClick={()=>nav('/menu')}>Select</button>
                    </div>
                    {/* Admin */}
                    <div className="pricing-item">
                        <h4 className="pricing-title">Admin</h4>
                        <p className="pricing-text"></p>
                        <div className="pricing-price">
                            <span className="currency"></span><span>Manager</span><span className="duration"></span>
                        </div>
                        <ul className="pricing-features">
                            <li className="feature-item">Order Tracking</li>
                            <li className="feature-item">Menu Management</li>
                            <li className="feature-item">Staff Management</li>
                            <li className="feature-item">Mointoring</li>
                        </ul>
                        <button className="pricing-action" onClick={()=>nav('/login/admin')}>Select</button>
                    </div>
                </section>
            </div>
        </div>
        <Footer/>
    </>
    );
}

export default Profile;