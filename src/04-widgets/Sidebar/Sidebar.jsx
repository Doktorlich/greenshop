import React from "react";
import Categories from "./components/Categories/Categories";
import styled from "./Sidebar.module.scss";
import PriceRange from "./components/PriceRange/PriceRange";
import { useSelector } from "react-redux";
import { setRangeScaleFirst, setRangeScaleSecond, setValueId } from "./features/sidebarSlice";
const Sidebar = () => {
    const { rangeScaleFirst, rangeScaleSecond, valueId } = useSelector((state) => state.sidebar);

    return (
        <aside className={styled["sidebar"]}>
            <Categories setValueId={setValueId} valueId={valueId} />
            <PriceRange rangeScaleFirst={rangeScaleFirst} rangeScaleSecond={rangeScaleSecond} setRangeScaleFirst={setRangeScaleFirst} setRangeScaleSecond={setRangeScaleSecond} />
            Side Sale IMG
        </aside>
    );
};

export default Sidebar;
