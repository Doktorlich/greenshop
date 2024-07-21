import React from "react";
import PropTypes from "prop-types";
import styled from "./Label.module.scss";

const Label = ({ children, htmlFor, className }) => {
    return (
        <label htmlFor={htmlFor} className={[styled[""], className].join(" ")}>
            {children}
        </label>
    );
};

Label.propTypes = {
    children: PropTypes.node,
    htmlFor: PropTypes.string,
    className: PropTypes.string,
};

export default Label;