import React from "react";
import Categories from "./components/Categories/Categories";
import styled from "./Sidebar.module.scss";
import PriceRange from "./components/PriceRange/PriceRange";
import { useSelector } from "react-redux";
import { setRangeScaleFirst, setRangeScaleSecond } from "./features/sidebarSlice";
const Sidebar = () => {
    const { rangeScaleFirst, rangeScaleSecond } = useSelector((state) => state.sidebar);

    return (
        <aside className={styled["sidebar"]}>
            <Categories />
            <PriceRange rangeScaleFirst={rangeScaleFirst} rangeScaleSecond={rangeScaleSecond} setRangeScaleFirst={setRangeScaleFirst} setRangeScaleSecond={setRangeScaleSecond} />
            Side Sale IMG
        </aside>
    );
};

export default Sidebar;
