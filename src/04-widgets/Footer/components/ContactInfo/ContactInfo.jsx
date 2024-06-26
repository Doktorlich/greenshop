import React from "react";
import styled from "./ContactInfo.module.scss";
import LogoIcon from "../../../../07-shared/UI/Icon/LogoIcon/LogoIcon";

import location from "../../../../07-shared/assets/images/FooterIcon/point-location.svg";
import mail from "../../../../07-shared/assets/images/FooterIcon/mail.svg";
import telephone from "../../../../07-shared/assets/images/FooterIcon/telephone.svg";
const ContactInfo = () => {
    return (
        <ul className={styled["menu__list"]}>
            <li className={styled["menu__item"]}>
                <LogoIcon className={styled.logo} />
            </li>
            <li className={styled["menu__item"]}>
                <img className={styled["menu__image"]} src={location} />
                <a href="" className={styled["menu__link"]}>
                    70 West Buckingham Ave. Farmingdale, NY 11735
                </a>
            </li>
            <li className={styled["menu__item"]}>
                <img className={styled["menu__image"]} src={mail} />
                <a href="" className={styled["menu__link"]}>
                    contact@greenshop.com
                </a>
            </li>
            <li className={styled["menu__item"]}>
                <img className={styled["menu__image"]} src={telephone} />
                <a href="tel" className={styled["menu__link"]}>
                    +88 01911 717 490
                </a>
            </li>
        </ul>
    );
};

export default ContactInfo;
