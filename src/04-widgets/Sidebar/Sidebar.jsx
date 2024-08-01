import React from "react";
import Categories from "./components/Categories/Categories";
import styled from "./Sidebar.module.scss";
import PriceRange from "./components/PriceRange/PriceRange";
import { useSelector } from "react-redux";
import { setRangeScaleFirst, setRangeScaleSecond, setValueId, setValueSize } from "./provider/sidebarSlice";
import Size from "./components/Size/Size";
import PreviewSale from "./components/PreviewSale/PreviewSale";
import Skeleton from "../../07-shared/UI/Skeleton/Skeleton.jsx";

const Sidebar = () => {
    const { productData, status } = useSelector((state) => state.apiProduct);
    const { rangeScaleFirst, rangeScaleSecond, valueId, valueSize } = useSelector((state) => state.sidebar);

    return (


        <aside className={styled["sidebar"]}>
            {status !== "succeeded" ?
                <Skeleton>
                    <div className={styled["sidebar__skeleton"]}>

                    </div>
                </Skeleton> :
                <>
                    <Categories valueId={valueId} setValueId={setValueId} productData={productData} />
                    <PriceRange rangeScaleFirst={rangeScaleFirst} rangeScaleSecond={rangeScaleSecond}
                                setRangeScaleFirst={setRangeScaleFirst} setRangeScaleSecond={setRangeScaleSecond} />
                    <Size valueSize={valueSize} setValueSize={setValueSize} />
                    <PreviewSale />
                </>}
        </aside>


    );
};

export default Sidebar;
