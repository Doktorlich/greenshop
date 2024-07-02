import React from "react";
import "./styles/global.scss";

import Home from "../03-pages/Home/Home";
import Header from "../04-widgets/Header/Header";
import Card from "../07-shared/UI/Card/Card";
import Footer from "../04-widgets/Footer/Footer";

import { Routes, Route } from "react-router-dom";
function App() {
    return (
        <>
            <Card>
                <Header />
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="*" element={<div>Not found</div>} />
                </Routes>
                <Footer />
            </Card>
        </>
    );
}

export default App;
