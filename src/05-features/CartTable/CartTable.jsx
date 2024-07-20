import React from "react";
import styled from "./CartTable.module.scss";
import CartTableRow from "./component/CartTableRow/CartTableRow.jsx";

const CartTable = ({ ...productData }) => {

    return (
        <table className={styled["cart-table"]}>
            <thead className={styled["cart-table__head"]}>
            <tr className={styled["cart-table__head-row"]}>
                <th className={styled["cart-table__head-cell"]}>Products</th>
                <th className={styled["cart-table__head-cell"]}>Price</th>
                <th className={styled["cart-table__head-cell"]}>Quantity</th>
                <th className={styled["cart-table__head-cell"]}>Total</th>
                <th className={styled["cart-table__head-cell"]}></th>
            </tr>
            </thead>

            <tbody className={styled["cart-table__body"]}>
            <CartTableRow {...productData} />
            <CartTableRow {...productData} />
            <CartTableRow {...productData} />
            <CartTableRow {...productData} />
            </tbody>
        </table>
    );
};


CartTable.propTypes = {};

export default CartTable;