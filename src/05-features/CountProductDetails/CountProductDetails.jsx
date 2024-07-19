import React from "react";
import PropTypes from "prop-types";
import styled from "./CountProductDetails.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSizeParamsId } from "../../04-widgets/ProductDetails/provider/productDetails";
import Button from "../../07-shared/UI/Button/Button";
import HeartIcon from "../../07-shared/UI/Icon/HeartIcon/HeartIcon";
//TODO-2 Переделать кнопку "Понравится" в чекбокс
const CountProductDetails = ({ valueData, classNameTransfer }) => {
    const { sizeParamsId } = useSelector((state) => state.productDetails);
    const testHandler = (index) => {
        console.log(dispatch(setSizeParamsId(index)));
        // console.log(index);
    };
    const dispatch = useDispatch();
    return (
        <div className={[styled["count-product-details"], classNameTransfer].join(" ")}>
            <p className={styled["count-product-details__title"]}>Size:</p>
            <ul className={styled["count-product-details__list"]}>
                {valueData.size.map((item, index) => {
                    return (
                        <li
                            key={index}
                            className={[styled["count-product-details__item"], +sizeParamsId === +index ? styled["count-product-details__item--active"] : ""].join(" ")}
                            onClick={() => {
                                testHandler(index);
                            }}
                        >
                            {item}
                        </li>
                    );
                })}
            </ul>
            <div className={styled["cart-count"]}>
                <div className={styled["cart-count__counting"]}>
                    <Button classNameProp={styled["cart-count__inc-dec"]}>-</Button>
                    <span className={styled["cart-count__number"]}>1</span>
                    <Button classNameProp={styled["cart-count__inc-dec"]}>+</Button>
                </div>
                <div className={styled["cart-count__button-list"]}>
                    <Button classNameProp={styled["cart-count__btn-buy"]}>buy now</Button>
                    <Button classNameProp={styled["cart-count__btn-add"]}>add to cart</Button>
                    <Button classNameProp={styled["cart-count__btn-heart"]}>
                        <HeartIcon className={styled["cart-count__heart-icon"]}></HeartIcon>
                    </Button>
                </div>
            </div>
        </div>
    );
};

CountProductDetails.propTypes = {
    valueData: PropTypes.object.isRequired,
    classNameTransfer: PropTypes.string,
};

export default CountProductDetails;
