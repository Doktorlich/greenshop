import React from "react";
import styled from "./Navbar.module.scss";
import { Link } from "react-router-dom";
const NAV_LIST = [
    { urlFragment: "/", title: "Home" },
    { urlFragment: "/shop", title: "Shop" },
    { urlFragment: "/plant_care", title: "Plant Care" },
    { urlFragment: "/blogs", title: "Blogs" },
];
const Navbar = () => {
    // const changeActivePageHandler = (event) => {
    //     console.log(event.target);
    //     event.target.classList.add(styled["nav__menu-item--active"]);
    // };
    return (
        <nav className={styled["nav"]}>
            <ul className={styled["nav__menu-list"]}>
                {NAV_LIST.map((item, index) => {
                    return (
                        <li key={index} className={`${styled["nav__menu-item"]}`}>
                            <Link to={item.urlFragment} className={styled["nav__menu-link"]}>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
