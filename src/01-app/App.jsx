import React from "react";
import "./styles/global.scss";

import Home from "../03-pages/Home/Home";
// import Header from "../04-widgets/Header/Header";
import Card from "../07-shared/UI/Card/Card";
import Footer from "../04-widgets/Footer/Footer";

import { Routes, Route, Navigate } from "react-router-dom";
import OutletParent from "../02-processes/Outlet/OutletParent";
import UserAccount from "../03-pages/Account/UserAccount";
import ProductView from "../03-pages/ProductViev/ProductView";
import ProductCart from "./../03-pages/ProductCart/ProductCart";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<OutletParent />}>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/shop/:id" element={<ProductView />} />

                    <Route path="/shop/cart" element={<ProductCart />} />
                    {/* <Route path="/product-checkout" element={<ProductCheckout />} /> */}
                    <Route path="/account" element={<UserAccount />} />

                    <Route path="*" element={<div>Not found</div>} />
                </Route>
            </Routes>
            <Card>
                <Footer />
            </Card>
        </>
    );
}

export default App;
