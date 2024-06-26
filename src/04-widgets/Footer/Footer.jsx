import React from "react";
import styled from "./Footer.module.scss";
import TopFooterBlock from "./components/TopFooterBlock/TopFooterBlock";
import ContactInfo from "./components/ContactInfo/ContactInfo";
import FooterNav from "./components/FooterNav/FooterNav";
const Footer = () => {
    return (
        <footer className={styled.footer}>
            <TopFooterBlock />
            <ContactInfo />
            <FooterNav />
        </footer>
    );
};

export default Footer;
