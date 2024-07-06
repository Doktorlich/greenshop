import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../../07-shared/api/store/apiSlice";
import styled from "./Goods.module.scss";
import Product from "../../06-entities/ProductCart/Product";
import ProductHover from "../../05-features/ProductHover/ProductHover";
import { setIncludeValue, setValueId } from "./provider/goodsSlice";
const Goods = () => {
    const { productData } = useSelector((state) => state.apiProduct);
    const { includeValue, valueId } = useSelector((state) => state.goods);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductData());
    }, []);

    return (
        <div className={styled["product__menu"]}>
            <ul className={styled["menu__list"]}>
                {productData.map((product) => (
                    <Product
                        key={product.id}
                        {...product}
                        onMouseEnter={() => {
                            dispatch(setValueId(product.id));
                            dispatch(setIncludeValue(true));
                        }}
                        onMouseLeave={() => {
                            dispatch(setValueId(""));
                            dispatch(setIncludeValue(false));
                        }}
                    >
                        <ProductHover includeValue={includeValue} valueId={valueId} id={product.id} />
                    </Product>
                ))}
            </ul>
        </div>
    );
};

export default Goods;
