import React from "react";
import { useSelector } from "react-redux";

const Goods = () => {
    const { productData } = useSelector((state) => state.apiProduct);

    console.log(productData);
    return <div></div>;
};

export default Goods;
