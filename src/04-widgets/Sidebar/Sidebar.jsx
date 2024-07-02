import React from "react";
import Categories from "./components/Categories/Categories";
import styled from "./Sidebar.module.scss";
import PriceRange from "./components/PriceRange/PriceRange";
const Sidebar = () => {
    return (
        <aside className={styled["sidebar"]}>
            <Categories />
            <PriceRange />
            Side Sale IMG
        </aside>
    );
};

export default Sidebar;
