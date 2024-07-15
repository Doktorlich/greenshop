import React from "react";
import PropTypes from "prop-types";
import styled from "./RegisterModal.module.scss";
import Form from "./../../07-shared/UI/elementsForm/Form/Form";
import Input from "./../../07-shared/UI/elementsForm/Input/Input";
import showPassIcon from "../../07-shared/assets/images/show-pass.svg";

import Button from "./../../07-shared/UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setShowPass } from "../../04-widgets/Header/provider/headerSlice";

const RegisterModal = (props) => {
    const { showPass } = useSelector((state) => state.headerSlice);
    const dispatch = useDispatch();

    return (
        <Form className={styled["form"]}>
            <p className={styled["form__desc"]}>Enter your email and password to register.</p>
            <Input type="text" placeholder="Username" className={styled["form__input"]} />
            <Input type="mail" placeholder="Enter your email address" className={styled["form__input"]} />
            <div className={styled["input-wrapper"]}>
                <Input type={!showPass ? "password" : "text"} placeholder="Password" className={[styled["form__input"], styled["form__input-pass"]].join(" ")} />
                <img src={showPassIcon} alt="" className={[styled["icon-hide-pass"], showPass ? styled["icon-hide-pass--active"] : ""].join(" ")} onClick={() => dispatch(setShowPass(!showPass))} />
            </div>
            <Input type={!showPass ? "password" : "text"} placeholder="Confirm Password" className={[styled["form__input"], styled["form__input-pass"]].join(" ")} />

            <Input type={"submit"} value="Register" onClick={(e) => e.preventDefault()} className={styled["form__button"]} />
        </Form>
    );
};

RegisterModal.propTypes = {};

export default RegisterModal;
