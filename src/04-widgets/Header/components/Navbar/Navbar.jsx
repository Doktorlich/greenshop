import React from "react";
import styled from "./Navbar.module.scss";
import { NavLink, useLocation } from "react-router-dom";

const NAV_LIST = [
    { urlFragment: "/home", title: "Home" },
    { urlFragment: "/shop", title: "Shop" },
    { urlFragment: "/plant_care", title: "Plant Care" },
    { urlFragment: "/blogs", title: "Blogs" },
];
const Navbar = () => {
    let location = useLocation();

    return (
        <nav className={styled["nav"]}>
            <ul className={styled["nav__menu-list"]}>
                {NAV_LIST.map((item, index) => {
                    return (
                        <li key={index}
                            className={[styled["nav__menu-item"], location.pathname.includes(item.urlFragment) ? styled["nav__menu-item--active"] : ""].join(" ")}>
                            <NavLink to={item.urlFragment} className={styled["nav__menu-link"]}>
                                {item.title}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
