import React from "react";
import styled from "./Input.module.scss";
import PropTypes from "prop-types";
const Input = ({ value, type, className, children, placeholder, onChange }) => {
    return (
        <input value={value} type={type} className={`${styled.input}` + " " + `${className}`} placeholder={placeholder} onChange={onChange}>
            {children}
        </input>
    );
};
Input.propTypes = {
    value: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    children: PropTypes.node,
};
export default Input;
