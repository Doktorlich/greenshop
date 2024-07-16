import React from "react";
import PropTypes from "prop-types";
import styled from "./AuthModal.module.scss";
import Form from "./../../07-shared/UI/elementsForm/Form/Form";
import Input from "./../../07-shared/UI/elementsForm/Input/Input";
import showPassIcon from "../../07-shared/assets/images/show-pass.svg";

import Button from "./../../07-shared/UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setShowPass } from "../../04-widgets/Header/provider/headerSlice";

const AuthModal = (props) => {
    const { showPass } = useSelector((state) => state.headerSlice);
    const dispatch = useDispatch();

    return (
        <Form className={styled["form"]}>
            <p className={styled["form__desc"]}>Enter your username and password to login.</p>
            <Input type="mail" placeholder="almamun_uxui@outlook.com" className={styled["form__input"]} />
            <div className={styled["input-wrapper"]}>
                <Input type={!showPass ? "password" : "text"} placeholder="password" className={[styled["form__input"], styled["form__input-pass"]].join(" ")} />
                <img src={showPassIcon} alt="" className={[styled["icon-hide-pass"], showPass ? styled["icon-hide-pass--active"] : ""].join(" ")} onClick={() => dispatch(setShowPass(!showPass))} />
            </div>
            <Button classNameProp={styled["form__btn-forgot"]} onClick={(e) => e.preventDefault()}>
                Forgot Password?
            </Button>
            <Input type={"submit"} value="Login" onClick={(e) => e.preventDefault()} className={styled["form__button"]} />
        </Form>
    );
};

AuthModal.propTypes = {};

export default AuthModal;