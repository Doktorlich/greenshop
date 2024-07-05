import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../../07-shared/api/store/apiSlice";
import styled from "./Goods.module.scss";
import Product from "../../06-entites/ProductCart/Product";
const Goods = () => {
    const { productData, status } = useSelector((state) => state.apiProduct);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductData());
    }, []);

    return (
        <div className={styled["product__menu"]}>
            <ul className={styled["menu__list"]}>
                {productData.map((product) => (
                    <Product key={product.id} {...product} />
                ))}
            </ul>
        </div>
    );
};

export default Goods;
