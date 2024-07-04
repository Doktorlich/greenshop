import React from "react";
import Categories from "./components/Categories/Categories";
import styled from "./Sidebar.module.scss";
import PriceRange from "./components/PriceRange/PriceRange";
import { useSelector } from "react-redux";
import { setRangeScaleFirst, setRangeScaleSecond, setValueId, setValueSize } from "./features/sidebarSlice";
import Size from "./components/Size/Size";
const Sidebar = () => {
    const { rangeScaleFirst, rangeScaleSecond, valueId, valueSize } = useSelector((state) => state.sidebar);

    return (
        <aside className={styled["sidebar"]}>
            <Categories valueId={valueId} setValueId={setValueId} />
            <PriceRange rangeScaleFirst={rangeScaleFirst} rangeScaleSecond={rangeScaleSecond} setRangeScaleFirst={setRangeScaleFirst} setRangeScaleSecond={setRangeScaleSecond} />
            <Size valueSize={valueSize} setValueSize={setValueSize} />
            Sale IMG
        </aside>
    );
};

export default Sidebar;
