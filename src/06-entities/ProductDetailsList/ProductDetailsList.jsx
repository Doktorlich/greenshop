import React from "react";
import PropTypes from "prop-types";
import styled from "./ProductDetailsList.module.scss";
import { iconSocialMedia } from "./data/iconSocialMedia.js";
import { Link } from "react-router-dom";

const ProductDetailsList = ({ valueData, children }) => {
    const tags = valueData.tags.join(", ");

    return (
        <div className={styled["section-details__parameters"]}>
            <h3 className={styled["section-details__title"]}>{valueData.title}</h3>
            {/* ---------------------------- */}
            {children}
            <div className={styled["section-details__short-description-block"]}>
                <p className={styled["section-details__subtitle"]}>Short Description:</p>
                <p className={styled["section-details__text"]}>{valueData.mainDescription}</p>
            </div>
            <p className={styled["section-details__element"]}>
                SKU: <span>{valueData.sku}</span>
            </p>
            <p className={styled["section-details__element"]}>
                Categories: <span>{valueData.categories}</span>
            </p>
            <p className={styled["section-details__element"]}>
                Tags: <span>{tags}</span>
            </p>
            <div className={styled["section-details__menu"]}>
                <p className={styled["section-details__subtitle"]}>Share this products:</p>
                <ul className={styled["section-details__list"]}>
                    {iconSocialMedia.map((item, index) => {
                        return (
                            <li key={index} className={styled["section-details__item"]}>
                                <Link to="" className={styled["section-details__link"]}>
                                    <img className={styled["section-details__icon"]} src={`${item}`} alt="" />
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

ProductDetailsList.propTypes = {
    valueData: PropTypes.object.isRequired,
    children: PropTypes.node,
};

export default ProductDetailsList;
