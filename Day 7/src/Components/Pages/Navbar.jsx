import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../../Asserts/Modal.css';

const Navbar = () => {
    const nav = useNavigate();
    const [isExpanded, setIsExpanded] = useState(false);
    const navRef = useRef(null);
    const toggleButtonRef = useRef(null);

    const toggleNav = () => {
        setIsExpanded(prev => !prev);
    };

    const closeNav = (e) => {
        if (!navRef.current.contains(e.target) && !toggleButtonRef.current.contains(e.target)) {
            setIsExpanded(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', closeNav);
        return () => {
            document.removeEventListener('click', closeNav);
        };
    }, []);

    return (
        <div className="navbar" ref={navRef}>
            <div className="adminlogo" onClick={()=>nav('/')}>
                <i className="bx bxs-bowl-hot"></i>
                <span>Chef </span>Hub
            </div>
            <ul className={isExpanded ? 'expanded' : ''}>
                <li><a onClick={()=>nav('/home')}>HOME</a></li>
                <li><a onClick={()=>nav('/faq')}>FAQ</a></li>
                <li><a onClick={()=>nav('/aboutus')}>ABOUT US</a></li>
                <li><a onClick={()=>nav('/contact')}>SUPPORT</a></li>
            </ul>
            <button className="nav-toggle" onClick={toggleNav} ref={toggleButtonRef}>
                <FontAwesomeIcon icon={faBars} style={{ fontSize: '24px' }} />
            </button>
        </div>
    );
}

export default Navbar;
