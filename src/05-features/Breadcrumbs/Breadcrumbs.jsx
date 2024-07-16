import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import styled from "./Breadcrumbs.module.scss";
const Breadcrumbs = ({ nameLocation }) => {
    return (
        <div className={styled.block}>
            <span className={styled.home}>Home </span>/ {nameLocation}
        </div>
    );
};

Breadcrumbs.propTypes = {
    nameLocation: PropTypes.string,
};

export default Breadcrumbs;
