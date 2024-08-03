import React, { useRef, useState } from "react";
import styled from "./RegisterModal.module.scss";
import Form from "./../../07-shared/UI/elementsForm/Form/Form";
import Input from "./../../07-shared/UI/elementsForm/Input/Input";
import showPassIcon from "../../07-shared/assets/images/show-pass.svg";


import { useDispatch, useSelector } from "react-redux";
import { setShowPass } from "../../04-widgets/Header/provider/headerSlice";
import { useInput } from "../../07-shared/lib/useInput.js";

const RegisterModal = () => {
    // TODO разобраться в неверной валидации паролей
    const [isPassword, setIsPassword] = useState(true);
    const { showPass } = useSelector((state) => state.headerSlice);
    const firstPassRef = useRef("");
    const secondPassRef = useRef("");

    const confirmPasswordHandler = () => {
        String(firstPassRef.current.value) === String(secondPassRef.current.value) ? setIsPassword(false) : setIsPassword(true);
    };
    const submitForm = (e) => {
        if (userNameCheck || emailCheck || passwordCheck) {
            e.preventDefault();
            confirmPasswordHandler();
        }

    };
    const dispatch = useDispatch();
    const userName = useInput("", { isEmpty: true, minLength: 5, maxLength: 50, isUserName: true });
    const email = useInput("", { isEmpty: true, minLength: 5, maxLength: 50, isMail: true });
    const password = useInput("", { isEmpty: true, minLength: 8, maxLength: 50, isPassword: true });
    const confirmPassword = useInput("", { isEmpty: true, minLength: 8, maxLength: 50 });
    const userNameCheck = userName.isDirty && userName.isEmpty && userName.userNameError && userName.minLengthError || userName.maxLengthError;
    const emailCheck = email.isDirty && ((email.isEmpty || email.emailError) || email.minLengthError || email.maxLengthError);
    const passwordCheck = password.isDirty && (isPassword || (password.isEmpty || password.passwordError) || password.minLengthError || password.maxLengthError);

    return (
        <Form className={styled["form"]}>
            <p className={styled["form__desc"]}>Enter your email and password to register.</p>
            {userNameCheck ?
                <p className={styled["form__message--error"]}>Username must be between 5 and 50 characters.</p> : ""}

            <Input type="text" placeholder="Username"
                   className={[styled["form__input"], userNameCheck ? styled["form__input--error"] : ""].join(" ")}
                   value={userName.value}
                   onChange={e => userName.onChange(e)}
                   onBlur={e => userName.onBlur(e)}
                   onFocus={() => userName.onFocus()}
                   requiredField={true}
            />
            {emailCheck ? <p className={styled["form__message--error"]}>Please provide a valid email address.</p> : ""}

            <Input type="mail" placeholder="Enter your email address"
                   className={styled["form__input"]}
                   value={email.value}
                   onChange={e => email.onChange(e)}
                   onBlur={e => email.onBlur(e)}
                   onFocus={() => email.onFocus()}
                   requiredField={true}
            />
            {passwordCheck ?
                <p className={styled["form__message--error"]}>The password must contain from 8 to 50 characters, which
                    must contain numbers, uppercase and lowercase letters</p> : ""}

            <div className={styled["input-wrapper"]}>
                <Input type={!showPass ? "password" : "text"} placeholder="Password"
                       ref={firstPassRef}
                       className={[styled["form__input"], styled["form__input-pass"], !passwordCheck ? "" : styled["form__input--error"]].join(" ")}
                       value={password.value}
                       onChange={e => {
                           password.onChange(e);
                       }}
                       onBlur={e => password.onBlur(e)}
                       onFocus={() => password.onFocus()}
                       requiredField={true}
                />
                <img src={`${showPassIcon}`} alt=""
                     className={[styled["icon-hide-pass"], showPass ? styled["icon-hide-pass--active"] : ""].join(" ")}
                     onClick={() => dispatch(setShowPass(!showPass))}
                />
            </div>
            {password.isDirty ?? isPassword ?
                <p className={styled["form__message--error"]}>The passwords do not match, check if they are correct and
                    try again.</p> : ""}
            <Input type={!showPass ? "password" : "text"} placeholder="Confirm Password"
                   ref={secondPassRef}
                   className={[styled["form__input"], styled["form__input-pass"], !passwordCheck ? "" : styled["form__input--error"]].join(" ")}
                   value={confirmPassword.value}
                   onChange={e => {
                       confirmPassword.onChange(e);
                   }}
                   onBlur={e => confirmPassword.onChange(e)}
                   onFocus={() => confirmPassword.onFocus()}
                   requiredField={true}
            />

            <Input type={"submit"} value="Register"
                   onClick={(e) => {
                       submitForm(e);
                   }}
                   className={styled["form__button"]} />
        </Form>
    );
};

RegisterModal.propTypes = {};

export default RegisterModal;
