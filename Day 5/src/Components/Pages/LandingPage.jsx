import React, { useState, useEffect, useRef } from "react";
import '../../Asserts/LandingPage.css';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "../../Asserts/Modal.css"; // Make sure to import the Modal CSS

const Modal = ({ closeModal }) => {
    const nav = useNavigate();
    const [logged, setLoggedIn] = useState(false);

    useEffect(()=>{
        const user = localStorage.getItem('user');
        setLoggedIn(!!user);
    },[]);
    const handleLogout=()=>{
        localStorage.removeItem('user');
        nav('/login');
    }


    // console.log(logged);

    // if(!logged){
    //     nav('/login');
    // }
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="cross-icon" onClick={closeModal}>
            <span>&times;</span>
        </div>
        <ul>
          <li><a href="/">HOME</a></li>
          <li><a href="#">FEATURES</a></li>
          <li><a href="#">PRICING</a></li>
          <li><a href="#">SUPPORT</a></li>
        </ul>
      </div>
    </div>
  );
}

const Page = () => {
    const nav = useNavigate();
    const [isExpanded, setIsExpanded] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const [logged, setLoggedIn] = useState(false);

    useEffect(()=>{
        const user = localStorage.getItem('user');
        setLoggedIn(!!user);
    },[]);

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

    const handleLogout=()=>{
        localStorage.removeItem('user');
        nav('/login');
        
    }

    return (
        <div className="whole">
            <div className="landing-container">
                <div className="navbar" ref={navRef}>
                    <ul className={isExpanded ? 'expanded' : ''}>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">FEATURES</a></li>
                        <li><a href="#">PRICING</a></li>
                        <li><a href="#">SUPPORT</a></li>
                    </ul>
                    <button className="nav-toggle" onClick={toggleModal} ref={toggleButtonRef}>
                        <FontAwesomeIcon icon={faBars} style={{ fontSize: '24px' }} />
                    </button>
                </div>
                <div className="get-started-button-bottom" onClick={()=>nav('/menu')}>Explore Menu</div>
            </div>
            {showModal && <Modal closeModal={toggleModal} />}
        </div>
    );
}

export default Page;
