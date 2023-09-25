import React, { useEffect, useState } from "react";
import '../../Asserts/MenuSelection.css';
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
import Popup from "./AddFoodPopup";

const MenuSelection = () => {
  const [foodItems, setFoodItems] = useState(
    [
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
    
  ]);

  const [showPopup, setShowPopup] = useState(false);

  const handleAddFood = (food) => {
    setFoodItems([...foodItems, food]);
  }

  const handleMenuClick = (category) => {
    setActiveCategory(category);
  };
  const [activeCategory, setActiveCategory] = useState("All");

  return(
    <>
      <h3 className="dashboard-title-new">Foods</h3>
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
      {foodItems
        .filter(item => activeCategory === "All" || item.category === activeCategory || item.type === activeCategory)
        .map((item, index) => (
            <div className="dashboard-card" key={index}>
                <img src={item.image} alt="" className="card-image" />
                <div className="card-detail">
                <h4>{item.name}</h4>
                <p>{item.category}</p>
                <p>{item.description}</p>

                <p className="card-time"><span className="fas fa-clock"></span> {item.time}</p>
            </div>
          </div>
        ))}
        <div className="add-dashboard-card" onClick={() => setShowPopup(true)}>
          <div className="add-plus">
              <span>+</span>
              <p>Add Foods</p>
            </div>
        </div>
      </div>
      {showPopup && <Popup onClose={() => setShowPopup(false)} onAdd={handleAddFood} />}
    </>
  );
}

export default MenuSelection;
