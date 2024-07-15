import React from "react";
import PropTypes from "prop-types";
import styled from "./Form.module.scss";
const Form = ({ className, children }) => {
    return <form className={`${styled.className}` + " " + `${className}`}>{children}</form>;
};
Form.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};
export default Form;
