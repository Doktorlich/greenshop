import React from "react";

import Sidebar from "../../04-widgets/Sidebar/Sidebar";
import "./Home.scss";
import Sorting from "../../04-widgets/Sorting/Sorting";
import Goods from "../../04-widgets/Goods/Goods";
import BlogPosts from "../../04-widgets/BlogPosts/BlogPosts";
import ArticleCards from "../../04-widgets/ArticleCards/ArticleCards";
import Slider from "../../04-widgets/Slider/Slider";

const Home = () => {
    return (
        <main className="main">
            <section className="section-slider">
                <Slider />
            </section>
            <section className="section-main" id="section-main">
                {/* ! прописать логику присвоения класса для sidebar*/}
                <div className="sidebar-component">
                    <Sidebar className="sidebar" />
                </div>
                <div className="sorting-component">
                    <Sorting />
                    <Goods />
                </div>
            </section>
            <section className="section-article-card">
                <ArticleCards />
            </section>
            <section className="section-blog">
                <BlogPosts />
            </section>
        </main>
    );
};

export default Home;
