

import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../Components/Pages/LoginPage";
import Page from "../Components/Pages/LandingPage";
// import MenuSection from "./Components/MenuSelection";
import OrderTrackPage from "../Components/Pages/OrderTrack";
import PaymentPage from "../Components/Pages/Cart";
// import CartPage from "./Components/AddToCart";
import Cart from "../Components/Pages/NewCartPage";
import Panel from "../Components/Pages/AdminPanel";
import AdminPage from "../Components/Pages/AdminLandingPage";

function RouteApp() {
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Page/>}/>
      {/* <Route path="/cart" element={<MenuSection/>}/> */}
      <Route path="/track" element={<OrderTrackPage/>}/>
      <Route path="/paymentgate" element={<PaymentPage/>}/>
      {/* <Route path="/addtocart" element={<CartPage/>}/> */}
      <Route path="/menu" element={<Cart/>}/>
      <Route path="/admin" element={<AdminPage/>}/>
      <Route path="/admin/panel" element={<Panel/>}/>
      
    </Routes>
  );
}

export default RouteApp;
