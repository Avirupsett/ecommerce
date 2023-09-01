import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegistrationPage";
import DashBoard from '../pages/Dashboard/Main';
import Products from "../pages/Dashboard/pages/Products";


const PageRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
       
     
        <Route path="/about" element={<About />}/>
        <Route path="login" element={<LoginPage />} />
     
        <Route path="/register" element={<RegisterPage />} />
        <Route to="/dashboard" element={<DashBoard/>} />
        <Route to="/product" element={<Products/>} />
  
       
      </Routes>
    </>
  );
};

export default PageRoute;
