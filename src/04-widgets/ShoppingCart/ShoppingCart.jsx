import React, { useEffect } from "react";
import styled from "./ShoppingCart.module.scss";
import CartTable from "../../05-features/CartTable/CartTable.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../../07-shared/api/store/apiSlice.js";
import CartTotals from "../../05-features/CartTotals/CartTotals.jsx";

const ShoppingCart = () => {
    const { productData, status } = useSelector((state) => state.apiProduct);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchProductData());

    }, []);
    if (status !== "succeeded") {
        return "Загрузка...";
    }
    return (
        <div className={styled["shopping-cart"]}>
            <CartTable {...productData} />
            <CartTotals />
        </div>
    );
};

export default ShoppingCart;