import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "./StarRating.module.scss";

import Star from "../../UI/Icon/Star/Star";

import { useDispatch, useSelector } from "react-redux";
import { setStarCurrent } from "../../../04-widgets/ProductDetails/provider/productDetails";
const StarRating = ({ starValue }) => {
    const stars = Array(5).fill(0);
   
    const { starCurrent } = useSelector((state) => state.productDetails);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setStarCurrent(+starValue));
    }, []);

    return (
        <ul className={styled["stars__list"]}>
            {stars.map((_, index) => {
                return (
                    <li key={index} className={styled["stars__item"]} style={index <= starCurrent ? { color: "#FFAC0C" } : { color: "#c4c4c4" }}>
                        <Star className={styled["stars__image"]}></Star>
                    </li>
                );
            })}
        </ul>
    );
};

StarRating.propTypes = {
    starValue: PropTypes.number,
};

export default StarRating;
