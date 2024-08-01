import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../../07-shared/api/store/apiSlice";
import styled from "./Goods.module.scss";
import Product from "../../06-entities/ProductCard/Product";
import ProductHover from "../../05-features/ProductHover/ProductHover";
import { setIncludeValue, setValueId } from "./provider/goodsSlice";
import Pagination from "../../05-features/Pagination/Pagination";
import { Link } from "react-router-dom";
import Skeleton from "../../07-shared/UI/Skeleton/Skeleton.jsx";

const Goods = () => {
    const { productData, status } = useSelector((state) => state.apiProduct);
    const { includeValue, valueId } = useSelector((state) => state.goods);
    const { dataPerPage } = useSelector((state) => state.pagination);
    const dispatch = useDispatch();
    const scrollIdRef = useRef();
    useEffect(() => {
        dispatch(fetchProductData());
        return () => {
        };
    }, []);

    return (
        <>
            <div ref={scrollIdRef} className={styled["product__menu"]}>

                {status !== "succeeded" ?
                    <Skeleton className={styled["skeleton"]}>
                        {Array.from({ length: 9 }, (_, index) =>
                            <div key={index} className={styled["product__skeleton-img"]}></div>)}
                    </Skeleton>


                    : <ul className={styled["menu__list"]}>
                        {dataPerPage.map((product) => (
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
                                <Link to={`/shop/${product.id}`}>
                                    <div className={styled["wrapper-link-product"]}></div>
                                </Link>
                                <ProductHover includeValue={includeValue} valueId={valueId} id={product.id} />
                            </Product>
                        ))}
                    </ul>}
            </div>
            <div className={styled["pagination"]}>
                <Pagination productData={productData} amountProducts={9} scrollIdRef={scrollIdRef} />
            </div>
        </>
    );
};

export default Goods;
