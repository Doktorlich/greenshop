import React from "react";
import styled from "./ProductDetails..module.scss";
import { useSelector } from "react-redux";
import ProductImageDetails from "../../06-entities/ProductImageDetails/ProductImageDetails";
import ProductDetailsList from "../../06-entities/ProductDetailsList/ProductDetailsList";
import CountProductDetails from "../../05-features/CountProductDetails/CountProductDetails";
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
                <CountProductDetails valueData={valueData} />
            </ProductDetailsList>
        </div>
    );
};

export default ProductDetails;
