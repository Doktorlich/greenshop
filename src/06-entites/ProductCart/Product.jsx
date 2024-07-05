import React from "react";
import PropTypes from "prop-types";

import styled from "./Product.module.scss";

const Product = ({ prise, title, urlImagePreview, discount }) => {
    return (
        <li className={styled["menu__item"]}>
            {+discount > 0 ? <span className={styled["menu__discount"]}>{discount}% OFF</span> : ""}
            <div className={styled["menu__wrapper-image"]}>
                <img className={styled["menu__image"]} src={urlImagePreview} width={"250px"} height={"250px"} />
            </div>
            <h3 className={styled["menu__title"]}>{title}</h3>
            <div className={styled["menu__price"]}>
                <p className={styled["menu__price-real"]}>${+discount > 0 ? (prise - prise * (discount / 100)).toFixed(2) : prise.toFixed(2)}</p>
                {+discount > 0 ? <p className={styled["menu__price-discount"]}>${prise.toFixed(2)}</p> : ""}
            </div>
        </li>
    );
};

Product.propTypes = {
    prise: PropTypes.number,
    discount: PropTypes.number,
    title: PropTypes.string,
    urlImagePreview: PropTypes.string,
};

export default Product;
