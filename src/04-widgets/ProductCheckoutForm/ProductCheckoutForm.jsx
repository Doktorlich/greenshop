import React, { useEffect } from "react";
import BillingAddress from "../../05-features/BillingAddress/BillingAddress.jsx";
import styled from "./ProductCheckoutForm.module.scss";
import YourOrder from "../../05-features/YourOrder/YourOrder.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../../07-shared/api/store/apiSlice.js";
import Modal from "../../07-shared/UI/Modal/Modal.jsx";
import ModalTrackYourOrder from "../../05-features/ModalTrackYourOrder/ModalTrackYourOrder.jsx";
import { setActiveModal } from "../Header/provider/headerSlice.js";

const ProductCheckoutForm = () => {
    const { productData, status } = useSelector((state) => state.apiProduct);
    const dispatch = useDispatch();
    // TODO: исправить отображение подсветки SHOP когда активна данная страница

    useEffect(() => {
        dispatch(fetchProductData());

    }, []);
    if (status !== "succeeded") {
        return "Загрузка...";
    }
    return (
        <div className={styled["product-checkout"]}>
            <BillingAddress />
            <YourOrder {...productData[0]} />
            <Modal activeModal={true} setActiveModal={setActiveModal} cNContent={styled["modal-track-order"]}>
                <ModalTrackYourOrder {...productData[0]} />
            </Modal>
        </div>
    );
};

export default ProductCheckoutForm;