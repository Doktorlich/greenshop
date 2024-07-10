import React, { useEffect } from "react";
import styled from "./ProductView.module.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setValueData } from "./provider/productViewSlice";
import { fetchProductData } from "./api/fetchProductData";
const ProductView = () => {
    const { id } = useParams();
    const { valueData } = useSelector((state) => state.productView);

    const dispatch = useDispatch();

    useEffect(() => {
        fetchProductData(dispatch, setValueData, axios, id);
    }, []);

    if (!valueData) {
        return "Загрузка...";
    }
    return <div>{valueData.title}</div>;
};

export default ProductView;
