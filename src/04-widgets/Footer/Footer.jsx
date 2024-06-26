import React from "react";
import styled from "./Footer.module.scss";
import TopFooterBlock from "./components/TopFooterBlock/TopFooterBlock";
const Footer = () => {
    return (
        <footer className={styled.footer}>
            <TopFooterBlock />
        </footer>
    );
};

export default Footer;
