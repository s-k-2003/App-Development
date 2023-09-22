import React, { useEffect, useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Asserts/MenuSelection.css';
import dosa from '../Images/dosa.png';
import idly from '../Images/idly.png';
import poori from '../Images/poori.png';
import vada from '../Images/vada.jpeg';
import pongal from '../Images/Pongal.jpeg';
import mba from '../Images/MBA.jpeg';
import { useNavigate } from "react-router-dom";

const MenuSelection = () => {
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);
  const nav = useNavigate();

 
  

  const handleCount = (price, name, type, image) => {
    const newItem = {
      price: price,
      name: name,
      type: type,
      image: image
    };

    setCartItems([...cartItems, newItem]);
    setCount(prevCount => prevCount + 1);

    console.log(cartItems.length);
    
  }

  
  


  const handlecart = () => {
    localStorage.setItem('count', count);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    nav('/addtocart');
  }


  useEffect(() => {
    // Retrieve cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
      setCartItems(storedCartItems);
      setCount(storedCartItems.length);
    }

  }, []);



  // useEffect(()=>{
  //   const count = localStorage.getItem('count');
  //   if(count>0){
  //     setNewcount(count);
  //   }else{
  //     setNewcount(cartItems.length);
  //   }
  // })

  // let checkcart = useState([]);
  // checkcart = localStorage.getItem('cartItems');
  // if(checkcart.length>0){
  //   console.log(checkcart);
  // }

  const foodItems = [
    {
      name: "Dosa",
      price: 40.00,
      type: "South Indian",
      description: "A thin crepe made from a fermented batter of rice and lentil.",
      image: dosa
    },
    {
      name: "Idly",
      price: 20.00,
      type: "South Indian",
      description: " A popular South Indian breakfast dish made from fermented rice and lentil batter.",
      image: idly
    },
    {
      name: "Poori",
      price: 20.00,
      type: "South Indian",
      description: "Fluffy Poori",
      image: poori
    },
    {
      name: "Vada",
      price: 5.00,
      type: "South Indian",
      description: "A savory doughnut made from lentil batter.",
      image: vada
    },
    {
      name: "Pongal",
      price: 30.00,
      type: "South Indian",
      description: "A rice dish cooked with lentils and spices.",
      image: pongal
    },
    {
      name: "Mutton Biryani",
      price: 300.00,
      type: "South Indian",
      description: "A dish made with rice, mutton, spices, and herbs.",
      image: mba
    }
  ];

  return (
    <div className="menu">
      <div className="heading">
        <h1> Our Menu </h1>
        <a href='/' className="home">Home</a>
        <div className="cart-icon" onClick={handlecart}>
          <i className="fas fa-shopping-cart"></i>
          <p>({cartItems.length})</p>
        </div>
      </div>

      {foodItems.map((item, index) => (
        <div className="food-items" key={index}>
          <img src={item.image} alt={item.name} />
          <div className="details">
            <div className="details-sub" id="south">
              <h3>{item.name}</h3>
              <h3 className='price'>Rs{item.price}</h3>
              <h3 className="">{item.type}</h3>
            </div>
            <p>{item.description}</p>
            <button onClick={() => handleCount(item.price, item.name, item.type, item.image)}>Add</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MenuSelection;
