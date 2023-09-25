import React, { useEffect, useState } from "react";
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
import cba from '../../Asserts/Images/cba.png';
import Sparkler from '../../Asserts/Images/Sparkler.png';
import lemonade from '../../Asserts/Images/cucmberlemoade.png';
import citrus from '../../Asserts/Images/CitrusVanillaSparkler.png';
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { foodItems } from "../Contents/Items";


const Cart=()=>{
    const [qty, setQty] = useState(1);  
    const [price, setPrice] = useState(1);
    const nav = useNavigate();
    const taxRate = 0.1;
    // const [foodItems, setFoodItems] = useState([]);
    // useEffect(()=>{
    //     setFoodItems([...foodItems]);
    // },[])
    const foodItems = [
        {
            id: 1,
            name: "Dosa",
            price: 40,
            description: "A thin crepe made from a fermented batter of rice and lentil.",
            time: "5-10 mins",
            category: "South Indian",
            type: "Veg",
            image: dosa
        },
        {
            id: 2,
            image: idly,
            name: "Idly",
            price: 20,
            description: "Steamed rice cakes made from a fermented batter of rice and lentil.",
            category: "South Indian",
            type: "Veg",
            time: "5-10 mins"
        },
        {
            id: 3,
            image: poori,
            name: "Poori",
            price: 20,
            description: "Deep-fried bread made from unleavened wheat flour dough.",
            category: "South Indian",
            type: "Veg",
            time: "5-10 mins"
        },
        {
            id: 4,
            image: vada,
            name: "Vada",
            price: 5,
            description: "Deep-fried lentil doughnuts, crispy on the outside and soft on the inside.",
            category: "South Indian",
            type: "Veg",
            time: "10-15 mins"
        },
        {
            id: 5,
            image: pongal,
            name: "Pongal",
            price: 35,
            description: "A comforting dish made from rice and lentils, tempered with spices and ghee.",
            category: "South Indian",
            type: "Veg",
            time: "15-20 mins"
        },
        {
            id: 6,
            image: mba,
            name: "Mutton Biryani",
            price: 300,
            description: "A fragrant rice dish cooked with spices, meat or vegetables, and saffron.",
            category: "South Indian",
            type: "Non-Veg",
            time: "30-40 mins"
        },
        {
            id: 7,
            image: lemonade,
            name: "Ginger Cucumber Lemonade",
            price: 70,
            description: "Zesty ginger, crisp cucumber, and tangy lemon combine for a refreshing, invigorating lemonade with a spicy kick",
            category: "Drinks",
            type: "Drinks",
            time: "10-15 mins"
        },
        {
            id: 8,
            image: Sparkler,
            name: "Ruby Citrus Sparkler",
            price: 45,
            description: "A Sparkler is a vibrant and effervescent drink, typically made with a combination of fruit juices, soda, and sparkling water for a refreshing and bubbly sensation.",
            time: "10-15 mins",
            category: "Drinks",
            type: "Drinks",
            time: "10-15 mins"
        },
        {
            id: 9,
            image: citrus,
            name: "CitrusVanillaSparkler",
            price: 55,
            description: "An effervescent blend of zesty citrus fruits and smooth vanilla, creating a delightful and refreshing sparkling beverage.",
            time: "10-15 mins",
            category: "Drinks",
            type: "Drinks",
            time: "10-15 mins"
        },
        {
            id: 10,
            image: cba,
            name: "Chicken Biryani",
            price: 200,
            description: "A fragrant rice dish cooked with spices, chicken, and saffron.",
            category: "South Indian",
            type: "Non-Veg",
            time: "30-40 mins"
        },
    ];

    const [cartItems, setCartItems] = useState([]);


    const [count,setCount] = useState(0);

    const handleCart = (item, action) => {
        const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
      
        let updatedCartItems;
      
        if (existingItemIndex !== -1) {
          updatedCartItems = [...cartItems];
          if (action === "increment") {
            updatedCartItems[existingItemIndex].quantity += 1;
          } else if (action === "decrement" && updatedCartItems[existingItemIndex].quantity > 0) {
            updatedCartItems[existingItemIndex].quantity -= 1;
          }
        } else {
          updatedCartItems = [...cartItems, { ...item, quantity: 1 }];
        }
      
        setCartItems(updatedCartItems);
        const newCount = updatedCartItems.reduce((total, item) => total + item.quantity, 0);
        setCount(newCount);
        
      };

      const handleRemoveItem = (itemId) => {
        const updatedCartItems = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCartItems);
        const newCount = updatedCartItems.reduce((total, item) => total + item.quantity, 0);
        setCount(newCount);
    };

    const handleClearCart=()=>{
        setCartItems([]);
        setCount(0);
    }

      
      
      
    
      const handleQuantityChange = (itemId, action) => {
        const updatedCartItems = cartItems.map((item) =>
          item.id === itemId
            ? { ...item, quantity: action === "increment" ? item.quantity + 1 : Math.max(item.quantity - 1, 0) }
            : item
        );
        setCartItems(updatedCartItems);
        const newCount = updatedCartItems.reduce((total, item) => total + item.quantity, 0);
        setCount(newCount);
      };

      const [activeCategory, setActiveCategory] = useState("All");

      

      const handleMenuClick = (category) => {
        setActiveCategory(category);
      };

    //   const filteredFoodItems = activeCategory === "All" ? foodItems : foodItems.filter(item => item.category === activeCategory);


   
    return(
        <>
        <input type="checkbox" name="" id="carticon" />
        <label for="carticon" className="label-cart">
            {/* <span className="bx bx-home"></span> */}
            <span className="fas fa-shopping-cart"></span>
            <span className="count">{count}</span>
        </label>

        <h3 className="logo"><span onClick={()=>nav('/home')}>Chef </span>Hub</h3>
         {/* <!--main dashboard--> */}
         <div className="dashboard">
            <div className="dashboard-banner">
                <img src={banner}></img>
                <div className="banner-promo">
                    <h1><span>50% OFF</span><br/>
                    Tasty Food <br/> On Your Hand</h1>
                </div>
            </div>
            <div className="user-search-form">
                <input type="text" placeholder="Search..."/>
                <button className="search-btn" type="submit"><i className="bx bx-search"></i></button>
            </div>
            {/* <h3 className="dashboard-title">Our Foods</h3> */}
            <div className="dashboard-menu">
            <a href="#" onClick={() => handleMenuClick("All")} className={activeCategory === "All" ? "setactive" : ""}>All</a>
            <a href="#" onClick={() => handleMenuClick("South Indian")} className={activeCategory === "South Indian" ? "setactive" : ""}>South Indian</a>
            <a href="#" onClick={() => handleMenuClick("North Indian")} className={activeCategory === "North Indian" ? "setactive" : ""}>North Indian</a>
            <a href="#" onClick={() => handleMenuClick("Non-Veg")} className={activeCategory === "Non-Veg" ? "setactive" : ""}>Non-Veg</a>
            <a href="#" onClick={() => handleMenuClick("Veg")} className={activeCategory === "Veg" ? "setactive" : ""}>Veg</a>
            {/* <a href="#" onClick={() => handleMenuClick("Special Items")} className={activeCategory === "Special Items" ? "setactive" : ""}>Special Items</a> */}
            <a href="#" onClick={() => handleMenuClick("Drinks")} className={activeCategory === "Drinks" ? "setactive" : ""}>Drinks</a>
            <a href="#" onClick={() => handleMenuClick("AddOn")} className={activeCategory === "AddOn" ? "setactive" : ""}>Extras</a>
            </div>
            <div className="dashboard-content">
            {foodItems.length>1 && foodItems 
                .filter(item => activeCategory === "All" || item.category === activeCategory || item.type === activeCategory)
                .map((item, index) => (
                    <div className="dashboard-card" key={index}>
                        <img src={item.image} alt="" className="card-image" />
                        <div className="card-detail">
                            <h4>{item.name}<span>Rs {item.price}</span></h4>
                            <p>{item.category}</p>
                            <p>{item.description}</p>
                            <button className="card-button" onClick={()=>handleCart(item, "increment")}>Add</button>
                            <p className="card-time"><span className="fas fa-clock"></span> {item.time}</p>
                        </div>
                    </div>
                ))}
            </div>
            
         </div>
         {/* <!---Order dashBoard----!> */}
         <div className="dashboard-order" id="order">
            <h3>Ordered Items</h3>
            <div className="order-wrapper">
            {cartItems.length > 0 && count > 0
                    ? cartItems
                        .filter(item => item.quantity > 0) 
                        .map((i, index) => (
                    <div className="order-card" key={index}>
                        
                        <img src={i.image} className="order-image" />
                        <div className="order-detail">

                        <p>{i.name}</p>
                        <p><span onClick={() => handleQuantityChange(i.id, "increment")}>+</span>
                        <input type="text" value={i.quantity} readOnly/>
                        <span onClick={() => handleQuantityChange(i.id, "decrement")}> -</span></p><a onClick={()=>handleRemoveItem(i.id)}>Remove</a> 
                        
                        </div>
                        <h4 className="order-price">Rs {i.quantity*i.price}</h4>
                    </div>
                    
                )):(
                    <div className="order-card">
                        <div className="order-detail">
                            <div className="empty-cart">
                                <p>Cart Empty</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <hr className="divider" />
            <div className="order-total">
                <p>SubTotal <span>Rs {cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)}</span></p>
                <p>Tax (10%) <span>Rs {cartItems.reduce((total, item) => total + (item.price * item.quantity), 0) * taxRate}</span></p>
                <div className="order-promo">
                    {(cartItems.reduce((total, item) => total + (item.price * item.quantity), 0))==0 ?(
                        <>
                        <input type="text" className="input-promo"  placeholder="Apply Voucher" disabled/>
                        <button className="button-promo" disabled>Find Promo</button>
                        </>
                    ):(
                        <>
                        <input type="text" className="input-promo"  placeholder="Apply Voucher"/>
                        <button className="button-promo">Find Promo</button>
                        </>
                    )}
                    
                </div>
                <hr className="divider" />
                <p>Total <span>Rs {cartItems.reduce((total, item) => total + (item.price * item.quantity), 0) + (cartItems.reduce((total, item) => total + (item.price * item.quantity), 0) * taxRate)}</span></p>
            </div>
            {(cartItems.reduce((total, item) => total + (item.price * item.quantity), 0) + (cartItems.reduce((total, item) => total + (item.price * item.quantity), 0) * taxRate))==0 ? (
                <button className="order-checkout" disabled>CheckOut</button>
            ):(
                <>
                <button className="order-checkout" onClick={()=>nav('/paymentgate')}>CheckOut</button>
                <button className="order-clearcart" onClick={handleClearCart}>Clear Cart</button>
                </>
            )};
            
         </div>
         <footer>
            <Footer/>
         </footer>
        
        </>
    );

}

export default Cart;