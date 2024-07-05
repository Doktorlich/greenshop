import React from "react";
// import Slider from "../../04-widgets/Slider/Slider";
import Sidebar from "../../04-widgets/Sidebar/Sidebar";
import "./Home.scss";
import Sorting from "../../04-widgets/Sorting/Sorting";
import Goods from "../../04-widgets/Goods/Goods";

const Home = () => {
    return (
        <main className="main">
            <section className="section-main">
                {/* <Slider></Slider> */}
                {/* ! прописать логику присвоения класса для sidebar*/}
                <div className="sidebar-component">
                    <Sidebar className="sidebar" />
                </div>
                <div className="sorting-component">
                    <Sorting />
                    <Goods />
                </div>
                {/* <Products></Products> */}
            </section>
        </main>
    );
};

export default Home;
