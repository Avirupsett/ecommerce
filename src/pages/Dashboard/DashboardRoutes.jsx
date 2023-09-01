import React from "react";
import { Routes, Route } from "react-router-dom";
import DashBoard from './Main';


const DashboardRoutes = () =>{
    return(
        <>
            <Routes>
                <Route to="/dashboard" element={<DashBoard/>} />
                <Route to="/" element={<DashBoard/>} />
            </Routes>
        </>
    )
}

export default DashboardRoutes;