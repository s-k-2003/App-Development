import React, { useState } from "react";
import { useEffect } from "react";
import '../../Asserts/AdminPanel.css';
import 'boxicons/css/boxicons.min.css';
import { useSelector } from 'react-redux';
import { selectUser } from "../Redux/UserSlice";
import { logout } from "../Redux/UserSlice";
import { useDispatch } from "react-redux";
import dosa from '../../Asserts/Images/dosa.png';
import idly from '../../Asserts/Images/idly.png';
import poori from '../../Asserts/Images/poori.png';
import { useNavigate } from "react-router-dom";
import DashBoard from "./DashBoard";

const Panel=()=>{
    const nav = useNavigate();
    const user = useSelector(selectUser);
    const [id, setId] = useState('');
    useEffect(()=>{
        if(user){
            setId(user.name);
        }else{
    
            if(!id){
                setId("Guest");
            }
        }
        
    },[user, id]);
    useEffect(() => {
        const sideLinks = document.querySelectorAll('.admin-sidebar .admin-side-menu li a:not(.logout)');
        sideLinks.forEach(item => {
            const li = item.parentElement;
            item.addEventListener('click', () => {
                sideLinks.forEach(i => {
                    i.parentElement.classList.remove('active');
                })
                li.classList.add('active');
            })
        });

        
        const sideBar =  document.querySelector('.admin-sidebar');

       

        

        
        const searchBtn =  document.querySelector('.admin-content nav form .admin-input-form button');
        const searchBtnIcon =  document.querySelector('.admin-content nav form .admin-input-form button .bx');
        const searchForm =  document.querySelector('.admin-content nav form ');

        searchBtn.addEventListener('click', function(e){
            if(window.innerWidth < 576){
                e.preventDefault();
                searchForm.classList.toggle('show');
                if(searchForm.classList.contains('show')){
                    searchBtnIcon.classList.replace('bx-search', 'bx-x');
                } else {
                    searchBtnIcon.classList.replace('bx-x', 'bx-search');
                }
            }
        });

        window.addEventListener('resize', ()=>{
            if(window.innerWidth < 768){
                sideBar.classList.add('close');
            }else{
                sideBar.classList.remove('close'); 
            }
            if(window.innerWidth > 768){
                searchBtnIcon.classList.replace('bx-x', 'bx-search');
                searchForm.classList.remove('show');
            }
    });

    const toggler =  document.getElementById('admin-theme-toggle');
    toggler.addEventListener('change', function(){
        if(this.checked){
            document.body.classList.add('dark');
        }else{
            document.body.classList.remove('dark');
        }
    });
        

    }, []);

    const dispatch = useDispatch();

    const handleLogout=()=>{
        dispatch(logout());
        nav('/login');
    }

    return(
        <>
        <div className="admin-sidebar">
            <a href="#" className="admin-logo">
                <i className="bx bxs-bowl-hot"></i>
                <div className="admin-logo-name"><span>Chef </span>Hub</div>
            </a>
            <ul className="admin-side-menu">
                <li>
                    <a href="#">
                        <i className="bx bxs-dashboard"></i>DashBoard
                    </a>
                </li>
                <li>
                    <a href="/menu">
                        <i className="bx bxs-food-menu"></i>Menu
                    </a>
                </li>
                <li>
                    <a href="/track">
                    <i className="bx bx-network-chart"></i>LiveTrack
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bx-message-square-dots"></i>Tickets
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bx-group"></i>Users
                    </a>
                </li>
                <li>
                <a href="#">
                        <i className="bx bx-cog"></i>Settings
                    </a>
                </li>
            </ul>
            <ul className="admin-side-menu">
                <li>
                    <a onClick={handleLogout} className="admin-logout">
                        <i className="bx bx-log-out-circle"></i>
                        Logout
                    </a>
                </li>
            </ul>
        </div>
        <div className="admin-content">
            <nav>
                <i></i>
                <i className="bx bx-home-alt" onClick={()=>nav('/admin')}></i>
                <form action="#">
                    <div className="admin-input-form">
                        <input type="text" placeholder="Search..."/>
                        <button className="search-btn" type="submit"><i className="bx bx-search"></i></button>
                    </div>
                </form>
                <input type="checkbox" id="admin-theme-toggle" hidden/>
                <label htmlFor="admin-theme-toggle" className="admin-theme-toggle"></label>
                <a href="#" className="notif">
                    <i className="bx bx-bell"></i>
                    <span className="count">12</span>
                </a>
            </nav>
            <DashBoard/>


          
        </div>
        
        </>
    );
}

export default Panel;