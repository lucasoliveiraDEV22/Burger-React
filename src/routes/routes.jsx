import React from "react";
import { Switch, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Orders from "../pages/Orders";

function Router(){
    return (
    <Switch>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pedidos" element={<Orders />} />
        </Routes>
    </Switch>
    )
}

export default Router;