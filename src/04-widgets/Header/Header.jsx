import React from "react";

import styled from "./Header.module.scss";

//icons

//components
import Navbar from "./components/Navbar/Navbar";
import Button from "../../07-shared/UI/Button/Button";
import CartIcon from "../../07-shared/UI/Icon/CartIcon/CartIcon";
import SearchIcon from "../../07-shared/UI/Icon/SearchIcon/SearchIcon";
import Logo from "../../07-shared/UI/Icon/LogoIcon/LogoIcon";
import LoginIcon from "../../07-shared/UI/Icon/LoginIcon/LoginIcon";
import { Link } from "react-router-dom";

const Header = () => {
    return (
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
                    <Button classNameProp={styled.button}>
                        <LoginIcon className={styled["header__img-button"]} />
                        <span>login</span>
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
