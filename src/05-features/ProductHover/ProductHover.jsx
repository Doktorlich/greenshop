import React from "react";
import PropTypes from "prop-types";
import styled from "./ProductHover.module.scss";
import CartIcon from "../../07-shared/UI/Icon/CartIcon/CartIcon";
import HeartIcon from "../../07-shared/UI/Icon/HeartIcon/HeartIcon";
import SearchIcon from "../../07-shared/UI/Icon/SearchIcon/SearchIcon";

const ProductHover = ({ includeValue, valueId, id }) => {
    return (
        <div className={includeValue && valueId == id ? styled["hover-btns--hide"] : styled["hover-btns"]}>
            <ul className={styled["hover-btns__list"]}>
                <li className={styled["hover-btns__item"]}>
                    <CartIcon />
                </li>
                <li className={styled["hover-btns__item"]}>
                    <HeartIcon />
                </li>
                <li className={styled["hover-btns__item"]}>
                    <SearchIcon />
                </li>
            </ul>
        </div>
    );
};

ProductHover.propTypes = {
    includeValue: PropTypes.bool,
    valueId: PropTypes.string,
    id: PropTypes.string,
};

export default ProductHover;
