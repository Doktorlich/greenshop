import React from "react";
import styled from "./ModalTrackYourOrder.module.scss";
import { ORDER_DETAILS } from "./data/data.js";
import ModalYourOrderTable from "./ModalYourOrderTable/ModalYourOrderTable.jsx";
import Envelope from "../../07-shared/UI/Icon/Envelope/Envelope.jsx";
import Button from "../../07-shared/UI/Button/Button.jsx";

import { useDispatch } from "react-redux";
import { setActiveModal } from "../../04-widgets/ProductCheckoutForm/provider/productCheckoutFormSlice.js";


const ModalTrackYourOrder = ({ ...productData }) => {
    const dispatch = useDispatch();
    return (
        <div className={styled["track-order"]}>
            <div className={styled["track-order__top"]}>
                <Envelope className={styled["track-order__envelope-img"]} />
                <p className={styled["track-order__desc-top"]}>Your order has been received</p>
            </div>
            <ul className={styled["track-order__details-list"]}>
                {ORDER_DETAILS.map(({ title, value }, index) => {
                    return <li key={index} className={styled["track-order__details-item"]}>
                        <p className={styled["track-order__details-title"]}>{title}</p>
                        <p className={styled["track-order__details-value"]}>{value}</p>
                    </li>;
                })}
            </ul>
            <table className={styled["cart-table"]}>
                <caption className={styled["cart-table__caption"]}>Order Details</caption>
                <thead className={styled["cart-table__head"]}>
                <tr className={styled["cart-table__head-row"]}>
                    <th className={styled["cart-table__head-cell"]}>Products</th>
                    <th className={styled["cart-table__head-cell"]}>Qty</th>
                    <th className={styled["cart-table__head-cell"]}>Subtotal</th>
                </tr>
                </thead>
                <tbody className={styled["cart-table__body"]}>
                <ModalYourOrderTable {...productData} />
                <ModalYourOrderTable {...productData} />
                <ModalYourOrderTable {...productData} />
                <ModalYourOrderTable {...productData} />
                <ModalYourOrderTable {...productData} />

                <tr className={styled["cart-table__body-row-bottom"]}>
                    <td style={{ textAlign: "center" }} className={styled["cart-table__body-cell-shipping"]}>Shipping
                    </td>
                    <td></td>
                    <td className={styled["cart-table__body-cell-value"]}>$16.00</td>
                </tr>
                <tr className={styled["cart-table__body-row-bottom"]}>

                    <td style={{ textAlign: "center" }} className={styled["cart-table__body-cell-total"]}>Total</td>
                    <td></td>
                    <td className={styled["cart-table__body-cell-value-total"]}>$2,699.00</td>
                </tr>
                </tbody>
            </table>
            <p className={styled["track-order__description"]}>Your order is currently being processed. You will receive
                an order
                confirmation email shortly with the
                expected delivery date for your items.</p>
            <Button classNameProp={styled["track-order__btn-close-modal"]}
                    onClick={() => dispatch(setActiveModal(false))}
            >Track your order</Button>
        </div>
    );
};

ModalTrackYourOrder.propTypes = {};

export default ModalTrackYourOrder;