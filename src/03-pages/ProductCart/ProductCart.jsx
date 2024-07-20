import React from "react";
import Breadcrumbs from "./../../05-features/Breadcrumbs/Breadcrumbs";
import ShoppingCart from "../../04-widgets/ShoppingCart/ShoppingCart.jsx";

const ProductCart = () => {


    return (
        <div>
            <Breadcrumbs nameLocation={"Shop / Shopping Cart"} />
            <ShoppingCart />

        </div>
    );
};

export default ProductCart;
