import React, { useEffect } from "react";
import BillingAddress from "../../05-features/BillingAddress/BillingAddress.jsx";
import styled from "./ProductCheckoutForm.module.scss";
import YourOrder from "../../05-features/YourOrder/YourOrder.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../../07-shared/api/store/apiSlice.js";
import Modal from "../../07-shared/UI/Modal/Modal.jsx";
import ModalTrackYourOrder from "../../05-features/ModalTrackYourOrder/ModalTrackYourOrder.jsx";
import { setActiveModal } from "./provider/productCheckoutFormSlice.js";
import Skeleton from "../../07-shared/UI/Skeleton/Skeleton.jsx";


const ProductCheckoutForm = () => {
    const { productData, status } = useSelector((state) => state.apiProduct);
    const { activeModal } = useSelector((state) => state.productCheckoutFormSlice);
    const dispatch = useDispatch();
    // TODO: исправить отображение подсветки SHOP когда активна данная страница

    useEffect(() => {
        dispatch(fetchProductData());

    }, []);
  
    return (
        <div className={styled["product-checkout"]}>
            {status !== "succeeded" ?
                <>
                    <Skeleton className={[styled["skeleton"], styled["skeleton-left"]].join(" ")}>
                        <ul className={styled["skeleton-left__list"]}>
                            {Array.from({ length: 11 }, (_, index) => {
                                return <li key={index} className={styled["skeleton-left__item"]}></li>;
                            })}
                        </ul>

                    </Skeleton>
                    <Skeleton className={[styled["skeleton"], styled["skeleton-right"]].join(" ")}>
                        <ul className={styled["skeleton-right__product-list"]}>
                            {Array.from({ length: 4 }, (_, index) => {
                                return <li key={index} className={styled["skeleton-right__product-item"]}></li>;
                            })}
                        </ul>
                        <ul className={styled["skeleton-right__price-list"]}>
                            {Array.from({ length: 5 }, (_, index) => {
                                return <li key={index} className={styled["skeleton-right__price-item"]}></li>;
                            })}
                        </ul>
                        <ul className={styled["skeleton-right__checkbox-list"]}>
                            {Array.from({ length: 4 }, (_, index) => {
                                return <li key={index} className={styled["skeleton-right__checkbox-item"]}></li>;
                            })}
                        </ul>
                    </Skeleton>
                </>

                : <>
                    <BillingAddress />
                    <YourOrder {...productData[0]} /></>}

            <Modal activeModal={activeModal} setActiveModal={setActiveModal} cNContent={styled["modal-track-order"]}>
                <ModalTrackYourOrder {...productData[0]} activeModal={activeModal} />
            </Modal>
        </div>
    );
};

export default ProductCheckoutForm;