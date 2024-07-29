import React from "react";
import styled from "./ModalYourOrderTable.module.scss";

const ModalYourOrderTable = ({ ...productData }) => {
    return (
        <tr className={styled["cart-table__body-row"]}>
            <td className={styled["cart-table__body-cell"]}>
                <div className={styled["cart-table__wrapper"]}>
                    <img className={styled["cart-table__image"]} src={productData.urlImagePreview} alt="" />
                    <div className={styled["cart-table__info"]}>
                        <p className={styled["cart-table__title"]}>{productData.title}</p>
                        <p className={styled["cart-table__sku"]}><span>SKU:</span>{productData.sku}</p>
                    </div>
                </div>
            </td>
            <td className={styled["cart-table__body-cell"]}>
                <div className={styled["cart-count__counting"]}>
                    <span className={styled["cart-count__number"]}>(x 2)</span>
                </div>
            </td>
            <td className={styled["cart-table__body-cell"]}>
                <p className={styled["cart-count__total"]}>${productData.prise * 2}</p>
            </td>
        </tr>
    );
};

ModalYourOrderTable.propTypes = {};

export default ModalYourOrderTable;