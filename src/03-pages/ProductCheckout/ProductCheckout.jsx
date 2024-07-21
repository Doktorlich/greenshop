import React from "react";
import Breadcrumbs from "../../05-features/Breadcrumbs/Breadcrumbs.jsx";
import ProductCheckoutForm from "../../04-widgets/ProductCheckoutForm/ProductCheckoutForm.jsx";

const ProductCheckout = () => {
    return (
        <div>
            <Breadcrumbs nameLocation={"Shop / ProductCheckoutForm"} />
            <ProductCheckoutForm />
       
        </div>
    );
};

export default ProductCheckout;