import React, { useState } from "react";

import styled from "./Header.module.scss";

//icons
import iconGoogle from "../../07-shared/assets/images/google.svg";
import iconFacebook from "../../07-shared/assets/images/facebook.svg";

//components
import Navbar from "./components/Navbar/Navbar";
import Button from "../../07-shared/UI/Button/Button";
import CartIcon from "../../07-shared/UI/Icon/CartIcon/CartIcon";
import SearchIcon from "../../07-shared/UI/Icon/SearchIcon/SearchIcon";
import Logo from "../../07-shared/UI/Icon/LogoIcon/LogoIcon";
import LoginIcon from "../../07-shared/UI/Icon/LoginIcon/LoginIcon";
import { Link } from "react-router-dom";
import Modal from "./../../07-shared/UI/Modal/Modal";
import AuthModal from "./../../05-features/AuthModal/AuthModal";
import { useDispatch, useSelector } from "react-redux";
import { setActiveModal, setModalTab } from "./provider/headerSlice";
import RegisterModal from "./../../05-features/RegisterModal/RegisterModal";

const Header = () => {
    const { modalTab, activeModal } = useSelector((state) => state.headerSlice);
    const dispatch = useDispatch();
    return (
        <>
            <header className={styled["header"]}>
                <div className={styled["header__inner"]}>
                    <Link to={"/home"}>
                        <Logo className={styled.logo} />
                    </Link>

                    <Navbar />
                    <div className={styled["header__right-menu"]}>
                        <SearchIcon className={styled.icon} />

                        <div className={styled["icon-wrapper"]}>
                            <Link to={"/shop/cart"}>
                                <CartIcon className={[styled.icon, styled["icon__cart"]].join(" ")} />
                                <span className={styled["count-product-cart"]}>1</span>
                            </Link>
                        </div>
                        <Button
                            classNameProp={styled.button}
                            onClick={() => {
                                dispatch(setActiveModal(true));
                                dispatch(setModalTab(true));
                            }}
                        >
                            <LoginIcon className={styled["header__img-button"]} />
                            <span>login</span>
                        </Button>
                    </div>
                </div>
            </header>

            <Modal activeModal={activeModal} setActiveModal={setActiveModal} cNContent={styled["modal-header"]}>
                <div className="auth-btns">
                    <Button classNameProp={styled["auth-btns__item"]} onClick={() => dispatch(setModalTab(true))}>
                        <p className={[styled["auth-btns__text"], modalTab ? styled["auth-btns__text--active"] : ""].join(" ")}>Login</p>
                    </Button>
                    <span>|</span>
                    <Button classNameProp={styled["auth-btns__item"]} onClick={() => dispatch(setModalTab(false))}>
                        <p className={[styled["auth-btns__text"], modalTab ? "" : styled["auth-btns__text--active"]].join(" ")}>Register</p>
                    </Button>
                </div>
                <div className={styled["forms"]}>{modalTab ? <AuthModal /> : <RegisterModal />}</div>
                <div className={styled["auth-other"]}>
                    <p className={styled["auth-other__text"]}>Or login with</p>
                    <Button classNameProp={styled["auth-other__btn"]}>
                        <img src={iconGoogle} alt="" />
                        Login with Google
                    </Button>
                    <Button classNameProp={styled["auth-other__btn"]}>
                        <img src={iconFacebook} alt="" />
                        Login with Facebook
                    </Button>
                </div>

                {/* Reg onClick */}
            </Modal>
        </>
    );
};

export default Header;
