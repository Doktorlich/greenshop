import React from "react";
import styled from "./CartTableRow.module.scss";
import cartIcon from "../../../../07-shared/assets/images/cart.svg";
import Button from "../../../../07-shared/UI/Button/Button.jsx";

const CartTableRow = ({ ...productData }) => {
    return (
        <tr className={styled["cart-table__body-row"]}>
            <td className={styled["cart-table__body-cell"]}>
                <div className={styled["cart-table__wrapper"]}>
                    <img className={styled["cart-table__image"]} src={productData[0].urlImagePreview} alt="" />
                    <div className={styled["cart-table__info"]}>
                        <p className={styled["cart-table__title"]}>{productData[0].title}</p>
                        <p className={styled["cart-table__sku"]}><span>SKU:</span>{productData[0].sku}</p>
                    </div>
                </div>

            </td>
            <td className={styled["cart-table__body-cell"]}>
                <p className={styled["cart-table__price"]}>${productData[0].prise}</p>
            </td>
            <td className={styled["cart-table__body-cell"]}>
                <div className={styled["cart-count__counting"]}>
                    <Button classNameProp={styled["cart-count__inc-dec"]}>-</Button>
                    <span className={styled["cart-count__number"]}>1</span>
                    <Button classNameProp={styled["cart-count__inc-dec"]}>+</Button>
                </div>

            </td>
            <td className={styled["cart-table__body-cell"]}>
                <p className={styled["cart-count__total"]}>${productData[0].prise * 4}</p>
            </td>
            <td className={styled["cart-table__body-cell"]}>
                <img className={styled["cart-table__image-cart"]} src={`${cartIcon}`} alt="" />
            </td>
        </tr>
    );
};

CartTableRow.propTypes = {};

export default CartTableRow;