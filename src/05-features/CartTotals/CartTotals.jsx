import React from "react";
import styled from "./CartTotals.module.scss";
import Input from "../../07-shared/UI/elementsForm/Input/Input.jsx";
import { useInput } from "../../07-shared/lib/useInput.js";
import Form from "../../07-shared/UI/elementsForm/Form/Form.jsx";
import Button from "../../07-shared/UI/Button/Button.jsx";
import { Link } from "react-router-dom";

const CartTotals = () => {
    const coupon = useInput("");
    return (
        <div className={styled["cart-total"]}>
            <h3 className={styled["cart-total__title"]}>Cart Totals</h3>
            <Form className={styled["cart-total__coupon-block"]}>
                <h4 className={styled["cart-total__title-coupon"]}>Coupon Apply</h4>
                <div className={styled["cart-total__coupon-input-list"]}>
                    <Input className={styled["cart-total__input-test"]}
                           type="text"
                           value={coupon.value}
                           onChange={(e) => coupon.onChange(e)}
                           placeholder={"Enter coupon code here..."}
                    />
                    <Input className={styled["cart-total__input-submit"]}
                           type="submit"
                           value={"Apply"}
                           onClick={e => e.preventDefault()}
                    />
                </div>
            </Form>
            <ul className={styled["cart-total__list"]}>
                <li className={styled["cart-total__item"]}>
                    <p className={styled["cart-total__name"]}>Subtotal</p>
                    <p className={styled["cart-total__sum"]}>${"2,683.00"}</p>
                </li>
                <li className={styled["cart-total__item"]}>
                    <p className={styled["cart-total__name"]}>Coupon Discount</p>
                    <p className={styled["cart-total__sum"]}>(-) {"00.00"}</p>
                </li>
                <li className={styled["cart-total__item"]}>
                    <p className={styled["cart-total__name"]}>Shipping</p>
                    <p className={styled["cart-total__sum"]}>${"16.00"}</p>
                </li>
            </ul>
            <Button classNameProp={styled["cart-total__view-shipping"]}>View shipping charge</Button>
            <div className={styled["cart-total__total"]}>
                <p className={styled["cart-total__total-name"]}>Total</p>
                <p className={styled["cart-total__total-sum"]}>${"2,699.00"}</p>
            </div>
            <Link to={"/product-checkout"} className={styled["cart-total__btn-checkout"]}>Proceed To Checkout</Link>
            <Link to={"/home"} className={styled["cart-total__btn-continue"]}>Continue Shopping</Link>
        </div>
    );
};

CartTotals.propTypes = {};

export default CartTotals;