import React from "react";
import styled from "./ProductDetails..module.scss";
import { useSelector } from "react-redux";
import ProductImageDetails from "../../06-entities/ProductImageDetails/ProductImageDetails";
import ProductDetailsList from "../../06-entities/ProductDetailsList/ProductDetailsList";
import CountProductDetails from "../../05-features/CountProductDetails/CountProductDetails";
import ReviewProductDetails from "../../05-features/ReviewProductDetails/ReviewProductDetails";
const ProductDetails = () => {
    const { valueData } = useSelector((state) => state.productView);
    const { status } = useSelector((state) => state.apiProduct);
    if (status !== "succeeded") {
        return;
    }
    return (
        <div className={styled["section-details__inner"]}>
            <ProductImageDetails valueData={valueData} />
            <ProductDetailsList valueData={valueData}>
                <CountProductDetails valueData={valueData} classNameTransfer={styled["wrapper-transfer-size"]} />
                <ReviewProductDetails valueData={valueData} classNameTransfer={styled["wrapper-transfer-review"]} />
            </ProductDetailsList>
        </div>
    );
};

export default ProductDetails;
