import React from "react";
import PropTypes from "prop-types";
import styled from "./CountProductDetails.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSizeParamsId } from "../../04-widgets/ProductDetails/provider/productDetails";

const CountProductDetails = ({ valueData }) => {
    const { sizeParamsId } = useSelector((state) => state.productDetails);
    const testHandler = (index) => {
          console.log( dispatch(setSizeParamsId(index)));
        // console.log(index);
    };
    const dispatch = useDispatch();
    return (
        <div className={styled["count-product-details"]}>
            <p className={styled["count-product-details__title"]}>Size:</p>
            <ul className={styled["count-product-details__list"]}>
                {valueData.size.map((item, index) => {
                    return (
                        <li
                            key={index}
                            className={[styled["count-product-details__item"], +sizeParamsId == +index ? styled["count-product-details__item--active"] : ""].join(" ")}
                            onClick={() => {
                                testHandler(index);
                            }}
                        >
                            {item}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

CountProductDetails.propTypes = {
    valueData: PropTypes.object.isRequired,
};

export default CountProductDetails;
