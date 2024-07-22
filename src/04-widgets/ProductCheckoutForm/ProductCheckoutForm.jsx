import React from "react";
import BillingAddress from "../../05-features/BillingAddress/BillingAddress.jsx";
import styled from "./ProductCheckoutForm.module.scss";

const ProductCheckoutForm = () => {
    return (
        <div className={styled["product-checkout"]}>
            <BillingAddress />
        </div>
    );
};

export default ProductCheckoutForm;