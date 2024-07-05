import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../../07-shared/api/store/apiSlice";
import styled from "./Goods.module.scss";
import Product from "../../06-entites/ProductCart/Product";
import ProductHover from "../../05-features/ProductHover/ProductHover";
const Goods = () => {
    const { productData } = useSelector((state) => state.apiProduct);
    const dispatch = useDispatch();

    const [includeValue, setIncludeValue] = useState(false);
    const [valueId, setValueId] = useState("");
    useEffect(() => {
        dispatch(fetchProductData());
    }, []);

    // hide show
    return (
        <div className={styled["product__menu"]}>
            <ul className={styled["menu__list"]}>
                {productData.map((product) => (
                    <Product
                        key={product.id}
                        {...product}
                        onMouseEnter={() => {
                            setValueId(product.id);
                            setIncludeValue(true);
                        }}
                        onMouseLeave={() => {
                            setValueId("");
                            setIncludeValue(false);
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
