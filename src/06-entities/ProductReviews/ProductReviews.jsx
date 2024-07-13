import React from "react";
import PropTypes from "prop-types";
import styled from "./ProductReviews.module.scss";
import { useSelector } from "react-redux";
const ProductReviews = () => {
    const { activeTab } = useSelector((state) => state.productDetails);
    return <div className={[styled["reviews"], +activeTab == 1 ? styled["display-block"] : styled["display-none"]].join(" ")}>Reviews</div>;
};

ProductReviews.propTypes = {};

export default ProductReviews;
