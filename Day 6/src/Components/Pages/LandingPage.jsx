import React, { useState, useEffect, useRef } from "react";
import '../../Asserts/LandingPage.css';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "../../Asserts/Modal.css"; 
import Footer from "./Footer";

const Modal = ({ closeModal }) => {
    const nav = useNavigate();
  return (
   
    <div className="modal">
      <div className="modal-content">
        <div className="cross-icon" onClick={closeModal}>
            <span>&times;</span>
        </div>
        <ul>
          <li><a onClick={()=>nav('/home')}>HOME</a></li>
          <li><a href="#">FEATURES</a></li>
          <li><a onClick={()=>nav('/aboutus')}>ABOUT US</a></li>
          <li><a onClick={()=>nav('/contact')}>SUPPORT</a></li>
        </ul>
      </div>
    </div>
  );
}

const Page = () => {
    const nav = useNavigate();
    const [isExpanded, setIsExpanded] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const toggleNav = () => {
        setIsExpanded(prev => !prev);
    };

    const toggleModal = () => {
        setShowModal(prev => !prev);
    };

    const closeNav = (e) => {
        if (!navRef.current.contains(e.target) && !toggleButtonRef.current.contains(e.target)) {
            setIsExpanded(false);
        }
    };

    const navRef = useRef(null);
    const toggleButtonRef = useRef(null);

    useEffect(() => {
        document.addEventListener('click', closeNav);
        return () => {
            document.removeEventListener('click', closeNav);
        };
    }, []);

   

    return (
        <>
        <div className="whole">
            <div className="landing-container">
                <div className="navbar" ref={navRef}>
                <div className="adminlogo" onClick={()=>nav('/')}>
                    <i className="bx bxs-bowl-hot"></i>
                    <span>Chef </span>Hub
                </div>
                    <ul className={isExpanded ? 'expanded' : ''}>
                        <li><a onClick={()=>nav('/home')}>HOME</a></li>
                        <li><a href="#">FEATURES</a></li>
                        <li><a onClick={()=>nav('/aboutus')}>ABOUT US</a></li>
                        <li><a onClick={()=>nav('/contact')}>SUPPORT</a></li>
                    </ul>
                    <button className="nav-toggle" onClick={toggleModal} ref={toggleButtonRef}>
                        <FontAwesomeIcon icon={faBars} style={{ fontSize: '24px' }} />
                    </button>
                </div>
                <div className="get-started-button-bottom" onClick={()=>nav('/home')}>EXPLORE</div>
            </div>
            {showModal && <Modal closeModal={toggleModal} />}
        </div>
        <Footer/>
        </>
    );
}

export default Page;
