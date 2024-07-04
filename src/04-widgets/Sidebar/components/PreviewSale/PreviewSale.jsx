import React from "react";
// import PropTypes from "prop-types";
import styled from "./PreviewSale.module.scss";
import plantSale from "../../../../07-shared/assets/images/png/plant-sale.png";
import { Link } from "react-router-dom";
const PreviewSale = () => {
    return (
        <div className={styled.wrapper}>
            <div className={styled["sale"]}>
                <h3 className={styled["sale__title"]}>Super Sale</h3>
                <h4 className={styled["sale__subtitle"]}>UP TO 75% OFF</h4>
                <span className={styled["figure-1"]}></span>
                <span className={styled["figure-2"]}></span>
                <span className={styled["figure-3"]}></span>
                <Link to={"/"}>
                    <div className={styled["sale__image"]}>
                        <img src={plantSale} alt="" />
                    </div>
                </Link>
            </div>
        </div>
    );
};

PreviewSale.propTypes = {};

export default PreviewSale;
