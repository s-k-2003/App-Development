

import React from "react";
import { Routes, Route} from "react-router-dom";

import Login from "../Components/Pages/LoginPage";
import Page from "../Components/Pages/LandingPage";

import OrderTrackPage from "../Components/Pages/OrderTrack";
import PaymentPage from "../Components/Pages/Cart";

import Cart from "../Components/Pages/NewCartPage";
import Panel from "../Components/Pages/AdminPanel";
import AdminPage from "../Components/Pages/AdminLandingPage";
import PrivacyPolicy from "../Components/Pages/Privacy";
import PinInput from "../Components/Pages/Pin";
import About from "../Components/Pages/AboutUs";
import Profile from "../Components/Pages/ProfileCard";
import Waiter from "../Components/Pages/WaiterSelection";
import Contact from "../Components/Pages/ContactUs";
import Terms from "../Components/Pages/T&C";
import WaiterLogin from "../Components/Pages/WaiterLogin";
import FAQ from "../Components/Pages/FAQ";
import Demo from "../Components/Pages/Democard";

function RouteApp() {
  return (
    <Routes>
      <Route path="/login/waiter" element={<WaiterLogin/>}/>
      <Route path="/login/admin" element={<Login/>}/>
      <Route path="/" element={<Page/>}/>
      <Route path="/track" element={<OrderTrackPage/>}/>
      <Route path="/paymentgate" element={<PaymentPage/>}/>
      <Route path="/menu" element={<Cart/>}/>
      <Route path="/admin" element={<AdminPage/>}/>
      <Route path="/admin/panel" element={<Panel/>}/>
      <Route path="/privacy" element={<PrivacyPolicy/>}/>
      <Route path="/pin" element={<PinInput/>}/>
      <Route path="/aboutus" element={<About/>}/>
      <Route path="/home" element={<Profile/>}/>
      <Route path="/waiter" element={<Waiter/>}/>
      <Route path="/terms" element={<Terms/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/faq" element={<FAQ/>}/>
      <Route path="/democard" element={<Demo/>}/>
      
    </Routes>
  );
}

export default RouteApp;
