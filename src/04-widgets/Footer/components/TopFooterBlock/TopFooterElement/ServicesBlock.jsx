import React from "react";
import PropTypes from "prop-types";
import styled from "./ServicesBlock.module.scss";
const ServicesBlock = ({ srcImage, title, description }) => {
    return (
        <li className={styled["menu-elem"]}>
            <div className={styled["wrapper-image"]}>
                <img src={srcImage} alt="" className={styled["menu-image"]} />
            </div>
            <h3 className={styled["menu-title"]}><b>{title}</b></h3>
            <p className={styled["menu-description"]}>{description}</p>
        </li>
    );
};
ServicesBlock.propTypes = {
    srcImage: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
};
export default ServicesBlock;
