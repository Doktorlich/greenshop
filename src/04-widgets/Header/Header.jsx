import React from "react";

import styled from "./Header.module.scss";

//icons
import logo from "../../07-shared/assets/images/logo.svg";
import search from "../../07-shared/assets/images/icon-search.svg";
import cart from "../../07-shared/assets/images/icon-cart.svg";
import login from "../../07-shared/assets/images/icon-login.svg";
//components
import Navbar from "./Navbar/Navbar";
import Button from "../../07-shared/UI/Button/Button";
import CartIcon from "../../07-shared/UI/Icon/CartIcon/CartIcon";
import SearchIcon from "../../07-shared/UI/Icon/SearchIcon/SearchIcon";
import Logo from "../../07-shared/UI/Icon/LogoIcon/LogoIcon";

const Header = () => {
    return (
        <header className={styled["header"]}>
            <div className={styled["header__inner"]}>
                <Logo className={styled.logo} />
                <Navbar />
                <div className={styled["header__right-menu"]}>
                    <SearchIcon className={styled.icon} />
                    <CartIcon className={styled.icon} />
                    <Button classNameProp={styled.button}>
                        <img src={login} /> <span>login</span>
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
