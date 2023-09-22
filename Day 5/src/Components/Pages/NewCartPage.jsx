import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'boxicons/css/boxicons.min.css';
import '../../Asserts/NewCartPage.css';
// import banner from '../Images/banner.webp';
import banner from '../../Asserts/Images/bannerImg.jpeg';
import dosa from '../../Asserts/Images/dosa.png';
import idly from '../../Asserts/Images/idly.png';
import poori from '../../Asserts/Images/poori.png';
import vada from '../../Asserts/Images/vada.jpeg';
import pongal from '../../Asserts/Images/Pongal.jpeg';
import mba from '../../Asserts/Images/MBA.jpeg';
import { useNavigate } from "react-router-dom";

const Cart=()=>{
    const nav = useNavigate();
    return(
        <>
        <input type="checkbox" name="" id="carticon" />
        <label for="carticon" className="label-cart"><span className="fas fa-shopping-cart"></span></label>

        <h3 className="logo"><span>Chef </span>Hub</h3>
         <div className="sidebar">
            <div className="sidebar-menu">
                <span className="bx bx-search"></span>
                <a href="#">Search</a>
            </div>
            <div className="sidebar-menu">
                <span className="fas fa-home" onClick={()=>nav('/admin')}></span>
                <a>Home</a>
            </div>
            <div className="sidebar-menu">
                <span className="fas fa-heart"></span>
                <a href="#">Favs</a>
            </div>
            <div className="sidebar-menu">
                <span className="bx bxs-dashboard" onClick={()=>nav('/admin/panel')}></span>
                <a>Admin</a>
            </div>
            <div className="sidebar-menu">
                <span className="fas fa-sliders-h"></span>
                <a href="#">Setting</a>
            </div>
         </div>
         {/* <!--main dashboard--> */}
         <div className="dashboard">
            <div className="dashboard-banner">
                <img src={banner}></img>
                <div className="banner-promo">
                    <h1><span>50% OFF</span><br/>
                    Tasty Food <br/> On Your Hand</h1>
                </div>
            </div>
            <h3 className="dashboard-title">Our Foods</h3>
            <div className="dashboard-menu">
                <a href="#">Most Favourites</a>
                <a href="#">Best Seller</a>
                <a href="#">Near Me</a>
                <a href="#">Promotion</a>
                <a href="#">Top Rated</a>
                <a href="#">All</a>
            </div>
            <div className="dashboard-content">
                <div className="dashboard-card">
                    <img src={dosa} alt="" className="card-image" />
                    <div className="card-detail">
                        <h4>Dosa<span>Rs 40</span></h4>
                        <p>A thin crepe made from a fermented batter of rice and lentil.</p>
                        <button className="card-button">Add</button>
                        <p className="card-time"><span className="fas fa-clock"></span> 5-10 mins</p>
                    </div>
                </div>

                <div className="dashboard-card">
                    <img src={idly} alt="" className="card-image" />
                    <div className="card-detail">
                        <h4>Idly<span>Rs 20</span></h4>
                        <p> A popular South Indian breakfast dish made from fermented rice and lentil batter.</p>
                        <button className="card-button">Add</button>
                        <p className="card-time"><span className="fas fa-clock"></span> 5-10 mins</p>
                    </div>
                </div>

                <div className="dashboard-card">
                    <img src={poori} alt="" className="card-image" />
                    <div className="card-detail">
                        <h4>Poori<span>Rs 20</span></h4>
                        <p> Poori is a deep-fried unleavened bread made from whole wheat flour.</p>
                        <button className="card-button">Add</button>
                        <p className="card-time"><span className="fas fa-clock"></span> 5-10 mins</p>
                    </div>
                </div>

                <div className="dashboard-card">
                    <img src={vada} alt="" className="card-image" />
                    <div className="card-detail">
                        <h4>Vada<span>Rs 5</span></h4>
                        <p> A savory doughnut made from lentil batter.</p>
                        <button className="card-button">Add</button>
                        <p className="card-time"><span className="fas fa-clock"></span> 5-10 mins</p>
                    </div>
                </div>

                <div className="dashboard-card">
                    <img src={pongal} alt="" className="card-image" />
                    <div className="card-detail">
                        <h4>Pongal<span>Rs 30</span></h4>
                        <p> A rice dish cooked with lentils and spices.</p>
                        <button className="card-button">Add</button>
                        <p className="card-time"><span className="fas fa-clock"></span> 10-15 mins</p>
                    </div>
                </div>

                <div className="dashboard-card">
                    <img src={mba} alt="" className="card-image" />
                    <div className="card-detail">
                        <h4>Mutton Biryani<span>Rs 300</span></h4>
                        <p> A dish made with rice, mutton, spices, and herbs.</p>
                        <button className="card-button">Add</button>
                        <p className="card-time"><span className="fas fa-clock"></span> 10-20 mins</p>
                    </div>
                </div>
            </div>
         </div>
         {/* <!---Order dashBoard----!> */}
         <div className="dashboard-order" id="order">
            <h3>Ordered Items</h3>
            <div className="order-wrapper">
                <div className="order-card">
                    <img src={mba} alt="" className="order-image" />
                    <div className="order-detail">
                        <p> A dish made with rice, mutton, spices, and herbs.</p>
                        <i className="fas fa-times"></i> <input type="text"/>
                    </div>
                    <h4 className="order-price">Rs 300</h4>
                </div>
                <div className="order-card">
                    <img src={dosa} alt="" className="order-image" />
                    <div className="order-detail">
                        <p> A thin crepe made from a fermented batter of rice and lentil.</p>
                        <i className="fas fa-times"></i> <input type="text" />
                    </div>
                    <h4 className="order-price">Rs 40</h4>
                </div>
            </div>
            <hr className="divider" />
            <div className="order-total">
                <p>SubTotal <span>Rs 340</span></p>
                <p>Tax (10%) <span>Rs 34</span></p>
                <div className="order-promo">
                    <input type="text" className="input-promo"  placeholder="Apply Voucher"/>
                    <button className="button-promo">Find Promo</button>
                </div>
                <hr className="divider" />
                <p>Total <span>Rs 384</span></p>
            </div>
            <button className="order-checkout" onClick={()=>nav('/paymentgate')}>CheckOut</button>
         </div>
        </>
    );

}

export default Cart;