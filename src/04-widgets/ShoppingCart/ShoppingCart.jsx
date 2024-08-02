import React, { useEffect } from "react";
import styled from "./ShoppingCart.module.scss";
import CartTable from "../../05-features/CartTable/CartTable.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../../07-shared/api/store/apiSlice.js";
import CartTotals from "../../05-features/CartTotals/CartTotals.jsx";
import Skeleton from "../../07-shared/UI/Skeleton/Skeleton.jsx";

const ShoppingCart = () => {
    const { productData, status } = useSelector((state) => state.apiProduct);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchProductData());

    }, []);
 
    return (
        <div className={styled["shopping-cart"]}>
            {status !== "succeeded" ?
                <div className={styled["shopping-cart__skeleton"]}>
                    <Skeleton className={[styled["skeleton"], styled["skeleton-left"]].join(" ")}>
                        <p className={styled["skeleton-left__title"]}></p>
                        <ul className={styled["skeleton-left__list"]}>
                            <li className={styled["skeleton-left__item"]}></li>
                            <li className={styled["skeleton-left__item"]}></li>
                            <li className={styled["skeleton-left__item"]}></li>
                            <li className={styled["skeleton-left__item"]}></li>
                        </ul>
                    </Skeleton>
                    <Skeleton className={[styled["skeleton"], styled["skeleton-right"]].join(" ")}>
                        <p className={styled["skeleton-right__title"]}></p>
                        <ul className={styled["skeleton-right__list"]}>
                            {Array.from({ length: 11 }, (_, index) => {
                                return <li key={index} className={styled["skeleton-right__item"]}></li>;
                            })}

                        </ul>
                    </Skeleton>
                </div>
                :
                <>
                    <CartTable {...productData} />
                    <CartTotals />
                </>
            }
        </div>
    );
};

export default ShoppingCart;