import React from "react";
import PropTypes from "prop-types";
import styled from "./ProductHover.module.scss";
import CartIcon from "../../07-shared/UI/Icon/CartIcon/CartIcon";
import HeartIcon from "../../07-shared/UI/Icon/HeartIcon/HeartIcon";
import SearchIcon from "../../07-shared/UI/Icon/SearchIcon/SearchIcon";
import Input from "../../07-shared/UI/elementsForm/Input/Input.jsx";
import { useInput } from "../../07-shared/lib/useInput.js";
import Label from "../../07-shared/UI/elementsForm/Label/Label.jsx";

const ProductHover = ({ includeValue, valueId, id }) => {
    const checkboxHearth = useInput(false);
    const checkboxCart = useInput(false);
    return (

        <div className={includeValue && valueId === id ? styled["hover-btns--hide"] : styled["hover-btns"]}>
            <ul className={styled["hover-btns__list"]}>
                <li className={styled["hover-btns__item"]}>
                    <Label className={styled["hover-btns__label"]}>

                        <Input type={"checkbox"}
                               checked={checkboxCart.valueChecked}
                               onClick={(e) => {
                                   checkboxCart.onClick(e);

                               }}
                        />
                        <CartIcon className={styled.hearth} />
                    </Label>

                </li>
                <li className={styled["hover-btns__item"]}>
                    <Label className={styled["hover-btns__label"]}>

                        <Input type={"checkbox"}
                               checked={checkboxHearth.valueChecked}
                               onClick={(e) => {
                                   checkboxHearth.onClick(e);

                               }}
                        />
                        <HeartIcon className={styled.hearth} />
                    </Label>

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
