import React from "react";
import aboutimg from '../../Asserts/Images/AboutUs.jpg';
import '../../Asserts/AboutUs.css';
import Footer from "./Footer";

const About=()=>{
    return(
        <>
        <div className="about-body">
            <div className="heading">
                <h1>About Us</h1>
                <p>Welcome to Chef Hub, your trusted partner in revolutionizing kitchen operations. With years of experience and a passion for enhancing culinary experiences, we specialize in providing cutting-edge Kitchen Display Systems (KDS) that streamline the heart of any restaurant - the kitchen.</p>
                <div className="heading-container">
                    <section className="about">
                        <div className="about-image">
                            <img src={aboutimg}  />
                        </div>
                        <div className="about-content">
                            <h2>Our Mission</h2>
                            <p>Our mission is to empower chefs, kitchen staff, and restaurant owners with the tools they need to operate seamlessly. We strive to set new industry standards by offering innovative KDS solutions that not only enhance 
                                efficiency but also elevate the overall dining experience for patrons.
                            </p>
                            <h2>Why Choose Chef Hub KDS?</h2>
                            <p>Choose Chef Hub KDS for a comprehensive solution tailored to your kitchen's unique needs. Our state-of-the-art technology ensures reliability, speed, and accuracy in every order. With an intuitive interface, 
                                your staff can quickly adapt, allowing them to focus on crafting exceptional dishes. Plus, our dedicated support team is available 24/7 to assist with any questions or technical issues, providing unparalleled 
                                support for your operations.
                            </p>
                            <h2>Our Commitment to Sustainability</h2>
                            <p>
                            We believe in responsible business practices. Our commitment to sustainability extends to our products and operations. We strive to minimize our environmental footprint while maximizing the positive impact our solutions 
                            have on your kitchen operations.Join us in the culinary revolution and experience the difference a Chef Hub KDS can make in your kitchen. Discover a new level of efficiency, precision, and satisfaction today.
                            </p>
                            <a className="read-more">Read More</a>
                        </div>
                       
                           
                    </section>
                </div>
                
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default About;