import React, { useEffect } from "react";
import styled from "./ProductView.module.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setValueData } from "./provider/productViewSlice";
import { fetchProductDataFunc } from "./api/fetchProductData";
import { fetchProductData } from "../../07-shared/api/store/apiSlice";
import ProductDetails from "../../04-widgets/ProductDetails/ProductDetails";
const ProductView = () => {
    const { status } = useSelector((state) => state.apiProduct);
    useEffect(() => {
        dispatch(fetchProductData());
        fetchProductDataFunc(dispatch, setValueData, axios, id);
        return () => {};
    }, []);
    const dispatch = useDispatch();
    const { id } = useParams();
    const { valueData } = useSelector((state) => state.productView);

    if (!valueData && status !== "succeeded") {
        return "Загрузка...";
    }
    return (
        <section className={styled["section-details"]}>
            <ProductDetails />
        </section>
    );
};

export default ProductView;
