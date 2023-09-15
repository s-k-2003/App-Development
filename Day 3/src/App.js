

import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./Components/LoginPage";

function RouteApp() {
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  );
}

export default RouteApp;
