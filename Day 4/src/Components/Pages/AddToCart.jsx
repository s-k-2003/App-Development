import React, { useState,useRef } from "react";
import { useEffect } from "react";
import '../Asserts/AddToCart.css';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



const CartPage = () => {
  const [value, setValue] = useState(1);
  const [subtotal, setSubtotal] = useState(0);
  const [items, setItems] = useState([]);

  const [tax, setTax] = useState(0);

  const nav = useNavigate();



useEffect(() => {
    const data = JSON.parse(localStorage.getItem('cartItems'));
    if (Array.isArray(data)) { // Check if data is an array
      setItems(data);
  
      const subTotal = data.reduce((acc, item) => acc + item.price, 0);
      setSubtotal(subTotal);
      const gst = data.length * 10;
      setTax(gst);

     
    }

}, []);


const handleCheckout=()=>{
    localStorage.setItem('total',(subtotal+tax));
    nav('/paymentgate');
}


  


  

  const handleDelete = (item) => {
    const updatedItems = items.filter((i) => i !== item);
    setItems(updatedItems);
  
    const updatedData = JSON.stringify(updatedItems);
    localStorage.setItem('cartItems', updatedData);
    // localStorage.setItem('count',updatedItems.length);
  };

  //Navbar 

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

    //Modal 

    const Modal = ({ closeModal }) => {
      
  
  
  
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="cross-icon" onClick={closeModal}>
              <span>&times;</span>
          </div>
          <ul>
          <li><a href="/">HOME</a></li>
          <li><a href="#">MENU</a></li>
          </ul>
        </div>
      </div>
    );
  }

  

  return (
    <>
     <div className="navbar" ref={navRef} style={{backgroundColor: "black"}}>
         <ul className={isExpanded ? 'expanded' : ''}>
            <li><a href="/">HOME</a></li>
            <li><a href="menu">MENU</a></li>
          </ul>
          <button className="nav-toggle" onClick={toggleModal} ref={toggleButtonRef}>
          <FontAwesomeIcon icon={faBars} style={{ fontSize: '24px' }} />
          </button>
       </div>
       {showModal && <Modal closeModal={toggleModal} />}
       <br/><br/><br/>
      <div className="small-container cart-page">
          <table>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
          {items.map((item, index) => (
              <tr key={index}>
              <td>
                <div className="cart-info">
                  <img src={item.image} alt="" />
                  <div>
                    <p>{item.name}</p>
                    <small>Price : Rs {item.price}</small>
                    <br />
                    <a href="addtocart" onClick={()=>handleDelete(item)}>Remove</a>
                  </div>
                </div>
              </td>
              <td>
                <input
                  type="number"
                  value={value}
                  onChange={(e)=>setValue(e.target.value)}
                  />
              </td>
              <td>Rs {item.price * value}</td>
            </tr>
          ))}
        </table>
        {items.length>0?(

        <div className="total-price">
          <table>
            <tr>
              <td>Sub Total</td>
              <td>Rs {subtotal}</td>
            </tr>
            <tr>
              <td>GST</td>
              <td>Rs {tax}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>Rs {subtotal + tax}</td>
            </tr>
                <div className="checkout" onClick={handleCheckout}>CheckOut</div>
          </table>
        </div>
      ):(
        <div className="cart-empty">
          <h1>Your Cart is Empty</h1>
        </div>
      )}
      </div>
      </>
     
  );
}

export default CartPage;
