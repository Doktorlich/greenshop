import React from "react";
import PropTypes from "prop-types";

import styled from "./Tabs.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../../04-widgets/ProductDetails/provider/productDetails";
const Tabs = ({ children }) => {
    const { activeTab } = useSelector((state) => state.productDetails);
    const dispatch = useDispatch();
    // setActiveTab
    return (
        <div className={styled["tabs"]}>
            <ul className={styled["tabs__title-list"]}>
                <li
                    className={[styled["tabs__title-item"], +activeTab == 0 ? styled["tabs__title-item--active"] : ""].join(" ")}
                    onClick={() => {
                        dispatch(setActiveTab(0));
                    }}
                >
                    Product Description
                </li>
                <li
                    className={[styled["tabs__title-item"], +activeTab == 1 ? styled["tabs__title-item--active"] : ""].join(" ")}
                    onClick={() => {
                        dispatch(setActiveTab(1));
                    }}
                >
                    Reviews (19)
                </li>
            </ul>
            {children}
        </div>
    );
};

Tabs.propTypes = {
    children: PropTypes.node,
};

export default Tabs;
