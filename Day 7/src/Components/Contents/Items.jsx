import React from "react";

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
const Foods=()=>{
    
}
export { foodItems };
export default Foods;