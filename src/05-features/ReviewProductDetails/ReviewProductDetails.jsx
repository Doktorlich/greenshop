import React from "react";
import PropTypes from "prop-types";
import styled from "./ReviewProductDetails.module.scss";
import StarRating from "../../07-shared/component/StarRating/StarRating";
const ReviewProductDetails = ({ valueData, classNameTransfer }) => {
    return (
        <div className={[styled["product-stars"], classNameTransfer].join(" ")}>
            <div className={styled["menu__price"]}>
                <p className={styled["menu__price-real"]}>${+valueData.discount > 0 ? (valueData.prise - valueData.prise * (+valueData.discount / 100)).toFixed(2) : valueData.prise.toFixed(2)}</p>
                {+valueData.discount > 0 ? <p className={styled["menu__price-discount"]}>${valueData.prise.toFixed(2)}</p> : ""}
            </div>
            <div className={styled["product-stars__block-count-review"]}>
                <StarRating starValue={valueData.rating}></StarRating>
                <p className={styled["product-stars__count-review"]}>
                    <span>19</span> Customer Review
                </p>
            </div>
        </div>
    );
};

ReviewProductDetails.propTypes = {
    valueData: PropTypes.object,
    classNameTransfer: PropTypes.string,
};

export default ReviewProductDetails;
