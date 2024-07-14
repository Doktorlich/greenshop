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

const Header = () => {
    const [activeModal, setActiveModal] = useState(false);
    return (
        <>
            <header className={styled["header"]}>
                <div className={styled["header__inner"]}>
                    <Link to={"/"}>
                        <Logo className={styled.logo} />
                    </Link>

                    <Navbar />
                    <div className={styled["header__right-menu"]}>
                        <SearchIcon className={styled.icon} />

                        <Link to={"/cart"}>
                            <CartIcon className={styled.icon} />
                        </Link>
                        <Button classNameProp={styled.button} onClick={() => setActiveModal(true)}>
                            <LoginIcon className={styled["header__img-button"]} />
                            <span>login</span>
                        </Button>
                    </div>
                </div>
            </header>

            <Modal activeModal={activeModal} setActiveModal={setActiveModal} cNContent={styled["modal-header"]}>
                <div className="auth-btns">
                    <Button classNameProp={styled["auth-btns__item"]}>
                        <p className={styled["auth-btns__text"]}>Login</p>
                    </Button>
                    <span>|</span>
                    <Button classNameProp={styled["auth-btns__item"]}>
                        <p className={styled["auth-btns__text"]}>Register</p>
                    </Button>
                </div>
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
            </Modal>
        </>
    );
};

export default Header;
