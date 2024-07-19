import React, { useRef, useState } from "react";
import styled from "./RegisterModal.module.scss";
import Form from "./../../07-shared/UI/elementsForm/Form/Form";
import Input from "./../../07-shared/UI/elementsForm/Input/Input";
import showPassIcon from "../../07-shared/assets/images/show-pass.svg";


import { useDispatch, useSelector } from "react-redux";
import { setShowPass } from "../../04-widgets/Header/provider/headerSlice";
import { useInput } from "../../07-shared/lib/useInput.js";

const RegisterModal = (props) => {
    const [isPassword, setIsPassword] = useState(true);
    const { showPass } = useSelector((state) => state.headerSlice);
    const firstPassRef = useRef("");
    const secondPassRef = useRef("");


    const confirmPasswordHandler = () => {
        String(firstPassRef.current.value) === String(secondPassRef.current.value) ? setIsPassword(true) : setIsPassword(false);
    };

    const dispatch = useDispatch();
    const userName = useInput("", { isEmpty: true, minLength: 5, maxLength: 50 });
    const email = useInput("", { isEmpty: true, minLength: 5, maxLength: 50, isMail: true });
    const password = useInput("", { isEmpty: true, minLength: 5, maxLength: 50 });
    const confirmPassword = useInput("", { isEmpty: true, minLength: 5, maxLength: 50 });

    return (
        <Form className={styled["form"]}>
            <p className={styled["form__desc"]}>Enter your email and password to register.</p>
            <Input type="text" placeholder="Username" className={styled["form__input"]}
                   value={userName.value}
                   onChange={e => userName.onChange(e)}
                   onBlur={e => userName.onChange(e)}
            />
            <Input type="mail" placeholder="Enter your email address" className={styled["form__input"]}
                   value={email.value}
                   onChange={e => email.onChange(e)}
                   onBlur={e => email.onChange(e)}
            />
            <div className={styled["input-wrapper"]}>
                <Input type={!showPass ? "password" : "text"} placeholder="Password"
                       ref={firstPassRef}
                       className={[styled["form__input"], styled["form__input-pass"], isPassword ? "" : styled["form__input--error"]].join(" ")}
                       value={password.value}
                       onChange={e => password.onChange(e)}
                       onBlur={e => password.onChange(e)}
                />
                <img src={showPassIcon} alt=""
                     className={[styled["icon-hide-pass"], showPass ? styled["icon-hide-pass--active"] : ""].join(" ")}
                     onClick={() => dispatch(setShowPass(!showPass))}
                />
            </div>
            <Input type={!showPass ? "password" : "text"} placeholder="Confirm Password"
                   ref={secondPassRef}
                   className={[styled["form__input"], styled["form__input-pass"], isPassword ? "" : styled["form__input--error"]].join(" ")}
                   value={confirmPassword.value}
                   onChange={e => confirmPassword.onChange(e)}
                   onBlur={e => confirmPassword.onChange(e)}
            />

            <Input type={"submit"} value="Register" onClick={(e) => {
                e.preventDefault();
                confirmPasswordHandler();

            }}
                   className={styled["form__button"]} />
        </Form>
    );
};

RegisterModal.propTypes = {};

export default RegisterModal;
