import React from "react";
import '../../Asserts/Contact.css';
import 'boxicons/css/boxicons.min.css';
import Footer from "./Footer";

const Contact =()=>{
    return(
        <>
            <section className="contact">
                <div className="contact-content">
                    <h2>Contact US</h2>
                    <p>Welcome to our Kitchen Display System (KDS) support center! We're here to assist you with any inquiries, 
                        technical support, or information you may need about our cutting-edge KDS solutions. Our dedicated team is 
                        committed to ensuring your kitchen operations run smoothly and efficiently.
                    </p>
                </div>
                <div className="contact-container">
                    <div className="contactInfo">
                        <div className="box">
                            <div className="contact-icon">
                                <i className="bx bx-map"></i>
                            </div>
                            <div className="contact-text">
                                <h3>Address</h3>
                                <p>No 12 Near Dubai Bustand <br />Dubai Main Road <br />Dubai</p>
                                
                            </div>
                        </div>
                        <div className="box">
                            <div className="contact-icon">
                                <i className="bx bx-phone"></i>
                            </div>
                            <div className="contact-text">
                                <h3>Phone</h3>
                                <p>983-746-1285</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="contact-icon">
                                <i className="bx bx-envelope"></i>
                            </div>
                            <div className="contact-text">
                                <h3>Email</h3>
                                <p>chefhub@info.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="contactForm">
                        <form action="">
                            <h2>Send Message</h2>
                            <div className="inputBox">
                                <input type="text" required />
                                <span>Full Name</span>
                            </div>
                            <div className="inputBox">
                                <input type="text" required />
                                <span>Email</span>
                            </div>
                            <div className="inputBox">
                                <textarea required></textarea>
                                <span>Type Your Message...</span>
                            </div>
                            <div className="inputBox">
                                <input type="submit" value="Send" />
                            </div>
                        </form>
                    </div>
                </div>

            </section>
            <Footer/>
        </>
    );
}

export default Contact;