import React from "react";
import styled from "./Navbar.module.scss";
const NAV_LIST = [
    { urlFragment: "/home", title: "Home" },
    { urlFragment: "/shop", title: "Shop" },
    { urlFragment: "/plant_care", title: "Plant Care" },
    { urlFragment: "/blogs", title: "Blogs" },
];
const Navbar = () => {
    const changeActivePageHandler = (event) => {
        console.log(event.target);
        event.target.classList.add(styled["nav__menu-item--active"]);
    };
    return (
        <nav className={styled["nav"]}>
            <ul className={styled["nav__menu-list"]}>
                {/*  + ` ${styled["nav__menu-item--active"]}` */}
                {NAV_LIST.map((item, index) => {
                    return (
                        <li key={index} className={`${styled["nav__menu-item"]}`} onClick={changeActivePageHandler}>
                            <a href={item.urlFragment} className={styled["nav__menu-link"]}>
                                {item.title}
                            </a>
                        </li>
                    );
                })}
                {/* <li className={styled["nav__menu-item"]}>
                    <a href="/shop" className={styled["nav__menu-link"]}>
                        Shop
                    </a>
                </li>
                <li className={styled["nav__menu-item"]}>
                    <a href="/plant_care" className={styled["nav__menu-link"]}>
                        Plant Care
                    </a>
                </li>
                <li className={styled["nav__menu-item"]}>
                    <a href="/blogs" className={styled["nav__menu-link"]}>
                        Blogs
                    </a>
                </li> */}
            </ul>
        </nav>
    );
};

export default Navbar;
