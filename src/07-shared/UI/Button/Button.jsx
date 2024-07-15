/* eslint-disable react/prop-types */
import React from "react";
import styled from "./Button.module.scss";
const Button = ({ children, classNameProp, onClick }) => {
    return (
        <button className={[styled.button,classNameProp].join(" ")} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
