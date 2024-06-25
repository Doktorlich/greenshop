import React from "react";
import "./styles/global.scss";

import Home from "../03-pages/Home/Home";
import Header from "../04-widgets/Header/Header";
import Card from "../07-shared/UI/Card/Card";
function App() {
    return (
        <Card>
            <Header />
            <Home />
        </Card>
    );
}

export default App;
