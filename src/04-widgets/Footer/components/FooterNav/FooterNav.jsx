import React from "react";
import styled from "./FooterNav.module.scss";

import facebook from "../../../../07-shared/assets/images/SocialMedia/facebook.svg";
import instagram from "../../../../07-shared/assets/images/SocialMedia/instagram.svg";
import twitter from "../../../../07-shared/assets/images/SocialMedia/twitter.svg";
import linkedin from "../../../../07-shared/assets/images/SocialMedia/linkedin.svg";
import union from "../../../../07-shared/assets/images/SocialMedia/union.svg";

import creditCards from "../../../../07-shared/assets/images/jpg/credit-cards.jpeg";
const NAV_LIST = [
    { title: "My Account", listLink: ["My Account", "Our stores", "Contact us", "Career", "Specials"] },
    { title: "Help & Guide", listLink: ["Help Center", "How to Buy", "Shipping & Delivery", "Product Policy", "How to Return"] },
    { title: "Categories", listLink: ["House Plants", "Potter Plants", "Seeds", "Small Plants", "Accessories"] },
];
const SOCIAL_MEDIA = [facebook, instagram, twitter, linkedin, union];

const FooterNav = () => {
    return (
        <>
            <div className={styled.nav}>
                <div className={styled["nav__inner"]}>
                    {NAV_LIST.map((item, indexUl) => (
                        <ul key={indexUl} className={styled["nav__list"]}>
                            <h3 className={styled["nav__title"]}>{item.title}</h3>
                            {item.listLink.map((link, indexLi) => (
                                <li key={indexLi} className={styled["nav__list-item"]}>
                                    <a href="/" className={styled["nav__list-link"]}>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ))}
                    <div className={styled.wrapper}>
                        <h3 className={styled["nav__title"]}>Social Media</h3>
                        <ul className={styled["media__list"]}>
                            {SOCIAL_MEDIA.map((card, index) => (
                                <li key={index} className={styled["media__list-item"]}>
                                    <a href="/" className={styled["media__list-link"]}>
                                        <img src={card} className={styled["media__list-image"]} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className={styled["block-cards"]}>
                            <h3 className={styled["nav__title"]}>We accept</h3>
                            <img src={creditCards} alt="" className={styled["block-cards__cards"]} />
                        </div>
                    </div>
                </div>
                <div className={styled.copyright}>
                    <p>© 2024 GreenShop. All Rights Reserved.</p>
                </div>
            </div>
        </>
    );
};

export default FooterNav;
