import React, { useEffect } from "react";
import BillingAddress from "../../05-features/BillingAddress/BillingAddress.jsx";
import styled from "./ProductCheckoutForm.module.scss";
import YourOrder from "../../05-features/YourOrder/YourOrder.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../../07-shared/api/store/apiSlice.js";

const ProductCheckoutForm = () => {
    const { productData, status } = useSelector((state) => state.apiProduct);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchProductData());

    }, []);
    if (status !== "succeeded") {
        return "Загрузка...";
    }
    return (
        <div className={styled["product-checkout"]}>
            <BillingAddress />
            <YourOrder {...productData[0]} />
        </div>
    );
};

export default ProductCheckoutForm;