import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Orders from "../pages/Orders";

function Router(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pedidos" element={<Orders />} />
        </Routes>
    )
}

export default Router;