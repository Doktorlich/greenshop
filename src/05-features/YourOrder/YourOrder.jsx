import React from "react";
import styled from "./YourOrder.module.scss";
import YourOrderTableRow from "./YourOrderTable/YourOrderTableRow.jsx";
import Button from "../../07-shared/UI/Button/Button.jsx";
import Input from "../../07-shared/UI/elementsForm/Input/Input.jsx";
import Label from "../../07-shared/UI/elementsForm/Label/Label.jsx";
import creditCards from "../../07-shared/assets/images/jpg/credit-cards.jpeg";
import Form from "../../07-shared/UI/elementsForm/Form/Form.jsx";
import { useDispatch } from "react-redux";
import { setActiveModal } from "../../04-widgets/ProductCheckoutForm/provider/productCheckoutFormSlice.js";

const YourOrder = ({ ...productData }) => {
    const dispatch = useDispatch();
    // TODO доделать валидацию формы
    return (

        <Form className={styled["order"]}>
            <h2 className={styled["billing-address__title"]}>Your Order</h2>
            <table className={styled["cart-table"]}>
                <thead className={styled["cart-table__head"]}>
                <tr className={styled["cart-table__head-row"]}>
                    <th className={styled["cart-table__head-cell"]} colSpan={2}>Products</th>
                    <th className={styled["cart-table__head-cell"]}>Subtotal</th>
                </tr>
                </thead>
                <tbody className={styled["cart-table__body"]}>
                <YourOrderTableRow {...productData} />
                <YourOrderTableRow {...productData} />
                <YourOrderTableRow {...productData} />
                <YourOrderTableRow {...productData} />
                </tbody>
            </table>
            <div className={styled["order__menu"]}>
                <ul className={styled["order__list"]}>
                    <li className={styled["order__item"]}>
                        <p className={styled["order__text"]}>Subtotal</p>
                        <p className={styled["order__price"]}>${"2,683.00"}</p>
                    </li>
                    <li className={styled["order__item"]}>
                        <p className={styled["order__text"]}>Coupon Discount</p>
                        <p className={styled["order__price"]}>(-) {"00.00"}</p>
                    </li>
                    <li className={styled["order__item"]}>
                        <p className={styled["order__text"]}>Shipping</p>
                        <p className={styled["order__price"]}>${"16.00"}</p>
                    </li>
                    <li className={[styled["order__item"], styled["order__item-btn"]].join(" ")}>
                        <Button classNameProp={styled["order__btn-shipping"]}>View shipping charge</Button>
                    </li>
                    <li className={[styled["order__item"], styled["order__item-total"]].join(" ")}>
                        <p className={styled["order__text"]}>Total</p>
                        <p className={styled["order__price"]}>${"2,699.00"}</p>
                    </li>
                </ul>

                <div className={styled["order__payment-menu"]}>
                    <h2 className={styled["billing-address__title"]}>Payment Method</h2>
                    <ul className={styled["order__payment-list"]}>
                        <li className={styled["order__payment-item"]}>

                            <Label className={styled["order__payment-label-radio"]} htmlFor="order__payment-label-id-1">
                                <Input className={styled["order__payment-radio"]}
                                       id={"order__payment-label-id-1"}
                                       type="radio"
                                       name="order__payment-radio" />
                                <span className={styled["radio-span"]}></span>
                                <img
                                    src={creditCards}
                                    alt="" />
                            </Label>
                        </li>
                        <li className={styled["order__payment-item"]}>

                            <Label className={styled["order__payment-label-radio"]} htmlFor="order__payment-label-id-2">
                                <Input className={styled["order__payment-radio"]}
                                       id={"order__payment-label-id-2"}
                                       type="radio"
                                       name="order__payment-radio" />
                                <span className={styled["radio-span"]}></span>
                                Direct bank transfer
                            </Label>
                        </li>
                        <li className={styled["order__payment-item"]}>

                            <Label className={styled["order__payment-label-radio"]} htmlFor="order__payment-label-id-3">
                                <Input className={styled["order__payment-radio"]}
                                       id={"order__payment-label-id-3"}
                                       type="radio"
                                       name="order__payment-radio" />
                                <span className={styled["radio-span"]}></span>
                                Cash on delivery
                            </Label>
                        </li>
                    </ul>
                </div>
                <Input type="submit" value={"Place Order"} className={styled["order__submit"]} onClick={(e) => {
                    e.preventDefault();
                    dispatch(setActiveModal(true));
                }} />
            </div>
        </Form>
    );
};

YourOrder.propTypes = {};

export default YourOrder;