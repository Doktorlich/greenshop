import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { setProductData } from "../../07-shared/api/store/apiSlice";
import axios from "axios";
import { fetchProductData } from "../../07-shared/api/store/apiSlice";

const Goods = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductData());
    }, []);

    return <div></div>;
};

export default Goods;
