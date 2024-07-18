import React from "react";
import PropTypes from "prop-types";
import styled from "./ProductDescription.module.scss";
import { useSelector } from "react-redux";

const ProductDescription = ({ valueData }) => {
    const { activeTab } = useSelector((state) => state.productDetails);
    if (valueData.length <= 0) {
        return;
    }
    return (
        <div
            className={[styled["product-desc__inner"], +activeTab == 0 ? styled["display-block"] : styled["display-none"]].join(" ")}>
            <div className={styled["product-desc__long-desc-list"]}>
                {valueData.mainDescription.map((item, index) => {
                    return <p className={styled["product-desc__long-desc-item"]} key={index}>{item}</p>;
                })}
            </div>
            <ul className={styled["product-desc__list"]}>
                {valueData.additionallyDesc.map((item, index) => {
                    return (
                        <li key={index} className={styled["product-desc__item"]}>
                            <h4 className={styled["product-desc__title"]}>{item.title}</h4>
                            <p className={styled["product-desc__short-desc"]}>{item.description}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

ProductDescription.propTypes = {
    valueData: PropTypes.object,
};

export default ProductDescription;
